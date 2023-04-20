import { useState, useEffect } from "react";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import getComments from "@repositories/comment/getComments";
import removeComment from "@repositories/comment/removeComment";
import useUserData from "@utils/hooks/useUserData";

const useActuion = () => {
  const [loading, setLoading] = useState(false);
  const [loadData, setLoadData] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});
  const { getUsername } = useUserData();
  const username = getUsername();

  const getListComments = async () => {
    setLoadData(true);
    try {
      const { data } = await getComments(username);
      setComments(data);
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoadData(false);
    }
  };

  const deleteComment = async () => {
    setLoading(true);
    try {
      await removeComment(comment._id, comment);
      setSuccessAlert({ message: "Berhasil menghapus komentar" });
      setOpenDialog(false);
      getListComments();
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const confirmDeleteComment = (item) => {
    setOpenDialog(true);
    setComment(item);
  };

  useEffect(() => {
    getListComments();
  }, []);

  return {
    loading,
    comments,
    loadData,
    openDialog,
    setOpenDialog,
    comment,
    deleteComment,
    confirmDeleteComment,
  };
};

export default useActuion;
