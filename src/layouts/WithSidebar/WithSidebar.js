import Navbar from "@components/elements/Navbar";
import clsx from "clsx";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

export default function WithSidebar(props) {
  const router = useRouter();
  const { options, children } = props;

  const isActive = (path) => path === router.asPath;

  return (
    <div className="flex h-full min-h-screen flex-col bg-white">
      <Navbar options={options} secondary />
      <div className="container h-full w-full grid lg:grid-cols-5 gap-x-6 relative">
        <div className="hidden lg:block">
          <ul className="ml-4 rounded-lg border border-default overflow-hidden my-6 sticky top-[6.35rem] drop-shadow-xl">
            {options.map(({ label, href, disabled, icon: Icon }, i) => (
              <li
                className={clsx(
                  "subtitle-2 border-l-4",
                  disabled
                    ? "bg-gray-100 text-default-secondary"
                    : "bg-white hover:text-blue-500",
                  isActive(href)
                    ? "border-blue-500 text-blue-500"
                    : " border-transparent"
                )}
                key={i}
              >
                {disabled ? (
                  <p className="w-full p-4 flex items-center">
                    <Icon className="h-6 w-6 mr-2" />
                    {label}
                  </p>
                ) : (
                  <Link className="w-full p-4 flex items-center" href={href}>
                    <Icon className="h-6 w-6 mr-2" />
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={clsx("col-span-4 px-4 lg:pl-0")}>{children}</div>
      </div>
    </div>
  );
}

WithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.array.isRequired,
};
