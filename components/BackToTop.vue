<template>
    <Transition>
        <button class="btn btn btn--small btn--icon-only btn-back-to-top" ref="backToTop" v-if="upscroll">
            <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m20 9.33-9.53-8-9.47 8" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/></svg>
            TOP
        </button>
    </Transition>
</template>

<script setup>
import { ref } from 'vue'

const backToTop = ref(null)
const upscroll = ref(false)

onMounted(() => {
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop){
            upscroll.value = false
        } else {
            upscroll.value = true
        }

        lastScrollTop = st <= 0 ? 0 : st;
    })
});


</script>
