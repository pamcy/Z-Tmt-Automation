<template>
    <header class="header">
        <div class="container">
            <NuxtLink to="/">
                <svg width="184.3" height="30" viewBox="0 0 246 41" fill="none" xmlns="http://www.w3.org/2000/svg" title="TMT Automation Inc." class="header-logo"><path d="M71.172 5.062h3.193c.297 0 .456.159.456.487v12.376a.401.401 0 0 0 .266.43c.058.02.12.026.18.018h3.063a.395.395 0 0 0 .447-.448V5.549c0-.328.158-.487.456-.487h3.142a.414.414 0 0 0 .444-.273.419.419 0 0 0 .022-.185V1.457A.41.41 0 0 0 82.425 1H71.172a.395.395 0 0 0-.442.272.4.4 0 0 0-.014.186v3.147a.408.408 0 0 0 .456.458zm35.176 0h3.143c.307 0 .456.159.456.487v12.376a.395.395 0 0 0 .446.448h3.153a.392.392 0 0 0 .355-.099.405.405 0 0 0 .121-.349V5.549c0-.328.158-.487.456-.487h3.152a.406.406 0 0 0 .457-.458V1.457a.413.413 0 0 0-.273-.44.406.406 0 0 0-.184-.018h-11.282a.395.395 0 0 0-.442.272.395.395 0 0 0-.014.186v3.147a.412.412 0 0 0 .116.342.403.403 0 0 0 .34.116zM88.245 17.926V5.809a.66.66 0 0 1 .428-.713.652.652 0 0 1 .295-.034h2.647c.486 0 .724.23.724.707v12.157a.411.411 0 0 0 .273.44c.059.02.121.026.183.018h3.143a.394.394 0 0 0 .442-.271.4.4 0 0 0 .014-.187V5.769c0-.478.238-.707.724-.707h2.647a.652.652 0 0 1 .698.45c.031.096.04.198.026.297v12.117c0 .309.148.458.485.458h3.133a.394.394 0 0 0 .429-.268.382.382 0 0 0 .017-.18V5.799a4.63 4.63 0 0 0-1.397-3.385A4.697 4.697 0 0 0 99.775 1h-2.608a4.783 4.783 0 0 0-2.37.638.85.85 0 0 1-.376.1.988.988 0 0 1-.396-.1A4.694 4.694 0 0 0 91.645 1h-2.627a4.603 4.603 0 0 0-3.38 1.414 4.601 4.601 0 0 0-1.36 3.386v12.127a.4.4 0 0 0 .266.43c.058.02.12.026.18.018h3.123c.268.01.397-.14.397-.448zm52.069 5.664h-2.618a4.83 4.83 0 0 0-2.369.637.928.928 0 0 1-.387.1.985.985 0 0 1-.396-.1 4.805 4.805 0 0 0-2.36-.637h-2.627a4.62 4.62 0 0 0-3.381 1.414 4.602 4.602 0 0 0-1.408 3.385v12.137a.41.41 0 0 0 .017.18.407.407 0 0 0 .249.25c.058.02.12.026.18.018h3.123c.318 0 .486-.15.486-.458V28.399c0-.498.238-.747.714-.747h2.647a.632.632 0 0 1 .696.425.643.643 0 0 1 .028.292v12.147a.412.412 0 0 0 .115.342.406.406 0 0 0 .341.116h3.153a.39.39 0 0 0 .338-.116.405.405 0 0 0 .108-.342V28.369a.63.63 0 0 1 .183-.54.629.629 0 0 1 .54-.177h2.648a.655.655 0 0 1 .723.747v12.117c0 .308.159.458.486.458h3.113a.384.384 0 0 0 .338-.109.39.39 0 0 0 .108-.34V28.39a4.625 4.625 0 0 0-1.398-3.385 4.686 4.686 0 0 0-3.39-1.414zm-21.703 0h-2.607a4.62 4.62 0 0 0-3.391 1.414 4.613 4.613 0 0 0-1.417 3.385v7.786a4.843 4.843 0 0 0 1.418 3.395 4.8 4.8 0 0 0 3.39 1.404h2.588c1.27 0 2.488-.505 3.389-1.404a4.84 4.84 0 0 0 1.419-3.395v-7.786a4.613 4.613 0 0 0-1.418-3.385 4.63 4.63 0 0 0-3.371-1.414zm.754 12.585a.676.676 0 0 1-.451.72.664.664 0 0 1-.303.026h-2.607a.66.66 0 0 1-.713-.446.68.68 0 0 1-.031-.3v-7.806c0-.478.248-.717.744-.717h2.598c.505 0 .753.24.753.717l.01 7.806zm52.348-12.585H160.46a.403.403 0 0 0-.437.274.413.413 0 0 0-.019.184v3.147a.413.413 0 0 0 .273.44c.059.02.122.026.183.017h3.133c.298 0 .447.16.447.488v12.386a.394.394 0 0 0 .272.434c.06.02.122.024.184.014h3.142a.398.398 0 0 0 .439-.265.394.394 0 0 0 .017-.183V28.14c0-.328.149-.488.456-.488h3.143a.404.404 0 0 0 .438-.273.412.412 0 0 0 .018-.184v-3.147a.403.403 0 0 0-.109-.333.407.407 0 0 0-.327-.125zm-62.262 0H98.159a.394.394 0 0 0-.432.275.4.4 0 0 0-.014.184v3.146a.4.4 0 0 0 .446.458h3.153c.297 0 .456.16.456.488v12.385a.395.395 0 0 0 .446.448h3.153a.396.396 0 0 0 .446-.448V28.141c0-.329.149-.488.456-.488h3.153a.401.401 0 0 0 .34-.116.41.41 0 0 0 .116-.342v-3.146a.4.4 0 0 0-.252-.43.408.408 0 0 0-.175-.028zm67.644 0h-3.122a.406.406 0 0 0-.457.459v16.477a.409.409 0 0 0 .116.34.394.394 0 0 0 .341.108h3.122c.318 0 .476-.15.476-.448V24.049a.414.414 0 0 0-.126-.347.413.413 0 0 0-.35-.111zm37.744 0h-3.123a.396.396 0 0 0-.446.459v16.477a.396.396 0 0 0 .446.448h3.123c.317 0 .476-.15.476-.448V24.049a.428.428 0 0 0-.126-.347.42.42 0 0 0-.35-.111zm-28.524 0h-2.597a4.621 4.621 0 0 0-3.381 1.414 4.577 4.577 0 0 0-1.418 3.385v7.786a4.84 4.84 0 0 0 1.416 3.391 4.799 4.799 0 0 0 3.383 1.408h2.597a4.798 4.798 0 0 0 3.39-1.404 4.84 4.84 0 0 0 1.419-3.395v-7.786a4.613 4.613 0 0 0-1.418-3.385 4.654 4.654 0 0 0-3.391-1.414zm.754 12.585a.665.665 0 0 1-.192.561.667.667 0 0 1-.562.185h-2.597a.66.66 0 0 1-.713-.446.667.667 0 0 1-.031-.3v-7.806c0-.478.248-.717.744-.717h2.597c.506 0 .754.24.754.717v7.806zm16.181-11.19a4.624 4.624 0 0 0-3.401-1.394h-2.548a4.725 4.725 0 0 0-3.403 1.386 4.756 4.756 0 0 0-1.395 3.412v12.137a.394.394 0 0 0 .273.435.396.396 0 0 0 .183.013h3.143a.403.403 0 0 0 .34-.116.41.41 0 0 0 .116-.342V28.4a.661.661 0 0 1 .442-.721.65.65 0 0 1 .301-.026h2.598a.65.65 0 0 1 .559.185.66.66 0 0 1 .184.561v12.117a.412.412 0 0 0 .116.342.406.406 0 0 0 .34.116h3.143a.395.395 0 0 0 .446-.448V28.39a4.656 4.656 0 0 0-1.437-3.405zm24.22.009a4.654 4.654 0 0 0-3.401-1.403h-2.587a4.635 4.635 0 0 0-3.411 1.403 4.625 4.625 0 0 0-1.398 3.405v12.127a.408.408 0 0 0 .456.458h3.153a.397.397 0 0 0 .446-.458V28.4a.665.665 0 0 1 .192-.56.667.667 0 0 1 .562-.186h2.587a.665.665 0 0 1 .754.747v12.126a.412.412 0 0 0 .115.342.414.414 0 0 0 .341.116h3.143a.403.403 0 0 0 .34-.116.41.41 0 0 0 .116-.342V28.4a4.627 4.627 0 0 0-1.408-3.405zM95.968 23.59h-3.143a.397.397 0 0 0-.456.458v12.117a.66.66 0 0 1-.442.72.652.652 0 0 1-.302.027h-2.597a.661.661 0 0 1-.723-.444.67.67 0 0 1-.03-.303V24.048a.4.4 0 0 0-.264-.44.394.394 0 0 0-.183-.018h-3.153a.396.396 0 0 0-.446.448v12.137a4.797 4.797 0 0 0 1.4 3.406 4.757 4.757 0 0 0 3.399 1.393h2.597a4.674 4.674 0 0 0 3.41-1.394 4.651 4.651 0 0 0 1.389-3.405V24.038a.398.398 0 0 0-.456-.448zm-17.855 0h-2.588a4.682 4.682 0 0 0-3.42 1.395 4.67 4.67 0 0 0-1.388 3.405v12.136a.398.398 0 0 0 .456.448h3.192a.396.396 0 0 0 .456-.458v-3.604s0-.378.407-.378h3.41s.278 0 .278.328v3.654a.4.4 0 0 0 .446.458h3.153a.395.395 0 0 0 .446-.448V28.389a4.797 4.797 0 0 0-1.401-3.406 4.755 4.755 0 0 0-3.398-1.392h-.05zm.753 8.443a.398.398 0 0 1-.396.438h-3.203a.484.484 0 0 1-.49-.367.489.489 0 0 1-.005-.22V28.4a.67.67 0 0 1 .45-.72.661.661 0 0 1 .303-.026h2.588a.661.661 0 0 1 .723.443.67.67 0 0 1 .03.303v3.634zm74.992-8.443h-2.598a4.672 4.672 0 0 0-3.41 1.394 4.633 4.633 0 0 0-1.388 3.405v12.137a.393.393 0 0 0 .446.448h3.152a.395.395 0 0 0 .433-.274.41.41 0 0 0 .014-.184v-3.604s-.05-.379.406-.379h3.42s.268 0 .268.33v3.653a.412.412 0 0 0 .116.342.402.402 0 0 0 .34.116h3.143a.394.394 0 0 0 .439-.264.394.394 0 0 0 .017-.184V28.389a4.798 4.798 0 0 0-1.401-3.406 4.746 4.746 0 0 0-3.397-1.393zm.743 8.443a.395.395 0 0 1-.094.308.395.395 0 0 1-.293.13h-3.202a.484.484 0 0 1-.5-.364.478.478 0 0 1-.005-.223v-3.485a.664.664 0 0 1 .753-.746h2.598a.65.65 0 0 1 .717.444.661.661 0 0 1 .026.302v3.634zM44.86 15.436a6.683 6.683 0 0 0-5.007-2.26h-3.56a6.712 6.712 0 0 0-3.48.995.514.514 0 0 1-.465 0 6.73 6.73 0 0 0-3.51-.995H25.29a6.63 6.63 0 0 0-5.017 2.26 7.724 7.724 0 0 0-2.052 5.376V39.73a1.15 1.15 0 0 0 .714 1.164c.151.06.313.088.476.08h4.223a1.143 1.143 0 0 0 .91-.337 1.156 1.156 0 0 0 .33-.917V20.802c0-.517.158-.517.386-.517h3.59c.267 0 .396 0 .396.468v18.916a1.141 1.141 0 0 0 .305.904 1.13 1.13 0 0 0 .884.35h4.274a1.134 1.134 0 0 0 .887-.35 1.145 1.145 0 0 0 .312-.904V20.753c0-.448.13-.468.387-.468h3.589c.228 0 .396 0 .396.517V39.72a1.16 1.16 0 0 0 .74 1.183c.157.06.323.084.49.071h4.223a1.135 1.135 0 0 0 1.13-.763 1.15 1.15 0 0 0 .06-.481V20.812a7.684 7.684 0 0 0-2.062-5.376z" fill="#fff"/><path d="M48.49 12.082a1.11 1.11 0 0 1 .822 1.204V39.83c0 .588.278 1.135.823 1.135h5.77c.754 0 .823-.577.823-1.165V14.94c0-.647.278-.876.823-.717l5.76 1.364c.565.17.823-.06.823-.657V9.214a1.068 1.068 0 0 0-.823-1.145L33.4 1.08a4.542 4.542 0 0 0-1.666 0l-29.9 6.99A1.07 1.07 0 0 0 1 9.214v5.665c0 .598.268.827.833.657l5.75-1.364c.556-.159.833.07.833.717v24.94c0 .588.06 1.165.823 1.165h5.76c.555 0 .823-.547.823-1.135V13.286a1.118 1.118 0 0 1 .823-1.204l15.09-3.545c.55-.1 1.114-.1 1.665 0l15.09 3.544zm189.46 17.412V28.14c0-.458-.228-.677-.714-.677h-2.469c-.475 0-.713.219-.713.677v8.254a.644.644 0 0 0 .18.535.631.631 0 0 0 .533.181h2.469a.621.621 0 0 0 .691-.425.64.64 0 0 0 .023-.291V35.03a.257.257 0 0 1 .065-.193.258.258 0 0 1 .183-.086h3.4c.228 0 .218.288.218.288v1.364a4.62 4.62 0 0 1-1.354 3.23 4.582 4.582 0 0 1-3.226 1.34h-2.469a4.426 4.426 0 0 1-3.232-1.344 4.405 4.405 0 0 1-1.338-3.225V28.16a4.414 4.414 0 0 1 1.358-3.266 4.436 4.436 0 0 1 3.232-1.344h2.469a4.578 4.578 0 0 1 3.225 1.34 4.616 4.616 0 0 1 1.355 3.23v1.454a.241.241 0 0 1-.069.169.24.24 0 0 1-.169.07h-3.351a.285.285 0 0 1-.221-.091.29.29 0 0 1-.063-.106c-.013-.04-.017-.08-.013-.122zm7.207 8.652h-1.131a.844.844 0 0 0-.842.846v1.135c0 .467.377.846.842.846h1.131a.844.844 0 0 0 .842-.846v-1.135a.844.844 0 0 0-.842-.846z" fill="#fff"/></svg>
            </NuxtLink>
            <div class="header-menu">
                <button style="button" class="btn btn-styless header-menu__hamburger d-lg-none" :class="{ 'is-toggled': hamburgerToggled }" @click="hamburgerToggled = !hamburgerToggled">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="header-menu-controls-wrapper">
                    <Transition>
                        <div class="header-menu-controls__backdrop" v-if="hamburgerToggled"></div>
                    </Transition>
                    <Transition>
                        <div class="header-menu-controls" v-show="hamburgerToggled">
                            <form action="" class="header-menu-controls__search-mobile d-lg-none">
                                <div class="input-group">
                                    <input type="search" placeholder="Search">
                                    <button type="submit" class="btn btn-styless">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m22.952 21.85-5.194-5.194A5.946 5.946 0 0 0 19 13a5.964 5.964 0 0 0-1.758-4.242A5.956 5.956 0 0 0 13 7c-1.602 0-3.11.626-4.242 1.758A5.952 5.952 0 0 0 7 13c0 1.602.626 3.11 1.758 4.242A5.952 5.952 0 0 0 13 19c1.34 0 2.612-.436 3.654-1.24l5.194 5.192a.164.164 0 0 0 .232 0l.872-.87a.164.164 0 0 0 0-.232zm-6.784-5.682A4.456 4.456 0 0 1 13 17.48a4.456 4.456 0 0 1-3.168-1.312A4.456 4.456 0 0 1 8.52 13c0-1.196.466-2.322 1.312-3.168A4.456 4.456 0 0 1 13 8.52c1.196 0 2.322.464 3.168 1.312A4.456 4.456 0 0 1 17.48 13a4.452 4.452 0 0 1-1.312 3.168z" fill="#EE7B45"/></svg>
                                    </button>
                                </div>
                            </form>
                            <nav role="navigation" class="header-menu-controls__list" ref="headerMenuControlsList">
                                <ul class="list-styless">
                                    <li class="dropdown" :class="{ 'is-toggled': item.visible }" v-for="item in menu" :key="item.title">
                                        <button type="button" class="dropdown-title btn btn-block btn-styless" :title="item.title" @mouseover="toggleMenuItem(item)" >{{ item.title }}</button>
                                        <Transition @before-enter="onBeforeEnter"
                                                    @enter="onEnter"
                                                    @before-leave="onBeforeLeave"
                                                    @leave="onLeave">
                                            <ul class="list-styless" v-show="item.visible">
                                                <li v-for="subItem in item.subItems" :key="subItem.title">
                                                    <NuxtLink :to="subItem.url" :title="subItem.title" @click="closeMenuItem(); hamburgerToggled = false">{{ subItem.title }}</NuxtLink>
                                                </li>
                                            </ul>
                                        </Transition>
                                    </li>
                                </ul>
                            </nav>
                            <form action="" class="d-none d-lg-flex header-menu-controls__search-desktop">
                                <button type="button" class="btn btn-styless" :class="{ 'is-active': desktopSearchBarToggled }" @click="toggleDesktopSearchBar" ref="searchButton">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m22.952 21.85-5.194-5.194A5.946 5.946 0 0 0 19 13a5.964 5.964 0 0 0-1.758-4.242A5.956 5.956 0 0 0 13 7c-1.602 0-3.11.626-4.242 1.758A5.952 5.952 0 0 0 7 13c0 1.602.626 3.11 1.758 4.242A5.952 5.952 0 0 0 13 19c1.34 0 2.612-.436 3.654-1.24l5.194 5.192a.164.164 0 0 0 .232 0l.872-.87a.164.164 0 0 0 0-.232zm-6.784-5.682A4.456 4.456 0 0 1 13 17.48a4.456 4.456 0 0 1-3.168-1.312A4.456 4.456 0 0 1 8.52 13c0-1.196.466-2.322 1.312-3.168A4.456 4.456 0 0 1 13 8.52c1.196 0 2.322.464 3.168 1.312A4.456 4.456 0 0 1 17.48 13a4.452 4.452 0 0 1-1.312 3.168z" fill="#fff"/></svg>
                                </button>
                                <Transition>
                                    <div class="input-group" v-if="desktopSearchBarToggled">
                                        <input type="search" class="input--solid" placeholder="search" v-model="searchValue" ref="searchInput">
                                        <button type="button" class="btn btn-styless" @click="clearSearchValue()">
                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20.809" y="17.98" width="30" height="4" rx="2" transform="rotate(45 20.809 17.98)" fill="#EE7B45"/><rect width="30" height="4" rx="2" transform="scale(-1 1) rotate(45 -41.3 -38.32)" fill="#EE7B45"/></svg>
                                        </button>
                                    </div>
                                </Transition>
                            </form>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hamburgerToggled = ref(false)
const menu = ref([
    {
        title: 'Products',
        visible: false,
        subItems: [
            {
                title: 'Gate Openers',
                url: '/products'
            },
            {
                title: 'Home Automation',
                url: '/products'
            }
        ]
    },
    {
        title: 'Features',
        visible: false,
        subItems: [
            {
                title: 'Solar',
                url: '/solar'
            },
            {
                title: 'App Integration',
                url: '/app-integration'
            },
            {
                title: 'Comparison with Other Brands',
                url: '/comparison-with-other-brands'
            }
        ]
    },
    {
        title: 'Support',
        visible: false,
        subItems: [
            {
                title: 'Product Manuals',
                url: '/support/product-manuals'
            },
            {
                title: 'Installation Videos',
                url: '/support/installation-videos'
            },
            {
                title: 'Schedule a Call',
                url: '/support/schedule-a-call'
            },
            {
                title: 'Product Registration',
                url: '/support/product-registration'
            },
            {
                title: 'Warranty Info',
                url: '/support/warranty-info'
            },
            {
                title: 'FAQ',
                url: '/support/faq'
            }
        ]
    },
    {
        title: 'Contact',
        visible: false,
        subItems: [
            {
                title: 'About Us',
                url: '/about-us'
            },
            {
                title: 'Contact Us',
                url: '/contact-us'
            }
        ]
    }
])
const desktopSearchBarToggled = ref(false)
const headerMenuControlsList = ref(null)
const searchButton = ref(null)
const searchInput = ref(null)
const searchValue = ref(null)

onMounted(() => {
    if (window.matchMedia('(min-width: 990px)').matches) {
        window.addEventListener('click', (e) => {
            if (!headerMenuControlsList.value.contains(e.target)){
                closeMenuItem()
            }

            if (!searchButton.value.contains(e.target)) {
                desktopSearchBarToggled.value = false
            }
        })
    }
})

function toggleMenuItem(item) {
    closeMenuItem()
    item.visible = !item.visible
}

function closeMenuItem() {
    menu.value.forEach(item => {
        item.visible = false
    })
}

function toggleDesktopSearchBar() {
    desktopSearchBarToggled.value = !desktopSearchBarToggled.value

    if (desktopSearchBarToggled.value) {
        setTimeout(() => {
            searchInput.value.focus()
        }, 0);
    }
}

function clearSearchValue() {
    searchValue.value = ''
}

function onBeforeEnter(el) {
    el.style['max-height'] = '0';
}

function onEnter(el) {
    el.style['max-height'] = `${el.scrollHeight}px`;
}

function onBeforeLeave(el) {
    el.style['max-height'] = `${el.scrollHeight}px`;
}

function onLeave(el) {
    setTimeout(() => el.style['max-height'] = '0', 0);
}

</script>
