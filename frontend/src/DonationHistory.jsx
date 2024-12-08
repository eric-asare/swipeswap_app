/* eslint-disable react/prop-types */
import { Paper, Typography, Grid, Card, CardContent } from "@mui/material";

const DonationHistory = ({ history }) => {
  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        History
      </Typography>
      {history.length === 0 ? (
        <Typography
          variant="body1"
          align="center"
          style={{ marginTop: "20px" }}
        >
          No donations made yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {history.map((donation, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    Donation #{index + 1}
                  </Typography>
                  <Typography color="text.secondary">{donation}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default DonationHistory;
