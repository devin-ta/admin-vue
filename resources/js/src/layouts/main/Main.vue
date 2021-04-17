<template>
    <div class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'no-scroll': isAppPage}]">
        <!-- TODO: VXTour Component -->
        <!-- TODO: Customizer Component -->

        <v-nav-menu
            :navMenuItems="navMenuItems"
            title="Vuexy"
            parent=".layout--main"
        />

        <div id="content-area" :class="[contentAreaClass, { 'show-overlay': bodyOverlay }]">
            <div id="content-overlay" />

            <template v-if="mainLayoutType === 'horizontal' && windowWidth >= 1200">
                <the-navbar-horizontal
                    :navbarType="navbarType"
                    :class="[
                        { 'text-white': isNavbarDark && !isThemeDark },
                        { 'text-base': !isNavbarDark && isThemeDark }
                    ]"
                />

                <div style="height: 62px" v-if="navbarType === 'static'"></div>

                <h-nav-menu
                    :class="[
                        { 'text-white': isNavbarDark && !isThemeDark },
                        { 'text-base': !isNavbarDark && isThemeDark }
                    ]"
                    :navMenuItems="navMenuItems"
                />
            </template>

            <template v-else>
                <the-navbar-vertical
                    :navbarColor="navbarColor"
                    :class="[
                        { 'text-white': isNavbarDark && !isThemeDark },
                        { 'text-base': !isNavbarDark && isThemeDark }
                    ]"
                />
            </template>
        </div>
    </div>
</template>

<script>

// TODO: VxTour plugin set up
import themeConfig from "@/../themeConfig";
import navMenuItems from "@/layouts/components/vertical-nav-menu/navMenuItems";
import VNavMenu from "@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue";
import TheNavbarVertical from "@/layouts/components/navbar/TheNavbarVertical.vue";
import TheNavbarHorizontal from "@/layouts/components/navbar/TheNavbarHorizontal.vue";
import HNavMenu from "@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue";

export default {
    components: {
        VNavMenu,
        TheNavbarVertical,
        TheNavbarHorizontal,
        HNavMenu
    },
    data() {
        return {
            disableCustomizer: themeConfig.disableCustomizer,
            disableThemeTour: themeConfig.disableThemeTour,
            // TODO: Dynamic watchers
            footerType: themeConfig.footerType || 'static',
            hideScrollToTop: themeConfig.hideScrollToTop,
            isNavbarDark: false,
            navbarColor: themeConfig.navbarColor || '#fff',
            navbarType: themeConfig.navbarType || 'floating',
            navMenuItems: navMenuItems,
            routerTransition: themeConfig.routerTransition || 'none',
            routeTitle: this.$route.meta.pageTitle,
            // TODO: Tour Steps
        }
    },
    watch: {

    },
    computed: {
        mainLayoutType() {
            return this.$store.state.mainLayoutType;
        },
        layoutTypeClass() {
            return `main-${this.mainLayoutType}`
        },
        navbarClasses() {
            return {
                'navbar-hidden': this.navbarType === 'hidden',
                'navbar-sticky': this.navbarType === 'sticky',
                'navbar-static': this.navbarType === 'static',
                'navbar-floating': this.navbarType === 'floating',
            }
        },
        footerClasses() {
            return {
                'footer-hidden': this.footerType === 'hidden',
                'footer-sticky': this.footerType === 'sticky',
                'footer-static': this.footerType === 'static',
            }
        },
        isAppPage() {
            return this.$route.meta.no_scroll;
        },
        contentAreaClass() {
            if (this.mainLayoutType === 'vertical') {
                if (this.verticalNavMenuWidth == 'default') return 'content-area-reduced'
                else if (this.verticalNavMenuWidth == 'reduced') return 'content-area-lg'
                else return 'content-area-full'
            }
            else return 'content-area-full'
        },
        verticalNavMenuWidth() {
            return this.$store.state.verticalNavMenuWidth;
        },
        bodyOverlay() {
            return this.$store.state.bodyOverlay;
        },
        windowWidth() {
            return this.$store.state.windowWidth;
        },
        isThemeDark() {
            return this.$store.state.theme == 'dark';
        }
    },
    methods: {

    },
    created() {

    },
    destroyed() {

    }
}
</script>

<style scoped>

</style>
