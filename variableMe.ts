// any

function addTwo(num: number): number {
return num + 2;
   //return "Rafi"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

let myValue = addTwo(5);
getUpper("Rafi")
signUpUser("Rafi","rafi.amin@justcold.co.uk", false);
loginUser("Rafi", "rafi@justcold.co.uk")

// function getValue(myVal: number): boolean{
//     if(myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map(hero => {
    return `hero is ${hero}`
})

function consolError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


// miss behaive of TS

const User = {
    name: "Rafi",
    email: "rafi@rafi.com",
    isAactivate: true
}

function createUser({name: string, isPaid: boolean}){

}
let newUser = {name: "rafi", isPaid: false, email: "rafi@rafi.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 299}
}

export {}