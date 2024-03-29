import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center">
       <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href={"auth/signUp"}>go Sign Up</Link>
      </div>
    </main>
  );
}
