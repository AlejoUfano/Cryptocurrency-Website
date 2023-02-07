import { SelectedPage, StatisticType } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Graphic from "@/assets/Graphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  UserIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";
import Statistic from "./Statistic";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
const statistics: Array<StatisticType> = [
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "$30B",
      description:
        "Digital Currency Exchanged",
    },
    {
      icon: <UserIcon className="h-10 w-10" />,
      title: "10M+",
      description:
        "Trusted Wallets Investor",
    },
    {
      icon: <GlobeAmericasIcon className="h-10 w-10" />,
      title: "195",
      description:
        "Countries Supported",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
const WhyCrappo = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="whycrappo"
      className="gap-16 bg-primary-500 py-10 md:h-full md:pb-0"
    >
        <motion.div
          className="md:px-36 flex flex-col md:mt-12 items-center justify-around md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
        {
        statistics.map((statistic: StatisticType) => (
            <Statistic
              key={statistic.title}
              icon={statistic.icon}
              title={statistic.title}
              description={statistic.description}
              setSelectedPage={setSelectedPage}
            />
          ))
          }
          </motion.div>
          <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className='md:flex-row-reverse flex flex-col mx-auto w-5/6 items-center justify-center'
        >
          <div className='z-10 md:basis-3/6 md:p-32'>
            {/* HEADINGS */}
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x: 0},
            }}
            >
              <p className='mt-8 text-5xl leading-[76px] font-bold text-white '>
              Why you should choose CRAPPO
              </p>
              <p className='mt-8 text-md text-gray-20 md:w-2/3'>
              Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
              </p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div 
            className='mt-8 flex items-center gap-8 md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x: 0},
            }}
            >
              <ActionButton active={false} setSelectedPage={setSelectedPage}>
                <div className='flex'>
                     <div className='flex'>Learn More</div>
                </div>
              </ActionButton>
            </motion.div>

          </div>
          {/* IMAGE */}
          <div className='flex basis-3/6 justify-center md:z-10 md:justify-center mt-5 md:mt-0'>
            <img src={Graphic} alt="home-pageGraphic"/>
          </div>
          </motion.div>

    </section>
  );
};

export default WhyCrappo;
