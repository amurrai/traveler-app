import LoginForm from "@/components/LoginForm";
import React from "react";
import { Box, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Box display='flex' justifyContent={'center'} marginTop={10} minHeight={'100vh'}>
      <Box width='400px'>
        <div>
          <LoginForm />
        </div>
      </Box>
    </Box>
  )

};

export default LoginPage;