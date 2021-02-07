// ROUTING (adding/changing whats displayed if the url changes? page swithing)
// hash # routing is like a jump link and doesnt make a request to the server.


import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'

export default [
    { path: '/', component: showBlogs },
    // /add is the path to add a new blog?
    { path: '/addBlog', component: addBlog },
    // route parameters?
    { path: '/blog/:id', component: singleBlog }
]