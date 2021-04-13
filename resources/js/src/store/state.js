/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import themeConfig from "@/../themeConfig.js";

const state = {
    // Can be used to get current window width
    windowWidth: null,
    theme: themeConfig.theme || 'light',

    // Note: Below breakpoint state is for internal use of sidebar & navbar component
    scrollY: 0,
    mainLayoutType: themeConfig.mainLayoutType || 'vertical',
}

export default state
