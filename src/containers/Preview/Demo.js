import Mandala from "./Theme/Mandala";
import Stacked from "./Theme/Stacked";
import Frame from "./Theme/Frame";
import Cloudy from "./Theme/Cloudy";
import { MANDALA, STACKED, FRAME, CLOUDY } from "src/configs/template";
import { useRouter } from "next/router";

export default function Container() {
  const {
    query: { theme, variant, name: nameQuery },
  } = useRouter();

  const name = nameQuery || "Dimas Angkasa";

  const props = {
    data: {
      ...data,
      theme,
      variant,
    },
    name,
  };

  const _renderTheme = () => {
    switch (theme) {
      case MANDALA.theme:
        return <Mandala {...props} />;
      case STACKED.theme:
        return <Stacked {...props} />;
      case FRAME.theme:
        return <Frame {...props} />;
      case CLOUDY.theme:
        return <Cloudy {...props} />;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll  text-white overflow-x-hidden">
      {_renderTheme()}
    </div>
  );
}

const data = {
  link: "https://localhost:3000/angkasa",
  username: "angkasa",
  data: {
    name: "Dimas Angkasa",
    message:
      "Jika jemari ini tak sempat untuk berjabat. Seiring dengan beduk yang menggema. Serta seruan takbir yang berkumandang. Tak ada hadiah terindah serta perilaku yang mulia selain maaf memaafkan. Taqabalallahu minna wa minkum",
    mainQuotes: "Taqabbalallahu minna wa minkum",
    secondaryQuotes: "Semoga Allah menerima amal kita",
    closing:
      "Mawar indah harum mewangi, aromanya menyentuh nurani. Pesan Ini sebagai pengganti diri, selamat Hari Raya Idul Fitri",
    quotes:
      "Mawar indah harum mewangi, aromanya menyentuh nurani. Pesan Ini sebagai pengganti diri, selamat Hari Raya Idul Fitri",
  },
  image: {
    fileType: "image",
    height: 4000,
    name: "DSCF3523_s0FVCoXHO.JPG",
    orientation: 1,
    size: 8439119,
    filePath: "/default-image.jpg",
    url: "https://ik.imagekit.io/sd3osdoco/default-image.jpg",
    width: 6000,
  },
};
