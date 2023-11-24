let btn = document.querySelector('.green-btn');
let counter = 1;

btn.addEventListener('click', async () => {
    let con = document.querySelector('.quote-container');
    let advCount = document.querySelector('.green-top');

    advCount.innerHTML = `ADVICE #${counter}`;
    counter++
    
    let apiUrl = "https://api.adviceslip.com/advice";
    
    try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        con.innerText =`"${data.slip.advice}"`;
    }catch(error){
        console.log("there's an error!");
    }finally{
        console.log("done!");
    }
})