<template>
    <div>
        <div class="header">
            <div class="address-weather">
                <div style="display: inline;float: left;margin-left: .3rem">
                    <img src="../assets/address.png">
                    <span>海外滩金融A座</span>
                    <img src="../assets/address.png">
                </div>
                <div style="display: inline; margin-left: 7.5rem;margin-top: .3rem">
                    <span>30</span>
                    <img src="../assets/weather.png">
                </div>
            </div>
            <div class="header-search">
                <search
                        @result-click="resultClick"
                        @on-change="getResult"
                        :results="results"
                        v-model="value"
                        placeholder="请输入kkk"
                        @on-focus="onFocus"
                        @on-cancel="onCancel"
                        @on-submit="onSubmit"
                        ref="search"></search>
            </div>
            <div class="header-recommand">
                <ul>
                    <li>蛋糕</li>
                    <li>冷面</li>
                    <li>麦当劳</li>
                    <li>水果49减30</li>
                    <li>吃货公敌</li>
                    <li>凉皮</li>
                    <li>咖啡</li>
                </ul>
            </div>
            <img style="width: 80%;height: 2.8rem;margin-top: .1rem;border:solid .1rem mediumblue;border-radius: .2rem;z-index: 2"
                 src="../assets/hongbao.jpg"/>
        </div>
        <div class="contain">
            <swiper auto height="5.5rem">
                <swiper-item class="black">
                    <grid :cols="5" :show-lr-borders="false">
                        <grid-item v-for="(item,index) in menuType" :key="index">
                            <div class="grid-center">
                                <img :src="item.img" style="display: block;width: 1.8rem;height:1.8rem;"/>
                                <span class="grod-center-span">{{item.name}}</span>
                            </div>
                        </grid-item>
                    </grid>
                </swiper-item>
                <swiper-item class="black">
                    <grid :cols="5" :show-lr-borders="false">
                        <grid-item v-for="i in 10" :key="i">
                            <div class="grid-center">
                                <img src="../assets/elm.png" style="display: block;width: .8rem;height:.9rem;"/>
                                <span  class="grod-center-span">汉堡薯条</span>
                            </div>
                        </grid-item>
                    </grid>
                </swiper-item>
            </swiper>

            <swiper :list="demo03_list" auto style="width:90%;margin:0 auto;" height="80px" dots-class="custom-bottom"
                    dots-position="center"></swiper>

            <div class="two-block">
                <img :src="menuType[0].img"/>
                <img :src="menuType[0].img"/>
            </div>

            <div class="three-block">
                <img :src="menuType[0].img"/>
                <img :src="menuType[0].img"/>
                <img :src="menuType[0].img"/>
            </div>

            <div class="one-block">
                <img :src="menuType[0].img"/>
            </div>

            <div class="quality-select">
                <span>品质优选</span>
                <span>更多</span>
            </div>

            <div class="quality-list">
                <div class="list-tip">
                    <img src="../assets/elm.png"/>
                    <span>人在茶在</span>
                    <span>大牌精选</span>
                </div>
                <div class="list-tip">
                    <img src="../assets/elm.png"/>
                    <span>人在茶在</span>
                    <span>大牌精选</span>
                </div>
                <div class="list-tip">
                    <img src="../assets/elm.png"/>
                    <span>人在茶在</span>
                    <span>大牌精选</span>
                </div>
                <div class="list-tip">
                    <img src="../assets/elm.png"/>
                    <span>人在茶在</span>
                    <span>大牌精选</span>
                </div>
            </div>

            <div class="command-shop">
                <span>-推荐商家-</span>
            </div>

            <div class="tab-list">
                <tab>
                    <tab-item selected @on-item-click="onItemClick">综合排序</tab-item>
                    <tab-item @on-item-click="onItemClick">好评优选</tab-item>
                    <tab-item @on-item-click="onItemClick">距离最近</tab-item>
                    <tab-item @on-item-click="onItemClick">筛选</tab-item>
                </tab>

                <div class="tab-details">
                    <div class="item-details">
                        <img src="../assets/elm.png"/>
                        <div class="shop-details">
                            <div class="shop-name">
                                <span>1点点(大林店)</span>
                                <span>...</span>
                            </div>
                            <div class="shop-name">
                                <span>1点点(大林店)</span>
                                <span>...</span>
                            </div>
                            <div class="shop-name">
                                <span>1点点(大林店)</span>
                                <span>...</span>
                            </div>
                            <div class="shop-name">
                                <span>1点点(大林店)</span>
                                <span>...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="one-block">
                <img src="../assets/elm.png"/>
            </div>

        </div>

        <!--<bar></bar>-->
        <tabbar></tabbar>
    </div>
</template>


<script>
    import Vue from 'vue'
    import bar from '../components/bar';
    import api from '../api'
    import VueResource from 'vue-resource'
    import {Search, Cell} from 'vux'
    import {ButtonTab, ButtonTabItem} from 'vux'
    import {Swiper, SwiperItem, Grid, GridItem} from 'vux'
    import {Tab, TabItem} from 'vux'
    let Config = require("../config/config");
    import tabbar from '../components/tabbar.vue';


    /*使用VueResource插件*/
    Vue.use(VueResource)

    const imgList = [
        'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
        'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
        'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
    ]
    const demoList = imgList.map((one, index) => ({
        url: 'javascript:',
        img: one
    }))


    export default {
        data() {
            return {
                value: '美味',
                results: [],
                params: {},
                demo03_list: demoList,
                menuType:[],  //主页菜单分类
                shopType:[],  //获取商家
            }
        },
        components: {
            bar,
            Search,
            ButtonTab,
            ButtonTabItem,
            Cell,
            Swiper,
            SwiperItem,
            Grid,
            GridItem,
            Tab,
            TabItem,
            tabbar
        },
        methods: {
            setFocus() {
                this.$refs.search.setFocus()
            },
            resultClick(item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult(val) {
                console.log('on-change', val)
                this.results = val ? getResult(this.value) : []
            },
            onSubmit() {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
            },
            onFocus() {
                console.log('on focus')
            },
            onCancel() {
                console.log('on cancel')
            }
        },
        mounted() {
//            let params = {
//                country: 68,
//                lang: 140
//            }
//          api.login_in().then(data => {
//              if(data){
//                  alert("ddddddd")
//                  console.log("axios:" + JSON.stringify(data))
//                  this.setSession(data)
//                  this.$router.push(this.$route.query.redirect || '/Table')
//              }else{
//                  alert("FFFFFF")
//                  console.log("axios::::" + JSON.stringify(data))
//              }
//          })

//            this.$http({
//                url: 'http://192.168.1.9:8989/test_ele/menu_sort',
//                method: 'GET',
//                // 请求体重发送的数据
//                data: {
//
//                },
//            }).then(function (data) {
//                // 请求成功回调
//
//                console.log("vue-resource返回成功" + JSON.stringify(data))
//            }, function (error) {
//                // 请求失败回调
//                console.log("vue-resource返回失败" + JSON.stringify(error) + "dddd")
//            });
            //获取主页菜单分类
            this.$http.get(Config.base_url + '/Info/menu_sort').then((res) => {
                console.log("获取成功" + JSON.stringify(res))
                this.menuType = res.body.re_info
                console.log("获取成功ddddd" + this.menuType[0].name)
            }, (err) => {
                console.log("获取失败" + JSON.stringify(err))
            })

            //获取商家
            this.$http.post(Config.base_url + '/info/business',{
                    sort_id: 5
                },
            ).then(res => {
                this.shopType = res.body.re_info
            },function (error) {
                console.log("获取商家异常：" + JSON.stringify(error))
            })
        },
    }

    function getResult(val) {
        let rs = []
        for (let i = 0; i < 20; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs
    }
</script>

<style lang="scss">

    .header {
        width: 100%;
        height: 7.4rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #3190e8;
    }

    .address-weather {
        margin-top: 1.2rem;
        position: absolute;
        margin-left: 0rem;
        height: 1.6rem;
        img {
            width: .7rem;
            height: .7rem;
            text-align: center;
        }
        span {
            font-size: 0.4rem;
            text-align: center;
        }

    }

    .header-search {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        height: 1.2rem;
        margin-top: 2.6rem;
        background-color: white;
    }

    .header-recommand {
        height: 1.2rem;
        text-align: center;
        ul {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            list-style: none;
            display: inline;
            text-align: center;
        }
        ul li {
            display: inline;
            float: left;
            font-size: .3rem;
            display: inline;
            margin-left: 8px;

        }
    }

    .contain {
        margin-top: 8.2rem;
    }

    .grod-center-span {
        color:#333333;
        font-size: .2rem !important;
        display: inline;
    }

    .two-block {
        width: 96%;
        margin: 0 auto;
        overflow-x: hidden;
        display: flex;
      margin-top: .2rem;
        img {
            flex: 1;
            width: 49%;
            height: 3.8rem;
        }
    }

    .three-block {
        width: 96%;
        margin: 0 auto;
        overflow-x: hidden;
        display: flex;
        margin-top: .2rem;
        img {
            flex: 1;
            width: 32%;
            height: 3.8rem;
        }
    }

    .one-block {
        width: 96%;
        margin: 0 auto;
        display: flex;
        margin-top: .2rem;
        img {
            flex: 1;
            height: 3.2rem;
        }
    }

    .quality-select {
        position: relative;
        display: flex;
        width: 100%;
        height: 1.5rem;
        margin: 0 auto;
        span:nth-of-type(1) {
            width: 100%;
            font-size: .3rem;
            line-height: 1.5rem;
            float: left;
            text-align: center;
        }
        span:nth-of-type(2) {
            position: absolute;
            right: .3rem;
            font-size: .3rem;
            text-align: right;
            line-height: 1.5rem;
        }
    }

    .quality-list {
        display: flex;
        width: 96%;
        margin: 0 auto;
        overflow-x: hidden;
        justify-content: space-between;

        .list-tip {
            width: 24%;
            height: 24%;
            span:nth-of-type(1) {
                display: block;
                font-size: .12rem;
                color: #f23d49;
            }
            span:nth-of-type(2) {
                display: block;
                font-size: .1rem;
                border: 1px solid dodgerblue;
            }
        }
    }

    .command-shop {
        width: 96%;
        margin: 0 auto;
        height: 1.5rem;
        span {
            width: 100%;
            font-size: .2rem;
            color: #333333;
            text-align: center;
        }
    }

    .tab-list {
        width: 96%;
        margin: 0 auto;
        .tab-details {
            .item-details {
                img {
                    float: left;
                    width: 20%;
                }
                .shop-details {
                    float: right;
                    width: 80%;
                    .shop-name {
                        display: flex;
                        span:nth-of-type(1) {
                            font-size: .12rem;
                            display: block;
                            width: 50%;
                            text-align: left;
                            margin-left: .2rem;
                        }
                        span:nth-of-type(2) {
                            display: block;
                            width: 50%;
                            font-size: .1rem;
                            text-align: right;
                            margin-right: .2rem;
                        }
                    }
                }
            }
        }
    }


</style>

