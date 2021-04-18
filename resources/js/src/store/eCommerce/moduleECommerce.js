import state from './moduleECommerceState.js';
import mutations from "./moduleECommerceMutations";
import actions from './moduleECommerceActions';
import getters from './moduleECommerceGetters';

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
