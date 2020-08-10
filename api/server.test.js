//gives instance of server in running in memory
const supertest = require('supertest')

// access to server.js
const server = require('./server.js')

describe('server', () => {
    it("tests are running", () => {
        expect(true).toBe(true)
    })

    describe('GET /', () => {

        it("should respond with 200 ok", () => {
            return supertest(server)
                .get("/api/contacts")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
})

