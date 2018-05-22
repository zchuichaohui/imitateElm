<template>
  <div>
    <group>
      <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
      <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
    </group>
    <tabbar>
      <tabbar-item :link="{path:'/index'}">
        <img slot="icon" src="../assets/elm.png">
        <span slot="label">外卖</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/find.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/order.png">
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item  :link="{path:'/mine'}" badge="2">
        <img slot="icon" src="../assets/mine.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
    import { Tabbar, TabbarItem, Group, Cell } from 'vux'

    export default {
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell
        }
    }
</script>