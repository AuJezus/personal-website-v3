import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="my-auto flex h-full w-full flex-col items-center justify-center gap-4 pt-20">
      <h1 className="text-xl font-bold md:text-4xl">{`Page not found :(`}</h1>

      <p className="text-center md:text-lg">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="text-primary underline">
        Go to the homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
