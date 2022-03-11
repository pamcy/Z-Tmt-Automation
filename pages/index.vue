<template>
  <div>
      <Header />
      <div class="hero" ref="heroSection">
        <div class="container">
          <div class="hero-text">
            <h1>
              <span class="text-uppercase">Professional<br aria-hidden="true"> grade quality</span><br aria-hidden="true">
              <small>at a DIY-grade price</small>
            </h1>
            <p>With over seven million actuators produced annually, TMT Automation is a global leader in the field of linear actuators.We vows to bring to the market quality at an affordable price.</p>
            <NuxtLink to="/" class="btn btn-lg">
              Start Automating
              <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="possibility" ref="possibilitySection">
        <div class="door" :class="{ 'is-opened': videoActivated }">
          <div class="door-content">
            <div class="embed-responsive door-content__video">
              <div id="player" class="embed-responsive-item"></div>
            </div>
            <div class="door-content__text">
              <h2 class="text-uppercase">Opening you to a world of possibility.</h2>
              <p>Automate your home in ways that you never thought of before. At a touch of a button let our productsdo your work for you. Your time and effort should be spent doing things that matter to you. </p>
            </div>
          </div>
          <div class="door-left">
            <picture>
                <source srcset="/assets/images/door-left-mobile.png" media="(max-width: 750px)" />
                <img src="/assets/images/door-left-desktop.png" alt>
            </picture>
          </div>
          <div class="door-right">
            <picture>
                <source srcset="/assets/images/door-right-mobile.png" media="(max-width: 750px)" />
                <img src="/assets/images/door-right-desktop.png" alt>
            </picture>
          </div>
        </div>
      </div>
      <div class="showcase">
        <div class="showcase-situation d-none d-md-block"></div>
        <div class="showcase-product">
          <swiper :modules="swiperModules" :pagination="{ clickable: true }" autoplay loop>
            <swiper-slide>
              <div class="showcase-product-meta">
                <h3 class="showcase-product-meta__title">Terrier</h3>
                <span class="showcase-product-meta__spec">150/200</span>
              </div>
              <picture>
                <source srcset="/assets/images/product-1-mobile.jpg" media="(max-width: 1199px)" />
                <img src="/assets/images/product-1-desktop.jpg" alt>
              </picture>
              <NuxtLink to="/" class="btn btn--with-border">
                View Products
                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </NuxtLink>
            </swiper-slide>
            <swiper-slide>
              <div class="showcase-product-meta">
                <h3 class="showcase-product-meta__title">Mastiff</h3>
                <span class="showcase-product-meta__spec">300/400/400L</span>
              </div>
              <picture>
                <source srcset="/assets/images/product-2-mobile.jpg" media="(max-width: 1199px)" />
                <img src="/assets/images/product-2-desktop.jpg" alt>
              </picture>
              <NuxtLink to="/" class="btn btn--with-border">
                View Products
                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </NuxtLink>
            </swiper-slide>
            <swiper-slide>
              <div class="showcase-product-meta">
                <h3 class="showcase-product-meta__title">Mastiffls</h3>
                <span class="showcase-product-meta__spec">300LS/400LS/400LLS</span>
              </div>
              <picture>
                <source srcset="/assets/images/product-3-mobile.jpg" media="(max-width: 1199px)" />
                <img src="/assets/images/product-3-desktop.jpg" alt>
              </picture>
              <NuxtLink to="/" class="btn btn--with-border">
                View Products
                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.552h33.618M31.6 11.375l5.6-4.804-5.6-4.946" stroke="#EE7B45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </NuxtLink>
            </swiper-slide>
          </swiper>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSection = ref(null)
const possibilitySection = ref(null)
const video = ref(null)
const videoActivated = ref(false)

const swiperModules = [
  Navigation,
  Pagination,
  Autoplay,
  A11y
]

onMounted(() => {
  setDocHeight()

  window.addEventListener('orientationchange', setDocHeight);
  window.addEventListener('scroll', handleScroll);

  heroSection.value.classList.add('is-loaded')
});

function setDocHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};

function handleScroll(e) {
  if (window.innerHeight - possibilitySection.value.getBoundingClientRect().top >= possibilitySection.value.offsetHeight) {
    autoplayYoutubeVideo()
    videoActivated.value = true

    window.removeEventListener('scroll', handleScroll);
  }
}

function autoplayYoutubeVideo() {
  var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

  var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width: '100%',
      videoId: 'E3l1TUHwmM0',
      playerVars: { 'autoplay': 1, 'playsinline': 1, 'rel': 0, 'mute': 1, 'controls': 0 },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  onYouTubeIframeAPIReady()
}

</script>
