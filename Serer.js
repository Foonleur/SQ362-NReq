const http = require('http')
const nreq = require('./lib/NReq')
//---------------------------------------------------
const PORT = process.env.PORT || 9818
//---------------------------------------------------
let server = http.createServer(onClientRquest)
server.listen(PORT)
console.log('Server run at : ' + PORT)
//---------------------------------------------------
function onClientRquest(request, response)
{
    response.writeHead(200)

    let method = request.method
    let requrl = request.url

    if( method === 'GET' && requrl === '/hi'){

        response.write(`Hello, My name is Foon 'Get'`)

    }else if( method === 'POST' && requrl === '/hi'){

        response.write(`Hello, My name is Foon 'POST'`)

    }else{
        	response.write(`Nothing...`)
    }

    response.end()
}
