document.getElementById("clickmood").addEventListener("click",getMood)
async function getMood(){
    const respone = await fetch("https://sentim-api.herokuapp.com/api/v1/",{
        headers:{
            Accept: "application/json", "Content-Type": "application/json"
        },
        method:"POST",
        body: JSON.stringify({ "text": document.getElementById("textarea").value})
    })
    const data = await respone.json();
    document.getElementById("result").textContent = `Your result is: ${data.result.type}`
    }
