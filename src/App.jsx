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
import { PostProvider } from "./contexts/PostsContext";
export default function App() {
  

  return (
    <>
    <PostProvider> <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<PostsPage />} />

            <Route
              path="/posts/:id"
              element={<PostDetailPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter></PostProvider>
     
    </>
  );
}
