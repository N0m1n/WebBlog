import { Footer, Header } from "../components/Index";

export default function ContactData() {
  return (
    <div className=" bg-white pb-[100px]">
      <div className="max-w-screen-xl m-auto flex flex-col gap-5 w-[895px]  h-[895px]">
        <div className="flex flex-col mx-14 pb-3.5 px-2.5 gap-5 justify-center">
          <div className="flex flex-col gap-5">
            <h1 className="justify-start text-4xl font-bold">Contact Us</h1>
            <p className="text-base text-gray-500 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-row  justify-between *:w-[294px]  ">
            <div className=" flex flex-col  p-4 gap-2.5 rounded-xl border border-gray-500 justify-start">
              <h2 className="text-2xl font-bold">Address</h2>
              <p className="text-lg text-gray-500">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className=" flex flex-col  p-4 gap-2.5 rounded-xl border border-gray-500 justify-start">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p className="text-lg text-gray-500">
                313-332-8662 <br /> info@email.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col h-full m-12 bg-gray-100 rounded-xl ">
            <div className="flex flex-col gap-6  pt-[29px] pl-[35px]">
              <h1 className="text-lg font-bold">Leave a Message</h1>
              <div className="grid grid-cols-3 gap-y-5 *:rounded-md">
                <input
                  className=" w-fit p-2"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className=" w-fit p-2"
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  className="col-span-2 w-[478px] h-[38px] p-2"
                  type="text"
                  placeholder="Subject"
                />
                <input
                  className="col-span-2 w-[478px] h-[134px] p-2"
                  type="text"
                  placeholder="Write a message"
                />
              </div>
              <button className="rounded-md text-white bg-blue-500 px-4 py-2.5 max-w-fit ">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
