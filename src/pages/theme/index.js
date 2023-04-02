import MainLayout from "@layouts/Adapter/MainLayout";
import Theme from "@containers/Dashboard/ThemeSelector";

export default function Pages() {
  return <MainLayout compact containers={Theme} />;
}
