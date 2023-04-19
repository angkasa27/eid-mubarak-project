import Card from "@components/elements/Card";
import useAction from "./hooks/useAction";
import Header from "src/fragments/Header";
import { CommentsList } from "src/fragments/CommentCard/CommentCard";

export default function WhatsappShare() {
  const { comments } = useAction();

  return (
    <div className="flex flex-col gap-4 py-6 px-4">
      <Header name="Komentar Balasan" />
      <Card className=" text-blue-gray-800">
        <CommentsList comments={comments} />
      </Card>
    </div>
  );
}
