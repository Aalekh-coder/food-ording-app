import { Button } from "@/components/ui/button";
import { Mail, MapPinHouse, Phone, UserRoundPen } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const PaymentInfo = () => {
  const [name, setName] = useState();
  function handleForm(e) {
    e.preventDefault();
    toast.success(`Thanks ${name} from Masala Story`);
    console.log(name);
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
                className="border-none focus:outline-none"
                type="text"
                placeholder="Enter you Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative border rounded-xl px-3 flex items-center py-2 gap-5 my-3">
              <Phone />
              <input
                className="border-none  focus:outline-none"
                type="number"
                placeholder="Enter Your phone No."
              />
            </div>
            <div className="relative border rounded-xl px-3 flex items-center py-2 gap-5 my-3">
              <MapPinHouse />
              <textarea
                className="border-none  focus:outline-none"
                type="text"
                placeholder="Enter your Location"
                cols={32}
                rows={2}
              ></textarea>
            </div>
            <div className="relative border rounded-xl px-3 flex items-center py-2 gap-5 my-3">
              <Mail />
              <input
                className="border-none  focus:outline-none"
                type="email"
                placeholder="Enter your Email Address"
              />
            </div>

            <Button type="submit" className="bg-blue-600 w-full ">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="md:w-1/2 hidden md:block md:h-[95vh] ">
        <img
          src="./food.jpg"
          alt="food-panner"
          className="lg:object-cover lg:h-[100vh] w-full"
        />
      </div>
    </div>
  );
};

export default PaymentInfo;
