import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderstatus = [
  { label: "On the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Return", value: "Return" },
];
const OrderDetail = () => {
  return (
    <div className="px-4">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid xs={3}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5 text-start">
            <h1 className="font-bold text-lg  mt-5">Filter</h1>
            <div className="space-4 mt-10">
              <h1 className="font-semibold text-xl mb-5">Order Status</h1>
              {orderstatus.map((option) => (
                <div className="flex items-center my-3">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-400 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5 text-start mt-5 mx-7  rounded-lg ">
            {[1,1,1,1,1,1].map((item)=> <div><OrderCard/></div>)}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetail;
