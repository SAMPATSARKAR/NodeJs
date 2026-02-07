const fs = require('fs');
// create a sile
// fs.writeFile('sample.txt',"this is an ex",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log('File successfully created');
//         fs.readFile('sample.txt','utf-8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(file);
//             }
//         });
//     }
// })
//rename
// fs.rename('sample.txt','example.txt',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log('successfully renamed the file');
        
//     }
// })
//append
// fs.appendFile('example.txt','Some data being appended',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log('Successfully appended data to file');
        
//     }
// })
//unlink/delete a file
fs.unlink('example.txt',(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log('successfully deleted file');
        
    }
})