<template>
    <div class="warranty">
        <div class="page-header page-header-warranty page-header--image-only"></div>
        <main>
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/" title="Home">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/support" title="Support">Support</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>Warranty Info</span>
                        </li>
                    </ul>
                </nav>

                <h1 class="h2">Warranty Info</h1>

                <div class="warranty-content">
                    <div class="warranty-content-intro">
                        <b>TMT Automations will honor the obligations set in the warranty, with terms and conditions set forth below:</b>
                        <p>TMT Automations wicll cover charges resulting from defects in workmanship and material. TMT will, at its discretion, provide repairs and direct replacement for all needed parts.</p>
                    </div>
                    <ul class="warranty-list">
                        <li class="fade-in delay-1">
                            <h2 class="section-title">Product Registration</h2>
                            <p>We strong urge that the products be registered through the TMT Chow! App or through our website. New products or replacement parts should be registered within 90 days of purchase. If the product is not registered, then the warranty will be in effect starting from the date of purchase.</p>
                        </li>
                        <li class="fade-in delay-2">
                            <h2 class="section-title">How to File for a Claim</h2>
                            <p>In order to file for a claim under the warranty, you must:</p>
                            <div class="callout">
                                <div class="callout__list">
                                    <div class="callout__item">
                                        <b>1</b>
                                        <h3>Have the product serial number.</h3>
                                    </div>
                                    <div class="callout__item callout__item-plus">
                                        <span class="plus">&#43;</span>
                                    </div>
                                    <div class="callout__item">
                                        <b>2</b>
                                        <h3>Possess a copy of a dated receipt as proof of purchase.</h3>
                                    </div>
                                </div>
                            </div>
                            <p>We reserve the right to oblige by the warranty if you cannot provide the proof of purchase as specified above. To file a for a claim, you can contact our customer fill out our form online at <a href="https://www.tmtautomation.com">www.tmtautomation.com</a>, email customer support at <a href="mailto:support@tmtautomation.com">support@tmtautomation.com</a> or call our support line at a 000-000-0000. Provide your product serial number and a copy of the receipt as well as the problem that you are facing. We will investigate the problem and promptly send you replacement parts if necessary.</p>
                            <p>Before attempting to mailing in any defective parts, make sure that you have contacted customer support and filed for a claim. You will be given a Return Merchandise Authorization (RMA) number, as well as further instructions on the next steps. After receiving a RMA number, it should be clearly labelled on the outside of the return packaging.</p>
                        </li>
                        <li class="fade-in delay-3">
                            <h2 class="section-title">What this Warranty Covers</h2>
                            <p>To qualify for this warranty, your TMT product must be purchased from an authorized dealer or channel.</p>
                            <p>TMT Automation will cover any defects in material or workmanship of our products within the defined warranty term, provided proper installation and use have been followed. The manufacturer will, at its discretion, provide repair and replacements at no cost to the customer within the warranty term. TMT Automations will pay for shipping fees, equaling to United Parcel Service ground fees.</p>
                            <p>This limited warranty will NOT cover any damages or malfunctions from alterations, modifications, improper or unreasonable use or maintenance of our products and lightning, fire, power surges and other acts of nature.</p>
                            <p>To avoid voiding the warranty, do not make any unauthorized modifications and repairs..</p>
                        </li>
                        <li class="fade-in delay-4">
                            <h2 class="section-title">How Long Does the Warranty Last</h2>
                            <p>The warranty for the different parts is as defined below:</p>
                            <table class="d-lg-none">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Defined Warranty Term</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Motor</th>
                                        <td>Lifetime</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gear Box</th>
                                        <td>5 years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Other Components</th>
                                        <td>2 years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Accessories<span>Remotes and other sensors</span></th>
                                        <td>2 years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Replacement Parts</th>
                                        <td>2 years</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="d-none d-lg-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Motor</th>
                                        <th scope="col" style="white-space: nowrap">Gear Box</th>
                                        <th scope="col">Other Components</th>
                                        <th scope="col">Accessories<span>Remotes and other sensors</span></th>
                                        <th scope="col">Replacement Parts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Defined<br />Warranty<br />Term</th>
                                        <td>Lifetime</td>
                                        <td>5 years</td>
                                        <td>2 years</td>
                                        <td>2 years</td>
                                        <td>2 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li class="fade-in delay-5">
                            <h2 class="section-title">Ways to Extend Warranty</h2>
                            <p>You can extend your warranty through purchasing the extension options available on our website. To extend your warranty, you must purchase the extension before your original warranty expires.</p>
                        </li>
                        <li class="fade-in delay-6">
                            <h2 class="section-title">Limitations on Liability</h2>
                            <p>The maximum liability for any TMT Automations product under this limited liability will not exceed the actual purchase price of the product.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    window.addEventListener('scroll', fadeInWarrantyList)
})

onUnmounted(() => {
    window.removeEventListener('scroll', fadeInWarrantyList)
})

function fadeInWarrantyList() {
    var items = document.querySelectorAll('.warranty-list li')

    for (var i = 0; i < items.length; i++) {
        if (window.innerHeight - items[i].getBoundingClientRect().top >= items[i].offsetHeight / 3) {
            items[i].classList.add('is-revealed')
        }
    }
}
</script>
