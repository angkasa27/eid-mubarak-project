import { Button } from "@material-tailwind/react";
import useActions from "./hooks/useActions";
import { TextField } from "@components/form";
import Link from "next/link";
import { ROUTE } from "src/configs";

export default function RegisterForm() {
  const { control, handleSubmit, loading, onSubmit } = useActions();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        control={control}
        label="Username"
        name="username"
        placeholder="Masukan username"
      />
      <TextField
        control={control}
        label="Password"
        name="password"
        placeholder="Masukan password"
        type="password"
      />
      <TextField
        control={control}
        label="Konfirmasi Password"
        name="retype_password"
        placeholder="Masukan ulang password"
        type="password"
      />
      <Button className="mt-2 mb-4" disabled={loading} type="submit">
        Daftar
      </Button>
      <p>
        Sudah punya akun?
        <Link className="link ml-2" href={ROUTE.LOGIN()}>
          Masuk
        </Link>
      </p>
    </form>
  );
}
