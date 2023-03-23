import Card from "@components/elements/Card";
import React from "react";
import Header from "src/fragments/Header";
import Form from "./form";

export default function CardForm() {
  return (
    <div className="py-6 px-4">
      <Header name="Ubah Ucapan" />
      <Card>
        <Form />
      </Card>
    </div>
  );
}
