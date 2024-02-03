import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideBarImage from "@/assets/sideTopNews.png"

const SideBar = () => {
  return (
    <Box className='my-5'>
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
    </Box>
  );
};

export default SideBar;
