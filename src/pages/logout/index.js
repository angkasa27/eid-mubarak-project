import { useEffect } from "react";
import { logout } from "@utils/common";

export default function Home() {
  useEffect(() => {
    logout();
  }, []);

  return <></>;
}
