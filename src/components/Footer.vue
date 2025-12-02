<template>
    <footer class="bg-primary-900 text-white">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Brand -->
                <div>
                    <h3 class="text-xl font-serif font-bold mb-4">Camelot Restaurant & Inn</h3>
                    <p class="text-primary-200 mb-4">Nestled in the heart of the Endless Mountains</p>
                    <div class="flex space-x-4">
                        <a href="https://www.facebook.com/camelotinn/"
                            @click.prevent="openExternal('https://www.facebook.com/camelotinn/')"
                            class="text-white hover:text-primary-300 transition-colors cursor-pointer"
                            aria-label="Facebook">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/camelot_restaurant_and_inn_/"
                            @click.prevent="openExternal('https://www.instagram.com/camelot_restaurant_and_inn_/')"
                            class="text-white hover:text-primary-300 transition-colors cursor-pointer"
                            aria-label="Instagram">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Location -->
                <div>
                    <h4 class="font-sans font-semibold mb-4">Location</h4>
                    <p class="text-primary-200">
                        17 Johnson Rd<br>
                        Clarks Summit, PA 18411
                    </p>
                    <p class="mt-2">
                        <a href="tel:+15705851430" class="text-primary-200 hover:text-white transition-colors">
                            (570) 585-1430
                        </a>
                    </p>
                </div>

                <!-- Hours -->
                <div>
                    <h4 class="font-sans font-semibold mb-4">Hours</h4>
                    <p class="text-primary-200 text-sm">
                        Sun & Mon: 11:00 AM - 8:00 PM<br>
                        Tue - Thu: 11:00 AM - 9:00 PM<br>
                        Fri & Sat: 11:00 AM - 10:00 PM
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-sans font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li>
                            <router-link to="/" class="text-primary-200 hover:text-white transition-colors">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/menus" class="text-primary-200 hover:text-white transition-colors">
                                Menus
                            </router-link>
                        </li>
                        <li>
                            <a href="https://via.eviivo.com/CamelotRestaurantInn18411"
                                @click.prevent="openExternal('https://via.eviivo.com/CamelotRestaurantInn18411')"
                                class="text-primary-200 hover:text-white transition-colors cursor-pointer">
                                Book a Room
                            </a>
                        </li>
                        <li>
                            <router-link to="/events" class="text-primary-200 hover:text-white transition-colors">
                                Events
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/news" class="text-primary-200 hover:text-white transition-colors">
                                News
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact" class="text-primary-200 hover:text-white transition-colors">
                                Contact Us
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300 text-sm">
                <p>&copy; 2025 Camelot Restaurant and Inn. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const openExternal = (url) => {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}
</script>
