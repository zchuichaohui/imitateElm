<template>
    <div class="tabbar-style">
        <tabbar>
            <tabbar-item>
                <img slot="icon" selected  @click = "gotoAddress({path: '/msite'})" src="../assets/elm.png">
                <span slot="label">外卖</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <img slot="icon"  @click = "gotoAddress({path: '/find'})" src="../assets/find.png">
                <span slot="label">发现</span>
            </tabbar-item>
            <tabbar-item  @click = "gotoAddress({path: '/msite'})" link="/orders">
                <img slot="icon" src="../assets/order.png">
                <span slot="label">订单</span>
            </tabbar-item>
            <tabbar-item @click = "gotoAddress({path: '/mine'})" badge="2" link="/mine">
                <img slot="icon" src="../assets/mine.png">
                <span slot="label" style="line-height: .1rem">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem, Group, Cell } from 'vux'

    export default {
        data(){
            return{

            }
        },
        created(){

        },
        mounted(){

        },
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell
        },
        methods: {
            gotoAddress(path){
                this.$router.push(path)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .tabbar-style {
        position: fixed;
        bottom: 0rem;
        background-color: red !important;
        width: 100%;
        height: 1.95rem !important;
    }
</style>