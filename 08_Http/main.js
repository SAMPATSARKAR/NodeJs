import http from 'http';
const server = http.createServer((req,res)=>{
    // res.write('Hello world from nodeJs');
    // res.end();
    if(req.url === '/'){
        res.write('Hello world from nodeJs');
        res.end();
    }else{
        res.write('using some other domain');
        res.end();
    }
})
server.listen('3000');