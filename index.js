const loadingEl= document.getElementById("loading")
document.getElementById("clickmood").addEventListener("click",()=>{getMood()})
async function getMood(){
    try{
    loadingEl.hidden= false;
    const respone = await fetch("https://sentim-api.herokuapp.com/api/v1/",{
        headers:{
            Accept: "application/json", "Content-Type": "application/json"
        },
        method:"POST",
        body: JSON.stringify({ "text": document.getElementById("textarea").value})
    })
    const data = await respone.json();
    loadingEl.hidden=true;
    document.getElementById("result").textContent = `Your result is: ${data.result.type}`

    if(data.result.type==="positive"){
        document.getElementById('result').classList='positive';
    }
    else if(data.result.type==="negative"){
        document.getElementById('result').classList='negative';
    }
    else if(data.result.type==="neutral"){
        document.getElementById('result').classList='neutral';
    }
    
}
catch(error){
    const errorEl=document.getElementById('mistake');
    errorEl.textContent='You had a API problem'
}
}
