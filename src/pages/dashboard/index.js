// import CardList from "@containers/Dashboard/CardList";
import MainLayout from "@layouts/Adapter/MainLayout";

export default function Pages() {
  return <MainLayout containers={Main} verified />;
}

function Main() {
  return <div>dashboard</div>;
}
