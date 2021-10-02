const URL= 'http://localhost:9000'
export default function loginmec({user,pass}){
    var dat={"user": user, "pass": pass}
    //console.log(dat)
    return fetch(URL+'/logworker',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(dat)
    }).then(res => {
        if(!res.ok) throw new Error ("Algo salio mal")
        return res.json()
    }).then(res => {
        return res
    })
}