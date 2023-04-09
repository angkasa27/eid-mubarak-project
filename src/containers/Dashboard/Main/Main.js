import Card from "@components/elements/Card";
import { Button } from "@material-tailwind/react";
import Header from "src/fragments/Header";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import useAction from "./hooks/useAction";

export default function Main() {
  const router = useRouter();
  const { loading, cardData, username } = useAction();

  return (
    <div className="py-6 px-4">
      <Header
        name="Selamat Datang!"
        right={
          <a href={cardData.link} rel="noreferrer" target="_blank">
            <Button size="sm">Preview</Button>
          </a>
        }
      />
      <Card>
        <Button onClick={() => router.push(ROUTES.THEME())} size="sm">
          Ubah Data
        </Button>
      </Card>
    </div>
  );
}
