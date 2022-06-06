import fetch from 'node-fetch'

module.exports = {
    before: config => {
        console.log(config.fetch); // myValue
        if (!globalThis.fetch) {
            globalThis.fetch = fetch
            globalThis.Headers = fetch.Headers
            globalThis.Request = fetch.Request
            globalThis.Response = fetch.Response
        }


    }
}

