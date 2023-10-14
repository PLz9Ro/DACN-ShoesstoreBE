import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductRating = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3} className="text-start  py-5">
        <Grid item sx={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "9155fd" }}
            ></Avatar>
          </Box>
        </Grid>
        <Grid item sx={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">PLZ</p>
              <p className="opacity-70"> April 5 ,2023</p>
            </div>
          </div>
          <Rating
            value={4.5}
            name="half-rating"
            className="pt-1"
            readOnly
            precision={0.5}
          />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            itaque.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductRating;
