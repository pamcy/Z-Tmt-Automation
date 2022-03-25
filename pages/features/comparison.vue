<template>
    <div class="comparison">
        <div class="page-header page-header-comparison" ref="pageHeaderSection">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Comparison with Other Brands</h1>
                    <p>How do TＭT products stack up against the competition? Find out here.</p>
                </div>
            </div>
        </div>

        <main ref="introSection">
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <span>Features</span>
                        </li>
                        <li class="is-active">
                            <span>Comparison with Other Brands</span>
                        </li>
                    </ul>
                </nav>

                <h2>TMT Automation’s Advantage</h2>
                <p class="">Don’t settle for plastic components and low output motors. TMT Automation uses the highest quality materials to ensure a build that can weather the most rugged of uses. Not only endeavors to deliver outstanding quality, but TMT also strives for environmentally sustainability.</p>
                <p class="">Below is a table comparing the swing gate openers of the same classes offered by some of the other leading DIY gate opener brands. You will find that TMT offers quality beyond this class.<br />*Some information regarding the competitors are not available.</p>
                <img src="/images/comparison-table.png" alt />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {})
</script>
