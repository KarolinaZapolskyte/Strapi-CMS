<template>
  <div>
  <Header />
  <router-view class="our-container" :key="$route.fullPath"></router-view>
  <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
    .our-container {
      max-width: 1280px;
      width: 100%;
      margin: auto
    }
</style>
