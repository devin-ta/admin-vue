import Vue from 'vue';
import App from './App.vue';

// Vuesax Component Framework
import Vuesax from 'vuesax';

Vue.use(Vuesax);

// Theme Configurations
import '../themeConfig.js';

// Vue Router
import router from './router';

// Vuex Store
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
