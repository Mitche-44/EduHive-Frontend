
import React, { useEffect, useState } from "react";
import { ThumbsUp, MessageSquare } from "lucide-react";
import {
  getPosts,
  createPost,
  emitNewPost,
  onNewPost,
} from "../../api/community";

const Community = () => {
  const [forumsData, setForumsData] = useState({});
  const [activeForum, setActiveForum] = useState("general");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await getPosts(activeForum);
      setForumsData((prev) => ({
        ...prev,
        [activeForum]: {
          title: activeForum === "general" ? "General" : "Getting Started",
          description:
            activeForum === "general"
              ? "Announcements, resources, and interesting discussions"
              : "Ask questions and share advice about getting started in tech and full-stack development.",
          posts: data.posts || [],
        },
      }));
    } catch (error) {
      console.error("Failed to load posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [activeForum]);

  useEffect(() => {
    onNewPost((post) => {
      setForumsData((prev) => {
        const forum = prev[post.forum] || {
          title: post.forum,
          description: "",
          posts: [],
        };

        return {
          ...prev,
          [post.forum]: {
            ...forum,
            posts: [post, ...forum.posts],
          },
        };
      });
    });
  }, []);

  const forum = forumsData[activeForum] || {
    title: activeForum,
    description: "",
    posts: [],
  };

  const handleAddPost = async () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const payload = {
      title: newPostTitle,
      content: newPostContent,
    };

    try {
      const savedPost = await createPost(activeForum, payload);
      emitNewPost({ ...savedPost, forum: activeForum });
      setNewPostTitle("");
      setNewPostContent("");
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold mb-2">Discussions</h1>
          <p className="text-gray-600 text-sm">
            Discuss the EduHive platform & programming topics, share feedback, ask questions, and more.
          </p>
        </div>
        <img
          src="https://www.kaggle.com/static/images/discussion/landing/header-light.svg"
          alt="Discussion Illustration"
          className="w-36 mt-6 md:mt-0"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["general", "getting-started"].map((key) => (
          <button
            key={key}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeForum === key ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveForum(key)}
          >
            {key === "general" ? "General" : "Getting Started"}
          </button>
        ))}
      </div>

      {/* Forum Info */}
      <div className="border rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold">{forum.title}</h2>
        <p className="text-sm text-gray-500">{forum.description}</p>
      </div>

      {/* Forum Posts */}
      {loading ? (
        <p className="text-sm text-gray-400">Loading posts...</p>
      ) : (
        <div className="space-y-4">
          {forum.posts.map((post, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
              <h3 className="font-semibold text-base">{post.title}</h3>
              {post.content && <p className="text-sm text-gray-700 mt-1">{post.content}</p>}
              <p className="text-xs text-gray-500 mt-2">
                {post.time || "Just now"} by {post.author || "Anonymous"}
              </p>
              <div className="flex gap-4 mt-2 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" /> {post.likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" /> {post.comments}
                </div>
              </div>
            </div>
          ))}
          {forum.posts.length === 0 && (
            <p className="text-sm text-gray-500">No posts found in this forum.</p>
          )}
        </div>
      )}

      {/* Add New Post */}
      <div className="border-t mt-8 pt-4 space-y-2">
        <input
          type="text"
          placeholder="Post Title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Post Content"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <div className="text-right">
          <button
            onClick={handleAddPost}
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;