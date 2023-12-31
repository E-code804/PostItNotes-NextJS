"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGlobalContext } from "../context/context";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useGlobalContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch(`/api/topics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      dispatch({
        type: "ADD_TOPIC",
        payload: json,
      });
      setTitle("");
      setDescription("");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-3 ">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
