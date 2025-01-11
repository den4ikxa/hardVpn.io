 import { useState } from "react";
import "./header.css"
export interface User {
    id?:number;
    ip:string;
    name:string;
    dataStart:string;
    dataEnd:string;
    pay:number;
    contact:string;
}
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
export function UserList(props:User){
    const [payStatus,setPay]=useState(props.pay)
    const [cont,setCont]=useState(props.contact)
    const [dataS, setDataS]= useState(props.dataStart)
    const [dataE, setDataE]= useState(props.dataEnd)
    const upDateUser:User = {
        ip:props.ip,
        name:props.name,
        dataStart:dataS,
        dataEnd:dataE,
        pay:payStatus,
        contact:cont
    }
    async function upDate(users:User) {
        fetch(`http://77.105.140.71:3000/bdusers/${props.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
    return <>
    <tr>
        <td className="user__item">{props.id}</td>
        <td className="user__item">{props.ip}</td>
        <td className="user__item">{props.name}</td>
        <td className="user__item"><input type="date" value={dataS} onChange={(e)=>setDataS(e.target.value)} /></td>
        <td className="user__item"><input type="date" value={dataE} onChange={(e)=>setDataE(e.target.value)} /></td>
        <td className="user__item"><input type="number" name="" id="" value={payStatus} onChange={(e)=>setPay(parseInt(e.target.value))}/></td>
        <td className="user__item"><input type="text" name="" id="" value={cont} onChange={(e)=>setCont(e.target.value)}/></td>
        <td className="user__item">
            <button onClick={()=>offTrafic(props.ip)}>Отключить</button>
            <button onClick={()=>onTrafic(props.ip)}>Включить</button>
            <button onClick={()=>upDate(upDateUser)}>Сохранить</button>
        </td>
    </tr>
    </>
}