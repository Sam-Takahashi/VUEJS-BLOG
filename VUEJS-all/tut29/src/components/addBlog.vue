<template>
  <div>
      <div id="blog-container">
          <h2>Add a New Blog Post</h2>
          <!-- !submitted removes the form from the DOM -->
          <form v-if="!submitted">
              <label>Blog Title:</label>
              <!-- lazy modifier restricts v-model from running until next action -->
              <input type="text" v-model.lazy="blog.title" required>
              <label>Blog Content:</label>
              <textarea v-model.lazy="blog.content"></textarea>
              <div id="checkboxes">
                  <label>Design</label>
                  <input type="checkbox" value="design" v-model="blog.categories">       
                  <label>Communication</label>
                  <input type="checkbox" value="communication" v-model="blog.categories">
                  <label>Coding</label>
                  <input type="checkbox" value="coding" v-model="blog.categories">
                  <label>Writing</label>
                  <input type="checkbox" value="writing" v-model="blog.categories">
              </div>

              <label for="Author:"></label>
              <select v-model="blog.author">
                  <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
              </select>
              <!-- post function inside -->
              <button v-on:click.prevent="post">Add Blog</button>
          </form>
<!-- v-if="" boolean  -->
            <div v-if="submitted">
                <h3 class="red">Thanks for adding your post!</h3>
            </div>

          <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog Categories</p>
            <ul>
                <li  v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
          </div>
      </div>
  </div>
</template>


<script>

export default {
 // INSTANCEs (shit that is show on screen)
  data () {
    return {
        blog:{
            title: "",
            content: "",
            categories:[],
            author: ""
        },
        authors: ['The Artist', 'The Negotiator', 'The Hacker'],
        submitted: false,
     }
  },
  methods:{
    //   functions backend
    //   HTTP capabilities!!
    post: function(){
        this.$http.post('https://my-first-project-b34f1-default-rtdb.firebaseio.com/posts.json', this.blog)
        // info about this area is at https://www.youtube.com/watch?v=btDfVBPYI-U&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=33 7:25ish
        .then(function(data){
            console.log(data);
            // typically (data) is the data that i send in the post request
            this.submitted = true;
        });
    }

  }
}
</script>

<style>
#blog-container *{
    box-sizing: border-box;
}
#blog-container {
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
.red{
    color: #f00;
}
</style>
