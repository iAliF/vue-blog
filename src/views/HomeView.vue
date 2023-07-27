<template>
  <div class="home">
    <h1 class="text-center mb-5">Home Page</h1>
    <article v-for="article in articles">
      <h3 class="fw-bold">{{ article.title }}</h3>
      <div>{{ article.description }}</div>
      <router-link :to="{name: 'article', params: {'slug': article.slug}}">More ...</router-link>
      <hr/>
    </article>
    <h2 v-if="!articles.length && !error" class="text-center">There is no Article ...</h2>
    <h2 v-if="error" class="text-center">Cannot load articles ...</h2>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      articles: [],
      error: false,
    }
  },
  methods: {
    getArticles(query = null) {
      let q = query !== null ? `article/?search=${query}` : "article/"

      axios
          .get(q)
          .then(response => {
            this.articles = response.data
            this.error = false
          })
          .catch(_ => {
            this.articles = []
            this.error = true
          })
    }
  },
  mounted() {
    this.getArticles();
  }
}
</script>
