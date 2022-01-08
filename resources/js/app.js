import Vue from "vue";

import router from './Common/System/router';
import store from './Common/System/store';

import App from "./Common/System/app";

require('./bootstrap');

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
})
