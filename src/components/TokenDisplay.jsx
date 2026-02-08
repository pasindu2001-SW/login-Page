import { Box, Typography, Paper, Avatar, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const TokenDisplay = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const accessToken = state?.accessToken;
    const user = state?.user;

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100vw", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f5f5f5",
                p: 2
            }}
        >
            <Paper sx={{ p: 4, maxWidth: 900, width: "100%" }}>
                <Typography variant="h4" mb={3} fontWeight="bold">
                    Dashboard
                </Typography>

                {user && (
                    <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar src={user.photo} alt={user.name} sx={{ width: 56, height: 56 }} />
                        <Box>
                            <Typography variant="h6">{user.name}</Typography>
                            <Typography color="text.secondary">{user.email}</Typography>
                        </Box>
                    </Box>
                )}

                <Typography variant="h6" mb={2}>
                    Access Token:
                </Typography>
                <Paper
                    sx={{
                        wordBreak: "break-all",
                        bgcolor: "#f5f5f5",
                        p: 3,
                        borderRadius: 2,
                        border: "1px solid #e0e0e0",
                        fontFamily: "monospace",
                        fontSize: "14px"
                    }}
                >
                    {accessToken || "No token found"}
                </Paper>

                <Button
                    variant="contained"
                    onClick={handleLogout}
                    sx={{
                        mt: 3,
                        bgcolor: "#000",
                        '&:hover': { bgcolor: "#333" }
                    }}
                >
                    Logout
                </Button>
            </Paper>
        </Box>
    );
};
