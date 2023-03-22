import LoginForm from "./elements/LoginForm";
import { Fragment } from "react";

export default function Login() {
  return (
    <Fragment>
      <div className="title-1 font-extrabold mb-12">
        Masuk <br /> Sebelum <br /> Melanjutkan
      </div>
      <LoginForm />
    </Fragment>
  );
}
