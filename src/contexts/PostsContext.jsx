import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const PostContext = createContext();

function PostProvider ({children}) {

    const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/pictures/")
      .then((res) => setPosts(res.data));
  }, []);
    const [post, setPost] = useState();
    return (<PostContext.Provider value={{posts, setPost}}>{children}</PostContext.Provider>)
}

function usePost () {
    const context = useContext(PostContext);
    return (context)
}

export {PostProvider , usePost}