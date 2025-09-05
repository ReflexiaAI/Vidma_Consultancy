@extends('layouts.app')

@section('content')
    <!-- Back to Blog -->
    <section class="py-8 px-6">
        <div class="container mx-auto max-w-4xl">
            <a href="{{ route('blog.index') }}" class="inline-flex items-center text-bronze hover:text-bronze/80 hover:bg-bronze/10 px-4 py-2 rounded-lg transition-colors duration-200">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Blog
            </a>
        </div>
    </section>

    <!-- Article Header -->
    <section class="pb-8 px-6">
        <div class="container mx-auto max-w-4xl">
            <article>
                <!-- Meta Information -->
                <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <time dateTime="{{ $post->published_date->format('Y-m-d') }}">
                            {{ $post->formatted_date }}
                        </time>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{{ $post->reading_time }} min read</span>
                    </div>
                </div>

                <!-- Categories -->
                @if($post->categories)
                    <div class="flex flex-wrap gap-2 mb-8">
                        @foreach($post->categories as $category)
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                                </svg>
                                {{ $category }}
                            </span>
                        @endforeach
                    </div>
                @endif

                <!-- Title -->
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                    {{ $post->title }}
                </h1>

                <!-- Excerpt -->
                @if($post->excerpt)
                    <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-8 border-l-4 border-bronze">
                        <p class="text-lg text-muted-foreground italic">
                            {{ $post->excerpt }}
                        </p>
                    </div>
                @endif
            </article>
        </div>
    </section>

    <!-- Article Content -->
    <section class="pb-16 px-6">
        <div class="container mx-auto max-w-4xl">
            <div class="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-p:text-foreground 
                prose-strong:text-foreground prose-li:text-foreground
                prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl
                prose-a:text-bronze hover:prose-a:text-bronze/80
                prose-blockquote:border-l-bronze prose-blockquote:bg-gray-50 
                dark:prose-blockquote:bg-gray-900 prose-blockquote:pl-6 prose-blockquote:py-2
                prose-ul:list-disc prose-ol:list-decimal
                prose-li:my-2 prose-p:my-4 prose-headings:my-6">
                {!! $post->content !!}
            </div>
        </div>
    </section>

    <!-- Related Posts -->
    @if($relatedPosts->count() > 0)
        <section class="py-16 px-6 border-t border-gray-200 dark:border-gray-800">
            <div class="container mx-auto max-w-6xl">
                <h2 class="text-2xl font-bold text-foreground mb-8">
                    Related Articles
                </h2>
                
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    @foreach($relatedPosts as $relatedPost)
                        <article class="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                            <div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <time dateTime="{{ $relatedPost->published_date->format('Y-m-d') }}">
                                    {{ $relatedPost->formatted_date }}
                                </time>
                            </div>
                            
                            <h3 class="text-lg font-semibold text-foreground group-hover:text-bronze transition-colors duration-200 mb-3 line-clamp-2">
                                <a href="{{ route('blog.show', $relatedPost->slug) }}">{{ $relatedPost->title }}</a>
                            </h3>
                            
                            <p class="text-sm text-muted-foreground line-clamp-2 mb-4">
                                {{ $relatedPost->excerpt }}
                            </p>
                            
                            @if($relatedPost->categories)
                                <div class="flex flex-wrap gap-1">
                                    @foreach(array_slice($relatedPost->categories, 0, 2) as $category)
                                        <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                                            {{ $category }}
                                        </span>
                                    @endforeach
                                </div>
                            @endif
                        </article>
                    @endforeach
                </div>
            </div>
        </section>
    @endif
@endsection
