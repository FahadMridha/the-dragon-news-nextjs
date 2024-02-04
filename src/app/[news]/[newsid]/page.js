import { getSingleNews } from "@/utils/getSilgleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NewsDetailPage = async ({ params }) => {
  const { data:news } = await getSingleNews(params.newsid);
  return (
    <Box className="my-5" >
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} >
            <Image src={news.thumbnail_url} width={800} height={500} alt="news"/>
            <Grid container spacing={2} className="mt-2">
          <Grid item lg={6} >
            <Image src={news.image_url} width={800} height={500} alt="news"/>
          </Grid>
          <Grid item lg={6} >
          <Image src={news.image_url} width={800} height={500} alt="news"/>
          </Grid>
        </Grid>
          </Grid>
          <Grid item lg={6} >
            <Typography variant="h5" component="h2">
                {news.title}
            </Typography>
            <Box sx={{
                display:"flex",
                gap:3,
                alignItems:"center"
            }}>
            <Avatar alt="author image" src={news.author.img} />
            <Typography>
                {news.author.name}
            </Typography>
            <Typography>
            Publish: {news.author.published_date}
            </Typography>
            </Box>
            <Typography style={{
                textAlign:"justify",
                whiteSpace:"pre-line",
                margin:"10px 0px",
                color:"gray"
            }}>
            {news.details}
            </Typography>
            <Typography variant="h6">
            ``Many desktop publishing packages and web page editors now use as their default model text!
            </Typography>
            <Typography variant="h6">
           -Fahad Mridha
           </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailPage;
