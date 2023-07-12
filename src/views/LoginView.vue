<template>
  <div class="Login">
    <div class="row justify-content-center">
      <div class="col-md-6 col-sm-10">
        <h1>Login Page</h1>
        <form>
          <div class="input-group mb-3">
            <span class="input-group-text" id="user-addon">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                   aria-describedby="user-addon">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="passwd-addon">*</span>
            <input type="password" class="form-control" placeholder="Password" aria-label="Password"
                   aria-describedby="passwd-addon">
          </div>
          <button class="btn btn-primary" @click="doLogin">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    doLogin() {
      this.$store.commit("login", "abc123")
      this.$router.push({name: "profile"})
    }
  }
}
</script>