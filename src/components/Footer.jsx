export const Footer = () => {
  return (
    <div className=" bg-gray-100 relative bottom-0 flex flex-col gap-5 pt-[25px]  ">
      <di className="max-w-screen-xl m-auto ">
        <div className="max-w-screen-xl m-auto flex flex-row place-content-between  ">
          <div className="w-[25%] flex flex-col gap-3">
            <div className="w-auto flex flex-col gap-3 ">
              <h2 className="text-black text-lg font-bold">About</h2>
              <p className="text-gray-600 text-base ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1 *:text-gray-black *:text-base">
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <ul className="flex flex-col justify-start gap-2 *:text-base">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="flex flex-row gap-4 *:size-4">
            <img src="facebook.svg" alt="" />
            <img src="instagram.svg" alt="" />
            <img src="twitter.svg" alt="" />
            <img src="linkedin.svg" alt="" />
          </div>
        </div>

        <div className="border-t flex flex-row  justify-between py-8">
          <div>
            <img src="/Logo.svg" alt="" />
          </div>
          <ul className="flex flex-row gap-16 ">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Plicy</li>
          </ul>
        </div>
      </di>
    </div>
  );
};
