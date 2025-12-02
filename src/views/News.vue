<template>
    <div>
        <!-- Page Header -->
        <section
            class="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-600">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="relative z-10 text-center text-white px-4">
                <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4">
                    What's New at Camelot
                </h1>
                <p class="text-xl font-sans">
                    Stay up to date with our latest news, events, and specials
                </p>
            </div>
        </section>

        <!-- News Section -->
        <NewsSection :news="newsData.news" :max-items="12" />

        <!-- CTA Section -->
        <section class="py-20 px-4 bg-primary-600">
            <div class="container mx-auto max-w-4xl text-center text-white">
                <h2 class="text-4xl font-serif font-bold mb-4">
                    Don't Miss Out!
                </h2>
                <p class="text-xl mb-8">
                    Subscribe to stay informed about special events and promotions
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <router-link to="/"
                        class="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-sans font-semibold transition-colors">
                        Back to Home
                    </router-link>
                    <a href="https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288"
                        @click.prevent="openExternal('https://www.opentable.com/r/camelot-restaurant-and-inn-reservations-clarks-summit?restref=1198288')"
                        class="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-sans font-semibold transition-colors cursor-pointer">
                        Reserve a Table
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import NewsSection from '../components/NewsSection.vue'
import newsData from '../data/news.json'

const openExternal = (url) => {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}
</script>
