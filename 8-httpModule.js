// const { rmSync } = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {
    console.log(res)
    if(req.url === '/'){
        res.end('Welcome to your intro to node JS')
        // res.end()
    }
    else if(req.url === '/about'){
        res.end('This program is for knowing about the http Module in Node JS')
        // res.end()
    } else{
        res.end(`
        <h1>OOPS!</h1>
        <h3>We cannot find the page you are looking, Please try again Later</h3>
        <a href="/">Back to Home</a>
        `)
    }

    // res.end()
})

server.listen(5000)