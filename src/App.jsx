import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import { useEffect, useState } from "react";
import axios from "axios";
import PostDetailPage from "./pages/PostDetailPage";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/pictures/")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<PostsPage posts={posts} />} />

            <Route
              path="/posts/:id"
              element={<PostDetailPage posts={posts} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
