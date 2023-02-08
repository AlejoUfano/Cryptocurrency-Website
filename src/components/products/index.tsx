import React from "react";
import { ProductsType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ActionButton from "@/shared/ActionButton";
import BTC from "@/assets/BTC.png";
import ETH from "@/assets/ETH.png";
import LTC from "@/assets/LTC.png";
import Product from "./Product";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const products: Array<ProductsType> = [
  {
    icon: BTC,
    title: "Bitcoin",
    subtitle: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
  },
  {
    icon: ETH,
    title: "Ethereum",
    subtitle: "ETH",
    description:
      "Blockchain technology to create and run decentralized digital applications.",
  },
  {
    icon: LTC,
    title: "Litecoin",
    subtitle: "LTC",
    description:
      "Cryptocurrency that enables instant payments to anyone in the world.",
  },
];

const Products = ({ setSelectedPage }: Props) => {
  return (
    <section id="products" className="bg-[#f9fafd] md:h-full md:pb-0 gap-16">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Products)}
        className="px-2 md:px-0 mx-auto items-center justify-center bg-primary-500 md:flex md:h-1/2 pb-4 md:pb-0 pt-32 md:pt-0"
        // className="md:px-36 flex flex-col md:mt-12 items-center justify-around md:flex-row"
      >
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="flex text-4xl font-bold text-white">
            Check how much you can earn
          </h1>
          <p className="flex w-4/5 md:w-3/5 text-sm text-gray-20">
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </motion.div>
      {/* ESTIMATED REVENUE */}
      <motion.div className="mx-auto md:-mt-10 flex items-start justify-center md:flex">
        <div className="md:-mt-24 flex md:w-2/5 flex-col items-center justify-start rounded-lg bg-white p-6 md:shadow-sm mb-8 md:mb-0">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full justify-between pb-4 md:pb-0">
            <TextField
              className="md:w-80"
              label="Enter your hashrate"
              defaultValue="TH/s"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <select className="flex w-full md:w-36 rounded-md border border-[#c4c4c4] p-4">
              <option value="TH/s">
                TH/s
              </option>
            </select>

            <ActionButton active={false} setSelectedPage={setSelectedPage}>
              <div className="flex items-center justify-center">
                <div className="flex ">Calculate</div>
              </div>
            </ActionButton>
          </div>

          <div className="flex w-full flex-col space-y-3 md:mt-16">
            <p className="flex text-xs font-medium text-primary-100">
              ESTIMATED 24 HOUR REVENUE:
            </p>
            <div className="flex text-2xl font-bold">
              0.055 130 59 ETH
              <div className="text-primary-100">&nbsp;($1275)</div>
            </div>
            <p className="flex text-sm text-[#828282]">
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
      </motion.div>
      {/* SELECT PRODUCT */}
      <motion.div className="mx-auto w-5/6 flex-col items-center justify-center bg-white md:mt-24 md:flex md:pb-20">
        <h1 className="flex w-2/5 text-center text-4xl font-bold text-black">
          Trade securely and market the high growth cryptocurrencies.
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around mt-10 md:w-5/6 pb-4 md:pb-0">
          {products.map((statistic: ProductsType) => (
            <Product
              key={statistic.title}
              icon={statistic.icon}
              title={statistic.title}
              subtitle={statistic.subtitle}
              description={statistic.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
