<template>
    <form action="" class="search-box">
        <div class="input-group">
            <input type="search" v-model="searchValue" placeholder="Type keyword" />
            <button type="submit" class="btn btn-styless">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="m25.922 24.131-8.44-8.44A9.662 9.662 0 0 0 19.5 9.75a9.692 9.692 0 0 0-2.857-6.893A9.678 9.678 0 0 0 9.75 0a9.692 9.692 0 0 0-6.893 2.857A9.673 9.673 0 0 0 0 9.75a9.691 9.691 0 0 0 2.857 6.893A9.672 9.672 0 0 0 9.75 19.5a9.67 9.67 0 0 0 5.938-2.015l8.44 8.437a.267.267 0 0 0 .377 0l1.417-1.414a.267.267 0 0 0 0-.377zm-11.024-9.233A7.24 7.24 0 0 1 9.75 17.03a7.24 7.24 0 0 1-5.148-2.132A7.24 7.24 0 0 1 2.47 9.75c0-1.944.757-3.773 2.132-5.148A7.24 7.24 0 0 1 9.75 2.47c1.944 0 3.773.754 5.148 2.132A7.24 7.24 0 0 1 17.03 9.75a7.235 7.235 0 0 1-2.132 5.148z" fill="#EE7B45" />
                </svg>
            </button>
        </div>
    </form>
</template>

<script setup>
const { searchValue } = defineProps(['searchValue'])
</script>
