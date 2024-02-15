import { Footer, Header } from "../components/Index";

export default function ErrorFunction() {
  return (
    <div className="bg-white pb-[100px] ">
      <div className=" max-w-screen-xl m-auto flex flex-row justify-center py-4 gap-10">
        <div className=" border-r p-10">
          <h1 className="text-[72px] font-bold  ">404</h1>
        </div>

        <div className=" flex flex-col gap-5 py-2">
          <h1 className="text-2xl font-bold">Page Not Found</h1>
          <p className="text-lg text-gray-500">
            We're sorry, This page is unknown or does <br />
            not exist the page you are looking for.
          </p>
          <button className="w-fit bg-blue-500 rounded-md p-3 text-white">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
