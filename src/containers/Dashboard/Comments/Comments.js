import Card from "@components/elements/Card";
import useAction from "./hooks/useAction";
import Header from "src/fragments/Header";
import { CommentsList } from "src/fragments/CommentCard/CommentCard";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import { ROUTES } from "src/configs";

export default function Comments() {
  const {
    comments,
    loading,
    loadData,
    openDialog,
    setOpenDialog,
    comment,
    deleteComment,
    confirmDeleteComment,
  } = useAction();

  const _renderComment =
    comments.length > 0 ? (
      <CommentsList
        comments={comments}
        onDelete={confirmDeleteComment}
        showButtonDelete
      />
    ) : (
      <p className="title-2 font-bold text-gray-300">Belum ada komentar :(</p>
    );

  return (
    <div className="flex flex-col gap-4 py-6 px-4">
      <Header name="Komentar Balasan" routerBack={ROUTES.DASHBOARD()} />
      <Card childClass="flex flex-col gap-4" className=" text-blue-gray-800">
        {loadData ? (
          <p className="title-2 font-bold text-gray-300">Memuat...</p>
        ) : (
          _renderComment
        )}
      </Card>
      <DialogConfirm
        data={comment}
        loading={loading}
        onDelete={deleteComment}
        useDialog={[openDialog, setOpenDialog]}
      />
    </div>
  );
}

function DialogConfirm({ useDialog, onDelete, data, loading }) {
  const [openDialog, setOpenDialog] = useDialog;

  return (
    <Dialog handler={setOpenDialog} open={openDialog} size="md">
      <DialogHeader className="justify-between">
        <p className="title-3">Hapus Komentar</p>{" "}
        <button onClick={() => setOpenDialog(false)}>
          <XMarkIcon className="h-5 w-5" strokeWidth={2} />
        </button>
      </DialogHeader>
      <DialogBody>
        <div className="mb-4">
          <p className="text-center">
            Apakah anda yakin ingin menghapus komentar dari{" "}
            <span className="font-bold">{data?.name}</span>?
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <Button
            disabled={loading}
            onClick={() => setOpenDialog(false)}
            variant="outlined"
          >
            Batal
          </Button>
          <Button color="red" disabled={loading} onClick={() => onDelete()}>
            Hapus
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}

DialogConfirm.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  onDelete: PropTypes.func,
  useDialog: PropTypes.array,
};

DialogConfirm.defaultProps = {
  data: {},
  loading: false,
  onDelete: () => {},
  useDialog: [false, () => {}],
};
