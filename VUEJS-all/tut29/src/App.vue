<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import navBar from './components/navBar.vue';

export default {
 components:{
   'add-blog': addBlog,
   'show-blogs': showBlogs,
   'list-blogs': listBlogs,
   'nav-bar': navBar
 },
  data () {
    return {
   
    }
  },
  methods:{

  }
}
</script>

<style>

body{
  margin: 0;
  font-family: 'montserrat';
}
</style>
