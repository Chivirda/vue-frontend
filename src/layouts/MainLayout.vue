<template>
  <div class="wrapper">
    <Header />
    <div class="main-wrapper">
      <Navbar />
        <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Header, Navbar
  }
}
</script>