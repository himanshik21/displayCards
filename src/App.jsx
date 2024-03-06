import React, { useState } from "react";
import usePostsInfo from "./customHooks/usePostsInfo";

function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

function App() {
  const posts = usePostsInfo();

  return (
    <>
      <h1 className="text-purple-800 text-center mt-8 mb-6 text-2xl font-extrabold">POSTS</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "2px solid grey",
              borderRadius: "4px",
              padding: "10px",
              marginBlock: "15px",
              width: "300px",
              backgroundColor: getRandomColor(),
              boxShadow : "4px 4px 10px black",
            }}
          >
            <h3 className="text-center text-xl text-white mt-3 font">
              {post.title}
            </h3>
            <p className="text-black text-sm mt-3 text-justify font-semibold">{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
