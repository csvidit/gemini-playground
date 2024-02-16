import Chat from "@/components/chat/Chat";
import HeroContent from "@/components/HeroContent";
import InlineLink from "@/components/InlineLink";
import MainContent from "@/components/MainContent";

const ChatRoute = () => {
  return (
    <MainContent>
      {/* <HeroContent>
        <h1>Simple chatbot</h1>
        <div>This is a very barebones implementation. It does not have any user accounts, chat history, etc. Purely made to explore the capabilities of the <InlineLink href="https://sdk.vercel.ai">Vercel AI SDK</InlineLink> </div>
      </HeroContent> */}
      <Chat />
    </MainContent>
  );
};

export default ChatRoute;
