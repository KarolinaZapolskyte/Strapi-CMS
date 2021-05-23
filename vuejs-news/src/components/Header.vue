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
      <ul class="right hide-on-med-and-down link">
        <li v-for="category in categories" v-bind:key="category.id">
            <router-link
              :to="{ path: '/category/' + category.id }"
              :key="category.id"
            >
              {{ category.Name }}
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/pages/about-us' }"
            >About us
            </router-link>
            </li>
        <!-- <li>
        <router-link :to="'/pages/' + page.id">{{ page.Heading }}</router-link>
        </li> -->
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
        categories: [],
        error: null
      }
    },
  async mounted() {
      try {
        const response = await axios.get('http://localhost:1337/categories')
        this.categories = response.data
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


.mint-green {
  background: #41B883 !important
}

.blue {
  background: #34495E !important
}
</style>
