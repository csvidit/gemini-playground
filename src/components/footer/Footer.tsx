import InlineLink from "../InlineLink";
import { PiSparkleDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full bottom-4 lg:bottom-6 self-center">
      <div className="rounded-md m-4 lg:m-6 px-8 py-4 grid grid-flow-row lg:grid-flow-col gap-6 lg:gap-12 border bg-neutral-100 bg-opacity-60 border-neutral-900 text-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col text-base">
            <div className="text-blue-500 flex flex-row gap-1 items-center text-lg lg:text-xl">
              <PiSparkleDuotone />
              <p className="extended">Gemini Playground</p>
            </div>
            <div className="font-medium">
              For exploring the capabilities of Gemini and the Vercel AI SDK.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <InlineLink href="https://github.com/csvidit/gemini-playground">
              Github Repository
            </InlineLink>
          </div>
          <div>
            A{" "}
            <InlineLink href="https://viditkhandelwal.com">
              Vidit Khandelwal
            </InlineLink>{" "}
            project.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium text-base text-blue-500">
            More about Vidit Khandelwal
          </div>
          <InlineLink href="https://viditkhandelwal.com">Portfolio</InlineLink>
          <InlineLink href="https://github.com/csvidit">GitHub</InlineLink>
          <InlineLink href="https://linkedin.com/in/viditkhandelwal">
            LinkedIn
          </InlineLink>
          <InlineLink href="https://twitter.com/csvidit">X</InlineLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
