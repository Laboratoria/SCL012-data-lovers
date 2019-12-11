import potter from './data/potter/potter.js';

// filtrar personajes por casas
let housesHowgarts = [];
// variable que le da funcionalidad a los botones
// hacer que la condición siga siendo verdadera
// for (let i=0; i< potter.length; i+=1) 
// {

document.getElementById("slytherin").addEventListener ("click", ()=> {
    let slytherin = potter.filter(elemento => elemento.house === "Slytherin");
    console.log (slytherin); 
})





const houseGryffindor = document.getElementById("gryffindor");
const houseHufflepuff = document.getElementById("hufflepuff");
const houseRavenclaw = document.getElementById("ravenclaw");




    /*for (let i=0; i< potter.length; i+=1)
        {
        houseSlytherin.addEventListener("click", ()=> {
            console.log('sly', potter[i].house)
        }); 

        houseGryffindor.addEventListener("click",()=> {
            console.log('gry', potter)
        })
        houseHufflepuff.addEventListener("click",()=> {
            console.log('huf', potter)
        })
        houseRavenclaw.addEventListener("click",()=>{
            console.log('rav', potter)
        } )
    }

    let slytherin = potter.filter(elemento => elemento.house === "Slytherin");
    console.log (slytherin);


/* for (let i=0; i< POTTER.length; i+=1)
{ console.log(POTTER[i].house)
    const houseGryffindor = document.getElementById("gryffindor");
    gryffindor.addEventListener("click",()=> {
        let houseGryffindor = POTTER.filter(potter => {
            return potter.house === "Gryffindor";
        })
    })
}




/*
console.log(POTTER)
let btnS= document.getElementById("slytherin");
btnS.addEventListener('click', ()=>{
    const Slytherin= document.getElementById('slytherin').value;
    console.log('Slytherin')
})

let btnG= document.getElementById("gryffindor");
btnG.addEventListener('click', ()=>{
    const Gryffindor= document.getElementById('gryffindor').value;
    console.log('Gryffindor')
})
let houseGryffindor = potter.filter(potter => ())
let btnG= document.getElementById("gryffindor");
btnG.addEventListener("click", () => {
    const Gryffindor= document.getElementById('gryffindor').value;
}

let houseGryffindor = potter.filter(potter => {
    return potter.house === "Gryffindor";
})
console.log(houseGryffindor);

let houseRavenclaw = potter.filter(potter =>{
    return potter.house === "Ravenclaw";
})
console.log(houseRavenclaw);

let houseSlytherin = potter.filter( potter =>{
    return potter.house === "Slytherin";    
})
console.log(houseSlytherin);

let houseHufflepuff = potter.filter (potter =>{
    return potter.house === "Hufflepuff";
})
console.log(houseHufflepuff)

*/