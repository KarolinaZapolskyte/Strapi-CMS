<template>
  <div>
    <div v-for="neww in pages.Sections" :key="neww.id" class="news">
      <h1>{{ neww.Heading }}</h1>
      <img :src="'http://localhost:1337'+ neww.Image.url" alt="Image" class="materialboxed">
      <p>{{neww.Content}}</p>
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
   console.log('ji');
    try {
      const response = await axios.get('http://localhost:1337/pages/609cffdff247c3001c56cfa7')
      this.pages = response.data
      console.log(response.data)
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<style>

</style>
