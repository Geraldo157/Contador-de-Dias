let now=new Date();
//Seleção dos elementos!
let hoje=document.querySelector('.hoje').innerHTML;
const initial=document.querySelector('#initial');
const final=document.querySelector('#final');
let btn=document.querySelector('#btn');

const meses=[31,28,31,30,31,30,31,30,31,30,31];

function Data() {
    let anos = now.getFullYear();
    let meses=now.getMonth();
    let dias=now.getDate();
    let mes=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    hoje=document.write(`<h2>HOJE: ${dias}/${mes[meses]}/${anos}</h2>`);
};
Data()

function contador(){
    let firstDate=new Date(initial.value);
    let secondDate=new Date(final.value);
    let dia1=firstDate.getDate();
    let mes1=firstDate.getMonth();
    let ano1=firstDate.getFullYear();
    let dia2=secondDate.getDate();
    let mes2=secondDate.getMonth();
    let ano2=secondDate.getFullYear();

    const calculo=parseInt((secondDate-firstDate)/(24*3600*1000));
    
    if(isNaN(calculo)||calculo<0||dia1<1||dia2<1||mes1<1||mes2<1||dia1>31||dia2>31||mes1>12||mes2>12){
        alert("Verifique as datas, algo deu errado!");
    }if(mes2<10 && dia2<10){
        alert(`São ${calculo} dias até 0${dia2+1}/0${mes2+1}/${ano2}`)
    }if(mes2<10 && dia2>9){
        alert(`São ${calculo} dias até ${dia2+1}/0${mes2+1}/${ano2}`)
    }if(mes2>9 && dia2<10){
        alert(`São ${calculo} dias até 0${dia2+1}/${mes2+1}/${ano2}`)
    }if(mes2>9 && dia2>9){alert(`São ${calculo} dias até ${dia2+1}/${mes2+1}/${ano2}`)
};
}
btn.onclick=contador;