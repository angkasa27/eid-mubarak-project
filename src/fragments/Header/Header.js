// import { Breadcrumbs } from "@material-tailwind/react";
// import Link from "next/link";
// import { ROUTES } from "src/configs";
import PropTypes from "prop-types";

export default function Header(props) {
  const { name, right } = props;
  return (
    <div className="flex justify-between mb-6">
      <div>
        <h2 className="md:text-3xl text-2xl bold">{name}</h2>
        {/* <Breadcrumbs>
          <Link href={ROUTES.DASHBOARD()}>UCAPAN</Link>
          <p className="bold">Form</p>
        </Breadcrumbs> */}
      </div>
      {right}
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

Header.defaultProps = {
  right: undefined,
};
