<template>
  <TheHero />
  <div class="bg-base-100 w-screen flex flex-col items-center pt-8">
    <div class="w-full max-w-4xl space-y-4">
      <div v-for="(docs, category) in categories" :key="category">
        <h2 class="text-xl font-bold mb-4">
          {{ category }}
        </h2>
        <div class="flex flex-wrap gap-4">
          <NuxtLink v-for="doc in docs" :key="doc._path" :to="doc._path" class="btn btn-primary">
            {{ doc.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { data: docs } = await useAsyncData('docs', () =>
  queryContent().find()
)

const categories = computed(() => {
  const grouped = {}

  docs.value?.forEach((doc) => {
    doc.categories?.forEach((category) => {
      if (!grouped[category]) {
        grouped[category] = []
      }
      grouped[category].push(doc)
    })
  })

  return grouped
})
</script>
