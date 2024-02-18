window.addEventListener("load", function () {
    const cookies = document.cookie.split('=');
const token = cookies[cookies.length - 1];

this.alert("OVO je token koji je nasao: ", token);
console.log(token + "Evo ga");

fetch('http://127.0.0.1:9000/rezervacije/', {
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

                let td2 = document.createElement("td");
                td2.innerHTML = response[i].pocetak;
                tr.appendChild(td2);

                let td3 = document.createElement("td");
                td3.innerHTML = response[i].kraj;
                tr.appendChild(td3);

                let td4 = document.createElement("td");
                td4.innerHTML = response[i].ponude_id;
                tr.appendChild(td4);

                let td5 = document.createElement("td");
                td5.innerHTML = response[i].korisnici_id;
                tr.appendChild(td5);
                        /////Ovako bih hvatao ime korisnika
                // let td5 = document.createElement("td");
                // td5.innerHTML = response[i].korisnici_id;

                // // Dohvatanje imena korisnika na osnovu korisničkog ID-a
                // fetch(`localhost:9000/korisnici/${response[i].korisnici_id}`)
                // .then(response => response.json())
                // .then(korisnik => {
                //     // Dodavanje imena korisnika u polje u tabeli
                //     td5.innerHTML = korisnik.ime;
                // })
                // .catch(error => {
                //     console.error('Greška prilikom dohvatanja imena korisnika:', error);
                // });

                //tr.appendChild(td5);


                let btn1 = document.createElement("button");
                btn1.classList.add("novaPonuda");
                btn1.textContent = "detalji";

                btn1.addEventListener("click", function () {

                    let putanja = "detalji.html";

                    window.location.href = putanja;
                });

                // let td6 = document.createElement("td");
                // td6.appendChild(bt1);



                 tr.appendChild(btn1);

                // Append the row to the table
                document.getElementById("rezervacije").appendChild(tr);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});