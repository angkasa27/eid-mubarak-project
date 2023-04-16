import Link from "next/link";
import { ROUTES } from "src/configs";
import Logo from "src/assets/svg/Logo";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function Footer({ className }) {
  return (
    <div
      className={clsx(
        "py-8 font-jakarta flex flex-col items-center text-center gap-4",
        className
      )}
    >
      <Link className="flex items-end gap-2" href={ROUTES.MAIN()}>
        <Logo className="h-10" />
        <h4 className="text-2xl bold">EidMubarak!</h4>
      </Link>
      <p className="text-sm font-medium">Buat ucapan lebaran mu sekarang!</p>
      <Link href={ROUTES.MAIN()}>
        <Button size="sm">buat ucapan</Button>
      </Link>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};
