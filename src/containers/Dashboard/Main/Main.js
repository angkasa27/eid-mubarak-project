import Card from "@components/elements/Card";
import { Button } from "@material-tailwind/react";
import Header from "src/fragments/Header";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";

export default function Main() {
  const router = useRouter();

  return (
    <div className="py-6 px-4">
      <Header
        name="Selamat Datang!"
        right={
          <>
            <Button onClick={() => router.push(ROUTES.EDIT())} size="sm">
              Bagikan
            </Button>
          </>
        }
      />
      <Card>
        <Button onClick={() => router.push(ROUTES.EDIT())} size="sm">
          Ubah Data
        </Button>
      </Card>
    </div>
  );
}
