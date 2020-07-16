import Vue from 'vue'
import Router from 'vue-router'
import no1 from './com/no1'
import no2 from './com/no2'

Vue.use(Router)


var routes = [
    {path:'/',name:'no1',component:no1},
    {path:'/no2',name:'no2',component:no2}
]

export default new Router({
    routes
})