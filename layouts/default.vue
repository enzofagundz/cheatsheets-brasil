<template>
  <div class="bg-base-300">
    <div>
      <TheNavbar />
      <main class="flex flex-col mt-12 items-center">
        <slot />
      </main>
      <!-- <div class="mt-auto">
        <TheFooter />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>