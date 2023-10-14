import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <div className=" p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-contain	 object-top"
            src="https://product.hstatic.net/200000384421/product/upload_c13617ca96db4c879e1227b7cd48cb46_0ab54302703e4c42b499c6c1aadf58ce.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1 text-start">
          <p className="font-semibold ">
            {" "}
            Nike Air Jordan 1 Retro High OG 'Chicago' 2015
          </p>
          <p className="opacity-70"> Size: 8US</p>
          <p className="opacity-70 mt-2">Seller : PhucLam</p>
          <div className=" flex pt-5 space-x-3 items-center">
            <p className="text-black font-semibold">2.000.000VND</p>
            <p className="line-through opacity-50">2.200.000VND</p>
            <p className="text-green-600 font-semibold">10%</p>
          </div>
        </div>

      </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button variant="container" sx={{px:"2rem",py:"1rem" ,bgcolor:"#9155fd"}}>Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
