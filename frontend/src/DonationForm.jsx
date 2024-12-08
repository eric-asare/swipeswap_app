import { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for styling

const DonationForm = () => {
  const [swipes, setSwipes] = useState(1);
  const [dates, setDates] = useState([]);
  const [dateTime, setDateTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Donated ${swipes} swipes on ${dates.join(", ")}`);
    setSwipes(1);
    setDates([]);
  };

  const addDate = () => {
    if (dateTime) {
      setDates([...dates, dateTime]);
      setDateTime(null); // Reset dateTime after adding
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "30px",
        maxWidth: "500px",
        margin: "auto",
        borderRadius: "15px",
        backgroundColor: "#f9f9f9", // Light background for contrast
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Donate Swipes
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          label="How many swipes to donate"
          value={swipes}
          onChange={(e) => setSwipes(e.target.value)}
          required
          fullWidth
          margin="normal"
          inputProps={{ min: 1 }} // Ensure at least one swipe is entered
          variant="outlined" // Use outlined variant for a modern look
        />
        <div style={{ margin: "20px 0" }}>
          <DatePicker
            selected={dateTime}
            onChange={(date) => setDateTime(date)}
            showTimeSelect
            dateFormat="Pp" // Format for displaying date and time
            placeholderText="Select Date & Time"
            className="react-datepicker__input-container"
            isClearable // Allow clearing the selected date
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#B19CD7", // NYU Purple
            color: "white",
            marginBottom: "20px",
            width: "100%", // Full width for the button
            "&:hover": {
              backgroundColor: "#45056A", // Darker shade for hover effect
            },
          }}
          onClick={addDate}
          disabled={!dateTime}
        >
          Add Date/Time
        </Button>
        <Grid container spacing={2}>
          {dates.map((date, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                {date.toString()}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "#B19CD7", // NYU Purple
            color: "white",
            marginTop: "20px",
            width: "100%", // Full width for the button
            "&:hover": {
              backgroundColor: "#45056A", // Darker shade for hover effect
            },
          }}
        >
          Donate Now
        </Button>
      </form>
    </Paper>
  );
};

export default DonationForm;
