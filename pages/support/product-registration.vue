<template>
    <div class="product-registration">
         <div class="page-header page-header-product-registration page-header--image-only">
            <div class="container-sm">
                <div class="page-header-text">
                    <h1>Product Registration</h1>
                </div>
            </div>
        </div>
        <main>
            <div class="container-sm">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <NuxtLink to="/" title="Home">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/support" title="Support">Support</NuxtLink>
                            <span></span>
                        </li>
                         <li class="is-active">
                            <span>Product Registration</span>
                        </li>
                    </ul>
                </nav>
                <div ref="intro" class="intro">
                    <h1 class="h2 fade-in delay-1">Register your product</h1>
                    <p class="fade-in delay-2">When you register your product, you will be given a free six-month extension on your warranty. You can register your product here on this form or through the TMT Chow! App.</p>
                </div>
                <form ref="registrationForm" class="form fade-in" :class="{ 'is-revealed': registrationFormRevealed }">
                    <fieldset class="fade-in delay-1">
                        <legend>Personal Information</legend>
                        <div class="form-row">
                            <div class="form-group form-group-half">
                                <label for="first-name">First Name<span class="required">*</span></label>
                                <input type="text" id="first-name" placeholder="e.g: Paul" required>
                            </div>
                            <div class="form-group form-group-half">
                                <label for="last-name">Last Name<span class="required">*</span></label>
                                <input type="text" id="last-name" placeholder="e.g: Smith" required>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="fade-in delay-2">
                        <legend>Contact Information</legend>
                        <div class="form-row">
                            <div class="form-group form-group-half">
                                <label for="email">Email Address<span class="required">*</span></label>
                                <input type="email" id="email" placeholder="mail@example.com" required>
                            </div>
                            <div class="form-group form-group-half">
                                <label for="phone">Phone<span class="required">*</span></label>
                                <input type="tel" id="phone" placeholder="(750)555-5555" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="street">Street<span class="required">*</span></label>
                                <input type="text" id="street" placeholder="Enter your street" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group form-group-half">
                                <label for="city">City<span class="required">*</span></label>
                                <input type="text" id="city" placeholder="Enter your city" required>
                            </div>
                            <div class="form-group form-group-half">
                                <label for="state">State<span class="required">*</span></label>
                                <SelectDropdown ref="stateSelectDropdown">
                                    <template v-slot:title>
                                        <span v-if="currentState">{{ currentState }}</span>
                                        <span class="select-dropdown-placeholder" v-else>Select a state</span>
                                    </template>
                                    <template v-slot:content>
                                    <ul>
                                        <li v-for="state in states" :key="state">
                                            <a href="#" @click.prevent="onSelectState(state)">{{ state.name }}</a>
                                        </li>
                                        </ul>
                                    </template>
                                </SelectDropdown>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group form-group-half">
                                <label for="zip">Zip code<span class="required">*</span></label>
                                <input type="text" id="zip" placeholder="e.g: 12345-6789" required>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset ref="formDetails"  class="fade-in delay-3">
                        <legend>Register Your Products Below</legend>
                        <div class="form-row">
                            <div class="form-group form-group-half">
                                <SelectDropdown ref="categorySelectDropdown">
                                    <template v-slot:title>
                                        <span v-if="currentCategory">{{ currentCategory }}</span>
                                        <span class="select-dropdown-placeholder" v-else>Select Category</span>
                                    </template>
                                    <template v-slot:content>
                                    <ul>
                                        <li v-for="category in categories" :key="category">
                                            <a href="#" @click.prevent="onSelectCategory(category)">{{ category.name }}</a>
                                        </li>
                                    </ul>
                                    </template>
                                </SelectDropdown>
                            </div>
                            <div class="form-group form-group-half">
                                <SelectDropdown ref="productSelectDropdown" :noData="!currentCategory">
                                    <template v-slot:title>
                                        <span v-if="currentProduct">{{ currentProduct }}</span>
                                        <span class="select-dropdown-placeholder" v-else>Select Your Product</span>
                                    </template>
                                    <template v-slot:content>
                                        <ul v-for="category in categories" :key="category">
                                            <template v-if="category.name == currentCategory">
                                                <li v-for="product in category.products" :key="product">
                                                    <a href="#" @click.prevent="onSelectProduct(product)">{{ product }}</a>
                                                </li>
                                            </template>
                                        </ul>
                                    </template>
                                </SelectDropdown>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="serial-number">Serial Number<span class="required">*</span></label>
                                <input type="text" id="serial-number" placeholder="Enter Serial Number" required>
                            </div>
                        </div>
                    </fieldset>
                    <div class="text-center fade-in delay-4">
                        <button type="submit" class="btn btn--fill">Register</button>
                    </div>
                    <svg width="134" height="100" viewBox="0 0 134 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-deco"><path d="M42.138 11.086H36.43v11.047h5.708V11.086z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M37.375 72.313V24.457l29.6-18.756 29.6 18.756v47.856h-59.2z" fill="#fff" stroke="#EE7B45" stroke-width="1.89"/><path d="M102.95 32.028L66.975 8.317 31 32.028v-6.317L66.975 2l35.975 23.711v6.317z" fill="#EE7B45" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M101.968 68.342H32.023v6.037h69.945v-6.037z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M18.785 50.636h-2.098v23.711h2.098v-23.71z" fill="#EE7B45"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.66 38.36a7.862 7.862 0 00.847-3.562c0-4.331-3.481-7.842-7.775-7.842-4.294 0-7.775 3.51-7.775 7.842 0 1.282.305 2.492.846 3.56a10.094 10.094 0 00-3.069 7.268c0 5.568 4.476 10.082 9.997 10.082 5.52 0 9.996-4.514 9.996-10.082 0-2.854-1.176-5.432-3.067-7.267z" fill="#F5BA9F"/><path d="M24.66 38.36l-.843-.427-.314.62.5.485.657-.678zm-13.857-.002l.658.679.5-.485-.315-.62-.843.426zm14.7.428a8.807 8.807 0 00.949-3.988h-1.89a6.918 6.918 0 01-.745 3.135l1.686.853zm.949-3.988c0-4.846-3.897-8.787-8.72-8.787v1.89c3.764 0 6.83 3.08 6.83 6.897h1.89zm-8.72-8.787c-4.824 0-8.72 3.942-8.72 8.787h1.89c0-3.817 3.065-6.897 6.83-6.897v-1.89zm-8.72 8.787c0 1.433.341 2.79.948 3.987l1.686-.853a6.918 6.918 0 01-.744-3.134h-1.89zm1.133 2.882a11.039 11.039 0 00-3.356 7.946h1.89a9.149 9.149 0 012.782-6.59l-1.316-1.356zm-3.356 7.946c0 6.083 4.892 11.027 10.942 11.027v-1.89c-4.992 0-9.052-4.083-9.052-9.137H6.79zm10.942 11.027c6.05 0 10.941-4.944 10.941-11.027h-1.89c0 5.054-4.06 9.137-9.051 9.137v1.89zm10.941-11.027c0-3.12-1.286-5.939-3.354-7.945l-1.316 1.357a9.15 9.15 0 012.78 6.588h1.89zm89.281 5.01h-2.098v23.711h2.098v-23.71z" fill="#EE7B45"/><path fill-rule="evenodd" clip-rule="evenodd" d="M123.832 38.36a7.866 7.866 0 00.847-3.562c0-4.331-3.481-7.842-7.775-7.842-4.295 0-7.776 3.51-7.776 7.842 0 1.282.306 2.492.847 3.56a10.092 10.092 0 00-3.069 7.268c0 5.568 4.476 10.082 9.997 10.082s9.996-4.514 9.996-10.082c0-2.854-1.176-5.432-3.067-7.267z" fill="#F5BA9F"/><path d="M123.832 38.36l-.843-.427-.314.62.499.485.658-.678zm-13.857-.002l.657.679.5-.485-.314-.62-.843.426zm14.7.428a8.806 8.806 0 00.949-3.988h-1.89a6.914 6.914 0 01-.745 3.135l1.686.853zm.949-3.988c0-4.846-3.897-8.787-8.72-8.787v1.89c3.764 0 6.83 3.08 6.83 6.897h1.89zm-8.72-8.787c-4.824 0-8.721 3.942-8.721 8.787h1.89c0-3.817 3.066-6.897 6.831-6.897v-1.89zm-8.721 8.787c0 1.433.342 2.79.948 3.987l1.687-.853a6.91 6.91 0 01-.745-3.134h-1.89zm1.134 2.882a11.036 11.036 0 00-3.356 7.946h1.89a9.15 9.15 0 012.781-6.59l-1.315-1.356zm-3.356 7.946c0 6.083 4.891 11.027 10.942 11.027v-1.89c-4.992 0-9.052-4.083-9.052-9.137h-1.89zm10.942 11.027c6.05 0 10.941-4.944 10.941-11.027h-1.89c0 5.054-4.06 9.137-9.051 9.137v1.89zm10.941-11.027c0-3.12-1.286-5.939-3.354-7.945l-1.316 1.357a9.148 9.148 0 012.78 6.588h1.89z" fill="#EE7B45"/><path d="M32.023 71.329h69.945" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path fill="#D9D8D9" stroke="#EE7B45" stroke-width="1.89" d="M56.508 33.779H78.92v37.246H56.508z"/><path d="M1 99h4.078V60.11H1V99z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M63.664 65.064H5.09v29h58.574v-29z" fill="#EE7B45" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M63.664 94.065H5.09v2.478h58.574v-2.478zm0-30.253H5.09v2.478h58.574v-2.478z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M10.41 67.21v24.76m5.348-24.76v24.76m5.371-24.76v24.76m5.344-24.76v24.76m5.347-24.76v24.76m5.371-24.76v24.76m5.349-24.76v24.76m5.343-24.76v24.76m5.371-24.76v24.76m5.344-24.76v24.76M15.762 67.21v24.76" stroke="#fff" stroke-width="1.89" stroke-miterlimit="10"/><path d="M63.015 99h4.079V60.11h-4.08V99z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M66.906 99h4.078V60.11h-4.078V99z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M129.57 65.064H70.996v29h58.574v-29z" fill="#EE7B45" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M129.57 94.065H70.996v2.478h58.574v-2.478zm0-30.253H70.996v2.478h58.574v-2.478z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><path d="M76.316 67.21v24.76m5.348-24.76v24.76m5.371-24.76v24.76m5.344-24.76v24.76m5.348-24.76v24.76m5.371-24.76v24.76m5.347-24.76v24.76m5.344-24.76v24.76m5.371-24.76v24.76m5.344-24.76v24.76M81.668 67.21v24.76" stroke="#fff" stroke-width="1.89" stroke-miterlimit="10"/><path d="M128.921 99H133V60.11h-4.079V99z" fill="#fff" stroke="#EE7B45" stroke-width="1.89" stroke-miterlimit="10"/><ellipse cx="73.983" cy="50.227" rx="1.96" ry="1.977" fill="#fff"/></svg>
                </form>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SelectDropdown from "../../components/SelectDropdown"

const intro = ref(null)
const registrationForm = ref(null)
const registrationFormRevealed = ref(false)

const stateSelectDropdown = ref(null)
const currentState = ref('')
const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

const categorySelectDropdown = ref(null)
const currentCategory = ref('')
const categories = [
    {
        name: 'Gate Openers',
        products: ['Mastiff 300', 'Mastiff 400']
    },
    {
        name: 'Swing Gate',
        products: ['Boxer 800', 'Boxer 500']
    },
    {
        name: 'Sliding Gate',
        products: ['Boxer 800', 'Boxer 500']
    }
]

const productSelectDropdown = ref(null)
const currentProduct = ref('')

onMounted(() => {
    setTimeout(() => {
        intro.value.classList.add('is-revealed')
    }, 400);

    if (window.matchMedia('(min-width: 990px)').matches) {
        window.addEventListener('scroll', handleScroll)
    } else {
        setTimeout(() => {
            registrationFormRevealed.value = true
        }, 900)
    }
})

function handleScroll(e) {
    const rect = registrationForm.value.getBoundingClientRect()
    const elTop = rect.top + rect.top * 0.7
    const elBottom = rect.bottom

    if (window.innerHeight > elTop && elBottom > 0) {
        registrationFormRevealed.value = true
    }
}

function onSelectState(state) {
    currentState.value = state.name

    stateSelectDropdown.value.closeSelectDropdown()
}

function onSelectCategory(category) {
    currentCategory.value = category.name

    categorySelectDropdown.value.closeSelectDropdown()
}

function onSelectProduct(product) {
    currentProduct.value = product

    productSelectDropdown.value.closeSelectDropdown()
}

</script>
