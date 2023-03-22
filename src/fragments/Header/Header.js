// import { Breadcrumbs } from "@material-tailwind/react";
// import Link from "next/link";
// import { ROUTE } from "src/configs";
import PropTypes from "prop-types";

export default function Header(props) {
  const { name, right } = props;
  return (
    <div className="flex justify-between mb-6">
      <div>
        <h2 className="title-2 bold">{name}</h2>
        {/* <Breadcrumbs>
          <Link href={ROUTE.DASHBOARD()}>UCAPAN</Link>
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
