<template>
  <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Vuejs news with Strapi CMS</h1>
        <p>{{ pages[2].Subheading }}</p>

        <ArticlesList :articles="articles"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import axios from 'axios';

export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      articles: [],
      pages: [],
      error: null
    };
  },
  async mounted() {
      try {
        const response = await axios.get('http://localhost:1337/articles')
        const response2 = await axios.get('http://localhost:1337/pages')
        this.articles = response.data
        this.pages = response2.data
      } catch (error) {
        this.error = error;
      }
      console.log(this.pages);
    }
};
</script>
