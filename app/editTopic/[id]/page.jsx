import { URL } from "@/ExportURL";
import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const EditTopic = async ({ params }) => {
  const { id } = params;
  const getTopicById = async (id) => {
    try {
      const res = await fetch(`http://${URL}/api/topics/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  const topic = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
