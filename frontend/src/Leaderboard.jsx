/* eslint-disable react/prop-types */

import { Paper, Typography, Grid, Card, CardContent } from "@mui/material";

const Leaderboard = ({ topDonors }) => {
  return (
    <Paper
      elevation={5}
      style={{
        padding: "30px",
        maxWidth: "600px",
        margin: "20px auto",
        borderRadius: "15px",
        backgroundColor: "#ffffff", // Clean white background
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ color: "#333" }}
      >
        Leaderboard
      </Typography>
      {topDonors.length === 0 ? (
        <Typography
          variant="body1"
          align="center"
          style={{ marginTop: "20px", fontStyle: "italic", color: "#666" }}
        >
          No donors yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {topDonors.map((donor, index) => (
            <Grid item xs={12} key={index}>
              <Card
                variant="outlined"
                style={{
                  backgroundColor:
                    index === 0
                      ? "#FFD700" // Gold for first place
                      : index === 1
                      ? "#C0C0C0" // Silver for second place
                      : index === 2
                      ? "#CD7F32" // Bronze for third place
                      : "#F5F5F5", // Light gray for others
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow: index < 3 ? "0 4px 15px rgba(0,0,0,0.2)" : "none",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px", // Increased padding for better spacing
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    style={{
                      fontWeight: index === 0 ? "bold" : "normal",
                      color: index === 0 ? "#8B6914" : "#333", // Darker gold for first place
                    }}
                  >
                    {index + 1}. {donor.name}
                  </Typography>
                  <Typography variant="h6" style={{ color: "#333" }}>
                    {donor.swipes} swipes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default Leaderboard;
