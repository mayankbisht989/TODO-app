let input=document.getElementById("input");
let task=document.getElementById("task");

let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let list=document.createElement("li");
    list.innerHTML=input.value;
    let complt=document.createElement("button");
    complt.innerHTML="complete";
    complt.addEventListener("click",()=>{
        list.style.textDecoration="line-through"
    })

    let dlt=document.createElement("button");
    dlt.innerHTML="delete";
    dlt.addEventListener("click",()=>{
        list.remove();
    })
    task.appendChild(list)
    list.appendChild(complt)
    list.appendChild(dlt)
})
    