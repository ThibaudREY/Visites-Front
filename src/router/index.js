import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'

Vue.use(Router)

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
        }
    ]
})