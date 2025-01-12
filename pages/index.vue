<template>
  <TheHero />
  <div class="bg-base-100 w-screen flex flex-row space-x-4 justify-center pt-8">
    <NuxtLink v-for="doc in docs" :key="doc._path" :to="doc._path"
      class="btn btn-primary">
      {{ doc.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { data: docs } = await useAsyncData('docs', () =>
  queryContent()
  .find()
)
</script>

<style scoped></style>