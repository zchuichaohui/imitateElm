import Vue from 'vue'
import App from '../App.vue'
import Router from 'vue-router'
import msite from '../view/msite.vue'
import mine from '../view/mine.vue'
import orders from  '../view/orders.vue'
import find from  '../view/find.vue'
import login from  '../view/login.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: App,
            children: [
                {
                    path: '',
                    redirect: '/mine'
                },
                {
                    path: '/mine',
                    name:'mine',
                    component: mine
                }, {
                    path: '/msite',
                    name:'msite',
                    component: msite
                },
                {
                    path: '/orders',
                    name:'orders',
                    component: orders
                },
                {
                    path: '/find',
                    name:'find',
                    component: find
                },
                {
                    path: '/login',
                    name:'login',
                    component: login
                }
            ]
        }
    ]
})


// 路由拦截
// 差点忘了说明,不是所有版块都需要鉴权的
// 所以需要鉴权,我都会在路由meta添加添加一个字段requireLogin,设置为true的时候
// 这货就必须走鉴权,像登录页这些不要,是可以直接访问的!!!
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(res => res.meta.requireLogin)) {
//         // 判断是否需要登录权限
//         if (window.localStorage.getItem("loginUserBaseInfo")) {
//             // 判断是否登录
//             let lifeTime =
//                 JSON.parse(window.localStorage.getItem("loginUserBaseInfo")).lifeTime *
//                 1000;
//             let nowTime = (new Date()).getTime(); // 当前时间的时间戳
//             if (nowTime < lifeTime) {
//                 next();
//             } else {
//                 Message({
//                     showClose: true,
//                     message: "登录状态信息过期,请重新登录",
//                     type: "error"
//                 });
//                 next({
//                     path: "/login"
//                 });
//             }
//         } else {
//             // 没登录则跳转到登录界面
//             next({
//                 path: "/login"
//             });
//         }
//     } else {
//         next();
//     }
// });

export default router;

