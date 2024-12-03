import { useState } from "react";
import { ListTable } from "../ListTable"

export function AddClient(){
    const [name,setName]=useState('')

    const [pay,setPay]=useState('Не оплачено')
    const [contact,setcontact]=useState('')

    return<>
        <form>
            <input name="fullName" type="text" placeholder="ФИО"  onChange={(e) => setName(e.target.value)}/>

            <select name="pay" id="" value={pay} onChange={(e) => setPay(e.target.value)}>
                <option value="Не оплачено">Не оплачено</option>
                <option value="Оплачено">Оплачено</option>
            </select>
            <input name="cont" type="text" placeholder="Контактные данные" onChange={(e) => setcontact(e.target.value)}/>
            <button onClick={(event) => sendClient(event,name,pay,contact)}>Отправить</button>
        </form>
    </>
}

export class Users {
    date = new Date()
    constructor(public fullName:string,public contact:string, public pay:string){
        this.fullName=fullName
        this.contact=contact
        this.pay=pay
    }


}
function sendClient(e:React.MouseEvent<HTMLButtonElement>,name:string,pay:string,cont:string) {
    e.preventDefault();
    const student:Users= new Users(name,cont,pay)
    usersList.push(student)
    console.log(usersList)
  }
  

export const usersList:Users[]=[]