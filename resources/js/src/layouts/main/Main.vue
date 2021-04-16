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
        </div>
    </div>
</template>

<script>

// TODO: VxTour plugin set up
import themeConfig from "@/../themeConfig";
import navMenuItems from "@/layouts/components/vertical-nav-menu/navMenuItems";
import VNavMenu from "@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue";

export default {
    components: {
        VNavMenu
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
