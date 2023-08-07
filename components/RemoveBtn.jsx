"use client";
import { URL } from "@/ExportURL";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");

    if (confirmed) {
      const res = await fetch(`http://${URL}/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
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
