<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item selected link="/">
        <x-icon slot="icon-active" type="android-home" size="25" class="icon-active"></x-icon>
        <x-icon slot="icon" type="android-home" size="25" class="icon-inactive"></x-icon>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item  link="/OrderList">
        <x-icon slot="icon-active" type="edit" size="25" class="icon-active"></x-icon>
        <x-icon slot="icon" type="edit" size="25" class="icon-inactive"></x-icon>
        <span slot="label">下单</span>
      </tabbar-item>
      <tabbar-item link="/StoreList">
        <x-icon slot="icon-active" type="android-list" size="25" class="icon-active"></x-icon>
        <x-icon slot="icon" type="android-list" size="25" class="icon-inactive"></x-icon>
        <span slot="label">门店维护</span>
      </tabbar-item>
      <tabbar-item>
        <x-icon slot="icon-active" type="android-person" size="25" class="icon-active"></x-icon>
        <x-icon slot="icon" type="android-person" size="25" class="icon-inactive"></x-icon>
        <span slot="label">个人设置</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>


<style lang="less">
  @import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.icon-active{
  fill: orange
}
.icon-inactive{
  fill: grey
}
</style>
