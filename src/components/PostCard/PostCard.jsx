import React from "react";
import "./PostCard.css";
import ShareButton from "../ShareButton/ShareButton";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} className="post-image" />
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <ShareButton link={post.link} title={post.title} />
    </div>
  );
}
