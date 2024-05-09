import { Box, Grid, Stack, Button } from "@mui/material";


const LocationDetail = () => {
  return (
    <>
      <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop='70px'>
        <Box display='flex' flexDirection='column' width='150px' margin='20px'>
          <Stack position='fixed' direction="column" spacing={2} component="div">
            <Button color="inherit" style={{ backgroundColor: '#442244' }}>Route Details</Button>
            <Button color="inherit" style={{ backgroundColor: '#442244' }}>Add to Favorites</Button>            
          </Stack>
        </Box>
        <Box display='flex' flexGrow='1' flexDirection='column' justifyContent='center'>
          <Box display='flex' justifyContent='center' width='100%'>
            <Box sx={{
              backgroundColor: '#222222',
              color: 'white',
              height: '500px',
              width: '100%',
              margin: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              MAP OF THE ROUTE
            </Box>
          </Box>
          <Box display='flex' flexDirection='row' margin={2.5} marginTop={0}>
            <Box display='flex' width='33%' justifyContent='center' backgroundColor='#440044'>
              Name
            </Box>
            <Box display='flex' width='33%' justifyContent='center' backgroundColor='#442244'>
              Rating
            </Box>
          </Box>
          <Box display='flex' margin={2.5} marginTop={0} backgroundColor='#444444' justifyContent='center' alignItems='center' height='100px'>
            DESCRIPTION
          </Box>
          <Box margin={2.5} marginRight={2.5} marginTop={0}>
            <Grid container spacing={1}>
              <Grid item>
                <Box display='flex' justifyContent='center' alignItems='center' backgroundColor='#666666' height='150px' width='150px'>
                  POI 1
                </Box>
              </Grid>
              <Grid item>
                <Box display='flex' justifyContent='center' alignItems='center' backgroundColor='#664466' height='150px' width='150px'>
                  POI 2
                </Box>
              </Grid>
              <Grid item>
                <Box display='flex' justifyContent='center' alignItems='center' backgroundColor='#668866' height='150px' width='150px'>
                  POI 3
                </Box>
              </Grid>
              <Grid item>
                <Box display='flex' justifyContent='center' alignItems='center' backgroundColor='#662266' height='150px' width='150px'>
                  POI 4
                </Box>
              </Grid>
              <Grid item>
                <Box display='flex' justifyContent='center' alignItems='center' backgroundColor='#66AA66' height='150px' width='150px'>
                  POI 5
                </Box>
              </Grid>
              <Grid item>
                <Box display='flex' justifyContent='center' alignItems='center' backgroundColor='#660066' height='150px' width='150px'>
                  POI 6
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box display='flex' margin='20px' marginTop='0px' backgroundColor='#888888' justifyContent='center' alignItems='center' height='200px'>
            Comments
          </Box>
        </Box>
      </Box>
    </>
  )
};

export default LocationDetail;