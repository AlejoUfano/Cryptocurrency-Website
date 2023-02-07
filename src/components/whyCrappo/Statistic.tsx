import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Statistic = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex mt-5 rounded-md px-5 py-16 w-full md:w-1/5 flex-row items-center gap-8 justify-center text-center"
    >
      <div className="mb-4 flex">
        <div className="flex rounded-full bg-primary-400 p-5 text-primary-100">
          {icon}
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="flex font-bold text-4xl text-white">{title}</h4>
        <p className="flex my-3 text-md text-gray-20">{description}</p>
      </div>
    </motion.div>
  );
};

export default Statistic;