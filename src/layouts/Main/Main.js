import Navbar from "@components/elements/Navbar";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Main(props) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Navbar />
      <div className={clsx("container h-full w-full")}>{props.children}</div>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
