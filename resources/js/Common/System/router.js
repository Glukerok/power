import Vue from "vue";
import VueRouter from "vue-router";

import MainIndex from '../../Components/Main/index';
import MainHome from '../../Components/Main/home';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainIndex,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: MainHome
                },
            ]
        },
    ]

})
