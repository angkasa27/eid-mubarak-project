import Comments from "@containers/Dashboard/Comments";
import MainLayout from "@layouts/Adapter/MainLayout";

export default function Pages() {
  return <MainLayout containers={Comments} />;
}
