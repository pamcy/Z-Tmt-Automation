<template>
    <div class="schedule-a-call">
        <div class="page-header page-header-schedule-a-call page-header--image-only"></div>
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
                            <span>Schedule a Call</span>
                        </li>
                    </ul>
                </nav>
                <div class="intro" ref="intro">
                    <h1 class="h2 fade-in delay-1">Schedule a Call</h1>
                    <p class="fade-in delay-2">You can schedule a technical support call below. This will allow us to help you troubleshoot any problems that you may have. You will be contacted through your selected means at the allotted time. Please allow up to 10 minutes for the previous call to wrap up.</p>
                </div>
                <form action="">
                    <fieldset>
                        <legend>Confirm date & time</legend>
                        <SelectDropdown ref="timeZoneSelectDropdown">
                            <template v-slot:icon>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4 10A9.4 9.4 0 11.6 10a9.4 9.4 0 0118.8 0z" fill="#FBD9CA" stroke="#EE7B45" stroke-width="1.2"/><path d="M18.488 5.948a9.26 9.26 0 01.91 4.05 9.634 9.634 0 01-1.332 4.874l-.011-.013-.005-.005a.418.418 0 01-.01-.025c.074-.903-.191-1.693-.606-2.429l-.004-.008c-.286-.49-.534-.984-.785-1.525a1.469 1.469 0 01-.046-.209V9.651a.932.932 0 00-.114-.46.998.998 0 00-.328-.344 9.32 9.32 0 01-.17-.118 5.173 5.173 0 00-.633-.397 1.039 1.039 0 00-.372-.1c-.087-.007-.176-.007-.236-.007h-.082l-.072.018-.522.13-.447.112a.953.953 0 01-.061-.004l-1.019-.445-.922-.403c-.037-.27-.081-.546-.124-.818l-.014-.09c-.05-.313-.099-.623-.139-.931a6.78 6.78 0 01.68-.673h1.536c.128.168.26.365.404.581a.952.952 0 00.294.307c.08.054.217.128.386.15.57.128 1.174.215 1.752.298.304.076.58-.02.684-.056l.01-.003c.463-.133.93-.29 1.398-.45z" fill="#fff" stroke="#EE7B45" stroke-width="1.2"/><mask id="prefix__a" fill="#fff"><path d="M2.696 10a.47.47 0 00-.13.304c-.087.565.043 1.13.347 1.652.087.13.174.304.218.434.087.174.174.218.348.261.434.087.826.174 1.26.261.305.044.305.044.305.391v3.044c0 .13 0 .26.043.391.174.479.348.957.565 1.392a.45.45 0 00.261.217c.218.087.435.13.609.217.217.087.217.044.217-.174v-1.26c0-.174.044-.305.218-.435L8 15.912c.13-.087.174-.174.174-.348v-.652a.5.5 0 01.13-.348c.348-.39.74-.739 1.13-1.13.088-.087.131-.217.175-.304.087-.435.174-.913.26-1.348.044-.174-.043-.218-.173-.218h-.957c-.174 0-.26-.043-.304-.174-.261-.478-.565-.913-.826-1.39-.087-.175-.174-.218-.348-.218h-2c-.174 0-.26-.044-.348-.217-.13-.348-.304-.653-.478-.957a.95.95 0 01-.13-.217c-.087.087-.174.13-.218.217-.26.26-.565.522-.826.783a7.219 7.219 0 00-.565.608z"/></mask><path d="M2.696 10a.47.47 0 00-.13.304c-.087.565.043 1.13.347 1.652.087.13.174.304.218.434.087.174.174.218.348.261.434.087.826.174 1.26.261.305.044.305.044.305.391v3.044c0 .13 0 .26.043.391.174.479.348.957.565 1.392a.45.45 0 00.261.217c.218.087.435.13.609.217.217.087.217.044.217-.174v-1.26c0-.174.044-.305.218-.435L8 15.912c.13-.087.174-.174.174-.348v-.652a.5.5 0 01.13-.348c.348-.39.74-.739 1.13-1.13.088-.087.131-.217.175-.304.087-.435.174-.913.26-1.348.044-.174-.043-.218-.173-.218h-.957c-.174 0-.26-.043-.304-.174-.261-.478-.565-.913-.826-1.39-.087-.175-.174-.218-.348-.218h-2c-.174 0-.26-.044-.348-.217-.13-.348-.304-.653-.478-.957a.95.95 0 01-.13-.217c-.087.087-.174.13-.218.217-.26.26-.565.522-.826.783a7.219 7.219 0 00-.565.608z" fill="#fff"/><path d="M2.696 10l.848.848.047-.047.042-.052-.937-.75zm-.13.304l1.186.182.014-.09v-.092h-1.2zm.347 1.652l-1.036.604.018.031.02.03.998-.665zm.218.434l-1.139.38.027.08.038.077 1.074-.537zm.348.261l-.292 1.165.028.006.028.006.236-1.177zm1.26.261l-.235 1.177.033.006.033.005.17-1.188zm.348 3.826l-1.138.38.005.015.005.015 1.128-.41zm.565 1.392l-1.073.536 1.073-.537zm.261.217l.446-1.114-.033-.013-.033-.012-.38 1.139zm.609.217l-.537 1.074.045.022.046.018.446-1.114zM8 15.912l-.666-.998-.027.018-.027.02.72.96zm.304-1.348l.849.849.025-.025.023-.026-.897-.798zM9.61 13.13l1.073.536.072-.143.032-.158-1.177-.235zm.26-1.348l-1.164-.291-.006.027-.006.028 1.177.236zm-1.434-.392l1.138-.379-.033-.101-.052-.094-1.053.574zM7.609 10l-1.073.536.01.02.01.018 1.053-.575zm-2.696-.435l-1.123.42.022.06.028.056 1.073-.537zm-.478-.957l1.042-.595-.08-.14-.113-.114-.849.849zm-.13-.217l1.073-.537-.745-1.49-1.177 1.178.849.849zm-.218.217l.849.849.137-.138.088-.174-1.074-.537zm-2.24.543a1.668 1.668 0 00-.481 1.153h2.4a.745.745 0 01-.221.544L1.846 9.15zm-.468.97c-.134.877.077 1.718.498 2.44l2.073-1.21c-.188-.322-.237-.612-.198-.865l-2.373-.365zm.536 2.5a.88.88 0 01.072.135l.005.014 2.277-.759a3.22 3.22 0 00-.357-.72l-1.997 1.33zm.142.306c.099.197.256.436.527.626.245.172.494.235.603.262l.583-2.328c-.065-.016.053.004.19.1a.773.773 0 01.244.267l-2.147 1.073zm1.186.901c.21.042.411.084.619.128.205.043.418.088.642.133l.47-2.354c-.21-.042-.41-.084-.618-.127a53.598 53.598 0 00-.642-.133l-.47 2.353zm1.327.272c.107.016.077.013.033.001a1.05 1.05 0 01-.545-.37c-.195-.252-.212-.5-.214-.515-.002-.021 0-.024 0 .088h2.4c0-.063.001-.196-.01-.317a1.393 1.393 0 00-.281-.73 1.354 1.354 0 00-.725-.473c-.13-.035-.274-.053-.319-.06L4.57 14.1zm-.726-.796v3.042h2.4v-3.042h-2.4zm0 3.043c0 .103-.01.427.105.77l2.277-.758c.016.05.019.083.019.084v-.006a.7.7 0 01-.001-.047v-.043h-2.4zm.115.801c.17.465.366 1.01.62 1.518l2.147-1.073c-.181-.362-.332-.773-.511-1.265l-2.256.82zm.62 1.518c.182.365.515.673.955.82l.759-2.278c.178.06.337.194.433.385l-2.147 1.073zm.889.795c.16.065.324.114.405.139.105.033.12.041.112.038L7.06 17.49a3.133 3.133 0 00-.464-.18c-.126-.04-.18-.056-.236-.078l-.891 2.228zm.608.217c.06.024.21.084.387.112.176.027.681.067 1.098-.35.333-.333.363-.74.369-.797.01-.108.01-.223.01-.253h-2.4c0 .08-.002.051.002.01a1.133 1.133 0 01.322-.657 1.13 1.13 0 01.968-.324c.116.018.185.051.136.031l-.892 2.228zM7.94 18.39v-1.26h-2.4v1.26h2.4zm0-1.26c0 .01 0 .125-.067.269a.684.684 0 01-.195.256l-1.44-1.92a1.727 1.727 0 00-.544.658 1.738 1.738 0 00-.154.736h2.4zm-.262.525a1772.162 1772.162 0 001.043-.783l-1.44-1.92-.522.391-.521.392 1.44 1.92zm.989-.744a1.58 1.58 0 00.543-.604c.146-.29.165-.568.165-.743h-2.4s-.002-.148.089-.33a.842.842 0 01.271-.32l1.332 1.997zm.708-1.347v-.652h-2.4v.652h2.4zm0-.652a.711.711 0 01-.221.5l-1.697-1.696a1.692 1.692 0 00-.482 1.196h2.4zm-.173.45c.32-.36.621-.618 1.082-1.08l-1.697-1.697c-.32.322-.803.76-1.178 1.182L9.2 15.362zm1.082-1.08c.178-.177.279-.364.328-.464.027-.053.049-.101.06-.126l.011-.026-2.147-1.073a2.245 2.245 0 00-.034.072l-.02.047-.013.026-.003.007.006-.012a.75.75 0 01.115-.148l1.697 1.698zm.503-.917l.132-.685c.044-.23.086-.452.128-.663l-2.353-.47c-.045.223-.09.457-.133.684-.043.23-.086.452-.128.663l2.354.471zm.248-1.292c.06-.242.14-.835-.338-1.314-.395-.396-.889-.395-1-.395v2.4a.859.859 0 01-.217-.03 1.064 1.064 0 01-.48-.277 1.04 1.04 0 01-.294-.966l2.329.582zm-1.338-1.709h-.958v2.4h.957v-2.4zm-.957 0c.003 0 .042 0 .102.011a.979.979 0 01.732.636l-2.277.759c.092.274.285.598.66.805.316.176.628.19.783.19v-2.4zm.75.452a16.41 16.41 0 00-.447-.753 13.569 13.569 0 01-.38-.638l-2.107 1.149c.15.273.308.529.447.752.144.233.267.434.38.64l2.106-1.15zm-.807-1.353a1.583 1.583 0 00-.597-.667 1.577 1.577 0 00-.824-.214v2.4c-.002 0-.049 0-.12-.014a.922.922 0 01-.29-.114.827.827 0 01-.315-.318l2.146-1.073zm-1.421-.881H5.261v2.4h2v-2.4zm-2 0a.92.92 0 01.41.128c.226.135.312.311.316.318L3.84 10.1c.09.18.263.466.597.666.331.199.656.215.824.215v-2.4zm.776.561c-.17-.452-.392-.837-.56-1.13l-2.084 1.19c.18.315.305.539.397.783l2.247-.843zM5.284 7.76a.963.963 0 01.128.161l-.008-.015a4.734 4.734 0 01-.026-.051L3.23 8.927c.018.037.055.112.097.184.033.058.119.206.258.346l1.698-1.698zm-1.828-.217l.013-.012-.023.018c-.01.01-.028.024-.047.04-.072.062-.254.22-.385.483L5.16 9.145a.931.931 0 01-.182.248l-.018.017.01-.009.04-.033c.034-.028.085-.072.142-.129L3.456 7.542zm-.217.217c-.11.11-.234.225-.379.359a15 15 0 00-.447.424L4.11 10.24c.11-.11.233-.224.378-.358.138-.127.297-.274.448-.424L3.239 7.759zm-.826.783c-.211.211-.432.43-.654.708l1.874 1.499c.126-.158.253-.286.477-.51L2.413 8.542z" fill="#EE7B45" mask="url(#prefix__a)"/><path d="M1.63 7.573a17.91 17.91 0 01-.387-1.03 9.562 9.562 0 014.96-5.154c.603.508 1.324.604 1.896.68l.035.004c.101.015.207.035.332.058l-.028.081-.253.094-.005.002c-.112.04-.233.085-.347.13-.13.046-.246.114-.34.194a.85.85 0 00-.205.264c-.18.264-.36.56-.53.844a31.35 31.35 0 01-.305.498.42.42 0 01-.135.133l-.008.005-.008.006c-.124.088-.25.161-.405.25l-.01.005c-.146.084-.321.184-.498.31l-.013.01-.013.01c-.305.243-.692.354-1.153.392l-.025.002-.024.004-.228.038c-.43.073-.808.137-1.185.172a.799.799 0 00-.596.269.829.829 0 00-.188.548v.738c0 .237.107.445.143.515l.007.014.044.087.037.038a.669.669 0 00.251.225.6.6 0 01.191.246l-.994-.663a.34.34 0 01-.012-.02z" fill="#fff" stroke="#EE7B45" stroke-width="1.2"/><mask id="prefix__b" fill="#fff"><path d="M12.999 1.653h-1.043c-.13 0-.218.043-.305.174L11.13 2.87c-.044.13-.044.174.086.217.827.305.827.305 1.653.087.13-.043.26-.087.39-.087.175 0 .349-.043.48 0 .782.305 1.651.435 2.477.61.044 0 .13 0 .174-.044.305-.174.565-.392.826-.566-.826-.87-1.782-1.565-2.87-2.13-.39.217-.782.391-1.173.609 0 .087-.087.087-.174.087z"/></mask><path d="M12.999 1.653h-1.043c-.13 0-.218.043-.305.174L11.13 2.87c-.044.13-.044.174.086.217.827.305.827.305 1.653.087.13-.043.26-.087.39-.087.175 0 .349-.043.48 0 .782.305 1.651.435 2.477.61.044 0 .13 0 .174-.044.305-.174.565-.392.826-.566-.826-.87-1.782-1.565-2.87-2.13-.39.217-.782.391-1.173.609 0 .087-.087.087-.174.087z" fill="#fff"/><path d="M11.651 1.827l-.998-.666-.042.062-.033.067 1.073.537zM11.13 2.87l-1.074-.537-.038.077-.027.08 1.139.38zm.086.217l.415-1.126-.017-.006-.018-.006-.38 1.138zm1.653.087l.305 1.16.037-.009.037-.012-.38-1.139zm.87-.087l.434-1.118-.027-.01-.028-.01-.38 1.138zm2.477.61L15.97 4.87l.122.026h.125v-1.2zm.174-.044l-.595-1.042-.14.08-.113.113.848.849zm.826-.566l.666.999 1.186-.791-.982-1.034-.87.826zm-2.87-2.13L14.9-.108l-.572-.297-.564.313.583 1.049zm-1.173.609L12.59.516l-.617.344v.706h1.2zM12.999.453h-1.043v2.4h1.043v-2.4zm-1.043 0c-.203 0-.474.035-.752.189-.269.15-.442.355-.551.519l1.997 1.331a.813.813 0 01-.28.248.871.871 0 01-.414.113v-2.4zm-1.378.837l-.26.522-.262.521 2.147 1.074.26-.522.262-.522-2.147-1.073zm-.587 1.2c-.012.037-.046.137-.066.254-.021.119-.05.363.044.647.214.64.803.813.868.835l.759-2.277a.9.9 0 01.229.118 1.118 1.118 0 01.463 1.094c-.012.072-.03.117-.02.088L9.99 2.491zm.81 1.723c.341.126.748.29 1.178.312.438.023.856-.1 1.195-.19l-.61-2.321c-.22.058-.335.087-.421.105-.071.014-.068.008-.037.01.029 0 .028.007-.049-.017a9.156 9.156 0 01-.426-.15l-.83 2.251zm2.447.1a9.915 9.915 0 01.107-.034l-.02.003a.525.525 0 01-.075.005v-2.4c-.36 0-.68.119-.77.149l.758 2.277zm.012-.026c.09 0 .17-.005.225-.01l.07-.005.04-.004h.006-.034a.804.804 0 01-.208-.042l.759-2.277a1.75 1.75 0 00-.683-.075l-.14.011c-.032.003-.039.002-.035.002v2.4zm.043-.081c.904.351 1.938.511 2.666.664l.495-2.348c-.925-.195-1.63-.296-2.29-.553l-.87 2.237zm2.913.69c.015 0 .141.002.285-.022.115-.019.45-.085.738-.373l-1.697-1.697a1.082 1.082 0 01.564-.297c.078-.013.139-.01.11-.01v2.4zm.77-.202c.207-.118.39-.246.535-.35.162-.117.254-.187.36-.258l-1.33-1.997c-.155.103-.323.228-.433.307-.126.091-.227.16-.323.215l1.19 2.083zm1.1-2.433A11.864 11.864 0 0014.9-.108l-1.107 2.13a9.502 9.502 0 012.553 1.892l1.74-1.653zM13.764-.092c-.17.094-.342.18-.54.28-.193.096-.412.205-.634.329l1.166 2.098c.169-.094.341-.18.54-.28.193-.096.412-.206.634-.329L13.764-.092zm-1.791 1.658a1.134 1.134 0 01.766-1.063.982.982 0 01.244-.049c.027-.002.046-.001.016-.001v2.4c.013 0 .076 0 .144-.004.064-.005.199-.017.355-.069a1.278 1.278 0 00.875-1.214h-2.4z" fill="#EE7B45" mask="url(#prefix__b)"/></svg>
                            </template>
                            <template v-slot:title>
                                {{ currentTimezone.is }} <template v-if="timeSelected">({{ timeSelected }})</template>
                            </template>
                            <template v-slot:contentTop>
                                <div class="input-group">
                                        <input type="search" placeholder="Search">
                                        <button type="search" class="btn btn-styless"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m22.952 21.85-5.194-5.194A5.946 5.946 0 0 0 19 13a5.964 5.964 0 0 0-1.758-4.242A5.956 5.956 0 0 0 13 7c-1.602 0-3.11.626-4.242 1.758A5.952 5.952 0 0 0 7 13c0 1.602.626 3.11 1.758 4.242A5.952 5.952 0 0 0 13 19c1.34 0 2.612-.436 3.654-1.24l5.194 5.192a.164.164 0 0 0 .232 0l.872-.87a.164.164 0 0 0 0-.232zm-6.784-5.682A4.456 4.456 0 0 1 13 17.48a4.456 4.456 0 0 1-3.168-1.312A4.456 4.456 0 0 1 8.52 13c0-1.196.466-2.322 1.312-3.168A4.456 4.456 0 0 1 13 8.52c1.196 0 2.322.464 3.168 1.312A4.456 4.456 0 0 1 17.48 13a4.452 4.452 0 0 1-1.312 3.168z" fill="#EE7B45"></path></svg></button>
                                    </div>
                                    <div class="timezone-control">
                                        <b class="text-uppercase">Time Zone</b>
                                        <label class="switch">
                                            am/pm
                                            <input type="checkbox" v-model="hourClock24" @onChange="convertHourClock()">
                                            <span class="switch-slider"></span>
                                            24hr
                                        </label>
                                    </div>
                            </template>
                            <template v-slot:content>
                                <ul>
                                    <li v-for="timezone in timezones" :key="timezone">
                                        <a href="#" @click.prevent="onSelectTimezone(timezone)">
                                            <span>{{ timezone }}</span>
                                            <span>{{ getCurrentTime(timezone, hourClock24) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </template>
                        </SelectDropdown>
                        <div class="datetime-picker">
                            <DatePicker v-model="date" :locale="{ id: 'en', firstDayOfWeek: 2, masks: { weekdays: 'WWW' } }" :min-date="now" :timezone="timezone" color="orange" />
                            <div class="time-picker">
                                <div class="time-picker-header">
                                    <button type="button" class="btn btn-styless" @click="amPmSwitch('AM')" :disabled="amPm == 'AM'">
                                        <svg class="vc-svg-icon" width="26px" height="26px" viewBox="0 -1 16 34"><path d="M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"></path></svg>
                                    </button>
                                    <span class="time-picker-title">{{ amPm }}</span>
                                    <button type="button" class="btn btn-styless" @click="amPmSwitch('PM')" :disabled="amPm == 'PM'">
                                        <svg class="vc-svg-icon" width="26px" height="26px" viewBox="-5 -1 16 34"><path d="M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"></path></svg>
                                    </button>
                                </div>
                                <div class="time-picker-body">
                                    <Transition>
                                        <div class="time-picker__am" v-if="amPm == 'AM'">
                                            <div class="radio" v-for="AM in AMs" :key="AM">
                                                <input type="radio" :id="'time-' + AM.time" :value="AM.time" name="AM" v-model="timeSelected">
                                                <label :for="'time-' + AM.time">{{ AM.time }}</label>
                                            </div>
                                        </div>
                                    </Transition>
                                    <Transition>
                                        <div class="time-picker__pm" v-if="amPm == 'PM'">
                                            <div class="radio" v-for="PM in PMs" :key="PM">
                                                <input type="radio" :id="'time-' + PM.time" :value="PM.time" name="PM" v-model="timeSelected">
                                                <label :for="'time-' + PM.time">{{ PM.time }}</label>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset ref="formDetails" :class="{ 'is-revealed': formDetailsRevealed }">
                        <legend>Enter Details</legend>
                        <div class="form-row">
                            <div class="form-group form-group-half fade-in delay-1">
                                <label for="full-name">Full Name<span class="required">*</span></label>
                                <input type="text" id="full-name" placeholder="Raymond" required>
                            </div>
                            <div class="form-group form-group-half fade-in delay-2">
                                <label for="phone">Full Name<span class="required">*</span></label>
                                <input type="tel" id="phone" placeholder="(750)555-5555" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group form-group-half fade-in delay-3">
                                <label for="email">Email Address<span class="required">*</span></label>
                                <input type="tel" id="email" placeholder="mail@example.com" required>
                            </div>
                            <div class="form-group form-group-half fade-in delay-4">
                                <label for="product-name">Product Name<span class="required">*</span></label>
                                <input type="tel" id="product-name" placeholder="product name" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group fade-in delay-5">
                                <label for="share">Please share anything that will help prepare for our meeting.</label>
                                <textarea id="share" placeholder="Write something here!"></textarea>
                            </div>
                        </div>
                    </fieldset>
                    <div class="text-center">
                        <button type="submit" class="btn btn--fill">Schedule Event</button>
                    </div>
                    <svg width="116" height="120" viewBox="0 0 116 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="form-deco"><path d="M113.999 2H19.063v108.381h94.936V2z" fill="#FBD9CA" stroke="#EE7B45" stroke-width="2.8" stroke-miterlimit="10"/><path d="M113.999 2H19.063v10.43h94.936V2z" fill="#EE7B45" stroke="#EE7B45" stroke-width="2.8" stroke-miterlimit="10"/><path d="M43.297 118H7.264A5.266 5.266 0 012 112.74V51.43a5.266 5.266 0 015.264-5.261h36.033a5.266 5.266 0 015.264 5.26v61.311c0 2.902-2.36 5.26-5.264 5.26z" fill="#fff" stroke="#EE7B45" stroke-width="2.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M43.206 53.152H6.992v53.874h36.214V53.152zm-18.063 61.491a2.177 2.177 0 100-4.353 2.177 2.177 0 100 4.353zM14.617 78.547l12.798 9.886M12.617 68.299l25.232 19.5" stroke="#EE7B45" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.227 26.488h70.521M31.227 39.82h70.521M60.453 53.152h41.297M60.453 66.575h41.297M60.453 79.907h41.297M60.453 93.24h41.297" stroke="#EE7B45" stroke-width="2.8" stroke-miterlimit="10"/><path d="M31.409 9.709a2.54 2.54 0 10-2.542-2.54 2.54 2.54 0 002.541 2.54zm72.968 0a2.54 2.54 0 10.003-5.082 2.54 2.54 0 00-.003 5.082z" fill="#fff"/></svg>
                </form>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

import SelectDropdown from "../../components/SelectDropdown"

const intro = ref(null)

const amPm = ref('AM')
const AMs = [
    {
        time: '06:00',
        disabled: false
    },
    {
        time: '06:30',
        disabled: false
    },
    {
        time: '07:00',
        disabled: false,
    },
    {
        time: '07:30',
        disabled: false,
    },
    {
        time: '08:00',
        disabled: false,
    },
    {
        time: '08:30',
        disabled: false,
    },
    {
        time: '09:00',
        disabled: false,
    },
    {
        time: '09:30',
        disabled: false,
    },
    {
        time: '10:00',
        disabled: false,
    },
    {
        time: '10:30',
        disabled: false,
    },
    {
        time: '11:00',
        disabled: false,
    },
    {
        time: '11:30',
        disabled: false,
    }
]
const PMs = [
    {
        time: '12:00',
        disabled: false
    },
    {
        time: '12:30',
        disabled: false
    },
    {
        time: '13:00',
        disabled: false,
    },
    {
        time: '13:30',
        disabled: false,
    },
    {
        time: '14:00',
        disabled: false,
    },
    {
        time: '14:30',
        disabled: false,
    },
    {
        time: '15:00',
        disabled: false,
    },
    {
        time: '15:30',
        disabled: false,
    },
    {
        time: '16:00',
        disabled: false,
    },
    {
        time: '16:30',
        disabled: false,
    },
    {
        time: '17:00',
        disabled: false,
    },
    {
        time: '17:30',
        disabled: false,
    },
    {
        time: '18:00',
        disabled: false,
    },
    {
        time: '18:30',
        disabled: false,
    },
    {
        time: '19:00',
        disabled: false,
    },
    {
        time: '19:30',
        disabled: false,
    },
    {
        time: '20:00',
        disabled: false,
    },
    {
        time: '20:30',
        disabled: false,
    },
    {
        time: '21:00',
        disabled: false,
    },
    {
        time: '21:30',
        disabled: false,
    }
]

const now = new Date();
const hourClock24 = ref(true)
const timezones = [
    'Etc/GMT+12',
    'Etc/GMT+11',
    'Pacific/Midway',
    'Pacific/Niue',
    'Pacific/Pago_Pago',
    'Pacific/Samoa',
    'US/Samoa',
    'Etc/GMT+10',
    'HST',
    'Pacific/Honolulu',
    'Pacific/Johnston',
    'Pacific/Rarotonga',
    'Pacific/Tahiti',
    'US/Hawaii',
    'Pacific/Marquesas',
    'America/Adak',
    'America/Atka',
    'Etc/GMT+9',
    'Pacific/Gambier',
    'US/Aleutian',
    'America/Anchorage',
    'America/Juneau',
    'America/Metlakatla',
    'America/Nome',
    'America/Sitka',
    'America/Yakutat',
    'Etc/GMT+8',
    'Pacific/Pitcairn',
    'US/Alaska',
    'America/Chihuahua',
    'America/Creston',
    'America/Dawson',
    'America/Dawson_Creek',
    'America/Ensenada',
    'America/Fort_Nelson',
    'America/Hermosillo',
    'America/Los_Angeles',
    'America/Mazatlan',
    'America/Phoenix',
    'America/Santa_Isabel',
    'America/Tijuana',
    'America/Vancouver',
    'America/Whitehorse',
    'Canada/Pacific',
    'Canada/Yukon',
    'Etc/GMT+7',
    'MST',
    'Mexico/BajaNorte',
    'Mexico/BajaSur',
    'PST8PDT',
    'US/Arizona',
    'US/Pacific',
    'America/Bahia_Banderas',
    'America/Belize',
    'America/Boise',
    'America/Cambridge_Bay',
    'America/Costa_Rica',
    'America/Denver',
    'America/Edmonton',
    'America/El_Salvador',
    'America/Guatemala',
    'America/Inuvik',
    'America/Managua',
    'America/Merida',
    'America/Mexico_City',
    'America/Monterrey',
    'America/Ojinaga',
    'America/Regina',
    'America/Shiprock',
    'America/Swift_Current',
    'America/Tegucigalpa',
    'America/Yellowknife',
    'Canada/Mountain',
    'Canada/Saskatchewan',
    'Etc/GMT+6',
    'MST7MDT',
    'Mexico/General',
    'Navajo',
    'Pacific/Galapagos',
    'US/Mountain',
    'America/Atikokan',
    'America/Bogota',
    'America/Cancun',
    'America/Cayman',
    'America/Chicago',
    'America/Coral_Harbour',
    'America/Eirunepe',
    'America/Guayaquil',
    'America/Indiana/Knox',
    'America/Indiana/Tell_City',
    'America/Jamaica',
    'America/Knox_IN',
    'America/Lima',
    'America/Matamoros',
    'America/Menominee',
    'America/North_Dakota/Beulah',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/Panama',
    'America/Porto_Acre',
    'America/Rainy_River',
    'America/Rankin_Inlet',
    'America/Resolute',
    'America/Rio_Branco',
    'America/Winnipeg',
    'Brazil/Acre',
    'CST6CDT',
    'Canada/Central',
    'Chile/EasterIsland',
    'EST',
    'Etc/GMT+5',
    'Jamaica',
    'Pacific/Easter',
    'US/Central',
    'US/Indiana-Starke',
    'America/Anguilla',
    'America/Antigua',
    'America/Aruba',
    'America/Barbados',
    'America/Blanc-Sablon',
    'America/Boa_Vista',
    'America/Campo_Grande',
    'America/Caracas',
    'America/Cuiaba',
    'America/Curacao',
    'America/Detroit',
    'America/Dominica',
    'America/Fort_Wayne',
    'America/Grand_Turk',
    'America/Grenada',
    'America/Guadeloupe',
    'America/Guyana',
    'America/Havana',
    'America/Indiana/Indianapolis',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Vevay',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indianapolis',
    'America/Iqaluit',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Kralendijk',
    'America/La_Paz',
    'America/Louisville',
    'America/Lower_Princes',
    'America/Manaus',
    'America/Marigot',
    'America/Martinique',
    'America/Montreal',
    'America/Montserrat',
    'America/Nassau',
    'America/New_York',
    'America/Nipigon',
    'America/Pangnirtung',
    'America/Port-au-Prince',
    'America/Port_of_Spain',
    'America/Porto_Velho',
    'America/Puerto_Rico',
    'America/Santo_Domingo',
    'America/St_Barthelemy',
    'America/St_Kitts',
    'America/St_Lucia',
    'America/St_Thomas',
    'America/St_Vincent',
    'America/Thunder_Bay',
    'America/Toronto',
    'America/Tortola',
    'America/Virgin',
    'Brazil/West',
    'Canada/Eastern',
    'Cuba',
    'EST5EDT',
    'Etc/GMT+4',
    'US/East-Indiana',
    'US/Eastern',
    'US/Michigan',
    'America/Araguaina',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Catamarca',
    'America/Argentina/ComodRivadavia',
    'America/Argentina/Cordoba',
    'America/Argentina/Jujuy',
    'America/Argentina/La_Rioja',
    'America/Argentina/Mendoza',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Salta',
    'America/Argentina/San_Juan',
    'America/Argentina/San_Luis',
    'America/Argentina/Tucuman',
    'America/Argentina/Ushuaia',
    'America/Asuncion',
    'America/Bahia',
    'America/Belem',
    'America/Buenos_Aires',
    'America/Catamarca',
    'America/Cayenne',
    'America/Cordoba',
    'America/Fortaleza',
    'America/Glace_Bay',
    'America/Godthab',
    'America/Goose_Bay',
    'America/Halifax',
    'America/Jujuy',
    'America/Maceio',
    'America/Mendoza',
    'America/Moncton',
    'America/Montevideo',
    'America/Nuuk',
    'America/Paramaribo',
    'America/Punta_Arenas',
    'America/Recife',
    'America/Rosario',
    'America/Santarem',
    'America/Santiago',
    'America/Sao_Paulo',
    'America/Thule',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Atlantic/Bermuda',
    'Atlantic/Stanley',
    'Brazil/East',
    'Canada/Atlantic',
    'Chile/Continental',
    'Etc/GMT+3',
    'America/St_Johns',
    'Canada/Newfoundland',
    'America/Miquelon',
    'America/Noronha',
    'Atlantic/South_Georgia',
    'Brazil/DeNoronha',
    'Etc/GMT+2',
    'America/Scoresbysund',
    'Atlantic/Azores',
    'Atlantic/Cape_Verde',
    'Etc/GMT+1',
    'Africa/Abidjan',
    'Africa/Accra',
    'Africa/Bamako',
    'Africa/Banjul',
    'Africa/Bissau',
    'Africa/Conakry',
    'Africa/Dakar',
    'Africa/Freetown',
    'Africa/Lome',
    'Africa/Monrovia',
    'Africa/Nouakchott',
    'Africa/Ouagadougou',
    'Africa/Sao_Tome',
    'Africa/Timbuktu',
    'America/Danmarkshavn',
    'Antarctica/Troll',
    'Atlantic/Canary',
    'Atlantic/Faeroe',
    'Atlantic/Faroe',
    'Atlantic/Madeira',
    'Atlantic/Reykjavik',
    'Atlantic/St_Helena',
    'Eire',
    'Etc/GMT',
    'Etc/GMT+0',
    'Etc/GMT-0',
    'Etc/GMT0',
    'Etc/Greenwich',
    'Etc/UCT',
    'Etc/UTC',
    'Etc/Universal',
    'Etc/Zulu',
    'Europe/Belfast',
    'Europe/Dublin',
    'Europe/Guernsey',
    'Europe/Isle_of_Man',
    'Europe/Jersey',
    'Europe/Lisbon',
    'Europe/London',
    'GB',
    'GB-Eire',
    'GMT',
    'GMT+0',
    'GMT-0',
    'GMT0',
    'Greenwich',
    'Iceland',
    'Portugal',
    'UCT',
    'UTC',
    'Universal',
    'WET',
    'Zulu',
    'Africa/Algiers',
    'Africa/Bangui',
    'Africa/Brazzaville',
    'Africa/Casablanca',
    'Africa/Ceuta',
    'Africa/Douala',
    'Africa/El_Aaiun',
    'Africa/Kinshasa',
    'Africa/Lagos',
    'Africa/Libreville',
    'Africa/Luanda',
    'Africa/Malabo',
    'Africa/Ndjamena',
    'Africa/Niamey',
    'Africa/Porto-Novo',
    'Africa/Tunis',
    'Arctic/Longyearbyen',
    'Atlantic/Jan_Mayen',
    'CET',
    'Etc/GMT-1',
    'Europe/Amsterdam',
    'Europe/Andorra',
    'Europe/Belgrade',
    'Europe/Berlin',
    'Europe/Bratislava',
    'Europe/Brussels',
    'Europe/Budapest',
    'Europe/Busingen',
    'Europe/Copenhagen',
    'Europe/Gibraltar',
    'Europe/Ljubljana',
    'Europe/Luxembourg',
    'Europe/Madrid',
    'Europe/Malta',
    'Europe/Monaco',
    'Europe/Oslo',
    'Europe/Paris',
    'Europe/Podgorica',
    'Europe/Prague',
    'Europe/Rome',
    'Europe/San_Marino',
    'Europe/Sarajevo',
    'Europe/Skopje',
    'Europe/Stockholm',
    'Europe/Tirane',
    'Europe/Vaduz',
    'Europe/Vatican',
    'Europe/Vienna',
    'Europe/Warsaw',
    'Europe/Zagreb',
    'Europe/Zurich',
    'MET',
    'Poland',
    'Africa/Blantyre',
    'Africa/Bujumbura',
    'Africa/Cairo',
    'Africa/Gaborone',
    'Africa/Harare',
    'Africa/Johannesburg',
    'Africa/Juba',
    'Africa/Khartoum',
    'Africa/Kigali',
    'Africa/Lubumbashi',
    'Africa/Lusaka',
    'Africa/Maputo',
    'Africa/Maseru',
    'Africa/Mbabane',
    'Africa/Tripoli',
    'Africa/Windhoek',
    'Asia/Amman',
    'Asia/Beirut',
    'Asia/Damascus',
    'Asia/Famagusta',
    'Asia/Gaza',
    'Asia/Hebron',
    'Asia/Jerusalem',
    'Asia/Nicosia',
    'Asia/Tel_Aviv',
    'EET',
    'Egypt',
    'Etc/GMT-2',
    'Europe/Athens',
    'Europe/Bucharest',
    'Europe/Chisinau',
    'Europe/Helsinki',
    'Europe/Kaliningrad',
    'Europe/Kiev',
    'Europe/Mariehamn',
    'Europe/Nicosia',
    'Europe/Riga',
    'Europe/Sofia',
    'Europe/Tallinn',
    'Europe/Tiraspol',
    'Europe/Uzhgorod',
    'Europe/Vilnius',
    'Europe/Zaporozhye',
    'Israel',
    'Libya',
    'Africa/Addis_Ababa',
    'Africa/Asmara',
    'Africa/Asmera',
    'Africa/Dar_es_Salaam',
    'Africa/Djibouti',
    'Africa/Kampala',
    'Africa/Mogadishu',
    'Africa/Nairobi',
    'Antarctica/Syowa',
    'Asia/Aden',
    'Asia/Baghdad',
    'Asia/Bahrain',
    'Asia/Istanbul',
    'Asia/Kuwait',
    'Asia/Qatar',
    'Asia/Riyadh',
    'Etc/GMT-3',
    'Europe/Istanbul',
    'Europe/Kirov',
    'Europe/Minsk',
    'Europe/Moscow',
    'Europe/Simferopol',
    'Europe/Volgograd',
    'Indian/Antananarivo',
    'Indian/Comoro',
    'Indian/Mayotte',
    'Turkey',
    'W-SU',
    'Asia/Tehran',
    'Iran',
    'Asia/Baku',
    'Asia/Dubai',
    'Asia/Muscat',
    'Asia/Tbilisi',
    'Asia/Yerevan',
    'Etc/GMT-4',
    'Europe/Astrakhan',
    'Europe/Samara',
    'Europe/Saratov',
    'Europe/Ulyanovsk',
    'Indian/Mahe',
    'Indian/Mauritius',
    'Indian/Reunion',
    'Asia/Kabul',
    'Antarctica/Mawson',
    'Asia/Aqtau',
    'Asia/Aqtobe',
    'Asia/Ashgabat',
    'Asia/Ashkhabad',
    'Asia/Atyrau',
    'Asia/Dushanbe',
    'Asia/Karachi',
    'Asia/Oral',
    'Asia/Qyzylorda',
    'Asia/Samarkand',
    'Asia/Tashkent',
    'Asia/Yekaterinburg',
    'Etc/GMT-5',
    'Indian/Kerguelen',
    'Indian/Maldives',
    'Asia/Calcutta',
    'Asia/Colombo',
    'Asia/Kolkata',
    'Asia/Kathmandu',
    'Asia/Katmandu',
    'Antarctica/Vostok',
    'Asia/Almaty',
    'Asia/Bishkek',
    'Asia/Dacca',
    'Asia/Dhaka',
    'Asia/Kashgar',
    'Asia/Omsk',
    'Asia/Qostanay',
    'Asia/Thimbu',
    'Asia/Thimphu',
    'Asia/Urumqi',
    'Etc/GMT-6',
    'Indian/Chagos',
    'Asia/Rangoon',
    'Asia/Yangon',
    'Indian/Cocos',
    'Antarctica/Davis',
    'Asia/Bangkok',
    'Asia/Barnaul',
    'Asia/Ho_Chi_Minh',
    'Asia/Hovd',
    'Asia/Jakarta',
    'Asia/Krasnoyarsk',
    'Asia/Novokuznetsk',
    'Asia/Novosibirsk',
    'Asia/Phnom_Penh',
    'Asia/Pontianak',
    'Asia/Saigon',
    'Asia/Tomsk',
    'Asia/Vientiane',
    'Etc/GMT-7',
    'Indian/Christmas',
    'Asia/Brunei',
    'Asia/Choibalsan',
    'Asia/Chongqing',
    'Asia/Chungking',
    'Asia/Harbin',
    'Asia/Hong_Kong',
    'Asia/Irkutsk',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Asia/Macao',
    'Asia/Macau',
    'Asia/Makassar',
    'Asia/Manila',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Taipei',
    'Asia/Ujung_Pandang',
    'Asia/Ulaanbaatar',
    'Asia/Ulan_Bator',
    'Australia/Perth',
    'Australia/West',
    'Etc/GMT-8',
    'Hongkong',
    'PRC',
    'ROC',
    'Singapore',
    'Australia/Eucla',
    'Asia/Chita',
    'Asia/Dili',
    'Asia/Jayapura',
    'Asia/Khandyga',
    'Asia/Pyongyang',
    'Asia/Seoul',
    'Asia/Tokyo',
    'Asia/Yakutsk',
    'Etc/GMT-9',
    'Japan',
    'Pacific/Palau',
    'ROK',
    'Australia/Darwin',
    'Australia/North',
    'Antarctica/DumontDUrville',
    'Asia/Ust-Nera',
    'Asia/Vladivostok',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Queensland',
    'Etc/GMT-10',
    'Pacific/Chuuk',
    'Pacific/Guam',
    'Pacific/Port_Moresby',
    'Pacific/Saipan',
    'Pacific/Truk',
    'Pacific/Yap',
    'Australia/Adelaide',
    'Australia/Broken_Hill',
    'Australia/South',
    'Australia/Yancowinna',
    'Antarctica/Casey',
    'Antarctica/Macquarie',
    'Asia/Magadan',
    'Asia/Sakhalin',
    'Asia/Srednekolymsk',
    'Australia/ACT',
    'Australia/Canberra',
    'Australia/Currie',
    'Australia/Hobart',
    'Australia/LHI',
    'Australia/Lord_Howe',
    'Australia/Melbourne',
    'Australia/NSW',
    'Australia/Sydney',
    'Australia/Tasmania',
    'Australia/Victoria',
    'Etc/GMT-11',
    'Pacific/Bougainville',
    'Pacific/Efate',
    'Pacific/Guadalcanal',
    'Pacific/Kosrae',
    'Pacific/Noumea',
    'Pacific/Pohnpei',
    'Pacific/Ponape',
    'Asia/Anadyr',
    'Asia/Kamchatka',
    'Etc/GMT-12',
    'Kwajalein',
    'Pacific/Fiji',
    'Pacific/Funafuti',
    'Pacific/Kwajalein',
    'Pacific/Majuro',
    'Pacific/Nauru',
    'Pacific/Norfolk',
    'Pacific/Tarawa',
    'Pacific/Wake',
    'Pacific/Wallis',
    'Antarctica/McMurdo',
    'Antarctica/South_Pole',
    'Etc/GMT-13',
    'NZ',
    'Pacific/Auckland',
    'Pacific/Enderbury',
    'Pacific/Fakaofo',
    'Pacific/Tongatapu',
    'NZ-CHAT',
    'Pacific/Chatham',
    'Etc/GMT-14',
    'Pacific/Apia',
    'Pacific/Kiritimati'
]
const currentTimezone = reactive({ is: Intl.DateTimeFormat().resolvedOptions().timeZone });
const timeZoneSelectDropdown = ref()
const timeSelected = ref(null)

const formDetails = ref(null)
const formDetailsRevealed = ref(false)

onMounted(() => {
    setTimeout(() => {
        intro.value.classList.add('is-revealed')
    }, 400);

    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
});

function handleScroll(e) {
    if (window.innerHeight - formDetails.value.getBoundingClientRect().top >= formDetails.value.offsetHeight / 2) {
        formDetailsRevealed.value = true
    }
}

function onSelectTimezone(menu) {
    currentTimezone.is = menu

    timeZoneSelectDropdown.value.closeSelectDropdown()
}

function getCurrentTime(timezone, hour12 = false) {
  return now.toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: hour12
    })
}

function convertHour() {
    hourClock24.value = !hourClock24.value

    getCurrentTime(currentTimezone.is, hourClock24.value)
}

function amPmSwitch(which) {
    which === 'AM' ? amPm.value = 'AM' : amPm.value = 'PM'
}
</script>