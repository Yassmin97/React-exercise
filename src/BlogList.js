const BlogList = ({ blogs, title, handleDelete }) => {
   // const blogs = props.blogs; dessa behövs inte då jag har allt på raden uppe
    // const title= props.title;
    

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className= "blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick= {() => handleDelete(blog.id)}>delete blog</button>
                    </div>
            ))}
        </div>
      );
}
 
export default BlogList;