import fs from 'fs';
//compress
import zlib from 'zlib'
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream("./example.txt","utf-8");
// const writeStream = fs.createWriteStream("./example2.txt.gz");
// readStream.pipe(gzip).pipe(writeStream); 
//decompress
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream("./example2.txt.gz");
const writeStream = fs.createWriteStream("Uncompressed.txt");
readStream.pipe(gunzip).pipe(writeStream);