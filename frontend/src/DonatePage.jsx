import DonationForm from "./DonationForm";
import DonationHistory from "./DonationHistory";
import Leaderboard from "./Leaderboard";
import { Box } from "@mui/material";
// Optionally import useTheme if you want to use the theme palette
// import { useTheme } from "@mui/material/styles";

const Donate = () => {
  const donationHistory = []; // Replace with actual data
  const topDonors = [
    { name: "Alice", swipes: 50 },
    { name: "Bob", swipes: 30 },
  ];

  return (
    <Box
      className="App"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      style={{
        padding: "20px",
        backgroundColor: "#00bcd4", // Cyan-500 hex code
        height: "100vh", // Optional: Set full height for better appearance
      }}
    >
      <Box flex={1} marginRight={2}>
        <DonationForm />
        <DonationHistory history={donationHistory} />
      </Box>
      <Box width="300px">
        {/* Fixed width for the leaderboard */}
        <Leaderboard topDonors={topDonors} />
      </Box>
    </Box>
  );
};

export default Donate;
