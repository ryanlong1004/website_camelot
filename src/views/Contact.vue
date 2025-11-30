<template>
    <div>
        <!-- Page Header -->
        <section
            class="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-600">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="relative z-10 text-center text-white px-4">
                <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4">
                    Contact Us
                </h1>
                <p class="text-xl font-sans">
                    We'd love to hear from you
                </p>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-6xl">
                <div class="grid md:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div>
                        <h2 class="text-3xl font-serif font-bold text-primary-900 mb-4">
                            How Can We Help You?
                        </h2>
                        <p class="text-gray-600 mb-8">
                            Send us your thoughts and we will get back to you shortly
                        </p>

                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Name <span class="text-red-500">*</span>
                                </label>
                                <input v-model="form.name" type="text" id="name" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Email <span class="text-red-500">*</span>
                                </label>
                                <input v-model="form.email" type="email" id="email" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                            </div>

                            <div>
                                <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input v-model="form.phone" type="tel" id="phone"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Message <span class="text-red-500">*</span>
                                </label>
                                <textarea v-model="form.message" id="message" rows="6" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
                            </div>

                            <button type="submit"
                                class="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-6">
                        <!-- Location -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-serif font-bold text-primary-900 mb-4">Location</h3>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor"
                                        stroke-width="2" viewBox="0 0 24 24">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-gray-700">
                                        17 Johnson Rd<br>
                                        Clarks Summit, PA 18411
                                    </p>
                                    <a href="https://www.google.com/maps/place/Camelot+Restaurant+and+Inn/@41.4893,-75.7127,17z"
                                        @click.prevent="openExternal('https://www.google.com/maps/place/Camelot+Restaurant+and+Inn/@41.4893,-75.7127,17z')"
                                        class="inline-block mt-4 px-4 py-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-sans font-semibold transition-colors text-sm cursor-pointer">
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Phone -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-serif font-bold text-primary-900 mb-4">Phone</h3>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor"
                                        stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <a href="tel:+15705851430"
                                        class="text-gray-700 hover:text-primary-600 transition-colors text-lg">
                                        (570) 585-1430
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Hours -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-serif font-bold text-primary-900 mb-4">Hours</h3>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor"
                                        stroke-width="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div class="text-gray-700">
                                    <p><strong>Sun & Mon:</strong> 11 AM - 8 PM</p>
                                    <p><strong>Tue - Thu:</strong> 11 AM - 9 PM</p>
                                    <p><strong>Fri & Sat:</strong> 11 AM - 10 PM</p>
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-serif font-bold text-primary-900 mb-4">Follow Us</h3>
                            <p class="text-gray-600 mb-4">Stay connected for updates, specials, and more</p>
                            <div class="flex gap-4">
                                <a href="https://www.facebook.com/camelotinn/"
                                    @click.prevent="openExternal('https://www.facebook.com/camelotinn/')"
                                    class="w-12 h-12 bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                                    aria-label="Facebook">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                        </path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/camelot_restaurant_and_inn_/"
                                    @click.prevent="openExternal('https://www.instagram.com/camelot_restaurant_and_inn_/')"
                                    class="w-12 h-12 bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                                    aria-label="Instagram">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Map Section -->
        <section class="h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.8948234567890!2d-75.71494892346273!3d41.48934197128234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c52f0b4e2c8c3b%3A0x9d8e7e8e8e8e8e8e!2s17%20Johnson%20Rd%2C%20Clarks%20Summit%2C%20PA%2018411!5e0!3m2!1sen!2sus!4v1732975000000!5m2!1sen!2sus"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-4 bg-gray-50">
            <div class="container mx-auto max-w-4xl text-center">
                <h2 class="text-4xl font-serif font-bold text-primary-900 mb-4">
                    Ready to Dine With Us?
                </h2>
                <p class="text-xl text-gray-600 mb-8">
                    Reserve your table today and experience Camelot
                </p>
                <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                    @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                    class="inline-block px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors text-lg cursor-pointer">
                    Reserve Now
                </a>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const handleSubmit = () => {
    alert(`Thank you ${form.name}! We'll get back to you soon.`)
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
}

const openExternal = (url) => {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}
</script>
