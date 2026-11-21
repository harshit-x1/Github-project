let inp = document.querySelector('.input #one')
let sub = document.querySelector('.input #two')
let img = document.querySelector('.box .one img')
let names = document.querySelector('.box .one #name')
let ids = document.querySelector('.box .one #ids')
let p = document.querySelectorAll('#box p')
let a = document.querySelectorAll('#box a')




sub.addEventListener("click", val => {
    val.preventDefault();
    let username = inp.value ;
    fetch(`https://api.github.com/users/${username}`)
        .then(row => {
            if(!row.ok){
                throw new Error("API request failed" + row.status)
            }
            return row.json();
        }) 
            
        .then(val => {
            img.src = val.avatar_url;
            names.textContent = val.name;
            ids.textContent = val.login;
            return fetch(val.repos_url)
        })        
        .then(row => row.json())
        .then(val => {
            val.slice(0,4).forEach((repo, index)=>{
                p[index].innerHTML = repo.visibility;
                a[index].innerHTML = repo.name;
                a[index].href = repo.html_url;
            })
        })
})













