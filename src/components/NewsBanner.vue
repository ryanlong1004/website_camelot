<template>
    <transition name="slide-down">
        <div v-if="isVisible && currentAnnouncement"
            class="fixed top-0 left-0 right-0 z-[60] shadow-lg"
            :class="currentAnnouncement.priority === 'high' ? 'bg-red-600' : 'bg-primary-700'">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3 flex-1 min-w-0">
                        <svg v-if="currentAnnouncement.priority === 'high'" 
                             class="w-6 h-6 flex-shrink-0 text-white animate-pulse"
                             fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg v-else class="w-6 h-6 flex-shrink-0 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <div class="flex-1 min-w-0">
                            <p class="text-white text-sm md:text-base font-medium leading-snug">
                                {{ currentAnnouncement.message }}
                            </p>
                        </div>
                        <a v-if="currentAnnouncement.link" 
                           :href="currentAnnouncement.link.url"
                           @click.prevent="handleLinkClick(currentAnnouncement.link.url)"
                           class="hidden sm:inline-flex items-center px-4 py-2 bg-white text-primary-700 hover:bg-gray-100 rounded-md text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap">
                            {{ currentAnnouncement.link.text }}
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
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
import { ref, onMounted, computed } from 'vue'

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
