<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of blog posts.
     */
    public function index(Request $request)
    {
        $query = BlogPost::published()->orderBy('published_date', 'desc');
        
        // Filter by category if provided
        if ($request->has('category') && $request->category) {
            $query->byCategory($request->category);
        }
        
        $posts = $query->paginate(12);
        
        // Get all unique categories for filter
        $allCategories = BlogPost::published()
            ->get()
            ->pluck('categories')
            ->flatten()
            ->unique()
            ->filter()
            ->values();
        
        return view('blog.index', compact('posts', 'allCategories'));
    }

    /**
     * Display the specified blog post.
     */
    public function show($slug)
    {
        $post = BlogPost::published()->where('slug', $slug)->firstOrFail();
        
        // Get related posts (same categories)
        $relatedPosts = BlogPost::published()
            ->where('id', '!=', $post->id)
            ->where(function ($query) use ($post) {
                foreach ($post->categories ?? [] as $category) {
                    $query->orWhereJsonContains('categories', $category);
                }
            })
            ->limit(3)
            ->get();
        
        return view('blog.show', compact('post', 'relatedPosts'));
    }
}
