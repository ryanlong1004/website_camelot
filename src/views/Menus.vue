<template>
    <div>
        <!-- Page Header -->
        <section
            class="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-600">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="relative z-10 text-center text-white px-4">
                <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4">
                    Our Menus
                </h1>
                <p class="text-xl font-sans">
                    Exceptional dining experiences throughout the week
                </p>
            </div>
        </section>

        <!-- Menus Section -->
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-6xl space-y-16">
                <!-- Brunch Menu -->
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 class="text-3xl font-serif font-bold text-primary-900 mb-2">Sunday Brunch</h2>
                        <div class="w-16 h-1 bg-primary-600 mb-4"></div>
                        <p class="text-primary-600 font-semibold mb-4">Sundays | 11:00 AM - 2:30 PM</p>
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            Start your Sunday with our delightful brunch menu featuring classic favorites
                            and creative specialties. From fluffy pancakes to savory benedicts, we have
                            something for everyone.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <button @click="openMenu('brunch')"
                                class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                                View Full Menu
                            </button>
                            <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                                target="_blank" rel="noopener"
                                class="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-sans font-semibold transition-colors">
                                Reserve
                            </a>
                        </div>
                    </div>
                    <div class="h-80 rounded-lg overflow-hidden shadow-md cursor-pointer" @click="openMenu('brunch')">
                        <img src="/images/menu-1.jpg" alt="Sunday Brunch Menu"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                </div>

                <!-- Lunch Menu -->
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div class="md:order-2">
                        <h2 class="text-3xl font-serif font-bold text-primary-900 mb-2">Lunch</h2>
                        <div class="w-16 h-1 bg-primary-600 mb-4"></div>
                        <p class="text-primary-600 font-semibold mb-4">Monday - Saturday | 11:00 AM -
                            3:00 PM</p>
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            Enjoy a relaxing midday meal with our carefully curated lunch selections.
                            Fresh salads, hearty sandwiches, and signature entrees prepared with the
                            finest ingredients.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <button @click="openMenu('lunch')"
                                class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                                View Full Menu
                            </button>
                            <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                                @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                                class="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-sans font-semibold transition-colors cursor-pointer">
                                Reserve
                            </a>
                        </div>
                    </div>
                    <div class="h-80 rounded-lg overflow-hidden shadow-md md:order-1 cursor-pointer"
                        @click="openMenu('lunch')">
                        <img src="/images/menu-2.jpg" alt="Lunch Menu"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                </div>

                <!-- Dinner Menu -->
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 class="text-3xl font-serif font-bold text-primary-900 mb-2">Dinner</h2>
                        <div class="w-16 h-1 bg-primary-600 mb-4"></div>
                        <p class="text-primary-600 font-semibold mb-4">
                            Sunday & Monday: 4:00 PM - 8:00 PM<br>
                            Wednesday - Saturday: 4:00 PM - 9:00 PM
                        </p>
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            Experience fine dining with our signature dinner menu. From perfectly
                            aged steaks to fresh seafood and seasonal specialties, every dish is
                            crafted to perfection in an elegant atmosphere.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <button @click="openMenu('dinner')"
                                class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                                View Full Menu
                            </button>
                            <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                                @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                                class="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-sans font-semibold transition-colors cursor-pointer">
                                Reserve
                            </a>
                        </div>
                    </div>
                    <div class="h-80 rounded-lg overflow-hidden shadow-md cursor-pointer" @click="openMenu('dinner')">
                        <img src="/images/menu-3.jpg" alt="Dinner Menu"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                </div>

                <!-- Tapas Menu -->
                <div class="bg-primary-50 rounded-2xl p-8 md:p-12">
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        <div class="md:order-2">
                            <div
                                class="inline-block px-4 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full mb-4">
                                Weekly Special
                            </div>
                            <h2 class="text-3xl font-serif font-bold text-primary-900 mb-2">
                                Tapas Tuesday</h2>
                            <div class="w-16 h-1 bg-primary-600 mb-4"></div>
                            <p class="text-primary-600 font-semibold mb-4">Every Tuesday | 4:00
                                PM - 9:00 PM</p>
                            <p class="text-gray-700 mb-6 leading-relaxed">
                                Join us for our special tapas night featuring small plates
                                perfect for sharing. Experience a variety of flavors and
                                textures in our cozy, intimate setting. Tuesday nights have
                                never been more delicious!
                            </p>
                            <div class="flex flex-wrap gap-3">
                                <button @click="openMenu('tapas')"
                                    class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                                    View Full Menu
                                </button>
                                <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                                    @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                                    class="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-sans font-semibold transition-colors cursor-pointer">
                                    Reserve
                                </a>
                            </div>
                        </div>
                        <div class="h-80 bg-white rounded-lg overflow-hidden shadow-md md:order-1 cursor-pointer"
                            @click="openMenu('tapas')">
                            <img src="/images/menu-1.jpg" alt="Tapas Menu"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                </div>
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

        <!-- Menu Modal -->
        <MenuModal :is-open="modalOpen" :title="currentMenu.title" :images="currentMenu.images"
            @close="modalOpen = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuModal from '../components/MenuModal.vue'

const modalOpen = ref(false)
const currentMenu = ref({ title: '', images: [] })

const menus = {
    brunch: {
        title: 'Sunday Brunch Menu',
        images: [
            '/images/menus/brunch-1.jpg',
            '/images/menus/brunch-2.jpg'
        ]
    },
    lunch: {
        title: 'Lunch Menu',
        images: [
            '/images/menus/lunch-1.jpg',
            '/images/menus/lunch-2.jpg'
        ]
    },
    dinner: {
        title: 'Dinner Menu',
        images: [
            '/images/menus/dinner-1.jpg',
            '/images/menus/dinner-2.jpg',
            '/images/menus/dinner-3.jpg'
        ]
    },
    tapas: {
        title: 'Tapas Tuesday Menu',
        images: [
            '/images/menus/tapas.jpg'
        ]
    }
}

const openMenu = (type) => {
    currentMenu.value = menus[type]
    modalOpen.value = true
}

const openExternal = (url) => {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}
</script>
