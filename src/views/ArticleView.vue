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
      <button class="btn btn-outline-danger px-4 mx-3">Delete</button>
      <Transition name="fade">
        <div v-if="editing">
          <hr class="my-3"/>
          <ArticleForm form-title="Edit Article" :article="article"/>
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
    let article = articles.find(x => x.slug === this.$route.params.slug)
    return {
      article: article,
      editing: false
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