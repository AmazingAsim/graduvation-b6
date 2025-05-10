// asynconous javascript
// javascript is a single threaded language syncronous lagugage.


// setTimeout(function(){console.log('hello world')},0)

// console.log('after the timeout')

// promises are a way to handle asynchronous code

// let marks = 50

// const playstation = new Promise(function(resolve,reject){
//     if(marks>=90){
//        setTimeout(function(){resolve('you got a playstation')},10000)
//     }
//     else{
//         reject('you did not get a playstation')
//     }
// })

// console.log(playstation)


// playstation
// .then(function(res){console.log(res)})
// .catch(function(err){console.log(err)})

// console.log('some other code')

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(res){
//     return res.json()
// })
// .then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })


// async function getUsersData(){
//    try {
//     let result = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await result.json()
//     console.log(data)
//    } catch (error) {
//     console.log(error.message)
//    }
// }

// getUsersData()


// try {
// console.log(y)
// } 
// catch (error) {
//     console.log(error.message)
// }


// console.log('very imp code to run')


async function getMovies(){
    let result = await fetch('https://ghibliapi.vercel.app/films')
    let data = await result.json()
    console.log(data)
    data.forEach(function(movie){
        displayMovie(movie)
    })
}



function displayMovie(movie){
    let moviebox = document.getElementById('moviebox')
    let div = document.createElement('div')
    div.innerHTML = `
    <div class="card">
    <img src="${movie.movie_banner}" alt="">
    <h1>${movie.title}</h1>
    <p>${movie.description}</p>
    </div>
    `
    moviebox.append(div)
}

getMovies()