import Discodo from "../src/discodo"

const getDiscodo = () => new Discodo({
    host: 'localhost',
    port: 8000,
    password: 'hellodiscodo'
})

describe('Restful Tests', () => {
    it('Restful#status', () => {
        const discodo = getDiscodo()
        const promise = new Promise(resolve => resolve(discodo.rest.status()))
        expect(promise).resolves.not.toBe(null)
    })
    it('Restful#planner', () => {
        const discodo = getDiscodo()
        expect(discodo.rest.planner()).resolves.not.toBe(null)
    })
})