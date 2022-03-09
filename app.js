const pages =[
    {
        page:"home",
        navigate: homePage
    },
    {
        page: "about",
        navigate: about
    },
    {
        page: "interact",
        navigate: interact
    }
]


function navButton(pg, pr, nv) {
    let button = document.createElement("button");
    button.innerHTML = pg;
    button.addEventListener("click",function(){
        document.body.querySelector(".wrapper").innerHTML="";
        nv();
    });
    pr.appendChild(button);
}

function navigation(){
    let nav= document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="blue";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement("div");
    home.innerHTML="Homepage";
    document.body.appendChild(home);
    const h1 = document.createElement("H1");
    const textNode= document.createTextNode("Home Page");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

function about(){
    let about = document.createElement("div");
    about.innerHTML="Aboutpage";
    document.body.querySelector(".wrapper").appendChild(about);
   const h1 = document.createElement("H1");
    const textNode= document.createTextNode("About Page");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
}


function boxMaker(mess){
    let ele=document.createElement("div");
    let nameEle=document.createElement("h3");

    nameEle.innerHTML=mess;
    ele.appendChild(nameEle);
    document.body.appendChild(ele);
}

let counter=0;
function interact(){
    let interact =document.createElement("div");
    interact.innerHTML="Interact";
    document.body.querySelector(".wrapper").appendChild(interact);
    const h1 = document.createElement("H1");
    const textNode= document.createTextNode("Interact");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let button1 = document.createElement("button");
    button1.innerHTML="Increase counter";
   button1.addEventListener("click", function(){
       counter= counter+1;
       boxMaker("Counter: "+ counter);
   })
    document.body.appendChild(button1);
   boxMaker("Counter: "+counter);
}


navigation();
interact();


