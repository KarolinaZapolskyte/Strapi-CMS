<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Strapi blog</h1>

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
      articles: []
    };
  },
  async mounted() {
      try {
        const response = await axios.get('http://localhost:1337/articles')
        this.articles = response.data
      } catch (error) {
        this.error = error;
      }
    }
};
</script>
