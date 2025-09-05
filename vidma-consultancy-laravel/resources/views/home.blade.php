@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <!-- Hero background -->
        <div class="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-charcoal dark:via-charcoal/90 dark:to-charcoal/80"></div>
        <div class="absolute inset-0 opacity-15 dark:opacity-10">
            <img src="{{ asset('images/vidma-logo.png') }}" alt="Background" class="w-full h-full object-cover object-center opacity-30 dark:opacity-20">
        </div>

        <div class="content-max-width mx-auto px-6 relative z-10 text-center">
            <div class="space-y-12">
                <!-- Main heading -->
                <h1 class="text-5xl lg:text-7xl font-light text-foreground dark:text-white leading-tight tracking-tight">
                    Vidma Consulting Group LLP
                </h1>

                <!-- Tagline -->
                <p class="text-xl lg:text-2xl text-bronze dark:text-bronze font-light leading-relaxed max-w-4xl mx-auto">
                    A Next Generation Technology Enabled Legal And Business Consultancy
                </p>

                <!-- CTA Button -->
                <div class="flex justify-center mt-12">
                    <a href="#contact" class="bg-bronze hover:bg-bronze/90 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Get Started Today
                    </a>
                </div>

                <!-- Feature Cards -->
                <div class="grid md:grid-cols-3 gap-8 mt-20">
                    <div class="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 text-center">
                        <div class="w-16 h-16 bg-bronze/20 dark:bg-bronze/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-bronze dark:text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-bronze dark:text-bronze mb-4 tracking-wide">CLIENT CENTRIC</h3>
                        <p class="text-foreground/80 dark:text-white/80 leading-relaxed font-light">
                            Our focus is on the clients, their work culture and implementing technology in legal and financial services.
                        </p>
                    </div>

                    <div class="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 text-center">
                        <div class="w-16 h-16 bg-bronze/20 dark:bg-bronze/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-bronze dark:text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-bronze dark:text-bronze mb-4 tracking-wide">EFFICIENT PROCESSES</h3>
                        <p class="text-foreground/80 dark:text-white/80 leading-relaxed font-light">
                            We innovate and implement intelligent use of processes and technology to arrive at the full circle of projects.
                        </p>
                    </div>

                    <div class="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 text-center">
                        <div class="w-16 h-16 bg-bronze/20 dark:bg-bronze/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-bronze dark:text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-bronze dark:text-bronze mb-4 tracking-wide">SECURE PROTOCOLS</h3>
                        <p class="text-foreground/80 dark:text-white/80 leading-relaxed font-light">
                            Our policies strictly adhere to industry best practice for Information Security. We have efficient IS protocols, processes and practices in place.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section-spacing bg-background dark:bg-background transition-colors duration-300">
        <div class="content-max-width mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-6xl font-light text-foreground dark:text-foreground mb-8 tracking-tight">
                    Our <span class="font-normal">Services</span>
                </h2>
                <p class="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                    We simplify your legal and business processes with technology-enabled solutions.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                @php
                    $services = [
                        [
                            'icon' => 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                            'title' => 'Contract Lifecycle Management',
                            'description' => 'Comprehensive contract creation, negotiation, and management with high-end software solutions tailored to your needs.'
                        ],
                        [
                            'icon' => 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
                            'title' => 'Litigation Support',
                            'description' => 'Strategic legal action response with trained teams assisting general counsels in managing court proceedings.'
                        ],
                        [
                            'icon' => 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                            'title' => 'Legal Research',
                            'description' => 'Multi-jurisdictional legal research services using online libraries, offline resources, and expert networks.'
                        ],
                        [
                            'icon' => 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                            'title' => 'Intellectual Property Services',
                            'description' => 'Full range of IP services including patents, trademarks, copyrights, and IP litigation support.'
                        ],
                        [
                            'icon' => 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                            'title' => 'Financial & Investment Research',
                            'description' => 'In-depth analysis and research for equity research, valuation, and investment analysis of firms.'
                        ],
                        [
                            'icon' => 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                            'title' => 'Sustainability Solutions',
                            'description' => 'ESG advisory services and sustainability reporting to help organizations integrate sustainable practices.'
                        ]
                    ];
                @endphp

                @foreach($services as $service)
                <div class="bg-card dark:bg-card border border-border rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
                    <div class="w-12 h-12 bg-charcoal rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden">
                        <svg class="text-white text-lg relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{{ $service['icon'] }}"></path>
                        </svg>
                    </div>
                    
                    <h3 class="text-xl font-medium text-foreground dark:text-foreground mb-4">
                        {{ $service['title'] }}
                    </h3>
                    
                    <p class="text-muted-foreground dark:text-muted-foreground mb-6 font-light leading-relaxed">
                        {{ $service['description'] }}
                    </p>
                    
                    <div class="flex items-center text-foreground dark:text-foreground font-light hover:text-bronze transition-colors group-hover:translate-x-2">
                        <span>Learn More</span>
                        <svg class="ml-2" size="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
                @endforeach
            </div>

            <!-- CTA Section -->
            <div class="text-center">
                <div class="bg-muted dark:bg-muted rounded-3xl p-12 max-w-4xl mx-auto">
                    <h3 class="text-3xl font-light text-foreground dark:text-foreground mb-4 tracking-tight">Ready to Get Started?</h3>
                    <p class="text-muted-foreground dark:text-muted-foreground mb-8 font-light leading-relaxed max-w-2xl mx-auto">Each firm's situation and needs are unique. Tell us about what you're looking for, and we'll get back to you with solutions.</p>
                    <a href="#contact" class="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-200 inline-block">
                        Contact Us Today
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-spacing bg-muted dark:bg-muted transition-colors duration-300">
        <div class="content-max-width mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-20 items-start">
                <div>
                    <h2 class="text-4xl lg:text-6xl font-light text-foreground dark:text-foreground mb-8 tracking-tight leading-tight">
                        Ready to Simplify Your 
                        <span class="font-normal text-bronze"> Legal Processes?</span>
                    </h2>
                    <p class="text-lg text-muted-foreground dark:text-muted-foreground mb-12 leading-relaxed font-light">
                        Tell us about what you're looking for, and we will get back to you soon with solutions and ideas.
                    </p>

                    <div class="space-y-8 mb-12">
                        <div class="flex items-center space-x-4">
                            <div class="w-10 h-10 bg-bronze rounded-2xl flex items-center justify-center">
                                <svg class="text-white text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <div class="font-medium text-foreground dark:text-foreground text-sm">Consultation Services</div>
                                <div class="text-muted-foreground dark:text-muted-foreground font-light text-sm">Contact us for legal consultation</div>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div class="w-10 h-10 bg-teal rounded-2xl flex items-center justify-center">
                                <svg class="text-white text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <div class="font-medium text-foreground dark:text-foreground text-sm">Business Inquiries</div>
                                <div class="text-muted-foreground dark:text-muted-foreground font-light text-sm">info@vidmaconsulting.com</div>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div class="w-10 h-10 bg-navy rounded-2xl flex items-center justify-center">
                                <svg class="text-white text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <div class="font-medium text-foreground dark:text-foreground text-sm">Professional Services</div>
                                <div class="text-muted-foreground dark:text-muted-foreground font-light text-sm">Technology-enabled legal solutions</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="bg-card dark:bg-card rounded-3xl shadow-sm p-10 border border-border">
                    <h3 class="text-2xl font-light text-foreground dark:text-foreground mb-8 tracking-tight">Contact Us</h3>

                    <form action="/api/consultation-requests" method="POST" class="space-y-6">
                        @csrf
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="first_name" class="block text-xs font-medium text-foreground dark:text-foreground mb-2 tracking-wide uppercase">
                                    First Name *
                                </label>
                                <input type="text" id="first_name" name="first_name" placeholder="John" class="w-full focus:ring-1 focus:ring-bronze focus:border-transparent border-charcoal/10 rounded-xl px-3 py-2" required>
                            </div>
                            <div>
                                <label for="last_name" class="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                                    Last Name *
                                </label>
                                <input type="text" id="last_name" name="last_name" placeholder="Smith" class="w-full focus:ring-2 focus:ring-bronze focus:border-transparent px-3 py-2 rounded-lg" required>
                            </div>
                        </div>

                        <div>
                            <label for="company" class="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                                Company *
                            </label>
                            <input type="text" id="company" name="company" placeholder="Company Name" class="w-full focus:ring-2 focus:ring-bronze focus:border-transparent px-3 py-2 rounded-lg" required>
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                                Email Address *
                            </label>
                            <input type="email" id="email" name="email" placeholder="john@company.com" class="w-full focus:ring-2 focus:ring-bronze focus:border-transparent px-3 py-2 rounded-lg" required>
                        </div>

                        <div>
                            <label for="phone" class="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                                Phone Number *
                            </label>
                            <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" class="w-full focus:ring-2 focus:ring-bronze focus:border-transparent px-3 py-2 rounded-lg" required>
                        </div>

                        <div>
                            <label for="legal_challenge" class="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                                Legal Challenge *
                            </label>
                            <select id="legal_challenge" name="legal_challenge" class="w-full focus:ring-2 focus:ring-bronze focus:border-transparent px-3 py-2 rounded-lg" required>
                                <option value="">Select your primary need</option>
                                <option value="corporate-law">Corporate Law & Governance</option>
                                <option value="ma-transactions">M&A Transactions</option>
                                <option value="compliance-risk">Compliance & Risk Management</option>
                                <option value="international-expansion">International Expansion</option>
                                <option value="contract-negotiation">Contract Negotiation</option>
                                <option value="ip-technology">IP & Technology Law</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label for="project_details" class="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                                Project Details *
                            </label>
                            <textarea id="project_details" name="project_details" placeholder="Briefly describe your legal challenge and timeline..." rows="4" class="w-full focus:ring-2 focus:ring-bronze focus:border-transparent resize-none px-3 py-2 rounded-lg" required></textarea>
                        </div>

                        <div class="flex items-start space-x-3">
                            <input type="checkbox" id="terms" name="agreed_to_terms" value="true" class="mt-1" required>
                            <label for="terms" class="text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed">
                                I agree to receive communications about Vidma Consulting Group services and understand that consultation details will remain confidential.
                            </label>
                        </div>

                        <button type="submit" class="w-full bg-charcoal hover:bg-charcoal/90 text-white py-4 rounded-2xl font-medium disabled:opacity-50 transition-all duration-200">
                            <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Submit Request
                        </button>

                        <div class="text-center text-sm text-muted-foreground dark:text-muted-foreground flex items-center justify-center">
                            <svg class="mr-1" size="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                            All communications are kept strictly confidential
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
