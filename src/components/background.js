import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tiles from './tiles'

console.log(axios.get('https://api.nasa.gov/planetary/apod?api_key=2IpkSRXQGSAuFz3CSy8WOj65EQKqUHIwJcYaMah1'))

function Background(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=2IpkSRXQGSAuFz3CSy8WOj65EQKqUHIwJcYaMah1`)
        .then (res => {
            console.log(res.data);
           setData(res.data);
        });
    }, []);






    return(
        <div>
        <Tiles tile={data} />
        </div>

    )


}

export default Background