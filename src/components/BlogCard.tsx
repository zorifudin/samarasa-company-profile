import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Website } from "@/types/website";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "./ui/badge";

interface BlogCardprops {
  website: Website;
}

const BlogCard: FC<BlogCardprops> = ({ website }) => {
  return (
    <Link href={`/${website.entryId}`}>
      <Card>
        <CardHeader>
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
            <Image
              src={website.thumbnail}
              alt="thumbnail"
              className="duration-150 hover:scale-105"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-sm bg-amber-100 text-amber-600"
            >
              {website.category}
            </Badge>
          </div>

          <h2 className="my-2 line-clamp-2 text-lg font-bold">
            {website.title}
          </h2>

          <p className="line-clamp-3">{website.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
