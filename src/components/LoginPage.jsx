import { useState } from 'react';
import { 
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

    const handleClickShowPassword = () => setShowPassword(!showPassword);

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


                    <TextField fullWidth label="Username" margin='normal' sx={{ '& .MuiOutlinedInput-root': { borderRadius: 8 }, "& .MuiInputLabel-root": {left: 15} }}/>
                    
                    <TextField fullWidth label="Password" type={showPassword ? "text" : "password"} margin='normal' 
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

                    <Divider sx={{ my: 3}}>or continue with</Divider>

                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                        <IconButton sx={{ bgcolor: "black", color:"white", '&:hover': { bgcolor: "#333" } }}>
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