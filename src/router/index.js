import Vue from 'vue'
import Router from 'vue-router'
import vueConfig from 'vue-config'
import List from '@/components/List'
import Edit from '@/components/Edit'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueResource from 'vue-resource';


const configs = {
    agentApi: 'http://localhost:8080/agent',
    clientApi: 'http://localhost:8080/agent'
}

Vue.use(VueResource);
Vue.use(Router)
Vue.use(vueConfig, configs)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBgY4J3poPqV8GHM168oS9sgXd3fWFdddE',
        libraries: 'places'
    }
})

const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})

export default new Router({
    routes: [
        {
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/edit',
            name: 'Edit',
            component: Edit,
        }
    ]
})