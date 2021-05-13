<template>
      <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <div v-for="page in pages" :key="page.id">
        <div v-if="page.Heading === 'About Us'">
          <h1>{{page.Heading}}</h1>
          <p>{{page.Subheading}}</p>
        </div>
      </div>
          <div class="our-row">
            <div class="person">
              <h3>Ignas Baltutis</h3>
              <img src="https://cdn.nozebra.dk/media/h5pgaed0/ignas6794.jpg?width=380&height=430&center=0.1699201375353584,0.325&quality=80&mode=crop" alt="Ignas Baltutis" class="our-img">
            </div>
            <div class="person">
              <h3>Karolina Zapolskyte</h3>
              <img src="https://homepage-cdn.wedio.com/img/avatar-karolina-52f48.jpg" alt="Karolina Zapolskyte" class="our-img">
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
.our-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 200px;
}
.person {
  text-align: center;
}
.our-img {
  width: 150px;
}
</style>
