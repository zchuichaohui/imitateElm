<template>
    <div class="page-container">
        <header-top title="我的"></header-top>
        <div class="my-header">
            <div class="header-info">
                <img class="default-header" src="../assets/default_head.png"/>
                <div class="nick-number">
                    <span>{{this.$store.state.nickname}}</span>
                    <div class="head-number">
                        <img src="../assets/shouji.png"/>
                        <span>18876403389</span>
                    </div>
                </div>
                <img class="header-arrow" src="../assets/arrow.png"/>
            </div>
        </div>
        <div class="my-money">
            <ul>
                <li>
                    <span>{{ count}}</span>
                    <span>钱包</span>
                </li>
                <li>
                    <span>0.00元</span>
                    <span>钱包</span>
                </li>
                <li>
                    <span>0.00元</span>
                    <span>钱包</span>
                </li>
            </ul>
        </div>

        <div class="my-img">
            <img src="../assets/hongbao.jpg"/>
        </div>

        <div class="my-address">
        <group>
            <cell :title="name" is-link value-align="left" class="cell-style">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/elm.png">
            </cell>
            <cell :title="name" is-link value-align="left" class="cell-style">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/elm.png">
            </cell>
            <cell :title="name" is-link value-align="left" class="cell-style">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/elm.png">
            </cell>
        </group>
    </div>

        <div class="my-elm">
            <group>
                <cell :title="name"  is-link value-align="left"  class="cell-style">
                    <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/elm.png">
                </cell>
                <cell :title="name" is-link value-align="left" class="cell-style">
                    <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/elm.png">
                </cell>
                <cell :title="name" is-link value-align="left" class="cell-style">
                    <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/elm.png">
                </cell>
                <cell :title="name" is-link value-align="left" class="cell-style">
                    <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/elm.png">
                </cell>
            </group>
        </div>

        <div class="my-img">
            <img src="../assets/hongbao.jpg"/>
        </div>

        <tabbar></tabbar>
        <!--<bar></bar>-->
    </div>
</template>

<script>
    import bar from '../components/bar';
    import axiosPlugin from "../axios";
    import Vue from 'vue'
    import HeaderTop from '../components/header.vue'
    import tabbar from '../components/tabbar.vue';
    import {Group, Cell} from 'vux'
    import {mapState} from 'vuex';

    Vue.use(axiosPlugin);

    export default {
        data() {
            return {
                name: "我的收藏",
                nickname: this.$store.state.nickname,
            }
        },
        components: {
            bar,
            HeaderTop,
            tabbar,
            Group,
            Cell
        },
        computed:{
            ...mapState(['userInfo','count'])
        },

        mounted() {
            this.$store.commit('add');
            this.$store.commit('modifyNickname','zchui')
            console.log("hhhhhhhhhh:" + this.$store.state.count + "//" + this.$store.state.nickname);
//            this.$fetch('/api/v2/movie/top250')
//                .then((response) => {
//                    console.log(response)
//                })
//           this.$httpa.post('test_ele/menu_sort',{
//               params:{
//
//               }
//           })
//               .then(function (response) {
//                   console.log("获取成功333"+ response);
//           })
//               .catch(function (error) {
//                   console.log("获取失败333"+JSON.stringify(error));
//               })

        },
    }
</script>

<style lang="scss" scoped>
    .page-container {
        width: 100%;
        display: block;
        background-color: white;
        .my-header {
            width: 100%;
            margin-top: 1.8rem;
            background-color: dodgerblue;
            overflow-x: hidden;
            display: block;
            height: 3.3rem;
            .header-info {
                position: relative;
                width: 94%;
                margin: .75rem auto;
                .default-header {
                    position: absolute;
                    left: .2rem;
                    width: 2rem;
                    height: 2rem;
                }
                .nick-number {
                    position: absolute;
                    left: 3rem;
                    span {
                        display: block;
                        font-size: .45rem !important;
                        color: white;
                    }
                    .head-number {
                        position: relative;
                        img {
                            position: absolute;
                            left: 0rem;
                            text-align: center;
                        }
                        span {
                            position: absolute;
                            left: 1rem;
                            text-align: center;
                            font-size: .45rem !important;
                            color: white;
                        }
                    }
                }
                .header-arrow {
                    position: absolute;
                    right: .2rem;
                    width: 1.4rem;
                    height: 1.4rem;
                }
            }
        }

        .my-money {
            background-color: white;
            width: 100%;
            position: relative;
            left: 0rem;
            overflow-x: hidden;
            ul {
                -webkit-margin-before: 0px;
                -webkit-margin-after: 0px;
                -webkit-margin-start: 0px;
                -webkit-margin-end: 0px;
                -webkit-padding-start: 0px;
                li {
                    width: 33%;
                    list-style: none;
                    float: left;
                    border-right: 1px solid gainsboro;
                    span {
                        display: block;
                    }
                }

            }
        }

        .my-img {
            width: 100%;
            height: 2.8rem;
            margin-top: .3rem;
            margin-bottom: .3rem;
            background-color: gray;
            z-index: 20;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .my-address {
            .cell-style {
                height: 1.2rem;
            }

        }

        .my-elm {
            .cell-style {
                height: 1.2rem;
            }
        }

    }
</style>