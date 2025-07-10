import React, { useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useEffect } from "react";

//TODO: display with ability to filter per roomId, socketId or all messages

interface SocketsProps {
  uuid: string; //make sure location includes users uuid
}

interface MessageInfo {
  messageId: number;
  messageType: "room" | "user";
  message: string;
}

const Sockets: React.FC<SocketsProps> = ({ uuid }) => {
  const socketRef = useRef<Socket | null>(null);
  const [messages, setMessages] = useState<MessageInfo[]>([]);
  const messageCounter = useRef(0);

  useEffect(() => {
    console.log("uuid: ", uuid);

    const socket = io("http://localhost:3000", {
      auth: { uuid },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("ready", () => {
      socket.emit("on_connected", uuid);
    });

    socket.on("room_message", (msg: string) => {
      console.log("message: ", msg);

      messageCounter.current++;

      setMessages((prev) => {
        const isDuplicate = prev.some((m) => m.message === msg);
        if (isDuplicate) {
          messageCounter.current--;
          return prev;
        } else {
          return [
            ...prev,
            {
              messageId: messageCounter.current,
              message: msg,
              messageType: "room",
            },
          ];
        }
      });
    });

    socket.on("user_message", (msg: string) => {
      console.log("message: ", msg);

      messages.forEach((message) => {
        if (message.message === msg) return;
      });

      messageCounter.current++;

      setMessages((prev) => {
        const isDuplicate = prev.some((m) => m.message === msg);
        if (isDuplicate) {
          messageCounter.current--;
          return prev;
        } else {
          return [
            ...prev,
            {
              messageId: messageCounter.current,
              message: msg,
              messageType: "user",
            },
          ];
        }
      });
    });

    socket.on("disconnect", () => {
      console.log("socket disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, [uuid]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-lg font-bold mb-2">Real-time Messages</h2>
      <ul className="space-y-2">
        {messages.map((msg) => (
          <li
            key={msg.messageId}
            className={`p-3 rounded-md shadow-sm text-sm ${
              msg.messageType === "room"
                ? "bg-blue-100 border-l-4 border-blue-500"
                : "bg-green-100 border-l-4 border-green-500"
            }`}
          >
            <strong className="mr-2">[{msg.messageType.toUpperCase()}]</strong>
            {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sockets;
