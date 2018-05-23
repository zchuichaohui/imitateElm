<template>
    <div class="page-container">
        <x-header>with right link<a slot="right">登录</a></x-header>
    </div>
</template>

<script>
    import {XHeader} from 'vux'

    export default {
        data(){
            return{

            }
        },
        components: {
            XHeader
        },
    }

</script>

<style lang="scss" scoped>

</style>