import { useEffect, useState } from "react";

const checkStatus = () => {
    const [checkStatus , setCheckStatus]  = useState(true)


    const offlineCallback = ()=>{
        setCheckStatus(false);
    }

    const onlineCallback = ()=>{
        setCheckStatus(true);
    }

    useEffect(()=> {
        window.addEventListener('offline',offlineCallback);
        window.addEventListener('online',onlineCallback);


        return ()=> {
            window.removeEventListener('offline',offlineCallback);
            window.removeEventListener('online',onlineCallback);
        }

    }, [])

    return checkStatus;
}

export default checkStatus;