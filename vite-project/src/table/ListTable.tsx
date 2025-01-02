import { useState } from "react"
import './itemUser.css'




async function offTrafic(ip:string){
    const response = await fetch('http://77.105.140.71:3000/execute_limit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ip })
    })
    const data = await response.json();
    if (response.ok) {
        console.log('Успешно',data)
    } else {
        console.log('Не успешно')
    }
}
export async function onTrafic(ip:string){
    const response = await fetch('http://77.105.140.71:3000/execute_remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ip })
    })
    const data = await response.json();
    if (response.ok) {
        console.log('Успешно',data)
    } else {
        console.log('Не успешно')
    }
}
export interface IpList  {
    ip:string;
    name:string;
    dataStart?:string;
    dataEnd?:string;
    payStatus?:string;
    contactId?:string;
}

export  function IpUserList (prop:IpList){
    const [pay,setPay] = useState('Не оплачено')

    return<>
        <li className="user__item">
            <h3>{prop.name}</h3><p>{prop.ip}</p>
            <input type="date"/>
            <input type="date"/>
            <select defaultValue={pay} onChange={(e)=>setPay(e.target.value)}><option>Оплачено</option><option>Не оплачено</option></select>
            <button>Добавить контакт</button>
            <button className="off" onClick={()=>{offTrafic(prop.ip)}}>Отключить</button>
            <button className="on" onClick={()=>{onTrafic(prop.ip)}}>Включить</button>
            <button className="save">Сохранить</button>
        </li>
    </>
}