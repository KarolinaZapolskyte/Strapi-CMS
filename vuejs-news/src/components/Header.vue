<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <nav v-else class="mint-green">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">
        <img src="../assets/logo2.png" alt="Logo" class="logo">
      </a>
      <ul v-for="page in pages" :key="page.id"  class="right hide-on-med-and-down link">
        <li>
        <router-link :to="'/pages/' + page.id">{{ page.Heading }}</router-link>
        </li>
      </ul>
    </div>
    </nav>
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
.logo {
  width: 50px;
  margin: 10px;
  margin-top: 7px
}
/* .link:last-child {
    order: -1;
} */
</style>
