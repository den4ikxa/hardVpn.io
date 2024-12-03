
import { Users } from "./addClient/AddClient";

const newUser1 =new Users('Плотников','797','Оплачено')
const newUser2 =new Users('Плотников','797','Оплачено')
const newUser3 =new Users('Плотников','797','Оплачено')
const qs:Users[]=[newUser1,newUser2,newUser3]
console.log(qs)

export function Table(){
    return <>
        <table>
            <thead>
            <tr>
                <th>
                    ФИО
                </th>
                <th>
                    Дата начало
                </th>
                <th>
                    Дата конца
                </th>
                <th>
                    Статус оплаты
                </th>
                <th>
                    Контакты
                </th>
                <th>
                    Действия
                </th>
            </tr>
            </thead>
            <tbody>
                

 
            </tbody>
        </table>

    </>

}
