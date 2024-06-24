import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{" "}
            <span className="cursor-pointer text-blue underline">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="cursor-pointer text-blue underline">
              other retailer
            </span>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="my-5 h-[1px] w-full bg-neutral-700" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            Copyright © {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>
          <div className="flex space-x-2">
            {footerLinks.map((link) => (
              <p
                key={link}
                className="cursor-pointer text-xs font-semibold text-gray hover:text-white"
              >
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
