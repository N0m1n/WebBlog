export const Footer = () => {
  return (
    <div className=" bg-gray-100 flex flex-col justify-center sm:gap-5 sm:pt-[25px] ">
      <di className="sm:max-w-screen-xl sm:m-auto ">
        <div className="sm:max-w-screen-xl sm:px-5 flex flex-col sm:gap-5 sm:flex-row sm:place-content-between  ">
          <div className="sm:w-[25%] sm:flex sm:flex-col sm:gap-3 sm:visible hidden">
            <div className="sm:w-auto sm:flex sm:flex-col sm:gap-3  ">
              <h2 className="sm:text-black sm:text-lg sm:font-bold">About</h2>
              <p className="sm:text-gray-600 sm:text-base ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="sm:flex sm:flex-col sm:gap-1 sm:*:text-gray-black sm:*:text-base">
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <ul className="flex flex-col sm:justify-start pt-5 gap-2 *:text-base">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="flex flex-row gap-4 pt-4 *:size-4">
            <img src="facebook.svg" alt="" />
            <img src="instagram.svg" alt="" />
            <img src="twitter.svg" alt="" />
            <img src="linkedin.svg" alt="" />
          </div>
        </div>

        <div className="sm:border-t sm:flex sm:flex-row  sm:justify-between  sm:px-5 py-8">
          <div>
            <img src="/Copyright.svg" alt="" />
          </div>
          <ul className="sm:flex sm:flex-row sm:gap-16 sm:visible invisible ">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Plicy</li>
          </ul>
        </div>
      </di>
    </div>
  );
};
