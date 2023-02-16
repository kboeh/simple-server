const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server is created')
})

const PORT = 4000;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));