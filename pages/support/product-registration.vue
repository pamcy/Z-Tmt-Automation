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
            </div>
            <div class="container">
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
})

</script>
