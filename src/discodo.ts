import { Restful } from "./restful"

type discodoConfiguration = {
    host?: string 
    port?: number
    password?: string
}

export default class Discodo {
    host: string
    port: number
    password: string
    rest: Restful

    constructor({ host='127.0.0.1', port=8000, password='hellodiscodo' }: discodoConfiguration) {
        this.host = host
        this.port = port
        this.password = password

        this.rest = new Restful(this)
    }
}