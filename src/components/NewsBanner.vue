<template>
    <transition name="slide-down">
        <div v-if="isVisible && currentAnnouncement" class="fixed top-0 left-0 right-0 z-[60] shadow-lg"
            :class="getBannerClass(currentAnnouncement.priority)">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3 flex-1 min-w-0">
                        <component :is="getIcon(currentAnnouncement.priority)" class="w-6 h-6 flex-shrink-0" />
                        <div class="flex-1 min-w-0">
                            <p class="text-white text-sm md:text-base font-medium leading-snug">
                                {{ currentAnnouncement.message }}
                            </p>
                        </div>
                        <a v-if="currentAnnouncement.link" :href="currentAnnouncement.link.url"
                            @click.prevent="handleLinkClick(currentAnnouncement.link.url)"
                            class="hidden sm:inline-flex items-center px-4 py-2 bg-white hover:bg-gray-100 rounded-md text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                            :class="getButtonClass(currentAnnouncement.priority)">
                            {{ currentAnnouncement.link.text }}
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <button @click="dismiss"
                        class="flex-shrink-0 p-1.5 text-white hover:bg-white/20 rounded-md transition-colors"
                        aria-label="Dismiss announcement">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted, computed, h } from 'vue'

const props = defineProps({
    announcements: {
        type: Array,
        default: () => []
    }
})

const isVisible = ref(true)
const dismissedIds = ref([])

const currentAnnouncement = computed(() => {
    const active = props.announcements.filter(a =>
        a.active && !dismissedIds.value.includes(a.id)
    )
    return active.length > 0 ? active[0] : null
})

const getBannerClass = (priority) => {
    if (priority === 'high') {
        return 'bg-gradient-to-r from-orange-500 to-orange-600'
    }
    return 'bg-gradient-to-r from-amber-500 to-yellow-500'
}

const getButtonClass = (priority) => {
    if (priority === 'high') {
        return 'text-orange-600 hover:text-orange-700'
    }
    return 'text-amber-600 hover:text-amber-700'
}

const getIcon = (priority) => {
    if (priority === 'high') {
        // Alert icon for urgent announcements
        return h('svg', {
            class: 'text-white animate-pulse',
            fill: 'currentColor',
            viewBox: '0 0 20 20'
        }, [
            h('path', {
                'fill-rule': 'evenodd',
                d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
                'clip-rule': 'evenodd'
            })
        ])
    }
    // Sparkle/celebration icon for good news
    return h('svg', {
        class: 'text-white',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        viewBox: '0 0 24 24'
    }, [
        h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
        })
    ])
}

const dismiss = () => {
    if (currentAnnouncement.value) {
        dismissedIds.value.push(currentAnnouncement.value.id)
        localStorage.setItem('dismissedAnnouncements', JSON.stringify(dismissedIds.value))
    }
    isVisible.value = false
}

const handleLinkClick = (url) => {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}

onMounted(() => {
    const stored = localStorage.getItem('dismissedAnnouncements')
    if (stored) {
        dismissedIds.value = JSON.parse(stored)
    }
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>
