import InlineLink from "@/components/InlineLink";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <MainContent>
      <h1>Gemini Playground</h1>
      <div>
        A{" "}
        <InlineLink href="https://viditkhandelwal.com">
          Vidit Khandelwal
        </InlineLink>{" "}
        exploration project. Made using the Vercel{" "}
        <InlineLink href="https://sdk.vercel.ai">AI SDK</InlineLink>
      </div>
      <h2>Simple chatbot</h2>
      {/* <Chat /> */}
      <Completion />
    </MainContent>
  );
}
