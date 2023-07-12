<template>
  <div class="Article">
    <article>
      <h3 class="fw-bold">{{ article.title }}</h3>
      <div>{{ article.content }}</div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data() {
    let articles = JSON.parse(localStorage.getItem("articles") ?? "[]")
    let article = articles.find(x => x.slug === this.$route.params.slug)
    return {
      article: article
    }
  }
}
</script>