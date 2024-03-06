import { useEffect, useState } from "react";

function usePostsInfo(){

    const [data, setData] = useState([]);

    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => setData(res));
    },[]);

    return data;
}

export default usePostsInfo;
