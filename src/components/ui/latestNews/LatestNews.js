import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "@/assets/topNews.png"
import topNews2 from "@/assets/topNews2.png"
import topNews3 from "@/assets/topNews3.png"
import topNews4 from "@/assets/topNews4.png"
import topNews5 from "@/assets/topNews5.png"
import Image from 'next/image';
const LatestNews = () => {
    return (
        <Box className='my-5'>
           <Card sx={{ }}>
      <CardActionArea>
        <CardMedia>
            <Image src={topNews} width={800}  alt='topNews'/>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] bg-red-700 px-2 text-white rounded-sm'>Technology</p>
          <Typography gutterBottom variant="h5" component="div">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom  className='my-3'>
          By Fahad Mridha - feb 03 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
           </Card> 

    <Grid className='my-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card sx={{ }}>
      <CardActionArea>
        <CardMedia>
            <Image src={topNews2} width={800}  alt='topNews'/>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] bg-red-700 px-2 text-white rounded-sm'>Technology</p>
          <Typography gutterBottom >
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom  className='my-3'>
          By Fahad Mridha - feb 03 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
           </Card> 
  </Grid>
  <Grid item xs={6}>
  <Card sx={{ }}>
      <CardActionArea>
        <CardMedia>
            <Image src={topNews3} width={800}  alt='topNews'/>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] bg-red-700 px-2 text-white rounded-sm'>Technology</p>
          <Typography gutterBottom >
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom  className='my-3'>
          By Fahad Mridha - feb 03 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
           </Card> 
  </Grid>
  <Grid item xs={6}>
  <Card sx={{ }}>
      <CardActionArea>
        <CardMedia>
            <Image src={topNews4} width={800}  alt='topNews'/>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] bg-red-700 px-2 text-white rounded-sm'>Technology</p>
          <Typography gutterBottom >
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom  className='my-3'>
          By Fahad Mridha - feb 03 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
           </Card> 
  </Grid>
  <Grid item xs={6}>
  <Card sx={{ }}>
      <CardActionArea>
        <CardMedia>
            <Image src={topNews5} width={800}  alt='topNews'/>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] bg-red-700 px-2 text-white rounded-sm'>Technology</p>
          <Typography gutterBottom >
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom  className='my-3'>
          By Fahad Mridha - feb 03 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
           </Card> 
  </Grid>
      </Grid>
        </Box>
    );
};

export default LatestNews;