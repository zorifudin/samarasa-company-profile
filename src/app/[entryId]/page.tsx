import { Badge } from "@/components/ui/badge";
import { getEntry } from "@/lib/contentful";
import { RICHTEXT_OPTIONS } from "@/lib/richtext-options";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

interface BlogDetailProps {
  params: { entryId: string };
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const blog = await getEntry(params.entryId);

  if (!blog) {
    return notFound();
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: [blog.thumbnail],
    },
  };
}

const BlogDetail: FC<BlogDetailProps> = async ({ params }) => {
  const blog = await getEntry(params.entryId);

  if (!blog) {
    return notFound();
  }

  return (
    <section className="container mx-auto min-h-screen bg-gray-900 px-4 bg-blend-color-burn">
      <div className="bg-center0 absolute bg-cover">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b"></div>
      </div>

      <main className="container mx-auto max-w-6xl py-20 text-white">
        <section className="mt-1 md:mt-12">
          <Badge
            variant="outline"
            className="my-2 rounded-sm bg-amber-100 text-base text-amber-600"
          >
            {blog.category}
          </Badge>

          <h1 className="my-2 text-2xl font-bold md:text-4xl">{blog.title}</h1>

          <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[600px]">
            <Image
              src={blog.thumbnail}
              alt="thumbnail blog"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="my-12 mb-[1rem] text-[27px] font-bold leading-[2.4rem] text-white md:text-[35px] md:leading-[4rem] lg:text-[40px]">
          {documentToReactComponents(blog.content, RICHTEXT_OPTIONS)}
        </section>
      </main>
    </section>
  );
};

export default BlogDetail;
