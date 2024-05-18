import {useState} from "react";
import {BlogPostStart} from "./BlogPostStart.tsx";

export function BlogPostPage() {
  const [isShowPost, setIsShowPost] = useState(false);

  return (
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Post Page</h2>
        <button
            onClick={() => setIsShowPost(!isShowPost)}
            className="mb-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Post
        </button>
        {isShowPost && <BlogPostStart/>}
      </div>
  )
}
