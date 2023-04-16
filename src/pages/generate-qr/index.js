import GenerateQR from "@containers/Dashboard/GenerateQR";
import MainLayout from "@layouts/Adapter/MainLayout";

export default function Pages() {
  return <MainLayout containers={GenerateQR} />;
}
