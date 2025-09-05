<header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div class="content-max-width mx-auto px-6">
        <div class="flex items-center justify-between h-20">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
                <img src="{{ asset('images/vidma-logo.png') }}" alt="Vidma Consulting Group" class="h-10 w-auto">
                <div class="hidden sm:block">
                    <h1 class="text-xl font-semibold text-foreground">Vidma Consulting Group LLP</h1>
                    <p class="text-sm text-muted-foreground">Legal & Business Consultancy</p>
                </div>
            </div>

            <!-- Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <a href="#home" class="text-foreground hover:text-bronze transition-colors duration-200">Home</a>
                <a href="#services" class="text-foreground hover:text-bronze transition-colors duration-200">Services</a>
                <a href="#about" class="text-foreground hover:text-bronze transition-colors duration-200">About</a>
                <a href="#team" class="text-foreground hover:text-bronze transition-colors duration-200">Team</a>
                <a href="#testimonials" class="text-foreground hover:text-bronze transition-colors duration-200">Testimonials</a>
                <a href="#contact" class="text-foreground hover:text-bronze transition-colors duration-200">Contact</a>
                <a href="/blog" class="text-foreground hover:text-bronze transition-colors duration-200">Blog</a>
            </nav>

            <!-- CTA Button -->
            <div class="hidden md:block">
                <a href="#contact" class="bg-bronze hover:bg-bronze/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                    Get Started
                </a>
            </div>

            <!-- Mobile menu button -->
            <button class="md:hidden p-2" onclick="toggleMobileMenu()">
                <svg class="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div class="px-6 py-4 space-y-4">
                <a href="#home" class="block text-foreground hover:text-bronze transition-colors duration-200">Home</a>
                <a href="#services" class="block text-foreground hover:text-bronze transition-colors duration-200">Services</a>
                <a href="#about" class="block text-foreground hover:text-bronze transition-colors duration-200">About</a>
                <a href="#team" class="block text-foreground hover:text-bronze transition-colors duration-200">Team</a>
                <a href="#testimonials" class="block text-foreground hover:text-bronze transition-colors duration-200">Testimonials</a>
                <a href="#contact" class="block text-foreground hover:text-bronze transition-colors duration-200">Contact</a>
                <a href="/blog" class="block text-foreground hover:text-bronze transition-colors duration-200">Blog</a>
                <a href="#contact" class="block bg-bronze hover:bg-bronze/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 text-center">
                    Get Started
                </a>
            </div>
        </div>
    </div>
</header>

<script>
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}
</script>
