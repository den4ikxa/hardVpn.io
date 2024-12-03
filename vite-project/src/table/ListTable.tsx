type Client ={
    name: string;
    dateStart:string;
    dateEnd:string;
    cheakPay:boolean;
    contact:string;

}
export function ListTable(prop:Client){
    return<>
        <tr><td>{prop.name}</td><td>{prop.dateStart}</td><td>{prop.dateEnd}</td><td>{cheakPay(prop.cheakPay)}</td><td>{prop.contact}</td></tr>
    </>
}
function cheakPay(cheak:boolean):string{
    if(cheak){
        return 'Оплачен'
    }
    else{
        return 'Не оплачено'
    }
}