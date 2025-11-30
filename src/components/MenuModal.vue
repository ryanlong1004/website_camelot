<template>
    <transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click="close">
            <div class="absolute inset-0 bg-black/80"></div>
            <div class="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" @click.stop>
                <!-- Close Button -->
                <button @click="close"
                    class="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Close menu">
                    <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>

                <!-- Menu Images -->
                <div class="overflow-y-auto max-h-[90vh] p-4">
                    <div class="space-y-4">
                        <img v-for="(image, index) in images" :key="index" :src="image"
                            :alt="`${title} - Page ${index + 1}`" class="w-full rounded-lg shadow-md">
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'Menu'
    },
    images: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['close'])

const close = () => {
    emit('close')
}

// Prevent body scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
    transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
    transform: scale(0.95);
}
</style>
