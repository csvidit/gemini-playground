import { PiCopyDuotone } from "react-icons/pi";
import { toast } from "sonner";

const AIMessage = (props: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md  flex flex-col lg:w-1/2 min-w-[50%] self-center">
      <div className="rounded-t-md flex flex-row justify-between items-center px-2 lg:px-4 py-1 lg:py-2 w-full text-sm font-medium bg-blue-500 text-neutral-100">
        <div>Gemini</div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(props.children as string);
            toast.success("Copied to clipboard!");
          }}
          className="text-blue-100 hover:text-neutral-50 transition-all duration-200 ease-in-out"
        >
          <PiCopyDuotone />
        </button>
      </div>
      <div className="px-2 lg:px-4 py-1 lg:py-2 lg:text-lg text-neutral-950 overflow-scroll select-all">
        {props.children}
      </div>
    </div>
  );
};

export default AIMessage;
