"use client";

import { useChat } from "ai/react";
import Button from "../Button";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";
import { PiArrowRightDuotone } from "react-icons/pi";
import { useEffect, useRef } from "react";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages.length]);

  return (
    <section className="w-full min-w-full min-h-full flex flex-col gap-2 lg:gap-4 items-center">
      <div className="w-full min-w-full min-h-full flex flex-col gap-2 lg:gap-4 items-center">
        {messages.map((m) => (
          <div
            key={m.id}
            className="w-full min-w-full flex flex-col gap-2 lg:gap-4 items-center"
          >
            {m.role === "user" ? (
              <UserMessage>{m.content}</UserMessage>
            ) : (
              <AIMessage>{m.content}</AIMessage>
            )}
            {/* {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content} */}
          </div>
        ))}
      </div>
      <div className="w-full px-8 lg:px-16 bottom-8 mt-8 lg:mt-16">
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          className="rounded-md bg-neutral-50 bg-opacity-80 border border-neutral-950 flex flex-row gap-2 lg:gap-4 justify-center items-center"
        >
          <textarea
            value={input}
            maxLength={1000}
            rows={4}
            required
            autoFocus
            autoComplete="off"
            placeholder="Say something..."
            className="p-4 lg:p-8 border-2 focus:ring-offset-2 focus:ring-0 focus:outline-none focus:border-blue-500 rounded-md w-full bg-transparent border-transparent overflow-scroll"
            onChange={handleInputChange}
          ></textarea>
          <Button onClick={handleSubmit}>
            <PiArrowRightDuotone />
          </Button>
        </form>
        <div ref={ref} />
      </div>
    </section>
  );
};

export default Chat;
