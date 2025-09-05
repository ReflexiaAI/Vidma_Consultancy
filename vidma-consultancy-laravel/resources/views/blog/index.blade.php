@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    <section class="py-16 px-6 bg-background">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Legal Insights & Updates
                </h1>
                <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Stay informed with the latest legal developments, expert analysis, and practical guidance from our legal professionals.
                </p>
            </div>

            <!-- Category Filter -->
            <div class="mb-12">
                <div class="flex flex-wrap gap-3 justify-center">
                    <a href="{{ route('blog.index') }}" 
                       class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {{ !request('category') ? 'bg-bronze text-white' : 'bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700' }}">
                        All Posts ({{ $posts->total() }})
                    </a>
                    @foreach($allCategories as $category)
                        <a href="{{ route('blog.index', ['category' => $category]) }}" 
                           class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {{ request('category') === $category ? 'bg-bronze text-white' : 'bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700' }}">
                            {{ $category }} ({{ $posts->where('categories', '!=', null)->filter(function($post) use ($category) { return in_array($category, $post->categories ?? []); })->count() }})
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="pb-16 px-6">
        <div class="container mx-auto max-w-6xl">
            @if($posts->count() > 0)
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    @foreach($posts as $post)
                        <article class="bg-card dark:bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                            <div class="p-6">
                                <div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <time dateTime="{{ $post->published_date->format('Y-m-d') }}">
                                        {{ $post->formatted_date }}
                                    </time>
                                </div>
                                
                                <h2 class="text-xl font-semibold text-foreground group-hover:text-bronze transition-colors duration-200 line-clamp-2 mb-3">
                                    <a href="{{ route('blog.show', $post->slug) }}">{{ $post->title }}</a>
                                </h2>
                                
                                <div class="flex flex-wrap gap-2 mb-4">
                                    @if($post->categories)
                                        @foreach(array_slice($post->categories, 0, 2) as $category)
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                                                </svg>
                                                {{ $category }}
                                            </span>
                                        @endforeach
                                    @endif
                                </div>
                                
                                <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                                    {{ $post->excerpt }}
                                </p>
                                
                                <div class="flex items-center text-bronze font-medium text-sm group-hover:gap-3 transition-all duration-200">
                                    <a href="{{ route('blog.show', $post->slug) }}" class="flex items-center">
                                        <span>Read More</span>
                                        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    @endforeach
                </div>

                <!-- Pagination -->
                @if($posts->hasPages())
                    <div class="mt-12">
                        {{ $posts->links() }}
                    </div>
                @endif
            @else
                <div class="text-center py-16">
                    <p class="text-xl text-muted-foreground">
                        No posts found in this category.
                    </p>
                </div>
            @endif
        </div>
    </section>
@endsection
