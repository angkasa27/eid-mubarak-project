import CardForm from "@containers/Dashboard/CardForm";
import MainLayout from "@layouts/Adapter/MainLayout";

export default function Pages() {
  return <MainLayout compact containers={CardForm} />;
}
