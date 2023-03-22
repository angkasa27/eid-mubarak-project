import { useState, useEffect, Fragment } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Chip,
  Breadcrumbs,
} from "@material-tailwind/react";
import Link from "next/link";
import { logout } from "@utils/common";
import { LogoCompact, LogoWithText } from "src/assets/svg";
import { ROUTES, NAV } from "src/configs";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { getAccessToken } from "@utils/common";

export default function NavbarElement({ secondary, options }) {
  const [openNav, setOpenNav] = useState(false);
  const [openSecondary, setOpenSecondary] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const router = useRouter();

  const isActive = (path) => path === router.asPath;

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
        setOpenSecondary(false);
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    });
  }, []);

  const renderActionButton = !getAccessToken() ? (
    !mobileView && (
      <li className="lg:p-1 md:w-auto" color="blue-gray">
        <Button onClick={() => router.push(ROUTES.LOGIN())} size="sm">
          Login
        </Button>
      </li>
    )
  ) : (
    <li className="lg:p-1 md:w-auto" color="blue-gray">
      <Button onClick={() => logout()} size="sm">
        Logout
      </Button>
    </li>
  );

  const navList = (
    <ul
      className={clsx(
        "flex flex-col gap-4 lg:my-0 lg:py-0 lg:flex-row items-center lg:gap-6 border-t lg:border-none border-default",
        secondary ? "py-3" : "mt-4 pt-3"
      )}
    >
      {NAV.MAIN.map((item, i) => (
        <li
          className="lg:p-1 hover:text-blue-500
          body-2"
          color="blue-gray"
          key={i}
        >
          <Link className="flex items-center" href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
      {renderActionButton}
    </ul>
  );

  const secondaryList = secondary && (
    <ul className={clsx("flex flex-col border-t border-default mt-4 pt-3")}>
      {options.map(({ label, href, disabled, icon: Icon }, i) => (
        <li
          className={clsx(
            "lg:p-1 flex flex-row items-center body-2 p-2",
            disabled && "bg-gray-100 text-default-secondary",
            isActive(href) && "text-blue-500"
          )}
          color="blue-gray"
          key={i}
        >
          {disabled ? (
            <p className="w-full flex items-center justify-center">
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </p>
          ) : (
            <Link
              className="w-full flex items-center justify-center"
              href={href}
            >
              <Icon className="h-4 w-4 mr-2" /> {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <Navbar
      className="border-default text-default border-b !px-0 z-40 lg:sticky top-0"
      fullWidth
      shadow={false}
    >
      <div
        className={clsx("container flex items-center justify-between px-4", {
          ["pb-4 lg:pb-0"]: secondary,
        })}
      >
        <div className="mr-4 py-1.5 flex items-center ">
          <Link className="cursor-pointer mr-2" href={ROUTES.DASHBOARD()}>
            {mobileView ? (
              <LogoCompact className="h-8" />
            ) : (
              <LogoWithText className="h-8" />
            )}
          </Link>
          <Chip color="blue" value="Beta" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => {
            setOpenSecondary(false);
            setOpenNav(!openNav);
          }}
          ripple={false}
          variant="text"
        >
          {openNav ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          )}
        </IconButton>
      </div>

      <MobileNav className="container px-4" open={openNav}>
        {navList}
      </MobileNav>
      {secondary && (
        <Fragment>
          <div className="container flex items-center px-4 pt-4 border-t border-default gap-4 lg:hidden">
            <button
              className="bg-transparent"
              onClick={() => {
                setOpenSecondary(!openSecondary);
                setOpenNav(false);
              }}
            >
              {openSecondary ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
            <Breadcrumbs>
              <p>Birthday</p>
              <p>Form</p>
            </Breadcrumbs>
          </div>

          <MobileNav className="container px-4" open={openSecondary}>
            {secondaryList}
          </MobileNav>
        </Fragment>
      )}
    </Navbar>
  );
}

NavbarElement.propTypes = {
  options: PropTypes.array,
  secondary: PropTypes.bool,
};

NavbarElement.defaultProps = {
  options: [],
  secondary: false,
};
