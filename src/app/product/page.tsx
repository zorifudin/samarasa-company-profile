import BlogList from "@/components/BlogList";
import { getEntries } from "@/lib/contentful";

export default async function Home() {
  const websites = await getEntries();

  if (!websites) {
    return;
  }

  return <BlogList websites={websites} />;
}
