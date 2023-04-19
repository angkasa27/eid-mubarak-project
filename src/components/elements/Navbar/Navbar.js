import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import Burger from "src/assets/svg/Burger";
import Close from "src/assets/svg/Close";
import Link from "next/link";
import Logo from "src/assets/svg/Logo";
import { ROUTES, NAV } from "src/configs";
import clsx from "clsx";
import Github from "src/assets/svg/Github";

const menuVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
};

const listVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  hidden: { y: "50vh", opacity: 0, transition: { duration: 0.2 } },
};

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav
        className={clsx(
          "border-blue-gray-200/25 text-default lg:sticky top-0 z-50 w-full bg-main",
          { "border-b": !showMenu }
        )}
      >
        <div className="flex items-center justify-between p-4 container">
          <Link className="flex items-end gap-2 md:gap-4" href={ROUTES.MAIN()}>
            <Logo className="h-10" />
            <h4 className="text-2xl bold">EidMubarak!</h4>
          </Link>
          <IconButton
            className="md:hidden"
            color="light-blue"
            onClick={() => setShowMenu(!showMenu)}
            variant="outlined"
          >
            {showMenu ? (
              <Close className="h-5 w-5" />
            ) : (
              <Burger className="h-5 w-5" />
            )}
          </IconButton>
          <ul className="gap-12 md:flex hidden items-center">
            {NAV.MAIN.map((v, i) => (
              <li key={i} onClick={() => setShowMenu(false)}>
                <Link className="body-2" href={v.href}>
                  {v.label}
                </Link>
              </li>
            ))}
            {/*
            <div className="flex justify-center gap-4">
              <a
                className="text-white text-opacity-80 hover:text-opacity-100"
                href="https://github.com/angkasa27/eid-mubarak-project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="h-8 w-8" />
              </a>
            </div> */}
          </ul>
        </div>
      </nav>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            animate="visible"
            className="fixed z-40 flex h-screen w-screen flex-col items-center justify-end bg-main px-6 pt-4 pb-24 "
            exit="hidden"
            initial="hidden"
            variants={menuVariant}
          >
            <ul className="flex flex-col items-center">
              {NAV.MAIN.map((v, i) => (
                <motion.li
                  className="mb-5"
                  key={i}
                  onClick={() => setShowMenu(false)}
                  variants={listVariant}
                >
                  <Link className="title-2 w-full" href={v.href}>
                    {v.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            {/* <div className="flex justify-center gap-4">
              <a
                href="https://github.com/angkasa27/eid-mubarak-project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.div variants={listVariant}>
                  <Github className="h-8 w-8" />
                </motion.div>
              </a>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
