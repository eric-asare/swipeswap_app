import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import EatingHabitsForm from "./EatingHabitsForm";

const HomePage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null); // State to hold user data

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUserData(JSON.parse(loggedInUser));
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Here you can handle the form submission, e.g., send data to a server
    handleCloseModal();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold mb-4 sm:mb-0">SwipeSwap</div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center">
          {/* Display user picture if available */}
          {userData && userData.picture && (
            <img
              src={userData.picture}
              alt="User"
              className="w-10 h-10 rounded-full mr-2" // Adjust size and style as needed
            />
          )}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleOpenModal}
          >
            Update Info
          </button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <EatingHabitsForm
              onSubmit={handleFormSubmit}
              onClose={handleCloseModal}
            />
          </Modal>
          <button className="">
            <Link
              to="/"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </Link>
          </button>
        </div>
      </header>
      <h1 className="text-3xl font-semibold mb-8 py-1 text-center">Home</h1>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <button
            className="w-full px-6 py-4 bg-cyan-600 text-white rounded-lg text-lg font-semibold hover:bg-cyan-800 transition duration-300"
            onClick={() => navigate("/donate")}
          >
            Donate/Gift
          </button>
          <button
            className="w-full px-6 py-4 bg-pink-600 text-white rounded-lg text-lg font-semibold hover:bg-pink-800 transition duration-300"
            onClick={() => navigate("/request")}
          >
            Request
          </button>
          <button
            className="w-full px-6 py-4 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300"
            onClick={() => navigate("/dine")}
          >
            Dine
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
