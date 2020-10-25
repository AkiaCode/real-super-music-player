import Discodo from "./discodo"
import fetch from 'node-fetch'
import { planner, status } from './payload'

export class Restful {
    private discodo: Discodo
    
    private baseUrl(route: string): string {
        return `http://${this.discodo.host}:${this.discodo.port}/${route}`
    }
    //바나나 맛있정(?)   
    async status(): Promise<status|null> {
      return fetch(this.baseUrl('status')).then(res => res.json())
    }
    
    async planner(): Promise<planner|null> {
        return fetch(this.baseUrl('planner'), {
            headers: {
                'Authorization': this.discodo.password
            } // 트1롤
        }).then(res => res.json())
    }

    constructor(discodo: Discodo) {
        this.discodo = discodo
    }
}