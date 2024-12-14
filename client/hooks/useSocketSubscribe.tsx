import { SocketContext } from "@/context/SocketProvider";
import { useContext, useEffect } from "react";

export const useSocketSubscribe = (eventName, eventHandler) => {
	// Get the socket instance
	const { socket } = useContext(SocketContext);

	// when the component, *which uses this hook* mounts,
	// add a listener.
	useEffect(() => {
		console.log('SocketIO: adding listener', eventName);
		socket.on(eventName, eventHandler);

		// Remove when it unmounts
		return ()=> {
			console.log('SocketIO: removing listener', eventName);
			socket?.off(eventName, eventHandler);
		};

	// Sometimes the handler function gets redefined
	// when the component using this hook updates (or rerenders)
	// So adding a dependency makes sure the handler is
	// up to date!
	}, [eventHandler]);

};
