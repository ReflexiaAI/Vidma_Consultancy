import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Tag, Clock } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  link: string;
  date: string;
  excerpt: string;
  content: string;
  categories: string[];
}

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!params.slug) return;

    // Load blog posts and find the current post
    fetch('/data/posts.json')
      .then(response => response.json())
      .then((posts: BlogPost[]) => {
        const currentPost = posts.find(p => p.slug === params.slug);
        
        if (currentPost) {
          setPost(currentPost);
          
          // Find related posts (same categories)
          const related = posts
            .filter(p => 
              p.slug !== currentPost.slug && 
              p.categories.some(cat => currentPost.categories.includes(cat))
            )
            .slice(0, 3);
          setRelatedPosts(related);
        } else {
          setNotFound(true);
        }
        
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog post:', error);
        setLoading(false);
        setNotFound(true);
      });
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const processContent = (content: string) => {
    // Basic HTML processing - remove WordPress-specific tags and clean up
    return content
      .replace(/<!-- wp:.*? -->/g, '')
      .replace(/<!-- \/wp:.*? -->/g, '')
      .replace(/<p>&nbsp;<\/p>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bronze"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32">
          <div className="container mx-auto px-6">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The blog post you're looking for doesn't exist or has been moved.
              </p>
              <Link href="/blog">
                <Button className="bg-bronze hover:bg-bronze/90 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Back to Blog */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog">
              <Button
                variant="ghost"
                className="text-bronze hover:text-bronze/80 hover:bg-bronze/10 mb-8"
                data-testid="button-back-to-blog"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="pb-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{estimateReadingTime(post.content)} min read</span>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.categories.map(category => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="text-sm"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight"
                data-testid="post-title"
              >
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-8 border-l-4 border-bronze">
                  <p className="text-lg text-muted-foreground italic">
                    {post.excerpt}
                  </p>
                </div>
              )}
            </motion.article>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-p:text-foreground 
                prose-strong:text-foreground prose-li:text-foreground
                prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl
                prose-a:text-bronze hover:prose-a:text-bronze/80
                prose-blockquote:border-l-bronze prose-blockquote:bg-gray-50 
                dark:prose-blockquote:bg-gray-900 prose-blockquote:pl-6 prose-blockquote:py-2
                prose-ul:list-disc prose-ol:list-decimal
                prose-li:my-2 prose-p:my-4 prose-headings:my-6"
              dangerouslySetInnerHTML={{ __html: processContent(post.content) }}
              data-testid="post-content"
            />
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-6 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Related Articles
                </h2>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={relatedPost.date}>
                            {formatDate(relatedPost.date)}
                          </time>
                        </div>
                        
                        <h3 
                          className="text-lg font-semibold text-foreground group-hover:text-bronze transition-colors duration-200 mb-3 line-clamp-2"
                          data-testid={`related-post-${relatedPost.slug}`}
                        >
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1">
                          {relatedPost.categories.slice(0, 2).map(category => (
                            <Badge
                              key={category}
                              variant="outline"
                              className="text-xs"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}