// import CardList from "@containers/Dashboard/CardList";
import CardForm from "@containers/Dashboard/CardForm";
import MainLayout from "@layouts/Adapter/MainLayout";

export default function Pages() {
  return <MainLayout containers={CardForm} verified />;
}
