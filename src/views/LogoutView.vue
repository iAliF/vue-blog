<template>
  <div class="Logout">
    <h1>Logout Page</h1>
    <button class="btn btn-danger" @click="doLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    doLogout() {
      this.$store.commit("logout")
    }
  }
}
</script>