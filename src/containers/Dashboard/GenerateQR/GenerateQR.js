import Card from "@components/elements/Card";
import clsx from "clsx";
import useAction from "./hooks/useAction";
import Header from "src/fragments/Header";
import QRCode from "react-qr-code";
import { Button } from "@material-tailwind/react";
import { useRef, useCallback } from "react";
import { ROUTES } from "src/configs";

export default function WhatsappShare() {
  const { data } = useAction();
  const svgRef = useRef();

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `myimage.svg`);
  }, []);

  return (
    <div className="flex flex-col gap-4 py-6 px-4">
      <Header name="QR Code" routerBack={ROUTES.DASHBOARD()} />
      <Card className=" text-blue-gray-800 max-w-screen-sm">
        {!data?.link ? (
          <p className="title-2 font-bold text-gray-300">Belum ada link :(</p>
        ) : (
          <>
            <div ref={svgRef}>
              <QRCode
                id="GeneratedQRCode"
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={data.link}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button className="w-full" onClick={downloadSVG}>
                Download QR Code
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}
