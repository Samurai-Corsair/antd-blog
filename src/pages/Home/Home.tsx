import React from 'react';
import {io} from "socket.io-client";

const Home = () => {
    const socket = io("ws://localhost:3003", {
        transports: ["websocket", "polling"] // use WebSocket first, if available
    });
    socket.on("data", (...data) => {
        // revert to classic upgrade
        console.log(data)
    });

    return (
        <div>
            home page
        </div>
    );
};

export default Home;