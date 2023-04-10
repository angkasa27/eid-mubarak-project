import Card from "@components/elements/Card";
import React from "react";
import Form from "./form";
import Header from "src/fragments/Header";

export default function CardForm() {
  return (
    <div>
      <Header className="mb-4" name="Ubah Data" />
      <Card>
        <Form />
      </Card>
    </div>
  );
}
