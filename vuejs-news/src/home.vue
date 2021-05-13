<template>
  <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <div v-for="page in pages" :key="page.id">
        <div  v-if="page.Heading === 'Home'">
          <h1>{{ page.Heading }}</h1>
          <p>{{page.Subheading}}</p>
          <img src="../src/assets/news.png" alt="News" class="img">
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
.mint-green {
  background: #41B883 !important
}

.blue {
  background: #34495E !important
}

</style>
