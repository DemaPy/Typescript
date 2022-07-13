interface Person {
    name: string
    age: number
} 

type PersonKeys = keyof Person

const MyName: PersonKeys = 'name'