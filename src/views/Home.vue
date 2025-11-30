<template>
    <div>
        <!-- Hero Section -->
        <section
            class="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700">
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hero-bg.jpg')"></div>
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="relative z-10 text-center text-white px-4">
                <h1 class="text-5xl md:text-7xl font-serif font-bold mb-6">
                    Be Our Guest in Every Season
                </h1>
                <p class="text-xl md:text-2xl mb-8 font-sans">
                    A homey getaway nestled in the Endless Mountains
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                        @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                        class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors cursor-pointer">
                        Reserve a Table
                    </a>
                    <a href="https://via.eviivo.com/CamelotRestaurantInn18411"
                        @click.prevent="openExternal('https://via.eviivo.com/CamelotRestaurantInn18411')"
                        class="px-8 py-4 bg-white hover:bg-gray-100 text-primary-900 rounded-lg font-sans font-semibold transition-colors cursor-pointer">
                        Book a Room
                    </a>
                </div>
            </div>
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>

        <!-- Welcome Section -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-6xl">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-serif font-bold text-primary-900 mb-4">
                            Welcome to Camelot
                        </h2>
                        <div class="w-20 h-1 bg-primary-600 mb-6"></div>
                        <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                            Camelot Restaurant and Inn is located just a short distance from Scranton, Moosic, Union
                            Dale, Elk Mountain, Tunkhannock, and the surrounding Pocono Mountain areas.
                        </p>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            Share a romantic weekend getaway, family gathering, or business trip. We strive to offer the
                            best accommodations in Northeastern Pennsylvania. Our Restaurant and Inn is nestled in the
                            heart of the Endless Mountains and is conveniently located right off Route 81 (Exit
                            197-Waverly) in Clarks Summit, Pennsylvania.
                        </p>
                        <router-link to="/contact"
                            class="inline-block px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-sans font-semibold transition-colors">
                            Find Us
                        </router-link>
                    </div>
                    <div class="rounded-lg h-96 overflow-hidden">
                        <img src="/images/logo.jpg" alt="Camelot Restaurant" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 px-4 bg-gray-50">
            <div class="container mx-auto max-w-6xl">
                <h2 class="text-4xl font-serif font-bold text-primary-900 text-center mb-4">
                    Why Choose Camelot
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-lg shadow-sm text-center">
                        <div
                            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-serif font-semibold text-primary-900 mb-3">Friendly Staff</h3>
                        <p class="text-gray-600">Our staff knows how to make you feel at home. We'll make sure you
                            always have a good time!</p>
                    </div>

                    <div class="bg-white p-8 rounded-lg shadow-sm text-center">
                        <div
                            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5"></path>
                                <path d="M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-serif font-semibold text-primary-900 mb-3">Quality Ingredients</h3>
                        <p class="text-gray-600">All of our ingredients are fresh and delicious, so you always get the
                            best flavor in every bite.</p>
                    </div>

                    <div class="bg-white p-8 rounded-lg shadow-sm text-center">
                        <div
                            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </div>
                        <h3 class="text-xl font-serif font-semibold text-primary-900 mb-3">Local Pride</h3>
                        <p class="text-gray-600">We are proud to be a local community favorite. That's why we strive to
                            be the best spot in town.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Dining Preview Section -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-6xl">
                <h2 class="text-4xl font-serif font-bold text-primary-900 text-center mb-4">
                    Dining Experiences
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    From Sunday brunch to Tuesday tapas, we offer exceptional dining experiences throughout the week.
                </p>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="h-48 overflow-hidden">
                            <img src="/images/menu-1.jpg" alt="Brunch" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-serif font-semibold text-primary-900 mb-2">Sunday Brunch</h3>
                            <p class="text-primary-600 font-semibold mb-3">Sundays | 11:00 AM - 2:30 PM</p>
                            <p class="text-gray-600">Start your Sunday with our delightful brunch menu featuring classic
                                favorites and creative specialties.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="h-48 overflow-hidden">
                            <img src="/images/menu-2.jpg" alt="Lunch" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-serif font-semibold text-primary-900 mb-2">Lunch</h3>
                            <p class="text-primary-600 font-semibold mb-3">Mon-Sat | 11:00 AM - 3:00 PM</p>
                            <p class="text-gray-600">Enjoy a relaxing midday meal with our carefully curated lunch
                                selections.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="h-48 overflow-hidden">
                            <img src="/images/menu-3.jpg" alt="Dinner" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-serif font-semibold text-primary-900 mb-2">Dinner</h3>
                            <p class="text-primary-600 font-semibold mb-3">Sun-Mon 4-8 PM | Wed-Sat 4-9 PM</p>
                            <p class="text-gray-600">Experience fine dining with our signature dinner menu in an elegant
                                atmosphere.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="h-48 overflow-hidden">
                            <img src="/images/menu-1.jpg" alt="Tapas" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-serif font-semibold text-primary-900 mb-2">Tapas Tuesday</h3>
                            <p class="text-primary-600 font-semibold mb-3">Tuesdays | 4:00 PM - 9:00 PM</p>
                            <p class="text-gray-600">Join us for our special tapas night featuring small plates perfect
                                for sharing.</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <router-link to="/menus"
                        class="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                        View Full Menus
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Reviews Section -->
        <section class="py-20 px-4 bg-gray-50">
            <div class="container mx-auto max-w-6xl">
                <h2 class="text-4xl font-serif font-bold text-primary-900 text-center mb-4">
                    We Love Our Customers
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                <p class="text-center text-gray-600 mb-12">
                    Check out some reviews from our dear guests
                </p>

                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="review in reviews" :key="review.author" class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="text-yellow-400 text-2xl mb-3">★★★★★</div>
                        <p class="text-gray-700 mb-4 italic">"{{ review.text }}"</p>
                        <p class="font-semibold text-primary-900">— {{ review.author }}</p>
                        <p class="text-sm text-gray-500">{{ review.source }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-2xl text-center">
                <h2 class="text-4xl font-serif font-bold text-primary-900 mb-4">
                    Stay Tuned
                </h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                <p class="text-gray-600 mb-8">
                    Subscribe to our email list for the latest news, events, discounts, specials, and more!
                </p>
                <form @submit.prevent="handleNewsletterSubmit" class="flex flex-col sm:flex-row gap-4">
                    <input v-model="email" type="email" placeholder="Enter your email address" required
                        class="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <button type="submit"
                        class="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-4 bg-primary-600">
            <div class="container mx-auto max-w-4xl text-center text-white">
                <h2 class="text-4xl font-serif font-bold mb-4">
                    Don't Be Left Out!
                </h2>
                <p class="text-xl mb-8">
                    Reserve a table and save your spot
                </p>
                <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                    @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                    class="inline-block px-10 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-sans font-semibold transition-colors text-lg cursor-pointer">
                    Reserve Now
                </a>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const reviews = [
    {
        text: "Great place, long time customers, friendly workers and we have never been disappointed in a meal.",
        author: "Michele A.",
        source: "OpenTable Review"
    },
    {
        text: "Great time and awesome Service. Took my sister for an early Birthday Celebration. We were able to bring in her favorite dessert. We enjoyed the atmosphere and the food was delicious. Win Win.",
        author: "Barbara M.",
        source: "OpenTable Review"
    },
    {
        text: "Camelot is always a great place to go! It is a place to go many times and things are always great. Everyone is pleasant, the service is attentive without being overbearing and the food is delicious!",
        author: "Swden",
        source: "OpenTable Review"
    },
    {
        text: "The outdoor seating was great. There was a gentle breeze making it very comfortable. The service was good and the food was outstanding. One of my favorite places to dine.",
        author: "Deanne",
        source: "OpenTable Review"
    }
]

const handleNewsletterSubmit = () => {
    alert(`Thank you for subscribing with ${email.value}!`)
    email.value = ''
}

const openExternal = (url) => {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}
</script>
