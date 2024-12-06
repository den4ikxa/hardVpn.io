import { useState } from "react"
import { Users } from "./addClient/AddClient"


export function ListTable(prop:Users){
    const [pay,setPay] = useState(prop.pay)
    return<>
        <tr className="cliet__content"><td className="client__item">{prop.fullName}</td>
        <td className="client__item">{prop.startDate}</td>
        <td className="client__item">{prop.getDate}</td>
        <td className="client__item"><select value={pay} onChange={(e)=>setPay(e.target.value)}><option>Оплачено</option><option>Не оплачено</option></select></td>

        <td className="client__item">{prop.contact}</td>
        <td className="client__item"><button className="off">Отключить</button><button className="on">Включить</button></td></tr>
    </>
}
