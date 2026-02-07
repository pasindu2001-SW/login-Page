import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import { 
    Alert,
Box,
Button,
Divider, 
Paper , Stack,
TextField, 
Typography 
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import img2 from '../assets/img2.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [authError, setAuthError] = useState("");
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    //email validation
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Handle Google Sign-In
    const handlelogin = (e) => {
        e.preventDefault();
        const newError = {};

        if (!username) {
            newError.username = "Username is required";
        } else if (!validateEmail(username)) {
            newError.username = "Invalid email format";
        }

        if (!password) {
            newError.password = "Password is required";
        } else if (password.length < 6) {
            newError.password = "Password must be at least 6 characters";
        }

        setError(newError);

        if (Object.keys(newError).length === 0) {
            setAuthError("");
            alert("Login successful!"); 
        }
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            setAuthError("");
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            //get access token
            const accessToken = await user.getIdToken();

            //navigate to dashboard
            navigate('/TokenDisplay', {
                state: {
                    accessToken: accessToken,
                    user: {
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    }
                }
            });

        } catch (error) {
            console.error("Google Sign-In Error:", error);
            setAuthError(error.message || "Failed to sign in with Google");
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
                bgcolor: "#ffffff",
                margin: 0,               
                padding: 0,
                boxSizing: "border-box",
                position: "fixed",       
                top: 0,
                left: 0
            }}
        >
        <Paper 
            elevation={0}
            sx={{ 
                width: "110%", 
                maxWidth: "1000px",
                minHeight: "700px", 
                display: "flex", 
                borderRadius: 3, 
                overflow: "hidden",
                gap: 4,
                m: "auto" 
            }}
        >
                {/* Left side */}
                <Box sx={{ flex: 1, p: 4, display: "flex", flexDirection: "column",   alignItems: "center"  }}>
                    <Stack spacing={3} sx={{ height: "100%" }}>
                    <Typography variant='h4' fontWeight='bold' sx={{ mb: 4, textAlign: "center" }}>
                        Welcome back!
                    </Typography>

                  
                    <Typography sx={{ mt: 4, textAlign: "center",maxWidth: "380px" }}>
                        Simplify your workflow and boost your productivity with <b>Tuga's App</b>. Get started for free.
                    </Typography>


                    {authError && (
                        <Alert severity="error" onClose={() => setAuthError("")} sx={{ mt: 2 }}>
                            {authError}
                        </Alert>
                    )}

                    <form onSubmit={handlelogin}>
                        <TextField fullWidth label="Username" margin='normal'
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            if (error.username) {
                                setError(prev => ({ ...prev, username: "" }));
                            }
                        }} 
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 8 }, "& .MuiInputLabel-root": {left: 15} }}/>
                        
                        <TextField fullWidth label="Password" type={showPassword ? "text" : "password"} margin='normal'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (error.password) {
                                setError(prev => ({ ...prev, password: "" }));
                            }
                        }}
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 8 }, "& .MuiInputLabel-root": {left: 15} }}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            )
                        }} />

                        <Typography variant='body2' align='right' color='black' sx={{ mt: 2, cursor: "pointer" }}>
                            Forgot Password?
                        </Typography>

                        <Button fullWidth variant='contained' 
                            sx={{ 
                                mt: 3, 
                                borderRadius: 8, 
                                bgcolor: "#000", 
                                textTransform: "none", 
                                '&:hover': { 
                                bgcolor: "#000000",
                                transform: "translateY(-4px)",
                                } 
                            }}
                            >
                            Login
                        </Button>
                    </form>


                    <Divider sx={{ my: 3}}>or continue with</Divider>

                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                        <IconButton onClick={handleGoogleSignIn} sx={{ bgcolor: "black", color:"white", '&:hover': { bgcolor: "#333" } }}>
                        <GoogleIcon />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "black", color:"white", '&:hover': { bgcolor: "#333" } }}>
                        <AppleIcon />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "black", color:"white", '&:hover': { bgcolor: "#333" } }}>
                        <FacebookIcon />
                        </IconButton>
                    </Box>

                    {/* Spacer Box */}
                    <Box sx={{ flexGrow: 1 }} />  

                    <Typography align="center" mt={3}>
                        Not a member?{" "} 
                        <Typography component="span" color="#49a552" sx={{cursor: "pointer"}}>
                        Register now
                        </Typography>
                    </Typography>
                
                </Stack>
                </Box>
                

                {/* Right side */}
                <Box sx={{
                    flex:1,
                    p:4,borderRadius: 6, 
                    bgcolor:"#e6efe7", 
                    display:"flex", 
                    alignItems:"center", 
                    justifyContent:"center",
                    flexDirection:"column"
                }}>
                    
                    <Box
                        component="img"
                        src={img2}
                        alt='logo'
                        sx={{ width: "100%", maxWidth: 300, height: "auto"}}/>
                    
                    
                    <Typography variant='h6' align='center'>
                        Make your work easier and organized with <b>Tuga's App</b>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};