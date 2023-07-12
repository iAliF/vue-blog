<template>
  <div class="AddArticle">
    <div class="row">
      <div class="col-md-8 col-sm-10 mx-auto border shadow rounded-4 p-4 mt-3">
        <h1 class="mt-3 mt-4 fw-bold text-center">Add New Article</h1>
        <hr/>
        <form @submit.prevent="doAdd">
          <div class="form-group mb-3">
            <input
                type="text"
                class="form-control p-2"
                placeholder="Title"
                aria-label="Title"
                v-model="title">
          </div>
          <div class="form-group mb-3">
            <input
                type="text"
                class="form-control p-2"
                placeholder="Description"
                aria-label="Description"
                v-model="description">
          </div>
          <div class="form-group mb-3">
            <textarea
                class="form-control"
                v-model="content"
                rows="9"/>
          </div>
          <hr/>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddArticle',
  data() {
    let articles = JSON.parse(localStorage.getItem("articles") ?? "[]")
    return {
      title: '',
      description: '',
      content: '',
      articles: articles
    }
  },
  methods: {
    doAdd() {
      let object = {
        title: this.title,
        slug: this.title.replaceAll(" ", "-").toLowerCase(),
        description: this.description,
        content: this.content
      }
      this.articles.push(object)

      localStorage.setItem("articles", JSON.stringify(this.articles))
      this.$router.push({name: "article", params: {"slug": object.slug}})
    }
  }
}
</script>