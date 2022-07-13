function strip(x: string | number) {
    if (typeof x == 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response'
    result = 'result'
}

class MyError {
    header = 'header err'
    result = 'err mess'
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.result
        }
    }
}

type Alert = 'success' | 'danger' | 'warning'

function setAlert(type: Alert) {

}

setAlert('success')