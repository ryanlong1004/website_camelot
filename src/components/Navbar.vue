<template>
    <nav class="fixed w-full z-50 transition-all duration-300"
        :class="scrolled ? 'bg-white shadow-lg' : 'bg-transparent'">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <router-link to="/" class="flex flex-col">
                    <span class="text-2xl font-serif font-bold" :class="scrolled ? 'text-primary-900' : 'text-white'">
                        Camelot
                    </span>
                    <span class="text-sm font-sans" :class="scrolled ? 'text-primary-700' : 'text-white/90'">
                        Restaurant & Inn
                    </span>
                </router-link>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
                        class="font-sans font-medium transition-colors"
                        :class="scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'">
                        {{ link.name }}
                    </router-link>
                    <a href="https://via.eviivo.com/CamelotRestaurantInn18411"
                        @click.prevent="openExternal('https://via.eviivo.com/CamelotRestaurantInn18411')"
                        class="font-sans font-medium transition-colors cursor-pointer"
                        :class="scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'">
                        Inn
                    </a>
                    <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                        @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                        class="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-sans font-medium cursor-pointer">
                        Reserve
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2"
                    :class="scrolled ? 'text-gray-700' : 'text-white'">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <transition name="slide">
                <div v-if="mobileMenuOpen" class="md:hidden py-4 bg-white">
                    <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
                        @click="mobileMenuOpen = false"
                        class="block py-2 text-gray-700 hover:text-primary-600 font-sans font-medium">
                        {{ link.name }}
                    </router-link>
                    <a href="https://via.eviivo.com/CamelotRestaurantInn18411"
                        @click.prevent="openExternal('https://via.eviivo.com/CamelotRestaurantInn18411')"
                        class="block py-2 text-gray-700 hover:text-primary-600 font-sans font-medium cursor-pointer">
                        Inn
                    </a>
                    <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                        @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                        class="block mt-2 px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-sans font-medium text-center cursor-pointer">
                        Reserve
                    </a>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menus', path: '/menus' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' }
]

const handleScroll = () => {
    scrolled.value = window.scrollY > 50
}

const openExternal = (url) => {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
