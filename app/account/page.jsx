
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { fetchAccountDetails } from "@/lib/data";
import EditAccountForm from "@/components/EditAccountForm";

const AccountPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(typeof session.user.id);

  const account = await fetchAccountDetails(session.user.id);

  console.log(account);
  if (session?.user) {
    return (
      <>
        <Box display='flex' flexDirection='row' width='100%' height='100%' justifyContent='space-between' border={1}>
          <Box display='flex' minWidth='300px' maxWidth='300px' flexDirection='column'>
            <Stack position='static' direction="column" spacing={2} component="div" margin={2}>
              <Button variant='contained'>Account Overview</Button>
            </Stack>
          </Box>
          <Box display='flex' flexGrow='1' flexDirection='column' margin={2} color='primary'>
            <Box display='flex'>
              <Typography variant='h5' color='primary'>
                Account Overview
              </Typography>
            </Box>
            <Box display='flex' paddingTop={1}>
              <Box display='flex' flexDirection='column' width='15%'>
                <Typography variant='body1'>
                  Email:
                </Typography>
                <Typography variant='body1'>
                  Username:
                </Typography>
              </Box>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>
                  {account.email}
                </Typography>
                <Typography variant='body1'>
                  {account.username}
                </Typography>
              </Box>
            </Box>
            <Box display='flex' paddingTop={3}>
            <Typography variant='h5' color='primary'>
              Change Password
            </Typography>
            </Box>
            <Box display='flex' paddingTop={1} justifyContent>
              <EditAccountForm userId={session.user.id}/>
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
