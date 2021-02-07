

<template>
<!-- "everything has an empty string in it" -The Net Ninja -->

  <div v-theme:columnz="'narrow'" id="show-blogs">
      <h1>List Blog Articles</h1>

        <input type="text" v-model="search" placeholder="search blogs">

      <div v-for="blog in filteredBlogz" class="single-blog" v-bind:key="blog">
          <!-- pipe | symbolizes FILTER? -->
          <h2 v-rainbow="">{{ blog.title | to-uppercase }}</h2>
      </div>
  </div>
</template>

<script>
// Mixins
import searchMixin from '../mixins/searchMixin';

export default {
//  COMPONENTS
  data () {
    return {
        blogz: [],
        search: ''
    }
  },
  methods:{

  },
//   lifecycle hook!
created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
    this.blogz = data.body.slice(0,10);
    })
},
// custom filter, using computed properties, not just filters.
computed:{
      
    },
    // local
    filters: {
        toUppercase(value){
             return value.toUpperCase()
        },
        snippet(value){
            return value.slice(0,50) + '...';
        }
    },
    directives:{
        'rainbow': {
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2, 8);

            }
        }
    },
    mixins: [searchMixin]

}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
