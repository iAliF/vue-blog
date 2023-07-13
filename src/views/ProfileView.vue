<template>
  <div class="Profile">
    <h1>Hello {{ username }}, Welcome!</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Profile',
  data() {
    return {
      username: ''
    }
  },
  mounted() {
    axios
        .get("auth/users/me/",)
        .then(response => {
          this.username = response.data.username
        })
        .catch(error => {
          console.log(error.response.data.detail)
          this.$store.commit("logout")
          this.$router.push({name: "login"})
        })
  }
}
</script>