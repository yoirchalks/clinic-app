import React from "react";
import { Socket } from "socket.io-client";
import { useEffect } from "react";

//TODO: attach to sockets
//TODO: get all messages for roomId being passed from Page as prop.
//TODO: display with ability to filter per roomId, socketId or all messages

interface SocketsProps {
  roomId: string;
}

interface MessageInfo {
  messageId: number;
  messageType: "room" | "user" | "all";
  message: string;
}

const Sockets: React.FC<SocketsProps> = ({ roomId }) => {
  const socketMessages: MessageInfo[] = [];
  return <></>;
};

Sockets.propTypes = {};

export default Sockets;
