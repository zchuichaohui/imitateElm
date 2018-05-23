<template>
    <header class="head_top">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <img src="../assets/back.png" v-if="goBack" class="head_goback" @click="$router.go(-1)"/>
        <span class="head-title">{{title}}</span>
        <slot name="head-right"></slot>
    </header>

</template>

<script>

    export default {
        data(){
            return {

            }
        },
        props:['goBack','title'],
        mounted:{

        }
    }
</script>

<style lang="scss" scoped>
    .head_top {
        position: fixed;
        width: 100%;
        display: block;
        top: 0;
        height: 1.8rem;
        background-color: dodgerblue;
        .head_goback {
            width: 1rem;
            height: 1rem;
            margin-left: .75rem;
        }
        .head-title {
            width: 100%;
            text-align: center;
            font-size: .75rem;
            color: white;
        }
        .right {

        }
    }

</style>