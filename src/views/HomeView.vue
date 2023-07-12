<template>
  <div class="home">
    <h1 class="text-center mb-5">Home Page</h1>
    <article v-for="article in articles">
      <h3 class="fw-bold">{{ article.title }}</h3>
      <div>{{ article.description }}</div>
      <router-link :to="{name: 'article', params: {'slug': article.slug}}">More ...</router-link>
      <hr/>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    let articles = JSON.parse(localStorage.getItem("articles") ?? "[]")
    return {
      articles: articles
    }
  }
}
</script>
