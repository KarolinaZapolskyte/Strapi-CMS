<template>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <div v-for="page in pages" :key="page.id">
        <div  v-if="page.Heading === 'News'">
          <h1>{{ page.Heading }}</h1>
          <p>{{ page.Subheading }}</p>
          <div class="our-row">
            <div v-for="neww in page.Sections" :key="neww.id" class="news">
              <router-link :to="'/news/' + neww.id">
                <h2>{{ neww.Heading }}</h2>
                <img :src="'http://localhost:1337'+ neww.Image.url" alt="Image" class="materialboxed">
                <p>{{neww.Content}}</p>
              </router-link>
            </div>
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
.materialboxed {
  width: 350px !important
}

.our-row {
  padding: 0 100px
}

.news {
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.news:first-child {
  margin-right: 50px
}
</style>
