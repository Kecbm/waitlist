import { component$ } from "@builder.io/qwik";
import { type DocumentHead, type RequestHandler } from "@builder.io/qwik-city";
import { NotFound } from "../../components/not-found/not-found";

export const onGet: RequestHandler = ({ status }) => {
  status(404);
};

export default component$(() => <NotFound />);

export const head: DocumentHead = {
  title: "Page Not Found | Highstack",
  meta: [
    {
      name: "description",
      content: "The page you're looking for doesn't exist.",
    },
  ],
};
