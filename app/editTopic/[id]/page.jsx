import EditTopicForm from "@/components/EditTopicForm";

const EditTopic = async ({ params }) => {
  const { id } = params;
  const url = process.env.API_URL;
  const getTopicById = async (id) => {
    try {
      const res = await fetch(`${url}/api/topics/${id}`, {
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
