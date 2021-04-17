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
    },

    // Vertical NavMenu Controll
    TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
        state.isVerticalNavMenuActive = value
    },
    UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
        state.verticalNavMenuItemsMin = val;
    },
    TOGGLE_REDUCE_BUTTON(state, val) {
        state.reduceButton = val
    },
    UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
        state.verticalNavMenuWidth = width
    },

    // Navbar-Vertical
    ARRANGE_STARRED_PAGES_LIMITED(state, list) {
        const starredPagesMore = state.starredPages.slice(10);
        state.starredPages = list.concat(starredPagesMore);
    },
    ARRANGE_STARRED_PAGES_MORE(state, list) {
        let downToUp = false;
        let lastItemInStarredLimited = state.starredPages[10];
        const starredPagesLimited = state.starredPages.slice(0, 10);
        state.starredPages = starredPagesLimited.concat(list);

        state.starredPages.slice(0, 10).map((i) => {
            if (list.indexOf(i) > -1) downToUp = true;
        });

        if (!downToUp) {
            state.starredPages.splice(10, 0, lastItemInStarredLimited);
        }
    },
    TOGGLE_CONTENT_OVERLAY(state, val) {
        state.bodyOverlay = val;
    },
    // VxAutoSuggest
    UPDATE_STARRED_PAGE(state, payload) {
        // find item index in search list state
        const index = state.navbarSearchAndPinList['pages'].data.findIndex((item) => item.url == payload.url);

        // update the main list
        state.navbarSearchAndPinList['pages'].data[index].is_bookmarked = payload.val;

        // if val is true, add it to starred else remove
        if (payload.val) {
            state.starredPages.push(state.navbarSearchAndPinList['pages'].data[index]);
        } else {
            // find item index from starred pages
            const index = state.starredPages.findIndex((item) => item.url == payload.url);

            // remove item using index
            state.starredPages.splice(index, 1);
        }
    }
}

export default mutations

