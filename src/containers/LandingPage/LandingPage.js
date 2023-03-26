import { useState, useEffect } from "react";
import Logo from "src/assets/svg/Logo";
import { calculateTimeLeft } from "@utils/time";
import { Button } from "@material-tailwind/react";
import { getAccessToken } from "@utils/common";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({});
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();
  const startDate = "20230423";

  useEffect(() => {
    if (!timeLeft?.done) {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft(startDate));
      }, 500);
    }
  });

  useEffect(() => {
    setHasToken(!!getAccessToken());
  }, []);

  return (
    <div className="px-8 flex items-center h-screen">
      <div>
        <Logo className="h-36 mb-4" />
        <p className="title-2 mb-2">{timeLeft?.days ?? "..."} Hari lagi</p>
        <p className="title-1 bold mb-2">EidMubarak!</p>
        <p className="mb-4">Buat ucapan lebaran mu sekarang!</p>
        <div className="inline-flex gap-4">
          {hasToken ? (
            <Button onClick={() => router.push(ROUTES.DASHBOARD())}>
              Dashboard
            </Button>
          ) : (
            <>
              <Button onClick={() => router.push(ROUTES.REGISTER())}>
                Buat Ucapan
              </Button>
              <Button
                onClick={() => router.push(ROUTES.LOGIN())}
                variant="outlined"
              >
                Masuk
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
