function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPostition {
    x: number | undefined
    y: number | undefined
}

interface MyPostitionDefault extends MyPostition {
    default: string
}

function position(): MyPostition
function position(a: number): MyPostitionDefault
function position(a: number, b: number): MyPostition

function position(a?:number, b?:number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}