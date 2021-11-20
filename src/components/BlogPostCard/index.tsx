import Image from "next/image"
import Link from "next/link"

export function BlogPostCard() {
  return (
    <div className="bg-gray-200 w-72 min-h-[150px] rounded-3xl px-4 py-4">
      <div className="">
        <Image
          src={"https://via.placeholder.com/300"}
          width={300}
          height={250}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="my-3">
        <span className="bg-darker-blue text-white rounded-full text-xs my-4 py-1 px-2">
          Category
        </span>
      </div>
      <h2 className="font-semibold text-lg">
        Top reasons to build your mobile app for your coffee shop
      </h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ad
        aspernatur harum doloremque quibusdam architecto sint.
      </p>
      <Link href={"/"}>
        <a className="text-sm font-semibold">Read more</a>
      </Link>
    </div>
  )
}
