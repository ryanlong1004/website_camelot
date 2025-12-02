<template>
    <section v-if="visibleNews.length > 0" class="py-16 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-serif font-bold text-primary-900 mb-4">
                    What's New at Camelot
                </h2>
                <div class="w-20 h-1 bg-accent-600 mx-auto"></div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article v-for="item in visibleNews" :key="item.id"
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div v-if="item.image" class="h-48 overflow-hidden">
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                                :class="getCategoryClass(item.category)">
                                {{ item.category }}
                            </span>
                            <span class="text-sm text-gray-500">{{ formatDate(item.date) }}</span>
                        </div>
                        <h3 class="text-xl font-serif font-bold text-primary-900 mb-2">{{ item.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ item.description }}</p>
                        <a v-if="item.link" :href="item.link.url" @click.prevent="handleLinkClick(item.link.url)"
                            class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold cursor-pointer">
                            {{ item.link.text }}
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>

            <div v-if="showViewAll" class="text-center mt-12">
                <router-link to="/news"
                    class="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-sans font-semibold transition-colors">
                    View All News
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    news: {
        type: Array,
        default: () => []
    },
    maxItems: {
        type: Number,
        default: 6
    },
    showViewAll: {
        type: Boolean,
        default: false
    }
})

const visibleNews = computed(() => {
    return props.news
        .filter(item => item.active)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, props.maxItems)
})

const getCategoryClass = (category) => {
    const classes = {
        'Menu': 'bg-accent-100 text-accent-700',
        'Event': 'bg-primary-100 text-primary-700',
        'Special': 'bg-yellow-100 text-yellow-700',
        'Drinks': 'bg-purple-100 text-purple-700',
        'News': 'bg-blue-100 text-blue-700'
    }
    return classes[category] || 'bg-gray-100 text-gray-700'
}

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const handleLinkClick = (url) => {
    if (url.startsWith('http')) {
        window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
    } else {
        window.location.href = url
    }
}
</script>
