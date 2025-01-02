export async function getRespons(url:string){
    fetch(url).then((response)=>response.json())
}