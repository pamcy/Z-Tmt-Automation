<template>
    <div class="product-registration">
         <div class="page-header page-header-product-registration page-header--image-only">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Product Registration</h1>
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
                            <NuxtLink to="/support">Support</NuxtLink>
                            <span></span>
                        </li>
                         <li class="is-active">
                            <span>Product Registration</span>
                        </li>
                    </ul>
                </nav>
                <div ref="intro" class="intro">
                    <h1 class="h2 fade-in delay-1">Register your product</h1>
                    <p class="fade-in delay-2">When you register your product, you will be given a free six-month extension on your warranty. You can register your product here on this form or through the TMT Chow! App.</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const intro = ref(null)

onMounted(() => {
    setTimeout(() => {
        intro.value.classList.add('is-revealed')
    }, 400);
})

</script>
