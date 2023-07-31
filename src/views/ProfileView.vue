<template>
  <div class="Profile">
    <div class="col-md-6 col-lg-4 col-sm-10 mx-auto border shadow rounded-4 p-4 mt-3">
      <h1 class="text-center">Profile | {{ username }}</h1>

      <hr/>

      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a
              class="nav-link"
              :class="{'active': infoActive}"
              href="#"
              @click="infoActive = true"
          >User Info</a>
        </li>

        <li class="nav-item">
          <a
              class="nav-link"
              :class="{'active': !infoActive}"
              href="#"
              @click="infoActive = false"
          >Password</a>
        </li>
      </ul>

      <Transition name="slide-fade">
        <div v-if="infoActive">
          Change User Info
        </div>
      </Transition>
      <Transition name="slide-fade">
        <div v-if="!infoActive">
          Change Password
        </div>
      </Transition>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Profile',
  data() {
    return {
      username: '',
      infoActive: true,
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

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>