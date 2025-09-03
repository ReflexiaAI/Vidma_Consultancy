import fs from 'fs';
import path from 'path';

// Helper function to extract content from CDATA sections
function extractCDATA(text) {
  const match = text.match(/!\[CDATA\[(.*?)\]\]>/s);
  return match ? match[1] : text;
}

// Helper function to clean HTML content for excerpt
function cleanHtmlForExcerpt(html) {
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&amp;/g, '&') // Replace HTML entities
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .trim();
}

// Helper function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Parse WordPress XML and extract posts
async function parseWordPressXML() {
  console.log('Reading WordPress XML export...');
  
  const xmlFilePath = 'attached_assets/vidmaconsultinggroup.WordPress.2025-09-03_1756915070628.xml';
  const xmlContent = fs.readFileSync(xmlFilePath, 'utf8');
  
  console.log('Extracting blog posts...');
  
  // Split XML into items
  const items = xmlContent.split('<item>').slice(1); // Remove first empty split
  const posts = [];
  
  for (let i = 0; i < items.length; i++) {
    const item = '<item>' + items[i].split('</item>')[0] + '</item>';
    
    // Check if this is a blog post (not attachment, page, etc.)
    const postTypeMatch = item.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]>/);
    if (!postTypeMatch || postTypeMatch[1] !== 'post') {
      continue;
    }
    
    // Check if post is published (skip drafts)
    const statusMatch = item.match(/<wp:status><!\[CDATA\[(.*?)\]\]>/);
    if (statusMatch && statusMatch[1] !== 'publish') {
      continue; // Skip drafts and other non-published posts
    }
    
    try {
      // Extract title
      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]>/s);
      const title = titleMatch ? titleMatch[1] : 'Untitled';
      
      // Extract link
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      const link = linkMatch ? linkMatch[1] : '';
      
      // Extract publication date
      const postDateMatch = item.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]>/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      let date = '';
      
      if (postDateMatch && postDateMatch[1] && postDateMatch[1] !== '0000-00-00 00:00:00') {
        date = postDateMatch[1];
      } else if (pubDateMatch && pubDateMatch[1]) {
        date = pubDateMatch[1];
      }
      
      // Extract content
      const contentMatch = item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]>/s);
      const content = contentMatch ? contentMatch[1] : '';
      
      // Extract categories
      const categoryMatches = item.match(/<category domain="category"[^>]*><!\[CDATA\[(.*?)\]\]>/g) || [];
      const categories = categoryMatches.map(match => {
        const categoryMatch = match.match(/<category domain="category"[^>]*><!\[CDATA\[(.*?)\]\]>/);
        return categoryMatch ? categoryMatch[1] : '';
      }).filter(cat => cat);
      
      // Generate slug from title
      const slug = generateSlug(title);
      
      // Create excerpt (first 150 characters of clean content)
      const cleanContent = cleanHtmlForExcerpt(content);
      const excerpt = cleanContent.length > 150 
        ? cleanContent.substring(0, 150) + '...' 
        : cleanContent;
      
      // Only add posts with meaningful content
      if (title && title.trim() && content && content.trim()) {
        posts.push({
          id: posts.length + 1,
          title: title.trim(),
          slug,
          link: link || `https://vidmaconsulting.com/blog/${slug}`,
          date: date || new Date().toISOString(),
          excerpt: excerpt || cleanContent.substring(0, 100) + '...',
          content: content.trim(),
          categories: categories
        });
      }
    } catch (error) {
      console.warn(`Error parsing item ${i + 1}:`, error.message);
    }
  }
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  console.log(`Extracted ${posts.length} blog posts`);
  
  // Save to posts.json
  const postsDir = 'data';
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }
  
  const postsFilePath = path.join(postsDir, 'posts.json');
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
  
  console.log(`Posts saved to ${postsFilePath}`);
  
  // Log sample of first few posts for verification
  console.log('\nFirst few posts:');
  posts.slice(0, 3).forEach(post => {
    console.log(`- "${post.title}" (${post.date}) - ${post.categories.join(', ')}`);
    console.log(`  Excerpt: ${post.excerpt}`);
    console.log('');
  });
  
  return posts;
}

// Run the parser
parseWordPressXML().catch(console.error);