import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "ihbqy1zkrydh",
  environment: "master",
  accessToken: "gImhai1vi0NPEOgY5Stx0EYrjlitcUS_1Rc1KeXbp8o",
});
export const useFetchProjects = () => {
  const [loading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url } = item.fields;
        const id = item.sys.id;
        const image = item.fields.image.fields.file.url;
        return { title, url, image, id };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
