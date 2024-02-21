import {useState} from "react";

export function useIsConnected() {
    const [isConnected, setIsConnected] = useState(false);
    return [isConnected, setIsConnected];
}
