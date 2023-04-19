import Card from "@components/elements/Card";
import clsx from "clsx";
import useAction from "./hooks/useAction";
import Header from "src/fragments/Header";
import moment from "moment";
import { getFirtsTwoLetter } from "@utils/text";

export default function WhatsappShare() {
  const { comments } = useAction();

  const getRandomeColor = (color = []) => {
    const randomIndex = Math.floor(Math.random() * color.length);
    return color[randomIndex];
  };

  return (
    <div className="flex flex-col gap-4 py-6 px-4">
      <Header name="Komentar Balasan" />
      <Card className=" text-blue-gray-800">
        {/* <p className="subtitle-1">Hasil</p> */}

        {/* <p className="text-xs text-slate-500 mb-4">
          *Klik tombol bagikan untuk mengirim pesan melalui WhatsApp
        </p> */}
        {comments.length === 0 ? (
          <p className="title-2 font-bold text-gray-300">
            Belum ada komentar :(
          </p>
        ) : (
          <ul className="flex flex-col gap-4">
            {comments.map((item, i) => (
              <li className="w-full flex gap-2" key={i}>
                <div
                  className={clsx(
                    "h-10 w-10 shrink-0 mt-1 rounded-full flex items-center justify-center",
                    getRandomeColor(avatarColor)
                  )}
                >
                  <p className="text-white body-3 bold uppercase">
                    {getFirtsTwoLetter(item.name)}
                  </p>
                </div>
                <div>
                  <div className="inline-flex items-baseline gap-2">
                    <p className="body-3 font-bold">{item.name}</p>
                    <p className="body-4 text-default-secondary">
                      {moment(item.createdAt).fromNow()}
                    </p>
                  </div>
                  <p className="body-3">{item.message}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
