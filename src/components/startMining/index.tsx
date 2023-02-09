import { TextField } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
};

const StartMining = (props: Props) => {

  
  return (
    <section className="flex items-center justify-center  bg-primary-300 py-10 md:pb-10">
      <div className="flex flex-col md:flex-row py-12 px-12 md:px-16 w-5/6 rounded-lg bg-primary-100 items-center justify-around space-y-4 md:space-y-0">
        <div className="flex-col md:flex-row md:w-2/5 md:space-y-10 space-y-4">
          <h1 className="flex font-extrabold text-white text-2xl md:text-4xl justify-center md:justify-start">Start mining now</h1>
          <p className="flex text-center md:text-start text-sm md:text-md text-white md:w-2/3">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10">
        <TextField
          id="standard-search"
          label="Enter your email"
          type="search"
          variant="standard"
          className="md:w-96"
          InputLabelProps={{
            shrink: true,
          }}
        />
          <AnchorLink className="flex justify-center h-fit rounded-full font-semibold bg-white px-0 md:px-6 py-4 text-primary-500 hover:cursor-pointer hover:bg-primary-500 hover:text-white hover:outline hover:outline-1">
            Subscribe
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default StartMining;
