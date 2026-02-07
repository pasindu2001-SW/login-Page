import { Box, Typography, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

export const TokenDisplay = () => {
  const { state } = useLocation();
  const accessToken = state?.accessToken;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Paper sx={{ p: 4, maxWidth: 600 }}>
        <Typography variant="h5" mb={2}>
          Access Token
        </Typography>
        <Typography
          sx={{
            wordBreak: "break-all",
            bgcolor: "#f5f5f5",
            p: 2,
            borderRadius: 1
          }}
        >
          {accessToken || "No token found"}
        </Typography>
      </Paper>
    </Box>
  );
}
