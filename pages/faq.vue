<template>
    <div class="faq">
        <div class="page-header page-header-faq page-header--image-only"></div>
        <main>
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/support">Support</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>FAQ</span>
                        </li>
                    </ul>
                </nav>

                <h1 class="h2">Frequently Asked Question</h1>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})

onUnmounted(() => {})
</script>
