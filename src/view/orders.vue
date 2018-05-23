<template>
    <div class="page-container">
        <header-top title="订单"></header-top>
        <div class="order-list">
            <div class="order-address">
                <img src="../assets/elm.png" />
                <div class="order-name">
                    <p>曼苓粥店</p>
                    <p>2018-02-07 17：17</p>
                </div>
                <span>订单已送达</span>
            </div>
            <div class="order-price">
                <span>油条2跟／ 等4件商品</span>
                <span>¥43.78</span>
            </div>
            <div class="order-similar">
                <span>相似商家</span>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import HeaderTop from '../components/header.vue'
    import tabbar from '../components/tabbar.vue';

    export default {
        data(){
            return{

            }
        },
        components: {
            HeaderTop,
            tabbar
        },
    }
</script>

<style lang="scss" scoped>
    .page-container {
        width: 100%;
        display: block;
        position: fixed;
        background-color: white;

        .order-list {
            width: 93%;
            margin: 0 auto;
            display: block;
            .order-address{
                position: relative;
                width: 100%;
                top: .5rem;
                img {
                    position: absolute;
                    left:.3rem;
                    width: 1.2rem;
                    height: 1.2rem;
                }
                .order-name {
                    position: absolute;
                    width: 50%;
                    height: 1.5rem;
                    display: block;
                    text-align: left;
                    left: 1.8rem;
                    text-decoration: none;
                    p {
                        display: block;
                        text-align: left;
                        margin-top: 0rem;
                        font-size: .35rem;
                        line-height: .4rem;
                        padding: 0 0;
                    }
                }
                span {
                    position: absolute;
                    right: .3rem;
                    font-size: .35rem;
                }
            }
            .order-price {
                position: relative;
                width: 100%;
                left:1.5rem;
                height: .8rem;
                top:2.1rem;
                span:nth-of-type(1){
                    font-size: .35rem;
                    position: absolute;
                    left:.3rem
                 }
                span:nth-of-type(2){
                    font-size: .35rem;
                    position: absolute;
                    right:1.9rem;
                }
            }
            .order-similar {
                position: relative;
                width: 100%;
                left:1.5rem;
                height: .8rem;
                top:2.5rem;
                span{
                    text-align: center;
                    position: absolute;
                    right:1.9rem;
                    font-size: .35rem;
                    color: dodgerblue;
                    border: 1px solid dodgerblue;
                    padding: .2em .3rem;
                }
            }
        }
    }

</style>