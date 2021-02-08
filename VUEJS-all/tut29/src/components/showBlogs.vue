

<template>
<!-- "everything has an empty string in it" -The Net Ninja -->

  <div v-theme:columnz="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>

        <input type="text" v-model="search" placeholder="search blogs">

<!-- blog in blogs is cycling through blogz array referenced in the "blog"variable -->
      <div v-for="(blog, blog1) in filteredBlogz" class="single-blog" v-bind:key="blog1">

          <!-- pipe | symbolizes FILTER? -->
       <router-link v-bind:to="'/blog/'+ blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link>
       
          <article>{{ blog.content | snippet }}</article>
      </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';


export default {
//  components
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
    this.$http.get('https://my-first-project-b34f1-default-rtdb.firebaseio.com/posts.json').then(function(data){
    // this.blogz = data.body.slice(0,10);
     
    return data.json();
    // data.jason is a promise, meaning we can now use .then(function()) to tack on the promise, converting it to real json data?
    }).then(function(data){

        var blogsArray = [];
// in the below case data is the parent object(has an array of objects contained)
        for (let keyz in data){
            data[keyz].id = keyz
            // adding/pushing data[keyz] to blogsArray(currently empty)
            blogsArray.push(data[keyz]);
        }
// console.log(blogsArray);
        this.blogz = blogsArray;
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
#show-blogs a{
   text-decoration: none;
 
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
