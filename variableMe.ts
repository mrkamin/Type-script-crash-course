// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return { name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

let myUser: User = {
  _id: "12345",
  name: "Rafi",
  email: "rafi@rafi.com",
  isActive: false,
};

myUser.email = "khan@khan.com";
myUser._id = "4455";
