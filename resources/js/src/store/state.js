/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import themeConfig from "@/../themeConfig.js";

// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const is_touch_device = () => {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

const state = {
    // Can be used to get current window width
    windowWidth: null,
    theme: themeConfig.theme || 'light',

    // Note: Below breakpoint state is for internal use of sidebar & navbar component
    scrollY: 0,
    mainLayoutType: themeConfig.mainLayoutType || 'vertical',
    isVerticalNavMenuActive: true,
    verticalNavMenuItemsMin: false,
    reduceButton: themeConfig.sidebarCollapsed,
    verticalNavMenuWidth: 'default',
    is_touch_device: is_touch_device()
}

export default state
