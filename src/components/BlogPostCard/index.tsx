import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";

type BlogPostCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  category: string;
};

export function BlogPostCard({
  title,
  excerpt,
  slug,
  coverImage,
  category,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/posts/${slug}`}>
      <a className="bg-gray-200 max-w-[345px] sm:w-1/2 mx-auto md:w-full min-h-[150px] rounded-3xl px-4 py-4 flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <Image
            src={coverImage}
            width={300}
            height={250}
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="my-3 space-x-2">
          {category
            .split(",")
            .slice(0, 2)
            .map((element) => {
              return (
                <span
                  key={element}
                  className="bg-darker-blue text-white rounded-full text-xs my-4 py-1 px-2"
                >
                  {element}
                </span>
              );
            })}
        </div>
        <h2 className="font-semibold text-lg line-clamp-3">{title}</h2>
        <p className="text-sm line-clamp-4">{excerpt}</p>
        <p className="text-sm font-semibold flex items-end">
          Read more{" "}
          <ArrowRightIcon className="h-4 w-4 ml-2" aria-hidden="true" />
        </p>
      </a>
    </Link>
  );
}
