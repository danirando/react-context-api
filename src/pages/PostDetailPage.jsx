import { Link, useParams } from "react-router-dom";
import { usePost } from "../contexts/PostsContext";
export default function PostDetailPage() {
   const {posts} = usePost();
  const { id } = useParams();

  const post = posts.find((p) => String(p.id) === id);
  if (!post) {
    return <p>Post non trovato</p>;
  }
  return (
    <div>
      <div className="container">
        <h1>{post.title}</h1> <h3>{post.date}</h3>
        <img className="img-fluid" src={post.url} alt="" />
      </div>
      <div className="container d-flex flex-column gap-3">
        <div className="col-8">
          {" "}
          {post.id + 1 !== posts.length && (
            <Link
              to={`http://localhost:5173/posts/${post.id + 1}`}
              className="btn btn-success">
              Successivo
            </Link>
          )}
        </div>
        <div className="col-8">
          {post.id - 1 !== 0 && (
            <Link
              to={`http://localhost:5173/posts/${post.id - 1}`}
              className="btn btn-danger">
              Precedente
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
