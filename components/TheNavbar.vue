<template>
    <div class="navbar">
        <div class="flex-1">
            <NuxtLink :to="{ name: 'index' }" class="btn btn-ghost text-xl">CheatSheets Brasil</NuxtLink>
        </div>
        <div class="flex-none">
            <div class="form-control">
                <input type="text" placeholder="Pesquise por um CheatSheet" class="input input-bordered w-24 md:w-auto"
                    onclick="search_modal.showModal()" readonly />
            </div>
        </div>
    </div>

    <dialog id="search_modal" ref="searchModal" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold mb-4">Pesquisar CheatSheet</h3>
            <input type="text" placeholder="Digite para buscar..." class="input input-bordered w-full mb-4"
                v-model="input" />
            <div>
                <ul v-if="results.length">
                    <li v-for="result in results" :key="result.item" class="py-1">
                        <NuxtLink :to="`${formatTitle(result.item || '')}`">
                            {{ result.item }}
                        </NuxtLink>
                    </li>
                </ul>
                <p v-else>Nenhum resultado encontrado.</p>
            </div>
        </div>
    </dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'
import { useRouter } from 'vue-router'

const { data: docs } = await useAsyncData('docs', () =>
    queryContent().find()
)

const data = computed(() => docs.value?.map(doc => doc.title) || [])

const input = ref('')

const { results } = useFuse(input, data)

const searchModal = ref<HTMLDialogElement | null>(null)

function formatTitle(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-')
}

const router = useRouter()

function closeModal() {
    searchModal.value?.close()
}

onMounted(() => {
    router.afterEach(() => {
        closeModal()
    })
})

onBeforeUnmount(() => {
    router.afterEach(() => { })
})
</script>
