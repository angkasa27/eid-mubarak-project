import clsx from "clsx";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function Header(props) {
  const { name, right, className, routeBack } = props;
  const router = useRouter();

  const onClickBack = () =>
    !!routeBack ? router.push(routeBack) : router.back();

  return (
    <div className={clsx("", className)}>
      <div className="flex justify-between mb-1">
        <button
          className="text-light-blue-500 flex items-center"
          onClick={() => onClickBack()}
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <p className="">Kembali</p>
        </button>
        <div>{right}</div>
      </div>
      <h2 className="lg:text-3xl text-2xl">{name}</h2>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  routeBack: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
  right: undefined,
  routeBack: "",
};
