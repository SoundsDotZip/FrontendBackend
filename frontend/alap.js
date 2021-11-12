fetch("http://localhost:3000")
.then(x => x.json())
.then(y => tipus_megjelenit(y));


function tipus_megjelenit(adatok){
    console.log(adatok);
    document.getElementById("tablazat").innerHTML="<tr id='elsosor'><th>ID</th><th>Név</th><th>Ár</th><th>Szín</th><th>Méret</th><th>Anyag</th></tr>"
    for (elem of adatok){
        let sz="";
        var tr=document.createElement("tr")
        sz+='<td>'+elem.id+'</td>';
        sz+='<td>'+elem.nev+'</td>';
        sz+='<td>'+elem.ar+'</td>';
        sz+='<td>'+elem.szin+'</td>';
        sz+='<td>'+elem.meret+'</td>';
        sz+='<td>'+elem.anyag+'</td>';
        tr.innerHTML=sz
        document.getElementById("tablazat").appendChild(tr);
    }
}

function felvitel_butor(){
    var bemenet={
        bevitel1:document.getElementById("ujnev").value,
        bevitel2:document.getElementById("ujar").value,
        bevitel3:document.getElementById("ujszin").value,
        bevitel4:document.getElementById("ujmeret").value,
        bevitel5:document.getElementById("ujanyag").value
    }
    fetch("http://localhost:3000/felvitel_butor",{method:"POST",body:JSON.stringify(bemenet),headers:{"Content-type": "application/json; charset=UTF-8"}})
    .then(x => x.text())
}

function ujratolt(){
    document.getElementById("tablazat").innerHTML=""
    document.getElementById("ujnev").innerHTML=""
    document.getElementById("ujar").innerHTML=""
    document.getElementById("ujszin").innerHTML=""
    document.getElementById("ujmeret").innerHTML=""
    document.getElementById("ujanyag").innerHTML=""
    fetch("http://localhost:3000")
    .then(x => x.json())
    .then(y => tipus_megjelenit(y));
}