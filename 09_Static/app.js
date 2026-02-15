import http from 'http';
import fs from 'fs';
http.createServer((req,res)=>{
    // const readStream = fs.createReadStream('./09_Static/index.html');
    // const readStream1 = fs.createReadStream('./09_Static/example.json');
    const readStream2 = fs.createReadStream('./09_Static/example.png');
    // res.writeHead(200,{'Content-type':'text/html'}); 
    // res.writeHead(200,{'Content-type':'application/json'}); 
    res.writeHead(200,{'Content-type':'image/png'}); 
    

    // readStream.pipe(res);
    // readStream1.pipe(res);
    readStream2.pipe(res);
}).listen(3000);