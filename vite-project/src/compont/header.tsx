import { useEffect, useState } from 'react'
import './header.css'
import { UserList,User } from './TableItem'
export function ClientList(){
    const [usersArray,setUsers]=useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const response = fetch('http://77.105.140.71:3000/bdusers').then((data)=>data.json()).then((result)=>setUsers(result))
        }
        fetchData()

    },[])
    return<>
    <table className='user__table'>
        <thead>
            <tr className='nav__list'>
                <th className='user__title'> 
                    id
                </th>
                <th className='user__title' >
                    ip
                </th>
                <th className='user__title' >
                    name
                </th>
                <th className='user__title' >
                    Дата начало рп
                </th>
                <th className='user__title'> 
                    Дата конец рп
                </th>
                <th className='user__title' >
                    Кол во денег
                </th>
                <th className='user__title'> 
                    Контакты
                </th>
                <th className='user__title'> 
                    Управление
                </th>

            </tr>
        </thead>
        <tbody>
        {usersArray.map((user:User)=><><UserList id={user.id} ip={user.ip} name={user.name} dataStart={user.dataStart} dataEnd={user.dataEnd} pay={user.pay} contact={user.contact}/></>)}
        <UserList id={3} ip='10.7.0.33'name='Наташа' dataStart='1998-01-01' dataEnd='10.09.1998' pay={1000} contact='9258773279'/>
        </tbody>
    </table>
    </>
}