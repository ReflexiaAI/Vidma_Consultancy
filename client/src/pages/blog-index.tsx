import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    // Load blog posts from the generated JSON file
    fetch('/data/posts.json')
      .then(response => response.json())
      .then((data: BlogPost[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog posts:', error);
        setLoading(false);
      });
  }, []);

  // Get unique categories for filtering
  const allCategories = Array.from(
    new Set(posts.flatMap(post => post.categories))
  ).filter(Boolean);

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.categories.includes(selectedCategory))
    : posts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Legal Insights & Updates
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay informed with the latest legal developments, expert analysis, and practical guidance from our legal professionals.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    !selectedCategory
                      ? "bg-bronze text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  data-testid="filter-all-categories"
                >
                  All Posts ({posts.length})
                </button>
                {allCategories.slice(0, 8).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-bronze text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                    data-testid={`filter-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {category} ({posts.filter(p => p.categories.includes(category)).length})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No posts found in this category.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>
                              {formatDate(post.date)}
                            </time>
                          </div>
                          
                          <h2 
                            className="text-xl font-semibold text-foreground group-hover:text-bronze transition-colors duration-200 line-clamp-2"
                            data-testid={`post-title-${post.slug}`}
                          >
                            {post.title}
                          </h2>
                          
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.categories.slice(0, 2).map(category => (
                              <Badge
                                key={category}
                                variant="secondary"
                                className="text-xs"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center text-bronze font-medium text-sm group-hover:gap-3 transition-all duration-200">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}