document.querySelector('#checker').addEventListener('click', check);

function check() {
    let name = document.querySelector('input').value;
    let hate = Math.ceil(Math.random()*1000)+ 1;
    let love = Math.ceil(Math.random()*1000)+ 1;
    document.querySelector('#loves').value = `DEAR ${name} ${love} PEOPLE LOVES YOU`
    document.querySelector('#hates').value = `DEAR ${name} ${hate} PEOPLE HATES YOU`
    console.log(hate, love)
}