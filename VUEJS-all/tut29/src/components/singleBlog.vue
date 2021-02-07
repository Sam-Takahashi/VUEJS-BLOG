<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created(){
        this.$http.get('https://my-first-project-b34f1-default-rtdb.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();

        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>