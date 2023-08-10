"use client";
import { useGlobalContext } from "@/app/context/context";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const { dispatch } = useGlobalContext();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");

    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const json = await res.json();
        dispatch({
          type: "REMOVE_TOPIC",
          payload: json,
        });
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      {<HiOutlineTrash size={24} />}
    </button>
  );
};

export default RemoveBtn;
