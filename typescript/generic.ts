const arrOfNumbers: Array<number | string> = [1,2,3,4,5, 's']


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrOfNumbers)