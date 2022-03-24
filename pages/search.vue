<template>
    <div class="search">
        <div class="page-header page-header-search is-loaded">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Search</h1>
                </div>
            </div>
        </div>
        <main>
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>Search</span>
                        </li>
                    </ul>
                </nav>

                <h2>Search Result</h2>

                <SearchBox :searchValue="searchValue" />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SearchBox from '../components/SearchBox.vue'

const searchValue = ref('gate')

onMounted(() => {})

onUnmounted(() => {})
</script>
