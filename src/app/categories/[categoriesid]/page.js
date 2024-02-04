import { getCategoriesNews } from "@/utils/getCategoriesNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
  // console.log(params);
  const { data } = await getCategoriesNews(searchParams.category);

  return (
    <div>
      <h1>
        Dynamic <span className="font-bold">{searchParams.category}</span> news
        : {data.length}
      </h1>
      <Grid
        className="my-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      height={100}
                      width={800}
                      alt="topNews"
                    />
                  </CardMedia>
                  <CardContent>
                    <span className=" bg-red-700 px-2 my-3 text-white rounded-sm">
                      {news.category}
                    </span>
                    <Typography variant="h6" gutterBottom>
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "...."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-2">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "...."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
