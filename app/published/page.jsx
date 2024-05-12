import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Stack, Button, Typography } from "@mui/material";
import PublishedListItem from "@/components/PublishedListItem";

const PublishedPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  if(session?.user) {
    return (
      <>
      <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
        <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column'>
          <Stack position='fixed' direction="column" spacing={2} component="div" margin={2}>
            <Button variant='outlined' href="/dashboard">Your Routes</Button>
            <Button variant='outlined'>Your Locations</Button>
            <Button variant='contained'>Published Routes</Button>
          </Stack>
        </Box>
        <Box display='flex' flexGrow='1' flexDirection='column' alignItems={'center'} margin={2}>
          <Box display='flex' direction='row' width='100%' justifyContent={"space-between"}>
            <Typography variant='h5'>
              YOUR PUBLISHED ROUTES
            </Typography>
          </Box>
          <PublishedListItem />
          <PublishedListItem />
          <PublishedListItem />
        </Box>
      </Box>
    </>
    );
  }

  return (
    <Box display='flex' width='100%' marginTop={50} justifyContent={'center'}>
      <Typography variant='h5'>
        Please log in
      </Typography>
    </Box>    
  );
};

export default PublishedPage;