import PropTypes from "prop-types";
import Logo from "src/assets/svg/Logo";
import { Chip } from "@material-tailwind/react";
export default function Auth(props) {
  return (
    <div className="h-full min-h-screen flex flex-col items-center py-4 bg-main">
      <div className="flex items-center ">
        <Logo className="h-8" />
        <Chip className="ml-2" color="blue" value="Beta" />
      </div>
      <div className="w-full px-4 max-w-screen-sm my-6">{props.children}</div>
    </div>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
