<script setup>

</script>

<template>
  <div class="container mx-4 px-4 py-8">
    <ContentDoc />
  </div>
</template>

<style lang="postcss">
main {
  @apply grid grid-cols-3
}

main h1 {
  @apply text-3xl font-bold my-8
}

main h2 {
  @apply text-2xl font-bold my-6
}

main h3 {
  @apply text-xl font-bold my-4
}

main pre {
  @apply bg-base-100 rounded p-8 my-2
}

main li {
  @apply list-disc list-inside my-2
}

main li strong {
  @apply text-green-400
}

main li a {
  @apply underline text-gray-400
}

main table {
  @apply w-full border-collapse my-4;
}

main th, main td {
  @apply border px-4 py-2 border-neutral-600
}

main th {
  @apply font-semibold text-left;
}

</style>