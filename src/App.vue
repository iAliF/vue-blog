<template>
  <nav class="navbar navbar-expand-lg navbar-light mb-5" data-bs-theme="light" id="nav">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">My WebSite</router-link>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#myNavBar" aria-controls="myNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="myNavBar" style="">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{'name': 'about'}" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{'name': 'profile'}" class="nav-link">Profile</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view class="container"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #e3f2fd;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.navbar-collapse a.router-link-exact-active {
  color: #0099ff !important;
}
</style>
