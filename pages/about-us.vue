<template>
    <div>
        <div class="about">
            <div class="page-header page-header--xs">
                <div class="container-sm">
                    <div class="page-header-text">
                        <h1>About us</h1>
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
                            <li>
                                <span>Contact</span>
                            </li>
                            <li class="is-active">
                                <span>About us</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {})
</script>
