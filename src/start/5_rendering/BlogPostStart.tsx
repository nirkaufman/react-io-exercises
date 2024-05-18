import {useEffect, useState} from "react";
import {wait} from "../../shared/utils.ts";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  body: string;
}

async function loadPostById(id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

async function loadCommentsByPostId(postId: number): Promise<Comment[]> {
  await wait(3000);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return response.json();
}

export function BlogPostStart() {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);

  useEffect(() => {
    loadPostById(1).then((data) => setPost(data));
    loadCommentsByPostId(1).then((data) => setComments(data));
  }, []);

  if (!post || !comments) return <div className="flex items-center justify-center text-2xl text-blue-500">Loading...</div>;

  return (
      <div className="p-8 m-4 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{post.title}</h1>
        <p className="text-lg text-gray-700 mb-8">{post.body}</p>
        <div className="bg-gray-100 p-4 rounded shadow-inner">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Comments</h2>
          <ul>
            {comments.map((comment) => (
                <li key={comment.id} className="border-b border-gray-200 py-2">{comment.body}</li>
            ))}
          </ul>
        </div>
      </div>
  );
}
