import { useRouter } from "next/router";
import { useEffect } from "react";
import { ROUTES } from "src/configs";

export default function Template() {
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id?.length < 6) router.push(ROUTES.NOT_FOUND());
  }, [id]);

  return <div>index</div>;
}
