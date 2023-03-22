import { Button } from "@material-tailwind/react";
import useActions from "./hooks/useActions";
import { TextField } from "@components/form";
import Link from "next/link";
import { ROUTES } from "src/configs";
import { DOMAIN } from "src/constants";
import { useState } from "react";

export default function RegisterForm() {
  const [showForm, setShowForm] = useState(true);
  const { control, handleSubmit, loading, onSubmit, username } = useActions();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        control={control}
        helperText={
          username
            ? `Link ucapanmu ${DOMAIN + username}`
            : "Username juga akan menjadi link ucapanmu"
        }
        label="Username"
        name="username"
        placeholder="Masukan Username"
      />
      {/* {!!username && (
        <div>
          <p className="subtitle-3">Link ucapanmu akan menjadi</p>
          <p className="subtitle-3">
            {" "}
            {DOMAIN}
            {username}
          </p>
        </div>
      )} */}

      {!showForm ? (
        <>
          <Button
            className="mt-2 mb-4 w-full"
            disabled={loading}
            onClick={() => setShowForm(true)}
          >
            Buat Ucapan
          </Button>
        </>
      ) : (
        <>
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
            <Link className="link ml-2" href={ROUTES.LOGIN()}>
              Masuk
            </Link>
          </p>
        </>
      )}
    </form>
  );
}
