import { useState,useEffect } from "react";
import { ListTable } from "../ListTable";
import './table.css'
export class Users {
    

    
    constructor(public fullName:string,public contact:string, public pay:string,public date:string){
        this.fullName=fullName
        this.contact=contact
        this.pay=pay
        this.date=date
        
        
    }
   get getDate(){
    return `${new Date(this.date).getDate()}.${new Date(this.date).getMonth() + 1}.${new Date(this.date).getFullYear()}`;
   }
   get startDate(){
    return  `${new Date(this.date).getDate()}.${new Date(this.date).getMonth()}.${new Date(this.date).getFullYear()}`
   }


}
export function AddClient(){
    const [name,setName]=useState('')
    const [usersList, setUsersList] = useState<Users[]>([]);
    const [nowDate, setNowDate]= useState('')
    useEffect(()=>{
        const currendDate = new Date().toISOString().split('T')[0]
        setNowDate(currendDate)
    },[])

    const [pay,setPay]=useState('Не оплачено')
    const [contact,setContact]=useState('')
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!name || !contact) return; // Проверка на пустые поля
    
        const newUser= new Users(name,contact,pay,nowDate)
     
        setUsersList([...usersList, newUser]);
       

      };
      

    return<>
    <h2>HardVpn</h2>
        <form>
            <input name="fullName" type="text" placeholder="ФИО"  onChange={(e) => setName(e.target.value)}/>
            <input type="date" value={nowDate} onChange={(e)=>setNowDate(e.target.value)}/>
            <select name="pay" id="" value={pay} onChange={(e) => setPay(e.target.value)}>
                <option value="Не оплачено">Не оплачено</option>
                <option value="Оплачено">Оплачено</option>
            </select>
            <input name="cont" type="text"   value={contact} placeholder="Контактные данные" onChange={(e) => setContact(e.target.value)}/>
            <button onClick={handleSubmit}>Отправить</button>
        </form>
        <ul>
        <table className="client">
            <thead >
            <tr className="cliet__header">
                <th className="client__item client__header-item">
                    ФИО
                </th>
                <th className="client__item client__header-item">
                    Дата начало
                </th>
                <th className="client__item client__header-item">
                    Дата конца
                </th>
                <th className="client__item client__header-item">
                    Статус оплаты
                </th>
                <th className="client__item client__header-item">
                    Контакты
                </th>
                <th className="client__item client__header-item">
                    Действия
                </th>
            </tr>
            </thead>
            <tbody>
                
            {usersList.map((user) => (
        
           <ListTable fullName={user.fullName} startDate={user.startDate} getDate={user.getDate} pay={user.pay}contact={user.contact} date={user.date}/>
         
        ))}
            </tbody>
        </table>
       
      </ul>
    </>
}





export const usersList:Users[]=[]