/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const mutations = {
    UPDATE_WINDOW_WIDTH(state, width) {
        state.windowWidth = width;
    },
    UPDATE_WINDOW_SCROLL_Y(state, val) {
        state.scrollY = val;
    }
}

export default mutations

