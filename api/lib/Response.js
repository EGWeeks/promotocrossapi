class Response {
    
    constructor() {
        this.statusCode = 500
        this.headers = { 'Content-Type': 'application/json' }
        this.body = JSON.stringify({})
    }

    setObj(status, body, headers) {
        if (status) this.setStatusCode(status)
        if (body) this.setBody(body)
        if (headers) this.setHeaders(headers)
    }

    setStatusCode(status) {
        this.statusCode = status
    }

    setHeaders(headers) {
        this.headers = headers
    }

    setBody(body) {
        this.body = JSON.stringify(body)
    }

    getObj() {
        return {
            statusCode: this.statusCode,
            headers: this.headers,
            body: this.body
        }
    }
}

module.exports = Response