import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Stack, Button, Typography } from "@mui/material";
import RouteListItem from "@/components/RouteListItem";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  if(session?.user) {
    return (
      <>
      <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
        <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column'>
          <Stack position='fixed' direction="column" spacing={2} component="div" margin={2}>
            <Button variant='contained'>Your Routes</Button>
            <Button variant='outlined'>Your Locations</Button>
            <Button variant='outlined' href="/published">Published Routes</Button>
          </Stack>
        </Box>
        <Box display='flex' flexGrow='1' flexDirection='column' alignItems={'center'} margin={2}>
          <Box display='flex' direction='row' width='100%' justifyContent={"space-between"}>
          <Typography variant='h5'>
              YOUR SAVED ROUTES
            </Typography>
            <Button variant='contained'>
              Add New Route
            </Button>          
          </Box>
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
        </Box>
      </Box>
    </>
    );
  }

  return (
    <h1>Please log in</h1>
  );
};

export default DashboardPage;