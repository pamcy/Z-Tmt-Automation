<template>
  <div class="warranty">
    <div class="page-header page-header-warranty page-header--image-only"></div>
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
              <span>Warranty Info</span>
            </li>
          </ul>
        </nav>

        <h2>Warranty Info</h2>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {})
</script>
