import React, { useState } from "react";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Message submitted:", message);
      setMessage("");
    } else {
      console.warn("Message is empty");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center font-fira">
      <div className="w-full max-w-lg p-4">
        <h1 className="text-xl font-extrabold text-center mb-4 pb-10">
          Get in touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex pb-36 flex-col gap-12 w-full"
        >
          <input
            type="text"
            className="border p-2 rounded-lg w-full justify-center"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <input
            type="text"
            className="border p-2 rounded-lg w-full justify-center"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={handleInputChange}
            placeholder="Enter your message..."
          />
          <button
            type="submit"
            className="w-full py-2 bg-mainBlue text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:text-cyan-300 hover:bg-sky-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
