const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello'

const numbArr: number[] = [1,2,3,4]
const numbArr2: Array<number> = [1,2,3,4]

const word: string[] = ['Hello', 'Typescript']

const contact: [string, number] = ['Dema', 12312]

let variable: any = 42

variable = 'String'
variable = []

function sayName(name: string) : void {
    console.log(name)
}

sayName('Dema')

function throwErr(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

type Login = string | number


const id1: Login = 123
const id2: Login = 'admin'

type SomeType = string | null | undefined