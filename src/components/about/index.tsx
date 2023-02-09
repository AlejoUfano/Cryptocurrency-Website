import React from "react";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";
import Chart from "@/assets/Chart.png";
import Statistic from "@/assets/Statistic.png";
import Table from "@/assets/Table.png";

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="flex h-fit md:pt-36 flex-col items-center justify-center gap-16 bg-primary-300 py-0 md:py-10 md:mt-52 md:h-max md:pb-0"
    >
      <motion.div className="mx-auto flex w-5/6 flex-col items-center justify-center md:h-5/6 mt-32 md:mt-0">
        <motion.div className="md:w-5/6 w-full items-center justify-center md:flex">
          <h1 className="mb-4 flex text-3xl md:text-4xl font-extrabold text-white md:w-4/6 text-center">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h1>
        </motion.div>

        {/* CHART SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center w-full justify-center md:mt-0 mt-10">         
          <div className="z-10 md:basis-3/6 md:p-32">         
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:-mt-20"
            >
              <p className="md:mt-8 my-4 text-3xl md:text-4xl font-black text-white text-center md:text-start">
              Invest Smart
              </p>
              <p className="md:mt-8 text-sm text-gray-20 md:w-2/3 text-center md:text-start">
              Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. 
              </p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8 md:justify-start justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton>
                <div className="flex">
                  <div className="flex">Learn More</div>
                </div>
              </ActionButton>
            </motion.div>
          </div>
          {/* IMAGE */}
          <div className="mt-10 flex basis-3/6 justify-center md:z-10 md:mt-32 md:justify-center">
            <img src={Chart} alt="home-pageGraphic" />
          </div>
        </div>

        {/* STATISTIC SECTION */}

        <div className="flex flex-col-reverse md:flex-row-reverse w-full items-center justify-center md:mt-0 mt-10">          
          <div className="z-10 md:basis-3/6 md:p-32">
           
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:-mt-20"
            >
              <p className="mt-8 text-3xl md:text-4xl font-black text-white text-center md:text-start">
              Detailed Statistics
              </p>
              <p className="md:mt-8 text-sm text-gray-20 md:w-2/3 md:text-start text-center ">
              View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. 
              </p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8 md:justify-start justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton>
                <div className="flex">
                  <div className="flex">Learn More</div>
                </div>
              </ActionButton>
            </motion.div>
          </div>
          {/* IMAGE */}
          <div className="mt-10 flex basis-3/6 justify-center md:z-10 md:mt-32 md:justify-items-end">
            <img src={Statistic} alt="home-pageGraphic" />
          </div>
        </div>
              {/* TABLE SECTION */}
        <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center md:mt-0 mt-10 mb-10">         
          <div className="z-10 md:basis-3/6 md:p-32">         
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:-mt-20"
            >
              <p className="md:mt-8 my-4 text-3xl md:text-4xl font-black text-white text-center md:text-start">
              Grow your profit and track your investments
              </p>
              <p className="md:mt-8 text-sm text-gray-20 md:w-2/3 text-center md:text-start">
              Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
              </p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8 md:justify-start justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton>
                <div className="flex">
                  <div className="flex">Learn More</div>
                </div>
              </ActionButton>
            </motion.div>
          </div>
          {/* IMAGE */}
          <div className="mt-10 flex basis-3/6 justify-center md:z-10 md:mt-32 md:justify-center">
            <img src={Table} alt="home-pageGraphic" />
          </div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default About;
