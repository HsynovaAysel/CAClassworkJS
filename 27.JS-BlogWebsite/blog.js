let id= new URLSearchParams(window.location.search).get('id')
let BASE_URL=`http://localhost:8080`
let input=document.querySelector('input')
let textarea=document.querySelector('textarea')
let btn=document.querySelector('.submit-btn')

async function getData(endPoint,id){
    let res = await axios(`${BASE_URL}/${endPoint}/${id}`)
updateData(res.data)
}
getData("blogs",id)

function updateData(data) {
input.value=`${data.title}`
    textarea.value=`${data.body}`
}
