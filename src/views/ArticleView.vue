<template>
  <div class="Article">
    <article>
      <h3 class="fw-bold">{{ article.title }}</h3>
      <div>{{ article.content }}</div>
    </article>
    <div v-if="$store.state.isAuthenticated">
      <hr/>
      <button
          class="btn btn-outline-secondary px-4"
          @click="editing = !editing">Edit
      </button>

      <button class="btn btn-outline-danger px-4 mx-3" @click="doRemove">Delete</button>

      <Transition name="fade">
        <div v-if="editing">
          <hr class="my-3"/>
          <ArticleForm form-title="Edit Article" :article="article" @submit="doEdit"/>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import ArticleForm from "@/components/ArticleForm.vue";

export default {
  name: 'Article',
  components: {ArticleForm},
  data() {
    let articles = JSON.parse(localStorage.getItem("articles") ?? "[]")
    let index = articles.findIndex(x => x.slug === this.$route.params.slug)
    let article = articles[index]
    return {
      article: article,
      articles: articles,
      index: index,
      editing: false
    }
  },
  methods: {
    doEdit(title, description, content) {
      this.articles[this.index] = {
        title: title,
        slug: title.replaceAll(" ", "-").toLowerCase(),
        description: description,
        content: content
      }

      this.article = this.articles[this.index]
      this.editing = false
      this.saveData()
      this.$router.push({name: "article", params: {slug: this.articles[this.index].slug}})
    },
    doRemove() {
      this.articles.splice(this.index, 1)
      this.saveData()
      this.$router.push({name: "home"})
    },
    saveData() {
      localStorage.setItem("articles", JSON.stringify(this.articles))
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>