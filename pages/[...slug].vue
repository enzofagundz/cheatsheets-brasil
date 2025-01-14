<script setup>

</script>

<template>
  <div class="container mx-4 px-4 py-8">
    <ContentDoc />
  </div>
</template>

<style lang="postcss">
.container ul {
  @apply grid grid-cols-3 gap-4 bg-base-100 p-4 shadow-xl rounded-md mb-4 col-span-3
}

.container > div {
  @apply grid grid-cols-3 gap-4 items-center
}

main h1 {
  @apply text-3xl font-bold my-8 col-span-3
}

main h2 {
  @apply text-2xl font-bold my-6 col-span-3
}

main h3 {
  @apply text-xl font-bold my-4 col-span-3
}

main h4 {
  @apply text-lg font-bold my-4 col-span-3
}

main p {
  @apply col-span-3
}

main pre {
  @apply bg-base-100 rounded p-8 my-2 whitespace-pre-wrap
}

main li {
  @apply my-2
}

main li strong {
  @apply text-primary
}

main li a::before {
  content: '#';
  @apply text-primary px-1 mr-1 text-xl;
}

main li a {
  @apply text-gray-400;
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