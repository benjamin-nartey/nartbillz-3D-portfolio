import { motion } from "framer-motion";

import { styles } from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div
            className={`${styles.paddingX} flex items-center justify-between flex-wrap gap-4`}
          >
            <h4 className="font-extrabold text-[24px] text-white">
              NartBillionz
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2020 - 2023 NartBilionz. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
