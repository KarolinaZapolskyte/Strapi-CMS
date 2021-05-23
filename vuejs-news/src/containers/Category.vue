<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ category.name }}</h1>

        <ArticlesList :articles="category.articles || []"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList";
import axios from 'axios'

export default {
  data() {
    return {
      category: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    ArticlesList
  },
  async mounted() {
      try {
        const response = await axios.get('http://localhost:1337/categories/' + window.location.href.split("/").pop())
        this.category = response.data
      } catch (error) {
        this.error = error;
      }
    }
};
</script>
