import Discodo from "../src/discodo"

const getDiscodo = () => new Discodo({
    host: 'localhost',
    port: 8000,
    password: 'hellodiscodo'
})

const discodo = getDiscodo()
Promise.all([
    discodo.rest.status(),
    discodo.rest.planner()
]).then(console.log)