<template>
  <div>
    <div
      v-if="article.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="api_url + article.image[0].url"
      uk-img
    >
      <h1>{{ article.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="article.content"
          :source="article.content"
          id="editor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdownIt from "vue-markdown-it";
import axios from 'axios';

export default {
  data() {
    return {
      article: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  async mounted() {
      try {
        const response = await axios.get('http://localhost:1337/articles/' + window.location.href.split("/").pop())
        this.article = response.data
        console.log(response.data)
      } catch (error) {
        this.error = error;
      }
    }
};
</script>
