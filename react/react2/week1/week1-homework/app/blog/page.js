import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function Blog() {
  const blogs = ["my-new-post", "my-cph-post", "my-autumn-post"];
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4">
      <div>
        <h4 className="text-center font-bold text-3xl uppercase">
          Welcome to my Blog
        </h4>
      </div>
      <div>
        {blogs.map((blog) => (
          <Link key={blog} href={`/blog/${blog}`}>
            <Button variant="contained" className="mx-2">
              {blog}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
