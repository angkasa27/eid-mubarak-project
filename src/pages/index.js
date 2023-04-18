import Navbar from "@components/elements/Navbar";
import clsx from "clsx";
import LandingPage from "@containers/LandingPage";

export default function Main() {
  return (
    // <div className="flex h-full min-h-screen flex-col bg-main">
    //   {/* <Navbar /> */}
    //   <div className={clsx("container h-full w-full")}>
    <LandingPage />
    //   </div>
    // </div>
  );
}
