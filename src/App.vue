<template>
  <a-layout>

    <a-layout-sider
      collapsible
      :trigger="null"
      v-model="sidebarcollapse"
      >

      <div class="logo" style="height: 64px">
        <h1 style="color: white; text-align: center; padding-top: 15px">NAYA</h1>
      </div>

      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['1']"
        >
        <a-menu-item key="1">
          <router-link to="/">
            <a-icon type="home"/>
            <span>Home</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">
            <a-icon type="info-circle"/>
            <span>About</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="padding: 0">
        <a-icon
          style="padding: 0 24px;"
          :type="sidebarcollapse ? 'menu-unfold' : 'menu-fold'"
          @click="sidebarcollapse = !sidebarcollapse"
        />
      </a-layout-header>
      <a-layout-content style="padding: 24px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

  </a-layout>
</template>

<script>
export default {
  data: () => ({
    sidebarcollapse: false,
  }),
};
</script>

<style>
.ant-layout.ant-layout-has-sider {
  height: 100vh;
}

.ant-layout-header {
  background: white !important;
}
</style>
