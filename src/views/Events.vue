<template>
    <div>
        <!-- Page Header -->
        <section
            class="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-600">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="relative z-10 text-center text-white px-4">
                <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4">
                    Private Events
                </h1>
                <p class="text-xl font-sans">
                    Create unforgettable memories at Camelot
                </p>
            </div>
        </section>

        <!-- Introduction -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-4xl text-center">
                <h2 class="text-4xl font-serif font-bold text-primary-900 mb-4">
                    Host Your Special Occasion
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Whether you're planning an intimate gathering or a grand celebration, Camelot Restaurant and Inn
                    provides the perfect setting for your special event. Our dedicated team will work with you to create
                    a memorable experience tailored to your vision.
                </p>
            </div>
        </section>

        <!-- Event Gallery -->
        <section class="py-20 px-4 bg-gray-50">
            <div class="container mx-auto max-w-6xl">
                <h2 class="text-4xl font-serif font-bold text-primary-900 text-center mb-4">
                    Our Event Spaces
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

                <div class="grid md:grid-cols-3 gap-6 mb-16">
                    <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="/images/event-1.jpg" alt="Wedding reception setup with elegant table settings"
                            class="w-full h-72 object-cover">
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="/images/event-2.jpg" alt="Private dining room with candlelit tables"
                            class="w-full h-72 object-cover">
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="/images/event-3.jpg" alt="Event space decorated for special occasion"
                            class="w-full h-72 object-cover">
                    </div>
                </div>
            </div>
        </section>

        <!-- Event Types -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-6xl">
                <h2 class="text-4xl font-serif font-bold text-primary-900 text-center mb-4">
                    Perfect For Any Occasion
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="event in eventTypes" :key="event.title"
                        class="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div
                            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24" v-html="event.icon"></svg>
                        </div>
                        <h3 class="text-xl font-serif font-semibold text-primary-900 mb-3">{{ event.title }}</h3>
                        <p class="text-gray-600">{{ event.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-4xl">
                <h2 class="text-4xl font-serif font-bold text-primary-900 text-center mb-4">
                    What We Offer
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

                <div class="space-y-6">
                    <div v-for="feature in features" :key="feature.title" class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold">
                                ✓
                            </div>
                        </div>
                        <div>
                            <h4 class="text-xl font-serif font-semibold text-primary-900 mb-2">{{ feature.title }}</h4>
                            <p class="text-gray-600">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-4 bg-primary-600">
            <div class="container mx-auto max-w-4xl text-center text-white">
                <h2 class="text-4xl font-serif font-bold mb-4">
                    Ready to Plan Your Event?
                </h2>
                <p class="text-xl mb-8">
                    Contact our events team to discuss your special occasion
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <router-link to="/contact"
                        class="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-sans font-semibold transition-colors">
                        Contact Us
                    </router-link>
                    <a href="mailto:events@camelotrestaurantandinn.com"
                        class="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-sans font-semibold transition-colors">
                        events@camelotrestaurantandinn.com
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const eventTypes = [
    {
        title: 'Weddings & Receptions',
        description: 'Celebrate your special day in our elegant dining rooms with personalized menus and exceptional service.',
        icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
    },
    {
        title: 'Corporate Events',
        description: 'Host business meetings, conferences, or team-building events in our professional atmosphere.',
        icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>'
    },
    {
        title: 'Birthday Celebrations',
        description: 'Make birthdays unforgettable with customized menus and a warm, inviting atmosphere.',
        icon: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>'
    },
    {
        title: 'Family Gatherings',
        description: 'Reunions, anniversaries, and holiday celebrations are made special at Camelot.',
        icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>'
    },
    {
        title: 'Rehearsal Dinners',
        description: 'Start your wedding festivities with an intimate rehearsal dinner in our private dining area.',
        icon: '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>'
    },
    {
        title: 'Special Occasions',
        description: 'Graduations, retirements, and milestone celebrations deserve a memorable setting.',
        icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>'
    }
]

const features = [
    {
        title: 'Customizable Menus',
        description: 'Work with our chef to create a menu perfectly suited to your event and dietary needs.'
    },
    {
        title: 'Private Dining Spaces',
        description: 'Intimate rooms available for groups of various sizes, providing privacy and elegance.'
    },
    {
        title: 'Dedicated Event Coordinator',
        description: 'Our experienced staff will guide you through every detail to ensure a flawless event.'
    },
    {
        title: 'Flexible Accommodations',
        description: 'Our inn offers comfortable rooms for out-of-town guests attending your event.'
    },
    {
        title: 'Professional Service',
        description: 'Attentive staff dedicated to making your event seamless and memorable.'
    },
    {
        title: 'Beautiful Setting',
        description: 'Rustic elegance in the heart of the Endless Mountains provides a stunning backdrop.'
    }
]
</script>
