<template>
    <div class="contact-us">
        <div class="page-header page-header--sm page-header-contact-us" ref="pageHeaderSection">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Contact Us</h1>
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
                            <span>Contact Us</span>
                        </li>
                    </ul>
                </nav>
                <form ref="contactUsForm" class="form contact-us-form" :class="{ 'is-revealed': contactUsFormRevealed }">
                    <b class="required">Required *</b>
                    <fieldset>
                        <legend class="delay-1">Send Us a Message</legend>
                        <div class="form-row">
                            <div class="form-group form-group-half contact-us-location">
                                <img src="/images/flag-taiwan.jpg" width="60" height="45" alt="" aria-hidden="true">
                                <div class="contact-us-location-meta">
                                    <div class="contact-us-location-meta__title">Taiwan</div>
                                    <div class="contact-us-location-meta__addr">
                                        14F, No.14, Ln.15, Sec. 6, Xinyi Dist.,Taipei City 11086, Taiwan (R.O.C.)<br>
                                        TEL: +886 2-2219-0785<br>
                                        <NuxtLink to="mailto=sales@tmt-automation.com" target="_blank">sales@tmt-automation.com</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-group-half contact-us-location">
                                <img src="/images/flag-australia.jpg" width="60" height="45" alt="" aria-hidden="true">
                                <div class="contact-us-location-meta">
                                    <div class="contact-us-location-meta__title">Australia</div>
                                    <div class="contact-us-location-meta__addr">
                                        15 Berry Street, Clyde, NSW, 2142<br>
                                        TEL:0423-225-069<br>
                                        <NuxtLink to="mailto=sale@tmt-automation.com" target="_blank">sale@tmt-automation.com</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group form-group-half delay-2">
                                <label for="name">Name<span class="required">*</span></label>
                                <input type="text" id="name" placeholder="Paul Smith" required>
                            </div>
                            <div class="form-group form-group-half delay-3">
                                <label for="email">Email<span class="required">*</span></label>
                                <input type="email" id="email" placeholder="mail@example.com" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group form-group-half delay-2">
                                <label for="country">Country<span class="required">*</span></label>
                                <input type="text" id="country" placeholder="Enter your country" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group delay-2">
                                <label for="subject">Subject<span class="required">*</span></label>
                                <input type="text" id="subject" placeholder="Enter your subject" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group delay-5">
                                <label for="message">Message<span class="required">*</span></label>
                                <textarea id="message" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group delay-5">
                                <label for="message">Verification Code<span class="required">*</span></label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="text-center">
                        <button type="submit" class="btn btn--fill">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const pageHeaderSection = ref(null)

onMounted(() => {
    setTimeout(() => {
        if (pageHeaderSection.value) {
            pageHeaderSection.value.classList.add('is-loaded')
        }
    }, 100);
})


</script>
