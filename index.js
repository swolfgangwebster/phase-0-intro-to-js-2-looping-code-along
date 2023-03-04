// Code your solutions in this file


function writeCards(a,e) {
    let r = [];
    for (let i=0;i<a.length;i++){
        r[i] = `Thank you, ${a[i]}, for the wonderful ${e} gift!`
    }

    return r
}

//console.log(writeCards(["Shawn","Whore", "mike"],"sandy"))

function countDown(n) {
    while(n >= 0){
        console.log(n);
        n--;
    }
}
