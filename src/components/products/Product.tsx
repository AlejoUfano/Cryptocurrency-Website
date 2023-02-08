import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import ActionButton from "@/shared/ActionButton";

const childVariant = {
  hidden: { opacity: 0, x:50 },
  visible: { opacity: 1, x: 0},
};

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Product = ({
  icon,
  title,
  subtitle,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={childVariant}
      className="transition-300 group mt-5 flex h-80 w-5/6 flex-col items-center justify-around rounded-xl bg-white px-2 py-2 text-center transition ease-in hover:bg-primary-300 md:w-72"
    >
      <img src={icon} alt="icon" className="h-16 w-16" />
      <div className="flex items-center justify-center">
        <h1 className="flex text-2xl font-bold text-primary-500 group-hover:text-white">
          {title}
        </h1>
        <p className="flex text-xs text-light-gray">&nbsp;&nbsp;{subtitle}</p>
      </div>
      <p className="transition-300 flex w-5/6 text-sm text-light-gray transition ease-in">
        {description}
      </p>
      <button className="flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white group-hover:hidden">
          <ChevronRightIcon className="flex h-6 w-6 text-primary-100" />
        </div>
        <div className="transition-300 hidden rounded-full bg-primary-100 px-5 py-3 transition ease-in group-hover:flex">
          <div className="flex text-white">Try for FREE</div>
          <div className="ml-5 flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <ChevronRightIcon className="flex h-4 w-4 text-primary-100" />
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default Product;
