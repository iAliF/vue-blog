<template>
  <div class="AddArticle">
    <ArticleForm @submit="doAdd" form-title="Add New Article"/>
  </div>
</template>

<script>
import ArticleForm from "@/components/ArticleForm.vue";

export default {
  name: 'AddArticle',
  components: {
    ArticleForm
  },
  data() {
    let articles = JSON.parse(localStorage.getItem("articles") ?? "[]")
    return {
      articles: articles
    }
  },
  methods: {
    doAdd(title, description, content) {
      let object = {
        title: title,
        slug: title.replaceAll(" ", "-").toLowerCase(),
        description: description,
        content: content
      }
      this.articles.push(object)

      localStorage.setItem("articles", JSON.stringify(this.articles))
      this.$router.push({name: "article", params: {"slug": object.slug}})
    }
  }
}
</script>