import { Fragment } from "react";
import Header from "src/fragments/Header";
import useActions from "./hooks/useActions";

export default function Profile() {
  const { data, loading } = useActions();

  return (
    <Fragment>
      <Header name="Profile" />
      {loading && <div>Loading...</div>}
      <div>{data?.fullname}</div>
    </Fragment>
  );
}
