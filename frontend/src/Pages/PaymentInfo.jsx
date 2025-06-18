import { addCustomerDetails } from "@/api";
import { Button } from "@/components/ui/button";
import { Mail, MapPinHouse, Phone, UserRoundPen } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Bill from "./Bill";

const PaymentInfo = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  async function handleForm(e) {
    e.preventDefault();
    const data = {
      customerName: name,
      customerPhone: phone,
      customerLocation: location,
      customerEmail: email,
    };

    const response = await addCustomerDetails(data);
    if (response?.success) {
      toast.success(`Thanks ${name} from Masala Story!`);
    } else {
      toast.error("Something went wrong");
    }

    setName("");
    setPhone("");
    setLocation("");
    setEmail("");
  }


 

  return (
    <div className="md:flex md:items-center lg:items-start">
      <div className="shadow-xl my-4 mx-1 p-3 rounded-xl pb-5 md:w-1/2 lg:px-32 lg:shadow-none">
        <div>
          <p
            style={{ fontFamily: "'Caveat', cursive" }}
            className="text-black text-center mb-12 text-4xl"
          >
            The Masala Story
          </p>

          <p
            className="font-medium text-2xl text-center"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Your Information
          </p>
          <p className=" text-gray-600 text-center">
            Help us get your delicious food to you by providing a few details.
          </p>

          <form className="" onSubmit={handleForm}>
            <div className="relative border rounded-xl px-3 flex items-center py-2 gap-5 my-3">
              <UserRoundPen />
              <input
                className="border-none focus:outline-none w-full" // Added w-full for better styling
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Name"
              />
            </div>
            <div className="relative border rounded-xl px-3 flex items-center py-2 gap-5 my-3">
              <Phone />
              <input
                className="border-none focus:outline-none w-full"
                type="number" // Changed to 'tel' for phone numbers
                placeholder="Enter Your Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                aria-label="Phone Number"
              />
            </div>
            <div className="relative border rounded-xl px-3 flex items-center py-2 gap-5 my-3">
              <MapPinHouse />
              <textarea
                className="border-none focus:outline-none w-full resize-y" // Added resize-y for vertical resizing
                placeholder="Enter your Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                rows={2}
                required
                aria-label="Delivery Location"
              ></textarea>
            </div>
            <div className="relative border rounded-xl px-3 flex items-center py-2 gap-5 my-3">
              <Mail />
              <input
                className="border-none focus:outline-none w-full"
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email Address"
              />
            </div>

            <Button type="submit" className="bg-blue-600 w-full ">
              Submit
            </Button>
          </form>
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
            <Bill />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="md:w-1/2 hidden md:block md:h-[95vh] ">
        <img
          src="./food.jpg"
          alt="Delicious food spread on a table, symbolizing Masala Story cuisine"
          className="lg:object-cover lg:h-[100vh] w-full"
        />
      </div>
    </div>
  );
};

export default PaymentInfo;
