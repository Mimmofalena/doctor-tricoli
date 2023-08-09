import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const Slider = () => {
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];
  function Item(props) {
    return <Box component="img" src={props.imgPath} width="100%" />;
  }

  return (
    <Carousel
      sx={{
        marginTop: { xs: "56px", md: "64px" },
      }}
    >
      {images.map((item, i) => (
        <Item key={i} imgPath={item.imgPath} />
      ))}
    </Carousel>
  );
};

export default Slider;
