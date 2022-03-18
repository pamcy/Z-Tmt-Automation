<template>
    <div>
        <div class="page-header page-header-product-detail page-header--image-only"></div>
        <main class="product-detail">
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/products">Gate Openers</NuxtLink>
                        </li>
                        <li class="is-active">
                            <span>MASTIFF</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="product-meta">
                <div class="product-meta__images">
                    <swiper class="product-slider" ref="productSlider" :modules="swiperModules" :rewind="true" effect="fade" navigation @slideChange="onProductSliderChange">
                        <swiper-slide>
                            <picture>
                                <source srcset="/images/product-detail-1-mobile.jpg" media="(max-width: 989px)" />
                                <img src="/images/product-detail-1-desktop.jpg" alt>
                            </picture>
                        </swiper-slide>
                        <swiper-slide>
                            <picture>
                                <source srcset="/images/product-detail-2-mobile.jpg" media="(max-width: 989px)" />
                                <img src="/images/product-detail-2-desktop.jpg" alt>
                            </picture>
                        </swiper-slide>
                    </swiper>
                    <div class="product-slider-counter">
                        <span class="product-slider-counter__current">{{ productSlide.activeIndex }}</span>
                        <span class="product-slider-counter__total">2</span>
                    </div>
                </div>
                <div class="product-meta__detail">
                    <h1 class="product-meta__detail__title h2">MASTIFF</h1>
                    <div class="product-meta__detail__model h3">300/400/400L</div>
                    <Accordion class="product-meta__detail__features">
                        <template v-slot:title>Features</template>
                        <template v-slot:content>
                            <ul class="list--dots" ref="productMetaFeaturesList">
                                <li>Perfect for swing gates weighing up to 1000 pounds or 20 feet long</li>
                                <li>Multiple redundant safety measures, including limit switches, Hall sensors and optional photosensors, to prevent entrapment and other dangers</li>
                                <li>Sleek style to blend in with residential gates</li>
                            </ul>
                        </template>
                    </Accordion>
                    <div class="text-center">
                        <a href="" target="_blank" class="btn btn--with-border btn-buy">Buy on Amazon</a>
                    </div>
                    <ul class="product-meta__detail__links list-styless">
                        <li>
                            <a href="#">
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20.469" r="19" fill="#FBD9CA" stroke="#EE7B45" stroke-width="2"/><path d="M20 13.158v18.31s-6.412-2.384-10-1.769V11.696s6.718-1.077 10 1.462zm0 0v18.31s6.412-2.384 10-1.769V11.696s-6.718-1.077-10 1.462z" fill="#fff" stroke="#EE7B45" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span title="Manual">Manual</span>
                            </a>
                        </li>
                        <li>
                            <a href="" title="INvstallation Videos">
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 20.469c0 10.493-8.507 19-19 19s-19-8.507-19-19c0-10.494 8.507-19 19-19s19 8.506 19 19z" fill="#FBD9CA" stroke="#EE7B45" stroke-width="2"/><path d="M27.707 27.814H12.453c-.8 0-1.453-.653-1.453-1.452V15.175c0-.799.654-1.452 1.453-1.452h15.181c.8 0 1.453.653 1.453 1.452v11.187c.073.799-.581 1.452-1.38 1.452z" fill="#fff" stroke="#EE7B45" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m23.202 20.769-4.358-2.542v5.012l4.358-2.47z" fill="#EE7B45" stroke="#EE7B45" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span title="Installation Videos">Installation<br aria-hidden="true" class="d-lg-none"> Videos</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container-sm">
                <div class="product-spec">
                    <Accordion>
                        <template v-slot:title>Sleek Design</template>
                        <template v-slot:content>
                            <table class="d-md-none">
                                <thead>
                                    <th></th>
                                    <th scope="col">MASTIFF 300</th>
                                    <th scope="col">MASTIFF 400</th>
                                    <th scope="col">MASTIFF 400L</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Max Gate Weight</th>
                                        <td>3M</td>
                                        <td>3.5M</td>
                                        <td>4.5M</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Minimum Gate Length</th>
                                        <td>50ft</td>
                                        <td>100ft</td>
                                        <td>150ft</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Max Gate Weight</th>
                                        <td>300kg</td>
                                        <td>350kg</td>
                                        <td>450kg</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Maximum Gate Opening</th>
                                        <td>1600lbs</td>
                                        <td>2000lbs</td>
                                        <td>2400lbs</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="d-none d-md-table">
                                <thead>
                                    <th></th>
                                    <th scope="col">Max Gate Weight</th>
                                    <th scope="col">Minimum Gate Length</th>
                                    <th scope="col">Max Gate Weight</th>
                                    <th scope="col">Maximum Gate Opening</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">MASTIFF 300</th>
                                        <td>3M</td>
                                        <td>50ft</td>
                                        <td>300kg</td>
                                        <td>1600lbs</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MASTIFF 400</th>
                                        <td>3.5M</td>
                                        <td>100ft</td>
                                        <td>350kg</td>
                                        <td>2000lbs</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MASTIFF 400L</th>
                                        <td>4.5</td>
                                        <td>150ft</td>
                                        <td>450kg</td>
                                        <td>2400lbs</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Perfect for swing gates weighing up to 1000 pounds or 20 feet long</p>
                            <p>Multiple redundant safety measures, including limit switches, Hall sensors and optional photosensors, to prevent entrapment and other dangers</p>
                            <p>Sleek style to blend in with residential gates</p>
                        </template>
                    </Accordion>
                    <Accordion>
                        <template v-slot:title>Features</template>
                        <template v-slot:content>
                            <ul class="list--dots">
                                <li>Perfect for swing gates weighing up to 1000 pounds or 20 feet long</li>
                                <li>Multiple redundant safety measures, including limit switches, Hall sensors and optional photosensors, to prevent entrapment and other dangers</li>
                                <li>Sleek style to blend in with residential gates</li>
                                <li>Specially designed brackets to fit rectangular and circular posts</li>
                                <li>Specially designed tubular brackets to secure to tubular gates</li>
                                <li>Aluminum alloy shell capable of withstanding the harshest environments and uses</li>
                                <li>High performance circuit designed to support solar power, AC power, battery power or all three simultaneously</li>
                                <li>Advanced power options to enable off-grid use, or offer redundant backup systems to ensure that you will always have access to your property</li>
                                <li>Easy installation that forgoes the use of wielding or high voltage electricity</li>
                                <li>Includes 110 V AC transformer, control box with control board, battery box with harnesses (battery not included), one PW 640 linear actuator operator, two PR7 remote controller, installation and owner’s manual and all necessary mounting hardware</li>
                            </ul>
                        </template>
                    </Accordion>
                    <Accordion>
                        <template v-slot:title>Easy Installation</template>
                        <template v-slot:content>
                        <img src="/images/product-info-easy.jpg" alt="">
                            <ul class="list--dots">
                                <li>Use of wielding or high voltage electrical connection is not required.</li>
                                <li>Installations can be completed with simple tools available at most homes.</li>
                                <li>Thorough instructional manuals and step-by-step installation videos are available to assist you with any issues that you may run into.</li>
                                <li>The entire installation can be completed in under one hour.</li>
                            </ul>
                        </template>
                    </Accordion>
                    <Accordion>
                        <template v-slot:title>Diverse Applications</template>
                        <template v-slot:content>
                            <p>PW 640 can be used on a variety of different gates: tubular, chain link, wood, steel, vinyl and others. They can also be used in a multitude of settings from <a href="">driveway gates</a> to residential courtyards to farms and ranches.</p>
                            <p>Our openers support both push-to-open and pull-to-open applications and included in the kit are mounting brackets that will help you properly install our openers in all kinds of applications.</p>
                        </template>
                    </Accordion>
                    <Accordion>
                        <template v-slot:title>Quality and Service Assurance</template>
                        <template v-slot:content>
                            <ul class="list--dots">
                                <li>With over two decades of experience manufacturing motors and actuators, we believe in our products.</li>
                                <li>Our motors are silent, yet powerful. Our automatic gate openers come with a limited lifetime warranty. </li>
                                <li>Should you have any questions or concerns, the TMT teams is always ready to help out and offer technical support.</li>
                                <li>Our products have gone through over 10 000 working cycles to ensure optimal quality.</li>
                            </ul>
                        </template>
                    </Accordion>
                    <Accordion>
                        <template v-slot:title>Kit content</template>
                        <template v-slot:content>
                            <img src="/images/product-kit.jpg" alt="">
                            <p style="font-size: 20px;">One 110 V AC transformer, control box with control board, battery box with harnesses (battery not included), one PW 640 <a href>automatic gate operator</a>, two PR7 <a href>gate opener remote</a> controller, two 10W polycrystalline <a href>solar panels</a>, installation and owner’s manual and all necessary mounting hardware</p>
                        </template>
                    </Accordion>
                </div>
                <div class="product-related">
                    <h3 class="product-related__title">Inspired by your browsing history</h3>
                    <ul class="product-related__list list-styless">
                        <li>
                            <div class="product-related__list__image">
                                <img src="/images/product-1-desktop.jpg" alt="">
                            </div>
                            <h4 class="product-related__list__title">TERRIER</h4>
                            <span class="product-related__list__model">50/200</span>
                        </li>
                        <li>
                            <div class="product-related__list__image">
                                <img src="/images/product-2-desktop.jpg" alt="">
                            </div>
                            <h4 class="product-related__list__title">MASTIFF</h4>
                            <span class="product-related__list__model">300/400/400L</span>
                        </li>
                        <li>
                            <div class="product-related__list__image">
                                <img src="/images/product-3-desktop.jpg" alt="">
                            </div>
                            <h4 class="product-related__list__title">MASTIFF</h4>
                            <span class="product-related__list__model">300LS/400LS/400LLS</span>
                        </li>
                        <li>
                            <div class="product-related__list__image">
                                <img src="/images/product-1-desktop.jpg" alt="">
                            </div>
                            <h4 class="product-related__list__title">PAPILLON</h4>
                            <span class="product-related__list__model">50/200</span>
                        </li>
                    </ul>
                </div>
                <div class="product-related">
                    <h3 class="product-related__title">Related Items</h3>
                    <ul class="product-related__list list-styless">
                        <li>
                            <div class="product-related__list__image">
                                <img src="/images/product-1-desktop.jpg" alt="">
                            </div>
                            <h4 class="product-related__list__title">TERRIER</h4>
                            <span class="product-related__list__model">50/200</span>
                        </li>
                        <li>
                            <div class="product-related__list__image">
                                <img src="/images/product-2-desktop.jpg" alt="">
                            </div>
                            <h4 class="product-related__list__title">MASTIFF</h4>
                            <span class="product-related__list__model">300/400/400L</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { Navigation, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import Accordion from "../components/Accordion";

const swiperModules = [
  Navigation,
  EffectFade,
  A11y
]

const productSlider = ref(null)
const productSlide = reactive({ activeIndex: 1 })

const productMetaFeaturesList = ref(null)

onMounted(() => {
    setTimeout(() => {
        productMetaFeaturesList.value.classList.add('is-revealed')
    }, 1000);

    setTimeout(() => {
        prepareFadeInLists()
    }, 100);

    window.addEventListener('scroll', fadeInLists)
})

function onProductSliderChange() {
    var activeIndex = productSlider.value.$el.swiper.activeIndex
    productSlide.activeIndex = activeIndex + 1
}

function prepareFadeInLists() {
  var listItems = document.querySelectorAll('.list--dots li')

  for (var i = 0; i < listItems.length; i++) {
    const nodes = Array.prototype.slice.call( listItems[i].parentNode.childNodes )
    const index = nodes.indexOf(listItems[i])

    listItems[i].classList.add('fade-in')
    listItems[i].style.transitionDelay = (index * 200) + 'ms'
  }
}

function fadeInLists() {
    var lists = document.querySelectorAll('.list--dots');

    for (var i = 0; i < lists.length; i++) {
        if (window.innerHeight - lists[i].getBoundingClientRect().top >= lists[i].offsetHeight / 2) {
            lists[i].classList.add('is-revealed')
        }
    }
}
</script>
