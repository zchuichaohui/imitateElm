<template>
    <div class="page-container">
      <header-top  title="我的"></header-top>
        <div class="my-header">
           <div class="header-info">
               <img class="default-header" src="../assets/default_head.png" />
               <div class="nick-number">
                   <span>逆流的鱼</span>
                   <div class="head-number">
                       <img src="../assets/shouji.png"/>
                       <span>18876403389</span>
                   </div>
               </div>
               <img class="header-arrow" src="../assets/arrow.png" />
           </div>
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

    Vue.use(axiosPlugin);

    export default {
        data(){
            return {

            }
        },
        components:{
            bar,
            HeaderTop,
            tabbar
        },
        mounted(){
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
    .my-header {
        width: 100%;
      /*  margin-top: -1.5rem;*/
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
                left:.2rem;
                width: 2rem;
                height: 2rem;
            }
            .nick-number {
                position: absolute;
                left:3rem;
                span{
                    display: block;
                    font-size: .45rem !important;
                    color: white;
                }
                .head-number {
                    position: relative;
                    img{
                        position: absolute;
                        left:0rem;
                       text-align: center;
                    }
                    span{
                        position: absolute;
                        left:1rem;
                        text-align: center;
                        font-size: .45rem !important;
                        color: white;
                    }
                }
            }
            .header-arrow {
                position: absolute;
                right:.2rem;
                width: 1.4rem;
                height: 1.4rem;
            }
        }
    }
</style>