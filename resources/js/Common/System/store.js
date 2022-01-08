import Vuex from 'vuex'
import Vue from "vue";
import auth from './../../DataCore/Modules/auth';


Vue.use(Vuex);

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        auth,
    }
})

export default store
