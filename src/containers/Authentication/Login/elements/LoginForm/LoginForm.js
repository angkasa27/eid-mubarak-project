import { Button } from "@material-tailwind/react";
import useActions from "./hooks/useActions";
import { TextField } from "@components/form";
import Link from "next/link";
import { ROUTES } from "src/configs";

export default function LoginForm() {
  const { control, handleSubmit, loading, onSubmit } = useActions();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        control={control}
        label="Username"
        name="username"
        type="text"
      />
      <TextField
        control={control}
        label="Password"
        name="password"
        type="password"
      />
      <div>
        <Link className="link" href={ROUTES.FORGOT_PASSWORD()}>
          Lupa password?
        </Link>
      </div>
      <Button className="my-4" disabled={loading} type="submit">
        Masuk
      </Button>
      <p>
        Belum punya akun?
        <Link className="link ml-2" href={ROUTES.REGISTER()}>
          Daftar
        </Link>
      </p>
    </form>
  );
}
