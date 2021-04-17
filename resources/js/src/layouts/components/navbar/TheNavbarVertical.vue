<template>
    <div class="relative">
        <div class="vx-navbar-wrapper" :class="classObj">
            <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal" :class="textColor">
                <!-- SM - OPEN SIDEBAR BUTTON -->
                <feather-icon class="sm:inline-flex xl:hidden cursor-pointer p-2" icon="MenuIcon" @click.stop="showSidebar" />

                <bookmarks :navbarColor="navbarColor" v-if="windowWidth >= 992" />

                <vs-spacer />

                <i18n />
            </vs-navbar>
        </div>
    </div>
</template>

<script>
import Bookmarks from "./components/Bookmarks.vue";
import I18n from "./components/I18n.vue";
export default {
    name: "the-navbar-vertical",
    props: {
        navbarColor: {
            type: String,
            default: '#fff'
        }
    },
    components: {
        Bookmarks,
        I18n
    },
    computed: {
        // NAVBAR STYLE
        classObj() {
            if (this.verticalNavMenuWidth == 'default') return 'navbar-default'
            else if (this.verticalNavMenuWidth == 'reduced') return 'navbar-reduced'
            else if (this.verticalNavMenuWidth) return 'navbar-full'
        },
        verticalNavMenuWidth() {
            return this.$store.state.verticalNavMenuWidth;
        },
        navbarColorLocal() {
            return this.$store.state.theme === 'dark' && this.navbarColor === '#fff' ? '#10163a' : this.navbarColor;
        },
        textColor() {
            return {'text-white': (this.navbarColor != '#10163a' && this.$store.state.theme === 'dark') || (this.navbarColor != '#fff' && this.$store.state.theme !== 'dark')}
        },
        windowWidth() {
            return this.$store.state.windowWidth;
        }
    },
    methods: {
        showSidebar() {
            this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
        }
    }
}
</script>

<style scoped>

</style>
