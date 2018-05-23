<template>
    <div class="page-container">
        <header-top title="发现"></header-top>
        <div class="find-grid">
            <grid>
                <grid-item v-for="i in 2" :key="i" show-lr-borders="true" show-vertical-dividers="true">
                    <p style="line-height: .6rem;position: absolute;top:.1rem;left: .3rem;display: block;font-size: .45rem;color: indianred">
                        百元红包</p>
                    <p style="line-height: .6rem;position: absolute;top:.9rem;left: .3rem;display: block;font-size: .4rem;color: gray">
                        兴业银行联名卡</p>
                    <img slot="icon" src="../assets/elm.png"
                         style="position: absolute;right:.5rem;width: 2rem;height: 2rem;vertical-align: middle;bottom: .5rem">
                </grid-item>
            </grid>
            <grid>
                <grid-item v-for="i in 2" :key="i" show-lr-borders="true" show-vertical-dividers="true">
                    <p style="line-height: .6rem;position: absolute;top:.1rem;left: .3rem;display: block;font-size: .45rem;color: indianred">
                        百元红包</p>
                    <p style="line-height: .6rem;position: absolute;top:.9rem;left: .3rem;display: block;font-size: .4rem;color: gray">
                        兴业银行联名卡</p>
                    <img slot="icon" src="../assets/elm.png"
                         style="position: absolute;right:.5rem;width: 2rem;height: 2rem;vertical-align: middle;bottom: .5rem">
                </grid-item>
            </grid>
            <grid>
                <grid-item v-for="i in 2" :key="i" show-lr-borders="true" show-vertical-dividers="true">
                    <p style="line-height: .6rem;position: absolute;top:.1rem;left: .3rem;display: block;font-size: .45rem;color: indianred">
                        百元红包</p>
                    <p style="line-height: .6rem;position: absolute;top:.9rem;left: .3rem;display: block;font-size: .4rem;color: gray">
                        兴业银行联名卡</p>
                    <img slot="icon" src="../assets/elm.png"
                         style="position: absolute;right:.5rem;width: 2rem;height: 2rem;vertical-align: middle;bottom: .5rem">
                </grid-item>
            </grid>
        </div>
        <div class="giid-divider"></div>

        <div class="find-recommand">
            <div class="recommand-guide">
                <img src="../assets/arrow_left.png"/>
                <img src="../assets/upload.png"/>
                <span>向您推荐</span>
                <img src="../assets/arrow_right.png"/>
                <p>你的口味，我都懂得</p>
            </div>
            <div class="recommand-grid">
                <grid>
                    <grid-item v-for="i in 2" :key="i">
                       <img src="../assets/food.jpeg" style="width: 100%;height: 70%"/>
                        <p style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left;line-height: .2rem">皮蛋瘦肉粥+蒸饺+咸鸭蛋</p>
                        <div style="line-height: .2rem;text-align: left">
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left;line-height: .2rem">月售437份</span>
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem">好评率98%</span>
                        </div>
                        <div style="line-height: 1.2rem;;text-align: left;display: block">
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left">¥19.9</span>
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem"> $42.8</span>
                        </div>
                        <div style="text-align: left;line-height: 1.2rem;margin-bottom: .2rem">
                            <img src="../assets/elm.png" style="text-align: left;width: .8rem;height: .6rem" />
                            <span style="font-size: .3rem;color: #333333;text-align: center;float: right;margin-right: 1.3rem">曼苓粥店(梨园春路)</span>
                        </div>
                    </grid-item>
                </grid>
                <grid>
                    <grid-item v-for="i in 2" :key="i">
                        <img src="../assets/food.jpeg" style="width: 100%;height: 70%"/>
                        <p style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left;line-height: .2rem">皮蛋瘦肉粥+蒸饺+咸鸭蛋</p>
                        <div style="line-height: .2rem;text-align: left">
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left;line-height: .2rem">月售437份</span>
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem">好评率98%</span>
                        </div>
                        <div style="line-height: 1.2rem;;text-align: left;display: block">
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left">¥19.9</span>
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem"> $42.8</span>
                        </div>
                        <div style="text-align: left;line-height: 1.2rem;margin-bottom: .2rem">
                            <img src="../assets/elm.png" style="text-align: left;width: .8rem;height: .6rem" />
                            <span style="font-size: .3rem;color: #333333;text-align: center;float: right;margin-right: 1.3rem">曼苓粥店(梨园春路)</span>
                        </div>
                    </grid-item>
                </grid>
                <grid>
                    <grid-item v-for="i in 2" :key="i">
                        <img src="../assets/food.jpeg" style="width: 100%;height: 70%"/>
                        <p style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left;line-height: .2rem">皮蛋瘦肉粥+蒸饺+咸鸭蛋</p>
                        <div style="line-height: .2rem;text-align: left">
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left;line-height: .2rem">月售437份</span>
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem">好评率98%</span>
                        </div>
                        <div style="line-height: 1.2rem;;text-align: left;display: block">
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem;text-align: left">¥19.9</span>
                            <span style="font-size: .3rem;color: #333333;margin-top: .1rem"> $42.8</span>
                        </div>
                        <div style="text-align: left;line-height: 1.2rem;margin-bottom: .2rem">
                            <img src="../assets/elm.png" style="text-align: left;width: .8rem;height: .6rem" />
                            <span style="font-size: .3rem;color: #333333;text-align: center;float: right;margin-right: 1.3rem">曼苓粥店(梨园春路)</span>
                        </div>
                    </grid-item>
                </grid>
            </div>
            <div>
                <img src="../assets/food.jpeg"/>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import HeaderTop from '../components/header.vue'
    import tabbar from '../components/tabbar.vue';
    import {Grid, GridItem} from 'vux'

    export default {
        data() {
            return {
                name: 'ddddd'
            }
        },
        components: {
            HeaderTop,
            tabbar,
            Grid,
            GridItem
        },
    }
</script>

<style lang="scss" scoped>
    .page-container {
        width: 100%;
        overflow-x: hidden;
        .find-grid {
            display: block;
        }
        .giid-divider {
            position: relative;
            margin-top: 0rem;
            width: 100%;
            background-color: darkgrey;
            height: .3rem;
        }
        .find-recommand {
            background-color: whitesmoke;
            .recommand-guide {
                margin-top: .1rem;
                height: .3rem;
                img {
                    width: .6rem;
                    height: .6rem;
                }
                span {
                    margin-top: 0rem;
                    font-size: .65rem;
                }
                p {
                    line-height: .2rem;
                    margin-top: .1rem;
                    font-size: .3rem;
                }
            }
            .recommand-grid {
                position: relative;
                margin-top: 2rem;
            }

        }
    }
</style>


<grid>
    <grid-item link="/component/cell" :label="$t('Go to Cell')">
        < img slot="icon" src="../assets/grid_icon.png">
    </grid-item>
    <grid-item :link="{ path: '/component/cell'}" :label="$t('Go to Cell')">
        < img slot="icon" src="../assets/grid_icon.png">
    </grid-item>
    <grid-item link="/component/cell" @on-item-click="onItemClick">
        < img slot="icon" src="../assets/grid_icon.png">
        <span slot="label">{{ $t('Go to Cell') }}</span>
    </grid-item>
</grid>