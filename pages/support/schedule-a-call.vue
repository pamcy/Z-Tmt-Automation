<template>
    <div class="support">
         <div class="page-header page-header--sm" ref="pageHeaderSection">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Schedule a Call</h1>
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
                            <span>Schedule a Call</span>
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
