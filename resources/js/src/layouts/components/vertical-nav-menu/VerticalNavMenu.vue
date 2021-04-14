<template>
    <div class="parentx">
        <vs-sidebar
            class="v-nav-menu items-no-padding"
            v-model="isVerticalNavMenuActive"
            ref="verticalNavMenu"
            default-index="-1"
            :click-not-close="clickNotClose"
            :reduce-not-rebound="reduceNotRebound"
            :parent="parent"
            :hiddenBackground="clickNotClose"
            :reduce="reduce"
            v-hammer:swipe="onMenuSwipe"
        >

            <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">

                <!-- Header -->
                <div class="header-sidebar flex items-end justify-between" slot="header">

                    <!-- Logo -->
                    <router-link tag="div" class="vx-logo cursor-pointer flex items-center" to="/">
                        <logo class="w-10 mr-4 fill-current text-primary" />
                        <span class="vx-logo-text text-primary" v-show="isMouseEnter || !reduce" v-if="title">{{ title }}</span>
                    </router-link>
                    <!-- /Logo -->

                    <!-- Menu Buttons -->
                    <div>
                        <!-- Close Button -->
                        <template v-if="showCloseButton">
                            <feather-icon icon="XIcon" class="m-0 cursor-pointer" @click="$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)" />
                        </template>
                        <!-- /Close Button -->

                        <!-- Toggle Button-->
                        <template v-else-if="!showCloseButton && !verticalNavMenuItemsMin">
                            <feather-icon
                                id="btnVNavMenuMinToggler"
                                class="mr-0 cursor-pointer"
                                :icon="reduce ? 'CircleIcon' : 'DiscIcon'"
                                svg-classes="stroke-current text-primary"
                                @click="toggleReduce(!reduce)"
                            />
                        </template>
                        <!-- /Toggle Button-->
                    </div>
                    <!-- /Menu Buttons -->

                </div>
                <!-- /Header -->

                <!-- Header shadow -->
                <div class="shadow-bottom" v-show="showShadowBottom" />

                <!-- Menu Items -->
                <component :is="scrollbarTag" ref="verticalNavMenuPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psSectionScroll" @scroll="psSectionScroll" :key="$vs.rtl" >
                    <template v-for="(item, index) in menuItemsUpdated">

                        <!-- Group Header -->
                        <span v-if="item.header && !verticalNavMenuItemsMin" class="navigation-header truncate" :key="`header-${index}`">
                            {{ $t(item.i18n) || item.header }}
                        </span>
                        <!-- /Group Header -->

                    </template>
                </component>
                <!-- /Menu Items -->

            </div>

        </vs-sidebar>
    </div>
</template>

<script>
import Logo from "../Logo.vue";
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
export default {
    name: "v-nav-menu",
    components: {
        Logo,
        VuePerfectScrollbar
    },
    props: {
        logo: {
            type: String,
        },
        openGroupHover: {
            type: Boolean,
            default: false,
        },
        parent: {
            type: String,
        },
        reduceNotRebound: {
            type: Boolean,
            default: true
        },
        navMenuItems: {
            type: Array,
            required: true,
        },
        title: {
            type: String
        }
    },
    data: () => ({
        clickNotClose: false, // disable close navMenu on outside click
        isMouseEnter: false,
        reduce: false, // determines if navMenu is reduce - component property
        showCloseButton: false, // show close button in smaller devices
        settings: {
            maxScrollbarLength: 60,
            wheelSpeed: 1,
            swipeEasing: true,
        },
        showShadowBottom: false,
    }),
    computed: {
        isVerticalNavMenuActive: {
            get() {
                return this.$store.state.isVerticalNavMenuActive;
            },
            set(val) {
                this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', val);
            }
        },
        verticalNavMenuItemsMin() {
            return this.$store.state.verticalNavMenuItemsMin;
        },
        reduceButton: {
            get() {
                return this.$store.state.reduceButton;
            },
            set(val) {
                this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
            }
        },
        windowWidth() {
            return this.$store.state.windowWidth;
        },
        layoutType() {
            return this.$store.state.mainLayoutType;
        },
        isVerticalNavMenuReduced() {
            return Boolean(this.reduce && this.reduceButton);
        },
        scrollbarTag() {
            return this.$store.getters.scrollbarTag;
        },
        menuItemsUpdated() {
            let clone = this.navMenuItems.slice();

            for (let [index, item] of this.navMenuItems.entries()) {
                if (item.header && item.items.length && (index || 1)) {
                    let i = clone.findIndex(ix => ix.header === item.header);
                    for (let [subIndex, subItem] of item.items.entries()) {
                        clone.splice(i + 1 + subIndex, 0, subItem);
                    }
                }
            }

            return clone;
        }
    },
    watch: {

    },
    methods: {
        onMenuSwipe(event) {
            // Swipe Right
            if (event.direction === 4 && this.$vs.rtl) {
                if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false
            }

            // Swipe Left
            else if (event.direction === 2 && !this.$vs.rtl) {
                if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false
            }
        },
        mouseEnter() {
            if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false)
            this.isMouseEnter = true;
        },
        mouseLeave() {
            if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', true)
            this.isMouseEnter = false;
        },
        toggleReduce(val) {
            this.reduceButton = val;
            this.setVerticalNavMenuWidth();
        },
        setVerticalNavMenuWidth() {
            if (this.windowWidth > 1200) {
                if (this.layoutType === 'vertical') {
                    // Set reduce
                    this.reduce = !!this.reduceButton;

                    // Open NavMenu
                    this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);

                    // Set Menu Items Only Icon Mode
                    const verticalNavMenuItemsMin = !!(this.reduceButton && !this.isMouseEnter);
                    this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin);

                    // Menu Action Buttons
                    this.clickNotClose = true;
                    this.showCloseButton = false;

                    const verticalNavMenuWidth = this.isVerticalNavMenuReduced ? 'reduced' : 'default';
                    this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);

                    return;
                }
            }

            // Close NavMenu
            this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false);

            // Reduce Button
            if (this.reduceButton) this.reduce = false;

            // Menu Action buttons
            this.showCloseButton = true;
            this.clickNotClose = false;

            // Update NavMenu Width
            this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu');

            // Remove Only Icon in Menu
            this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false);
        },
        psSectionScroll() {
            const scroll_el = this.$refs.verticalNavMenuPs.$el || this.$refs.verticalNavMenuPs;
            this.showShadowBottom = scroll_el.scrollTop > 0;
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
@import "@sass/vuexy/components/verticalNavMenu.scss";
</style>
