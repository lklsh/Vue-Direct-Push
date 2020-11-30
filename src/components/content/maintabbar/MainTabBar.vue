<template>
  <div class="main-tab-bar">
    <tab-bar>
     <tab-bar-item path='/home'>
     <!-- 在dom中使用配置路径时需要在路径前添加~ -->
       <img src="~assets/img/tabbar/home.svg" alt="" >
       <img src="~assets/img/tabbar/home_active.svg" alt="" >
       <!-- <span slot="item-text">首页</span> -->
       <span >首页</span>
     </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" >
        <img src="~assets/img/tabbar/category_active.svg" alt="" >
        <!-- <span slot="item-text">分类</span> -->
        <span>分类</span>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" alt="">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" >
        <!-- <span slot="item-text">购物车</span> -->
        <span>购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" >
        <!-- <span slot="item-text">我的</span> -->
        <span>我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar';
  import TabBarItem from 'components/common/tabbar/TabBarItem';
  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
