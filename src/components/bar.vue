<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <tabbar>
            <tabbar-item selected link="/msite" @on-item-click="tabbarChoose(0)">
                <img v-if="choosed!=0" slot="icon" src="../assets/elm.png">
                <img v-else slot="icon" src="../assets/elm.png">
                <span v-if="choosed!=0" slot="label" class="c-grey">外卖</span>
                <span v-else slot="label" class="c-red">外卖</span>
            </tabbar-item>

            <tabbar-item link="/msite" @on-item-click="tabbarChoose(1)">
                <img v-if="choosed!=1" slot="icon" src="../assets/find.png">
                <img v-else slot="icon" src="../assets/find.png">
                <span v-if="choosed!=1" slot="label" class="c-grey">发现</span>
                <span v-else slot="label" class="c-red">发现</span>
            </tabbar-item>

            <tabbar-item link="/msite" @on-item-click="tabbarChoose(2)">
                <img v-if="choosed!=2" slot="icon" src="../assets/order.png">
                <img v-else slot="icon" src="../assets/order.png">
                <span v-if="choosed!=2" slot="label" class="c-grey" >订单</span>
                <span v-else slot="label" class="c-red">订单</span>
            </tabbar-item>

            <tabbar-item link="/mine" @on-item-click="tabbarChoose(3)">
                <img v-if="choosed!=3" slot="icon" src="../assets/mine.png">
                <img v-else slot="icon" src="../assets/mine.png">
                <span v-if="choosed!=3" slot="label" class="label c-grey" >我的</span>
                <span v-else slot="label" class="c-red" >我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<style>
    @import "./bar.scss";
</style>
<script>

    import {
        Swiper,
        Popup,
        XHeader,
        Tabbar,
        TabbarItem,
        Group,
        Cell
    } from 'vux'

  //  let prefixCls = "MeiDa-index"
    export default {
        components: {
            Swiper,
            Tabbar,
            TabbarItem,
            Group,
            Cell,
            XHeader,
            Popup
        },

        data() {
            var tabbarChoose = 0;
//            if(this.getSessionStorage(this.SESSION_STORAGE_KEY.IS_LOGIN)){
//                tabbarChoose = this.getSessionStorage(this.SESSION_STORAGE_KEY.TABBAR_CHOOSED);
//            }
            return {
                choosed: tabbarChoose,
            }
        },

        methods: {
            tabbarChoose(i) {
                console.log("ddddd")
            },

//            oneOf(value, validList) {
//                for(let i = 0; i < validList.length; i++) {
//                    if(value === validList[i]) {
//                        return true;
//                    }
//                }
//                return false
//            },

        },
        mounted() {},
        watch: {
//            '$route' (to, from) {
//                var self = this;
//                var flag = this.oneOf(to.path, ["/msite", "/msite", "/msite", "/msite", "/home"]);
//                if(flag) {
//                    document.body.setAttribute("data-return", "1");
//                }
//                var flag1 = this.oneOf(to.path, ["/subjectNew", "/shoppingCart"]);
//                if(flag1) {
//                    document.body.setAttribute("class", "bg-grey");
//                }
//                if(this.$route.query.tab) {
//                    this.choosed = this.$route.query.tab;
//                }
//            },
        }

    }
</script>