export default {
    computed: {
        filteredBlogz: function () {
            return this.blogz.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    }
}