<template>
    <div class="support">
        <div class="page-header page-header--sm" ref="pageHeaderSection">
            <div class="container">
                <div class="page-header-text">
                    <h1>Support</h1>
                    <p>Welcome to TMT Support! Custom-made services tailored for you.</p>
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
                            <span>Support</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageHeaderSection = ref(null)

onMounted(() => {
  pageHeaderSection.value.classList.add('is-loaded')
})

</script>
