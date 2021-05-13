<template>
<div id="app">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <div v-for="page in pages" :key="page.id">
        <h1>{{ page.Heading }}</h1>
        <div v-for="neww in page.Sections" :key="neww.id">
        <img :src="'http://localhost:1337'+neww.Image.url" alt="">
        <p>{{neww.Content}}</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {

  data () {
    return {
      pages: [],
      error: null
    }
  },
 async mounted() {
    try {
      const response = await axios.get('http://localhost:1337/pages')
      this.pages = response.data
      console.log(response.data)
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
