const qoute= document.querySelector('#qoute')
const aothor= document.querySelector('#author')

const api_url= 'https://api.quotable.io/random'

async function getqoute(url) {
    const response = await fetch(url);
    let data = await response.json();
    // console.log(data)
    qoute.innerHTML= data.content;
    aothor.innerHTML= data.author;
}

getqoute(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ qoute.innerHTML + "--- by " +  aothor.innerHTML,"Tweet Window","width=600, height=300");
}