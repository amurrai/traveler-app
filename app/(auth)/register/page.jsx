import RegisterForm from "@/components/RegisterForm";
import React from "react";
import { Box, Typography } from "@mui/material";

const RegisterPage = () => {
  return (
    <Box display='flex' justifyContent={'center'} marginTop={10} minHeight={'100vh'}>
      <Box width='400px'>      
        <RegisterForm />
      </Box>
    </Box>
  )

};

export default RegisterPage;