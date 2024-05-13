import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { fetchAccountDetails } from "@/lib/data";

const AccountPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  const accountDetails = await fetchAccountDetails(session.user.id);

  console.log(accountDetails);
  if (session?.user) {
    return (
      <>
        <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>

          <Box display='flex' flexGrow='1' flexDirection='column' alignItems={'center'} margin={2}>
            <Box display='flex' direction='row' width='100%' justifyContent={"space-between"}>
            <Typography variant='h5'>
                Account details for {accountDetails.username}
            </Typography>
            {accountDetails.first_name}
            {accountDetails.email}
            {accountDetails.username}
            </Box>
          </Box>
        </Box>
      </>
    );
  } 

  return (
    <h1>Please log in!</h1>
  );
};

export default AccountPage;
