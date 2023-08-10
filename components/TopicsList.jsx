"use client";
import { useGlobalContext } from "@/app/context/context";
import Link from "next/link";
import { useEffect } from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

// Getting topics
const getTopics = async () => {
  const url = process.env.API_URL;
  try {
    const res = await fetch(`${url}/api/topics`, {
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

const TopicsList = () => {
  //const topics = await getTopics();
  const { topics, dispatch } = useGlobalContext();

  useEffect(() => {
    const fetchTopics = async () => {
      //const url = process.env.API_URL;
      try {
        const res = await fetch(`/api/topics`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        dispatch({ type: "SET_TOPICS", payload: json });
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopics();
  }, [dispatch]);

  return (
    <>
      {topics &&
        topics.map((topic) => (
          <div
            key={topic._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{topic.title}</h2>
              <div>{topic.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={topic._id} />
              <Link href={`/editTopic/${topic._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default TopicsList;
