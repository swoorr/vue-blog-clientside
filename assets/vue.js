const store = new Vuex.Store({
  state: {
    posthead: "...",
    twitter: "https://twitter.com/furkanswor",
    github: "https://github.com/swoorr",
    posts: {}
  },
  mutations: {
    sett(state, data) {
      state.posthead = data;
    },
    setpost(state, data) {
      state.posts = data
    }
  },
  actions: {
    setTitle(state, data) {
      state.posthead = data;
      this.commit('sett', data)
    },
    async getPost(state, data) {
      var posts = await axios.get(
        "https://5fefb9179515c40017974326.mockapi.io/api/post/" + data,
      );
      this.commit('setpost', posts.data)
      this.commit('sett', posts.data.name)
    }
  }
});

const routes = [
  { alias: '/Home', path: '/', component: httpVueLoader('/components/Home.vue') },
  { path: '/About', component: httpVueLoader('/components/About.vue') },
  { path: '/blog/:id/:param', component: httpVueLoader('/components/Blog.vue'), props: true }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


var app = new Vue({
  store,
  router,
  el: '#app',
  components: {
    'Links': httpVueLoader('/components/Links.vue'),
  }
})
