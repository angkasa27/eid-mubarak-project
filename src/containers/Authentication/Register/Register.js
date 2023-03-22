import RegisterForm from "./elements/RegisterForm";
import { Fragment } from "react";

export default function Register() {
  return (
    <Fragment>
      <div className="title-1 font-extrabold mb-12">
        Daftar <br /> Akun Baru
      </div>
      <RegisterForm />
    </Fragment>
  );
}
