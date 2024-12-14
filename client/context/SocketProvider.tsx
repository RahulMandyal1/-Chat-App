// SocketProvider.jsx

import { createContext, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';



export const SocketContext =createContext({ socket: null });


const SocketProvider: React.FC<{chidren : React.ReactNode}> = ({ children }) => {
  // we use a ref to store the socket as it won't be updated frequently
  const socket = useRef(socketIOClient('http://localhost:3000')); //TODO :change it later 

  // When the Provider mounts, initialize it 👆
  // and register a few listeners 👇

  useEffect(() => {
    socket.current.on('connect', () => {
      console.log('SocketIO: Connected and authenticated');
    });

    socket.current.on('error', (msg: string) => {
      console.error('SocketIO: Error', msg);
    });

    // Remove all the listeners and
    // close the socket when it unmounts
    return () => {
      if (socket && socket.current) {
        socket.current.removeAllListeners();
        socket.current.close();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socket.current }}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
