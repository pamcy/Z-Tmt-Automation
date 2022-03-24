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

                    <h2>Our Vision</h2>
                    <strong>To provide the best smart solution for the users.</strong>
                    <p>TMT started as a small company that manufactured motors and actuator for some of the biggest names in the industry. Over the past decades, over 100 million units of our products have been sold. Throughout the years, our manufacturing and design skills have been honed to surpass the international standards and become a leader in the gate automation industry. However, our brand remained relatively unknown to the public as our products were branded through the bigger names. Now, TMT has decided that we want our products to be available to the public, no longer satisfied with just manufacturing solutions for other brands.</p>
                    <p>Producing over seven million units per year, TMT has its own in-house development and production teams. With over seven production facilities around the world, TMT’s can guarantee that you have the best products. Each item is rigorously inspected and tested; our quality assurance will exceed even the most scrupulous of standards. Our refined products serve to bring you, our esteemed customers, the best experience possible. Just like us, you have worked hard to be where you are, and that’s why you deserve the very best.</p>

                    <ul class="info-cards">
                        <li class="card card-data">
                            <em>90% +</em>
                            <span>Key Components<br /> made in-house</span>
                        </li>
                        <li class="card card-data">
                            <em>2005</em>
                            <span>Founded in<br /> Taiwan</span>
                        </li>
                        <li class="card card-data">
                            <em>2,000 +</em>
                            <span>Employees for<br /> manufacture</span>
                        </li>
                        <li class="card card-data">
                            <em>14 +</em>
                            <span>Over 14 Subsidiary<br /> in our Organization</span>
                        </li>
                        <li class="card">
                            <span>ISO 9001 Certified for Outstanding Quality Management</span>
                        </li>
                        <li class="card">
                            <span>Products Trusted in Medical Applications</span>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {})
</script>
