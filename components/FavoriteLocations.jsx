import React, {useState, useEffect} from 'react';
import { Grid, IconButton, Typography, Card, CardMedia,  CardContent} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSession } from 'next-auth/react';


const FavoriteLocations = ({ locations, onFavoriteToggle }) => {
  const { data: session } = useSession();
  const [favoriteStatus, setFavoriteStatus] = useState({});


  useEffect(() => {
   
    const initialFavoriteStatus = {};

    locations.forEach((location) => {
      initialFavoriteStatus[location.id] = location.isFavorite;
    });
    setFavoriteStatus(initialFavoriteStatus);
  }, [locations]);


  const handleFavoriteClick = async (location_id, event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/favorites', {
        user_id: session.user.id,
        location_id: location_id,
      });

      if (response.status === 200) {
       
        setFavoriteStatus((prevStatus) => ({
          ...prevStatus,
          [location_id]: !prevStatus[location_id],
        }));
      
        onFavoriteToggle(location_id);
      }
    } catch (error) {
      console.error('Error toggling favorite status:', error);
    }
  };


  return (
    <Grid container spacing={3}>
      {locations.map((location) => (
        <Grid item xs={12} sm={6} md={4} key={location.id}>

          <Card sx={{ maxWidth: 330, height: 530, margin: 'auto', marginTop: 3, display: 'flex', flexDirection: 'column' }}>
            {location.image && (
              <CardMedia
                component="img"
                height="140"s
                image={location.image}
                alt={location.name}
                sx={{ width: '100%', height: 250, objectFit: 'cover'  }}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {location.name}
                <IconButton onClick={(event) => handleFavoriteClick(location.id, event)} sx={{ float: 'right' }}>
                  {/* {location.isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />} */}
                  {favoriteStatus[location.id] ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                       Description: {location.description}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       Category: {location.category}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       Days of Operation: {location.days_of_operation}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       City: {location.city?.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       Country: {location.country?.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       Rating: {location.averageRating}
                     </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};


export default FavoriteLocations;


// import React, {useState, useEffect} from 'react';
// import { Grid, IconButton, Typography, Card, CardMedia,  CardContent} from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useSession } from 'next-auth/react';


// const FavoriteLocations = ({ locations, onFavoriteToggle }) => {
//   const { data: session } = useSession();
//   const [favoriteStatus, setFavoriteStatus] = useState({});


//   useEffect(() => {
   
//     const initialFavoriteStatus = {};

//     locations.forEach((location) => {
//       initialFavoriteStatus[location.id] = location.isFavorite;
//     });
//     setFavoriteStatus(initialFavoriteStatus);
//   }, [locations]);


//   const handleFavoriteClick = async (location_id, event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/favorites', {
//         user_id: session.user.id,
//         location_id: location_id,
//       });

//       if (response.status === 200) {
       
//         setFavoriteStatus((prevStatus) => ({
//           ...prevStatus,
//           [location_id]: !prevStatus[location_id],
//         }));
      
//         onFavoriteToggle(location_id);
//       }
//     } catch (error) {
//       console.error('Error toggling favorite status:', error);
//     }
//   };


//   return (
//     <Grid container spacing={3}>
//       {locations.map((location) => (
//         <Grid item xs={12} sm={6} md={4} key={location.id}>
//           <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 3 }}>
//             {location.image && (
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={location.image}
//                 alt={location.name}
//               />
//             )}
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {location.name}
//                 <IconButton onClick={(event) => handleFavoriteClick(location.id, event)} sx={{ float: 'right' }}>
//                   {/* {location.isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />} */}
//                   {favoriteStatus[location.id] ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//                 </IconButton>
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                        Description: {location.description}
//                      </Typography>
//                      <Typography variant="body2" color="text.secondary">
//                        Category: {location.category}
//                      </Typography>
//                      <Typography variant="body2" color="text.secondary">
//                        Days of Operation: {location.days_of_operation}
//                      </Typography>
//                      <Typography variant="body2" color="text.secondary">
//                        City: {location.city?.name}
//                      </Typography>
//                      <Typography variant="body2" color="text.secondary">
//                        Country: {location.country?.name}
//                      </Typography>
//                      <Typography variant="body2" color="text.secondary">
//                        Rating: {location.averageRating}
//                      </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };


// export default FavoriteLocations;

