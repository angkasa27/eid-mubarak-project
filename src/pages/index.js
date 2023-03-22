import MainLayout from "@layouts/Adapter/MainLayout";

export default function Main() {
  return <MainLayout containers={Home} />;
}

function Home() {
  return <div>Main</div>;
}
