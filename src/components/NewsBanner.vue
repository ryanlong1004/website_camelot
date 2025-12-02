<template>
    <transition name="slide-down">
        <div v-if="isVisible && currentAnnouncement"
            class="fixed top-0 left-0 right-0 z-50 bg-accent-600 text-white shadow-lg"
            :class="currentAnnouncement.priority === 'high' ? 'bg-red-600' : 'bg-accent-600'">
            <div class="container mx-auto px-4 py-3">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3 flex-1">
                        <svg v-if="currentAnnouncement.priority === 'high'" class="w-5 h-5 flex-shrink-0 animate-pulse"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg v-else class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                        <p class="text-sm md:text-base font-semibold">{{ currentAnnouncement.message }}</p>
                        <a v-if="currentAnnouncement.link" :href="currentAnnouncement.link.url"
                            @click.prevent="handleLinkClick(currentAnnouncement.link.url)"
                            class="text-sm font-bold underline hover:no-underline whitespace-nowrap cursor-pointer">
                            {{ currentAnnouncement.link.text }}
                        </a>
                    </div>
                    <button @click="dismiss" class="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
                        aria-label="Dismiss announcement">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
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
