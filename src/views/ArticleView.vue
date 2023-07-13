<template>
<div class="Article">
  <div v-if="loading" class="text-center">
    <div class="spinner-grow text-primary mt-5" role="status">
    </div>
  </div>
  <div v-else>
    <div v-if="!notFound">
      <article>
        <h1 class="fw-bold">{{ article.title }}</h1>
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
    <div v-else>
      <h1>Article was not found ...</h1>
    </div>
  </div>
</div>
</template>

<script>
import ArticleForm from "@/components/ArticleForm.vue";
import axios from "axios";

export default {
  name: 'Article',
  components: {ArticleForm},
  data() {
    return {
      article: {},
      editing: false,
      notFound: true,
      loading: true,
    }
  },
  mounted() {
    axios
        .get(`article/${this.$route.params.slug}/`,)
        .then(response => {
          this.article = response.data
          this.notFound = false
        })
        .catch(_ => {
          this.article = {}
          this.notFound = true
        })
    this.loading = false
  },
  methods: {
    // doEdit(title, description, content) {
    //   this.articles[this.index] = {
    //     title: title,
    //     slug: title.replaceAll(" ", "-").toLowerCase(),
    //     description: description,
    //     content: content
    //   }
    //
    //   this.article = this.articles[this.index]
    //   this.editing = false
    //   this.saveData()
    //   this.$router.push({name: "article", params: {slug: this.articles[this.index].slug}})
    // },
    // doRemove() {
    //   this.articles.splice(this.index, 1)
    //   this.saveData()
    //   this.$router.push({name: "home"})
    // },
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