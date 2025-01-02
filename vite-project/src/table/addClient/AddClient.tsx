
import { useState,useEffect } from "react";
import { IpList, IpUserList, } from "../ListTable";



import './table.css'

export interface ServerUsers {
        id?: number;
        name: string;
        dataStart: string;
        dataEnd?:string;
        payStatus: string;
        contact: string;
}


function addOneMonth(newDate: string): string {
    const date = new Date(newDate); // Создаем объект Date из переданной строки
    
    // Добавляем один месяц
    date.setMonth(date.getMonth() + 1);
    
    // Преобразуем обратно в строку формата YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы нумеруются с нуля, поэтому добавляем 1
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

export function AddClient(){
    const array:IpList[]=[]
    const [data, setData] = useState(array);

//     async function loadBD(array:IpList[]) {
//         array.forEach((elem:IpList)=>{
//             fetch('http://77.105.140.71:3000/clientbase/users', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name:elem.name,
//                 ip:elem.ip,
//                 startDay:elem.dataStart,
//                 endDay:elem.dataEnd,
//                 payStatus:elem.payStatus,
//                 contact:elem.contactId,


//         })
// })
//         })
//     }
    async function userList(){
        fetch('http://77.105.140.71:3000/get-file').then((result)=>result.text()).then((res)=>{
            filterUser(res)
        })
       
        
    }
    useEffect(() => {
        userList();
      },[]);
   
      function filterUser(text: string) {
        const arrays = text.split('BEGIN_PEER');
        const filtArray = arrays.slice(1);
    
        // Создаем новый массив
        const newData: IpList[] = filtArray.map((arr) => {
          const arrayList = arr.split('\n');
          const filtrIp = arrayList[4]?.split(' ').slice(2).join('').split('/')[0] || '';
          return {
            ip: filtrIp,
            name: arrayList[0],
          };
        });
    
        // Обновляем состояние
        setData(newData);
      }
    

    
    const [name,setName]=useState('')
  
    const [nowDate, setNowDate]= useState('')
    
    const [users,setUsers]=useState<(ServerUsers)[]>([])
 
    async function fetchUsers() {
  
        const respone = await fetch('http://77.105.140.71:3000/clientbase/users')
        const users = await respone.json()
    
        setUsers(users)
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    useEffect(()=>{
        const currendDate = new Date().toISOString().split('T')[0]
        setNowDate(currendDate)
    },[])
    
    const [pay,setPay]=useState('Не оплачено')
    const [contact,setContact]=useState('')
     const  handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
     
        
        if (!name || !contact) return; // Проверка на пустые поля
        
        const newUsers:ServerUsers = {
            name:name,
            dataStart:nowDate,
            dataEnd:addOneMonth(nowDate),
            payStatus:pay,
            contact:contact
        }
      
        fetch('http://77.105.140.71:3000/clientbase/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:newUsers.name,
                dataStart:newUsers.dataStart,
                dataEnd:newUsers.dataEnd,
                payStatus:newUsers.payStatus,
                contact:newUsers.contact

        })
})
        
        setUsers([...users, newUsers]);
       

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

      <ul className="user__list">
        <li className="user__item">
            <h3 className="title">name</h3>
            <h3 className="title">ip</h3>
            <h3 className="title">Начало</h3>
            <h3 className="title">Конец</h3>
            <h3 className="title">Оплата</h3>
            <h3 className="title">Конакт</h3>
            <h3 className="title">Действие</h3>
        
        </li>
        {data.map((item:IpList)=><IpUserList name={item.name} ip={item.ip}/>)}
      </ul>
      
    </>
}





