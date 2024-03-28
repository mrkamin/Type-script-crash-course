let score: number | string = 33

score = 44
score = "55"

type User = {
  name: string
  id: number
}

type Admin  ={
  username: string
  id: number
}

let rafi: User | Admin = {
  name: "Rafi", id: 222
}

rafi = {username: "kambiz", id: 333}