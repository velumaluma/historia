const content = document.getElementById("content")

const historia =[
    {
        message: "você sai de casa e precisa escolher entre ir na padaria ",
        options: [1,2]
    },
    {
        message: "você vai á padaria e está fechada . você chora."
    },
    {
        message: "você vai ao trabalho sem café . você chora "
    },
]

function getStep(){
    const urlParams = new URLSearchParams(window,location.search);
    let step = urlParams.get('step');
    step = parseInt(step);
    return historia[step]
}

window.addEventListener("load",() =>{
    const passo = getStep();
    let mensagem = passo.message;
    for (option of passo.options){
        const a = document.createElement("a");
        a.href = `?step=${option}`
        mensagem.replace("{} , a ")


    }
    const p = document.createElement("p");
    p.innerText = mensagem

    content.appendChild(p)
})