// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {use, Suspense} from "react";
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

async function loadPostById  (id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

async function loadCommentsByPostId(postId: number): Promise<Comment[]> {
  await wait(3000);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return response.json();
}

export function PostDetails() {
  const post = use<Post>(loadPostById(1));

  return (
      <div className="p-4 bg-blue-100 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-blue-700">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </div>
  );
}

export function PostComments() {
  const comments = use<Comment[]>(loadCommentsByPostId(1));

  return (
      <div className="p-4 bg-green-100 rounded shadow-md mt-4">
        <h2 className="text-xl font-bold mb-2 text-green-700">Comments</h2>
        <ul className="space-y-2">
          {comments.map((comment: any) => (
              <li key={comment.id} className="border-b border-gray-200 py-2">{comment.body}</li>
          ))}
        </ul>
      </div>
  )
}

export function BlogPostEnd() {

  return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-red-700">Post Details</h1>
        <Suspense fallback={<div>Loading post...</div>}>
          <PostDetails/>

          <Suspense fallback={<div>Loading comments...</div>}>
            <PostComments/>
          </Suspense>

        </Suspense>
      </div>
  );
}
