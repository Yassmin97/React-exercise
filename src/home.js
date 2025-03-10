import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'hello...', author: 'yas', id: 1},
        { title: 'My new website', body: 'hello...', author: 'mesho', id: 2},
        { title: 'My new website', body: 'hello...', author: 'yas', id: 3}
    ]);
    const [isPending, setIsPending] = useState(true);
    const [name, setName] = useState('yas');
    const [age, setAge] = useState(28);
 
    const handleClick = () =>{
        setName('foffo');
        setAge(35);
    }
    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id);
       setBlogs(newBlogs); 
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]); 
    
    return (
        <div className="home">
            { isPending && <div>Loading... </div>}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'yas')} title="Yas's blogs!" handleDelete={handleDelete}/>

            <h2>Homepage</h2>
            <p>{name} is { age } years old</p>
            <button onClick={() => setName('mesho')}>change name</button>
            <p>{ name }</p>
        </div>
      );
}
 
export default Home;
