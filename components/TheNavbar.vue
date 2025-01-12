<template>
    <div class="navbar">
        <div class="flex-1">
            <NuxtLink :to="{ name: 'index' }" class="btn btn-ghost text-xl">CheatSheets Brasil</NuxtLink>
        </div>
        <div class="flex-none gap-2">
            <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
            </div>
        </div>
    </div>
</template>