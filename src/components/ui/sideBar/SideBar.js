import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideBarImage from "@/assets/sideTopNews.png";
import sideBarImage2 from "@/assets/sideBarDown.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarImage} width={800} alt="topNews" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-700 px-2 text-white rounded-sm">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Fahad Mridha - feb 03 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box>
        <Grid container spacing={5} className="mt-5">
          <Grid item lg={3}>
            <Avatar
              sx={{ width: 56, height: 56,borderRadius:"5px" }}
              alt="Remy Sharp"
              variant="square"
              src="/static/images/avatar/1.jpg"
            />
          </Grid>
          <Grid item lg={9}>
            <h1 className="w-full">Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </h1>
            <Typography variant="body2" color="gray">
            Mar 18 2023
            </Typography>
          </Grid>
          <Divider />
          <Grid item lg={3}>
            <Avatar
              sx={{ width: 56, height: 56,borderRadius:"5px" }}
              alt="Remy Sharp"
              variant="square"
              src="/static/images/avatar/1.jpg"
            />
          </Grid>
          <Grid item lg={9}>
          <h1 className="w-full">Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </h1>
            <Typography variant="body2" color="gray">
            Mar 18 2023
            </Typography>
          </Grid>
          <Divider />
          <Grid item lg={3}>
            <Avatar
              sx={{ width: 56, height: 56,borderRadius:"5px" }}
              alt="Remy Sharp"
              variant="square"
              src="/static/images/avatar/1.jpg"
            />
          </Grid>
          <Grid item lg={9}>
          <h1 className="w-full">Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </h1>
            <Typography variant="body2" color="gray">
            Mar 18 2023
            </Typography>
          </Grid>
          <Divider />
          <Grid item lg={3}>
            <Avatar
              sx={{ width: 56, height: 56,borderRadius:"5px" }}
              alt="Remy Sharp"
              variant="square"
              src="/static/images/avatar/1.jpg"
            />
          </Grid>
          <Grid item lg={9}>
          <h1 className="w-full">Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </h1>
            <Typography variant="body2" color="gray">
            Mar 18 2023
            </Typography>
          </Grid>
          <Divider />
          <Grid item lg={3}>
            <Avatar
              sx={{ width: 56, height: 56,borderRadius:"5px" }}
              alt="Remy Sharp"
              variant="square"
              src="/static/images/avatar/1.jpg"
            />
          </Grid>
          <Grid item lg={9}>
          <h1 className="w-full">Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </h1>
            <Typography variant="body2" color="gray">
            Mar 18 2023
            </Typography>
          </Grid>
          <Divider />
        </Grid>
      </Box>
      <Box className='mt-24'>
      <Image src={sideBarImage2} width={800} alt="Last News" />
      </Box>
    </Box>
  );
};

export default SideBar;
