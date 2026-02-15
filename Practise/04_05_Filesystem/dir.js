import fs from 'fs'
// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("Successfully created");
//         // fs.rmdir('tutorial',(err)=>{
//         //     if(err){
//         //         console.log(err);
                
//         //     }else{
//         //         console.log("Sucessfully deleted");
                
//         //     }
//         // })
//     }
// })

// create file inside dir- tutorial

// fs.writeFile('./tutorial/example.txt','123',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("Successfully created");
        
//     }
// })
//deleted file
// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("Successfully deleted");
        
//     }
// })
//read dir
fs.readdir('example',(err,files)=>{
    if(err){
        console.log(err);
        
    }else{
        for(let file of files){
            console.log(file);
            
        }
    }
})