import Link from "next/link";

const InlineLink = (props: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={props.href}
      target={props.href.startsWith("https")? "_blank" : "_self"}
      className="inline w-fit h-fit text-blue-600 font-medium border-b border-transparent hover:border-blue-500 transition-all duration-200 ease-in-out"
    >
      {props.children}
    </Link>
  );
};

export default InlineLink;