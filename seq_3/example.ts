// function wait(duration: number) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('${duration}ms passed'), duration)
//     })
// }
// wait(1000).then(res => {})

// function wait(duration: number): Promise<string> {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('${duration}ms passed'), duration)
//     })
// }
// wait(1000).then(res => {})

function wait(duration: number) {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve('${duration}ms passed'), duration)
    })
}
wait(1000).then(res => {})

async function queue(){
    const message = await wait(1000)
    return message
}

function waitThenString(duration: number){
    return new Promise<string>(resolve => {
        setTimeout(() => resolve('${duration} ms passed'), duration)
    })
}