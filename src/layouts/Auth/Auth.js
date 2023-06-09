import PropTypes from "prop-types";
import Logo from "src/assets/svg/Logo";
import Link from "next/link";
import { ROUTES } from "src/configs";
export default function Auth(props) {
  return (
    <div className="h-full min-h-screen flex flex-col items-center py-4 bg-main">
      <Link href={ROUTES.DASHBOARD()}>
        <div className="flex gap-2 items-end">
          <Logo className="h-8" />
          <p className="bold body-1">EidMubarak!</p>
        </div>
      </Link>
      <div className="w-full px-4 max-w-screen-sm my-6">{props.children}</div>
    </div>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
