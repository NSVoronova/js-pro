interface IUser {
  name: string,
  phone: string,
  email: string,
  animals?: string[],
  cars?:string[]
  hasChildren: boolean,
  hasEducation:boolean
}

const users: IUser[] = [
  {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true
  },
  {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
  },
  {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
  }
]

// Task 1
let usersNames: string = users.reduce((acc: string, user:IUser)=> acc + " " + user.name,"")
console.log(usersNames)

// Task 2
let usersWithCars: IUser[] = users.filter((user:IUser) => user.cars)
let sumCars: number = usersWithCars.reduce((acc: number, current: IUser) => acc + (current.cars as []).length , 0);
console.log(sumCars);

// Task 3
let usersWithEducation:IUser[] = users.filter((user: IUser) => user.hasEducation);
console.log(usersWithEducation);

// Task 4
let usersWithAnimals:IUser[] = users.filter((user: IUser) => user.animals);
console.log(usersWithAnimals);

// Task 5
let usersCars: string = usersWithCars.reduce((acc: string, user: IUser) => acc + "," + user.cars,"").slice(1)
console.log(usersCars);
