// src/RequestPage.js

import { useState } from "react";

const RequestPage = () => {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the request submission.
    setShowPopup(true);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Request Page</h1>
      <p className="mb-4">You can only request a swipe if your balance is 0</p>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Leave a message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>Expect a match soon!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestPage;
