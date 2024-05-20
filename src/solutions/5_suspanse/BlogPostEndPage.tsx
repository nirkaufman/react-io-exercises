import {Suspense, useState} from "react";
import {BlogPostEnd} from "./BlogPostEnd.tsx";

export function BlogPostEndPage() {
  const [isShowPost, setIsShowPost] = useState(false);

  return (
      <div className="flex flex-col items-start justify-center p-4">
        <h2  className="text-3xl font-bold text-blue-700 mb-4" >Post Page</h2>
        <button  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setIsShowPost(!isShowPost)}>Toggle Post</button>
        {/*{isShowPost && <BlogPostStart />}*/}
        {isShowPost && (
            <Suspense fallback={<div>Loading post...</div>}>
              <BlogPostEnd/>
            </Suspense>
        )}
      </div>
  )
}
