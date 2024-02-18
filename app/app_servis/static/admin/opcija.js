

window.addEventListener("load", function () {

    const cookies = document.cookie.split('=');
const token = cookies[cookies.length - 1];




    fetch('http://127.0.0.1:9000/ponude/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
})
        .then(response => response.json()) // Parse the response as JSON
        .then(response => {
            console.log(response);

            for (let i = 0; i < response.length; i++) {
                let tr = document.createElement("tr");

                let td1 = document.createElement("td");
                td1.innerHTML = response[i].destinacija;
                tr.appendChild(td1);

                let td22 = document.createElement("td");
                td22.innerHTML = response[i].lokacije_id;
                tr.appendChild(td22);

                let td2 = document.createElement("td");
                td2.innerHTML = response[i].kategorije_id;
                tr.appendChild(td2);

                

                let td3 = document.createElement("td");
                td3.innerHTML = response[i].datum;
                tr.appendChild(td3);

                let td4 = document.createElement("td");
                td4.innerHTML = response[i].brojDana;
                tr.appendChild(td4);

                let td5 = document.createElement("td");
                td5.innerHTML = response[i].brojOsoba;
                tr.appendChild(td5);

                let td6 = document.createElement("td");
                td6.innerHTML = response[i].cena;
                tr.appendChild(td6);

                let td66 = document.createElement("td");
                td66.innerHTML = response[i].dodatneOpcije_id;
                tr.appendChild(td66);

                let btn = document.createElement("button");
                btn.classList.add("novaPonuda");
                btn.textContent = "Izmeni";
                
                let btn2 = document.createElement("button");
                btn2.classList.add("novaPonuda");
                btn2.textContent = "Promena Cene";
                btn2.dataset.id = response[i].id;
                console.log("btn id: " + btn2.dataset.id);

                let td7 = document.createElement("td");
                td7.appendChild(btn);
                td7.appendChild(btn2);
                tr.appendChild(td7);

                tr.dataset.id = response[i].id;
                console.log("id reda:"+tr.dataset.id);

                btn.addEventListener("click", function () {
                    // Postavite željenu putanju ovde
                    let iD = response[i].id;
                    let putanja = `ponudaIzmeni.html?id=${iD}`;

                    
                  
                    // Redirekcija na novu stranicu
                    window.location.href = putanja;
                });

                btn2.addEventListener("click", function () {
                    var c = prompt("Unesi novu cenu:");
                    var id = btn2.dataset.id;
                    console.log("id je: " + id);
                    fetch("http://localhost:9000/promenaCene/" + id, {
                        method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ cena: c })	/* ime:vrednost */
                    })
                    .then( response=>response.json() )
                    .then( data=>{
                        document.querySelectorAll(`#spisak > tr[data-id='${data.id}'] > td:nth-child(2)`).forEach(td => {
                            td.innerHTML = data.cena;
                        });
                        

                            window.location.reload();
                    })
                    .catch( err=>{
                        alert("Desila se greska");
                        console.log(err);		/*ispisujemo gresku u konzoli browsera*/
                    });

                });

                // Append the row to the table
                document.getElementById("spisak").appendChild(tr);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
