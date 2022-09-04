import Vuex from 'vuex';
import Vue from 'vue';
import examResultSystem from './examResultSystem.js';


//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules:{
        examResultSystem
    }
})