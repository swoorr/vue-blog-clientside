<template>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="x in posts">
            <router-link
              :to="{ path: '/blog/' + x.id + '/' + x.name.replace(/ /g, '-') }"
            >
              <h2 class="post-title">{{ x.name }}</h2>
              <h3 class="post-subtitle">
                {{ x.body }}
              </h3>
            </router-link>
            <p class="post-meta">
              {{ new Date(x.createdAt).toLocaleString() }}
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <altlinks></altlinks>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    console.log("hey");
    this.getPosts();
    window.scrollTo(0, 0);
  },
  components: {
    altlinks: httpVueLoader("/components/Altlinks.vue"),
  },
  methods: {
    getPosts: async function () {
      var posts = await axios.get(
        "https://5fefb9179515c40017974326.mockapi.io/api/post",
      );
      this.posts = posts.data;
      store.dispatch("setTitle", "Furkan Sahin");
    },
  },
};
</script>
