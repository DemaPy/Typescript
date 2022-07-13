interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

rect1.color = 'black'

const react2 = {} as Rect



interface ReactwithArea extends Rect {
    getArea: () => number 
}

const react3: ReactwithArea = {
    id: 'asd',
    size: {
        height: 2,
        width: 2
    },
    getArea(): number {
        return this.size.height * this.size.height
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}