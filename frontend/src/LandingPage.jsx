import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const LandingPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const url = import.meta.env.VITE_BACKEND_API_URL + "/api/users";
  const saveUserMutation = useMutation(
    (userData) => axios.post(url, userData),
    {
      onMutate: (userData) => {
        queryClient.setQueryData("userData", userData);
        navigate("/home");
      },
      onError: (error) => {
        console.error("Error saving user data:", error);
      },
      onSettled: () => {
        queryClient.invalidateQueries("userData");
      },
    }
  );

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const { email, name, picture } = decoded;
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify({ email, name, picture }));
      saveUserMutation.mutate({ email, name, picture });
    } catch (error) {
      console.error("Error processing login:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#57068c]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://nyuad.nyu.edu/content/nyuad/en/home/campus-life/housing-and-accommodation/dining/_jcr_content/mainparsys/tabs_1095737787/tabparsys2/columncontol/columnpar5_1/image/image.img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3, // Adjust this value for desired opacity
        }}
      />
      <h1 className="text-4xl font-bold text-black-700 mb-4">
        Welcome to SwipeSwap
      </h1>
      <p className="text-xl font-semibold text-white mb-2">Share a Swipe</p>
      <p className="text-xl font-semibold text-white mb-2">Share a Meal</p>
      <p className="text-xl font-semibold text-white mb-8">Share a Moment</p>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={(error) => {
            console.error("Login Error:", error);
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
