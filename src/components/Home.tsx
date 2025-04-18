import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type HomeProps = {
  title: string;
};

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  // state for feedback form
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState<number | "">("");

  // Handle button click
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/blog");
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Feedback: ${feedback}\nRating: ${rating}`);
    setFeedback("");
    setRating("");
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-900">
      <main className="flex flex-col items-center justify-center flex-grow text-center px-2">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to DevVerse
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl mb-6">
          Your go-to blog for dev articles, tutorials, and more!
        </p>
        <button
          onClick={handleExploreClick}
          className="bg-blue-300 text-gray-950 px-6 py-2 rounded-full hover:bg-blue-400 transition-all mb-6 cursor-pointer"
        >
          Explore Blogs
        </button>

        {/* Feedback Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-500 rounded-[14px] p-6 w-full max-w-md"
        >
          <h2 className="text-xl font-semibold mb-4  text-white">
            Leave Feedback!
          </h2>

          <textarea
            placeholder="Your feedback..."
            className="w-full p-2 border border-zinc-300 rounded mb-4 placeholder-gray-200"
            value={feedback}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFeedback(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Rate us (1-5)"
            className="w-full p-2 border border-zinc-300 rounded mb-4 placeholder-gray-200"
            value={rating}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRating(Number(e.target.value))
            }
            min="1"
            max="5"
          />

          <button
            type="submit"
            className="bg-green-300 text-gray-950 px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </main>

      <footer className="bg-zinc-800 text-white text-sm text-center py-4 ">
        Made with &heart; by DevVerse | &copy; 2025
      </footer>
    </div>
  );
};

export default Home;
