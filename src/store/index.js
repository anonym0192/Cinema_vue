import Vue from "vue";
import Vuex from "vuex";
import movieData from './movieData';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        movieData
    }
})
