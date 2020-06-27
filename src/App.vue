<template>
  <div id="app">
    <MainLayout>
      <router-view/>
    </MainLayout>
  </div>
</template>

<style lang="scss">
@import './assets/style.css';
</style>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  components: {
    MainLayout
  }
}
</script>