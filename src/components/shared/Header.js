import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import HeaderImage from "@/assets/TheDragonNews.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          src={HeaderImage}
          width={500}
          height={500}
          alt="logo"
          className="mx-auto"
        />
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          journalism without fear or fever
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
