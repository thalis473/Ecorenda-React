export async function getApi() {
    const url = 'http://localhost:4000/catadores'
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}

export async function getUser(params) {
    const url = `http://localhost:4000/catadores/email=${params}`
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}