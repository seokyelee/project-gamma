import { useEffect, useState } from "react";
import Contact from "../components/Contact/Contact";

function Contacts() {
    let [data, setData] = useState([]);

    // useEffect, useState
    useEffect(() => {

        fetch('/contacts.json')
            .then(res => res.json())
            .then(info => {
                setData(info);
            });

    }, [])

    return <div>
         <h1>Lista de contactos</h1>
        {data.map(item => <Contact img={item.img} name={item.name} icon={item.messages[0]}/>)}
    </div>
}

export default Contacts;