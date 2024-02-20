console.log("async examples")



// 1.Callbacks 
// 2.Promises
// 3.async and await 


// it is used to handle the async operations in js 
// callback : it is function passed as a argument to the another function 

function fetchPosts(flag,callback){
   setTimeout(()=>{
      if(flag){
             const posts=["post1","post2","post3"]
             callback(posts)
        }
    },2000)
 }
 function fetchLikes(posts,callback){
     setTimeout(()=>{
         if(posts.length>0){
             const likes=["like 1","like2","like 3"]
             callback(likes)

         }
    },2000)
     }

// Promise : it is an object which tells eventually completion or failure 
// of a async task 

// Promise can be any of 3 states 

// 1. Pending 
// 2. Fufill --> Resolve
// 3. Reject (with a reason)


// combination of producing code and consuming code 

// producing code 
// function fetchPosts(){
//    return new Promise((resolve,reject)=>{
//     //to simulate the data from server 
//         setTimeout(()=>{
//             const posts=[]
//             if(posts.length>0){
//                 resolve(posts)
//             }else{
//                 reject("something went wrong server issue")
//             }
//         },2000)
//     })

// }

// //consuming code 
// fetchPosts().then((data)=>console.log(data)).catch((sai)=>console.log(sai))

// fetch will return a promise 

// const c=10
// const d=20

// function sum(data1,data2){
//     return data1+data2
// }

// console.log(sum(c,d))

// tasks: 
// using promises how to resolve the callback hell



















