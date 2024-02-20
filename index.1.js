console.log("async examples")



// 1.Callbacks 
// 2.Promises
// 3.async and await 


// it is used to handle the async operations in js 
// callback : it is function passed as a argument to the another function 

// function fetchPosts(flag,callback){
//     setTimeout(()=>{
//         if(flag){
//             const posts=["post1","post2","post3"]
//             callback(posts)
//         }
//     },2000)
// }
// function fetchLikes(posts,callback){
//     setTimeout(()=>{
//         if(posts.length>0){
//             const likes=["like 1","like2","like 3"]
//             callback(likes)

//         }
//     },2000)
// }
// function fetchComments(likes,callback){
//     setTimeout(()=>{
//         if(likes.length>0){
//             const comments=["comment1","comment2","comments3"]
//             callback(comments)
//         }
//     },2000)

// }

// fetchPosts(true,(posts)=>{
//     console.log(posts)
//     fetchLikes(posts,(likes)=>{
//         console.log(likes)
//         fetchComments(likes,(comments)=>{
//         console.log(comments)
//     })})})

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



// fetching posts :

//Producing code 
function fetchPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts=[]
            if(posts.length>0){
              resolve(posts)
            }else{
                reject("unable to fetch posts")
            }
        },2000)
    })
}

//fetchLikes 
function fetchLikes(posts){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const likes=[1,2,3]
                if(likes.length>0){
                    resolve(likes)
                }else{
                    reject("unable to fetch likes, try again")
                }

            }
           
        },2000)
    })
}



//consuming code 
//promise chaning ---> collecting the multiple promises , by preventing callback hell problem
// fetchPosts()
// .then((posts)=>fetchLikes(posts))
// .then((likes)=>{console.log(likes)})
// .catch(err=>{alert(err)})



//async and await --> to handle async operation we can use async and await instead of promises 
//this is the simplified version compared with promises and callbacks 
// we can easily collect the promises without using .then and .catch , simply we will use async and await keywords

// step1: create a funtion which represents the async operations 
// step2: add async keyword to the function at the start (async function will be formed)
// step3: to collect the promises we need to use await keyword 


// async function asyncOperation(){
//     try{
//     const posts = await fetchPosts()
//     const likes = await fetchLikes(posts)
//     }catch(err){
//         console.log(err)
//     }
// }


// asyncOperation()


// Software 

// 1. frond end (client side)
// 2. backend end (server side)
// 3. database 


// API : APPLICATION PROGRAMMING INTERFACE : it is middle ware that connects 2 different software kits (client and server)

// customer side ---> client side 

// cheff --> server side 

// waiter --> api 

// waiter extra information --> less salt 
// 1000 posts 
// api --> 20 posts load initially , when user scrolled certain screen then load another 10 posts 


// to test api we can use tool call post man 



// we have api , we need call the api and collect the response 


// FETCH method : it is predefined function in javascript which allows you to 
// perform api calls(http requests) in the client side 

// fetch will return the Promise
// fetch will accept the api (end point)


// fetch("https://fakestoreapi.com/products")
// .then((response)=>response.json())
// .then((response)=>console.log(response))



async function asynFunction(){
    try{
    const result = await fetch("https://fakestoreapi.com/products")
    const finalResult=await result.json()
    if(finalResult.length>0){
        alert("data found")
    }else{
        alert("no data found")
    }
    
    console.log(finalResult)
    }catch(err){
        console.log(err)
    }
}


asynFunction()








































