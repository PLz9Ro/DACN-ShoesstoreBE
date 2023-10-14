import { Button, Card } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartInfo = () => {
  const navigate= useNavigate()
  const handleCheckout=()=>{
    navigate("/checkout?step=2 ")
  }
  return (
    <div className="pt-[2rem]">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 ">
          {[1, 1, 1, 1].map((item) => (
            <CartItem/>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-100vh mt-5 lg:mt-0">
          <div className="border px-3">
            <p className="uppercase font-bold opacity-60 pb-4 text-start">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>2.000.000VND</span>
              </div>
            </div>
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Original price</span>
                <div className="text-green-900 line-through text-sm">
                  <span>2.200.000VND</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <div className="text-green-800 ">
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Sale</span>
                <div className="">
                  <span>200.000VND</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between py-3 text-black">
                <span>Delivery Charges</span>
                <div className="text-green-900">
                  <span>Free</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between py-3 mb-5 text-black border-t-2">
                <span>Price</span>
                <div className="text-green-900">
                  <span>2.000.000VND</span>
                </div>
              </div>
            </div>
            <div>
              <Button
                onClick={handleCheckout}
                variant="container"
                sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                className="w-full"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
