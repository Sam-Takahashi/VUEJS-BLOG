import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'
import VueRouter from 'vue-router'
import myRoutes from './route'

Vue.use(VueResourse);
// routing is used to direct to over pages in document?
Vue.use(VueRouter);

const routerz = new VueRouter({
  routes: myRoutes,
  mode: "history"
});
// GLOBAL


// FILTERS     the params are NAME('to-uppercase)and value(blog.title)in this case its a string.

// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase()
// })

// Vue.filter('snippet', function (value) {
//   return value.slice(0, 50) + '...';
// })

// Custom Directives
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// });

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    }
    else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }
    // arg = argument. in this case its 'columnz
    if (binding.arg == 'columnz') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})



new Vue({
  el: '#app',
  render: h => h(App),
  router: routerz
})
