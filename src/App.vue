<template>
  <div id="app" class="container">
    <div id="nav">
      <!-- <router-link tag="div" :to="{name: 'home'}" class="nav-left"> -->
        <div class="clearfix">
        <h2><img src="@/assets/logo.png" width="50">GetMore Challenge - Front-End</h2>
      </div>
      <!-- </router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
