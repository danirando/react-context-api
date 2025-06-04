import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePost } from "../contexts/PostsContext";
export default function PostsList() {
    const {posts} = usePost();
  return (
    <div className="container">
      <div className="container container-links">
        <ul className="list-group">
          {posts.map((post) => (
            <li
              key={post.id}
              className="list-group-item list-group-item-action">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}