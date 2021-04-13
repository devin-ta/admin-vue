import Vue from 'vue';
import App from './App.vue';

// Theme Configurations
import '../themeConfig.js'

// Vue Router
import router from './router';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
