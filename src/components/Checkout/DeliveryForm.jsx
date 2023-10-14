import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../Address/AddressCard";

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const address = {
    FirstName:data.get("FirstName"),
    LastName:data.get("LastName"),
    Address:data.get("Address"),
    City:data.get("City"),
    State:data.get("State"),
    ZipCode:data.get("Zip"),
    mobile:data.get("PhoneNumber"),
  };
  console.log("Address", address);
};
const DeliveryForm = () => {
  return (
    <div className="">
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={4}
          className=" border rounded-e-md shadow-md hp[30.5rem] overflow-y-scroll h-[30rem]"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item sx={12} lg={7}>
          <Box className="border rounded-s-md  shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="FirstName"
                    name="FirstName"
                    label="FirstName"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="LastName"
                    name="LastName"
                    label="LastName"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="Address"
                    name="Address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="State"
                    name="State"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Zip"
                    name="Zip"
                    label="Zip/Postal-code"
                    fullWidth
                    autoComplete="Shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="PhoneNumber"
                    name="PhoneNumber"
                    label="PhoneNumber"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="py-4 px-5 text-start">
                  <Button
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryForm;
