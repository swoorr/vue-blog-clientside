<template>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview">
            <h2 class="post-title">{{ posts.name }}</h2>
            <p class="post-subtitle">
              {{ posts.body }}
            </p>
            <p class="post-meta">
              {{ new Date(posts.createdAt).toLocaleString() }}
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
  props: ["id"],
  data: function () {
    return {
      // posts: {},
    };
  },
  created: function () {
    console.log(this);
    console.log(this.posts);
    this.getPost();
    window.scrollTo(0, 0);
  },
  components: {
    altlinks: httpVueLoader("/components/Altlinks.vue"),
  },
  computed: {
    ...Vuex.mapState(["posthead", "posts"]),
  },
  methods: {
    getPost: async function () {
      store.dispatch("getPost", this.id);
    },
  },
};
</script>
