import { useEffect } from "react";
import { useRouter } from "next/router";
import { baseRedirect, getAccessToken } from "../utils/common";
import { ROUTE } from "../configs";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = async () => {
      if (!getAccessToken()) {
        router.push(ROUTE.LOGIN());
      } else {
        baseRedirect();
      }
    };

    handleRedirect();
  }, []);

  return <></>;
}
