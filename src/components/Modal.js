import React from "react";

export default function Modal({ isOpen, onClose, onSubmit, post, onDelete }) {
  const [title, setTitle] = React.useState(post.title);
  const [content, setContent] = React.useState(post.content);

  const handleSubmit = () => {
    onSubmit({ ...post, title, content });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4">Edit item</h2>

        <label className="block text-sm mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <label className="block text-sm mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          rows={4}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
