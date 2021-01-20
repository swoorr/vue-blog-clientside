<template>
  <div>
      <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
            <router-link class="navbar-brand" to="/">Furkan Sahin</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/About">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Page Header -->
  <header class="masthead" style="background-image: url('https://images.pexels.com/photos/5913116/pexels-photo-5913116.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{ posthead }}</h1>
            <span class="subheading"> a blog made by vue,vuex,vue-router,mockapi</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
</template>
<script>
    module.exports = {
      computed: {
        ...Vuex.mapState(['posthead']),
      }
    }
</script>