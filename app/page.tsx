import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[calc(100vh-3rem)] flex justify-center mt-24">
      <div>
        <h1 className="text-6xl">HOME</h1>

        <div className="flex flex-col gap-4 mt-24">
          <Link
            href="/demos/list-gallery-colored-card"
            className="text-xl hover:underline hover:underline-offset-2 hover:decoration-2"
          >
            project-gallery-colored-card
          </Link>
          <Link
            href="/demos/image-slide-gallery"
            className="text-xl hover:underline hover:underline-offset-2 hover:decoration-2"
          >
            image-slide-project-gallery
          </Link>
        </div>
      </div>
    </div>
  )
}
