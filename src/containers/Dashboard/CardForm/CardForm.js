import Card from "@components/elements/Card";
import React from "react";
import Form from "./form";

export default function CardForm() {
  return (
    <div className="px-4">
      <div className="mx-0 text-center">
        <h2 className="md:text-3xl text-2xl bold mb-6">Ubah Data</h2>
      </div>
      <Card>
        <Form />
      </Card>
    </div>
  );
}
