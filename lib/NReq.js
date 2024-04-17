const http = require('http');
const https = require('https');

const NReq = {
    request: (method, protocol, host, path, payload, headers) => {
        const options = { method, headers };

        const req = (protocol === 'https' ? https : http).request({ ...options, hostname: host, path },
            (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    console.log ('Result:', data);
                });
            }
        );

        if (payload) {
            req.write(payload);
        }
        
        req.end();

    },
    get: (protocol, host, path) => 
    {
        const options = 
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        const req = (protocol === 'https' ? https : http).request({ ...options, hostname: host, path },
            (res) => 
            {
                let data = '';

                res.on('data', (chunk) => 
                {
                    data += chunk;
                });

                res.on('end', () => 
                {
                    console.log ('Result:', data);
                });
            }
        );

        if (payload) {
            req.write(payload);
        }

        req.end();
    },

    post: (protocol, host, path, payload) => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        const req = (protocol === 'https' ? https : http).request({ ...options, hostname: host, path },
            (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    console.log ('Result:', data);
                });
            }
        );

        if (payload) {
            req.write(payload);
        }
        req.end();
    }
};

module.exports = NReq;