const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url
    let tableData = "<table border='1'><tr><th>Name</th><th>Height</th><th>Birth Year</th><th>Gender</th><th>URL</th></tr>"

    if (url === '/') {
        res.write("<h1>Welcome</h1>");
        res.end(`<img src="https://dummyimage.com/600x400/000/fff&text=Home">`);
    }
   
    else if (url === '/list') {
        fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(data => {
            let results = data.results;
            createData(results);
            // console.log(results);
            res.write(tableData);
            res.end();
        });
        
    }

    else {
        res.write('Page Not Found');
        res.end();
    }

    function createData(data) {
        data.forEach(element => {
            tableData +=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`;
        })
        tableData +=`</table>`;
    }
})

const PORT = 4000;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));