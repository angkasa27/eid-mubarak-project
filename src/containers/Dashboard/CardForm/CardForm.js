import Card from "@components/elements/Card";
import { useState } from "react";
import Form from "./form";
import Header from "src/fragments/Header";
import LoadingPage from "src/fragments/LoadingPage";

export default function CardForm() {
  const [loadData, setLoadData] = useState(true);
  return (
    <div>
      <Header className="mb-4" name="Ubah Data" />
      <Card>
        <Form setLoadData={setLoadData} />
      </Card>
      <LoadingPage loading={loadData} />
    </div>
  );
}
