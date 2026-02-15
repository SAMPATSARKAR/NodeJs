import fs from 'fs';
//create file
// fs.writeFile('Sample.txt','this is an ex',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file successfully created");
//         fs.readFile('Sample.txt','utf-8',(err,file)=>{
//             if(err){
//                 console.log(err);
                
//             }else{
//                 console.log(file);
//             }
//         })        
//     }
// })
//rename
// fs.rename('Sample.txt','example.txt',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("Sucesfuly changed");
        
//     }
// })
//append
// fs.appendFile('example.txt','Appended ',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("Successfully appended");
        
//     }
// })
//delete file
// fs.unlink('example.txt',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("Successfully deleted");
        
//     }
// })
//make dir
// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("Successfully created");
//         fs.rmdir('tutorial',(err)=>{
//             if(err){
//                 console.log(err);
                
//             }else{
//                 console.log("Successfully deleted");
                
//             }
//         })
//     }
// })
//