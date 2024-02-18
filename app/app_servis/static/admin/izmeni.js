window.addEventListener("load", function() {
    // Dobijamo ceo query string iz URL-a, na primer "?id=123"
    var queryString = window.location.search;

    // Parsiramo query string koristeći URLSearchParams
    var urlParams = new URLSearchParams(queryString);

    // Dobijamo vrednost parametra "id" iz URL-a
    var id = urlParams.get("id");

    alert("Id ponude koju zelite da izmenite: " + id);
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:9000/ponude/' + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
})
        .then(resp => resp.json())
        .then(data => {
            //console.log("Ovo je odgovor:" + data);
            

            document.getElementById("naziv").value = data.destinacija;
            document.getElementById("lokacija").value = data.lokacije_id
            document.getElementById("kategorija").value = data.kategorije_id;
            document.getElementById("date").value = data.datum;
            document.getElementById("brDana").value = data.brojDana;
            document.getElementById("brOsoba").value = data.brojOsoba;
            
            console.log("Ovo je cena: " + data.cena);
            document.getElementById("cena").value = data.cena;
            //document.getElementById("spisak-opcija") = data.dodatneOpcije_id;
            
       

        })
        .catch(err => console.log(err));

        document.getElementById("dodaj-opciju").addEventListener("click", function(){
            var id = document.getElementById("spisak-opcija").value;
            if(!id){
                alert("Izaberi opciju");
                return;
            }
            dodajOpciju( id );
        });
    
    
        document.getElementById("forma").addEventListener("submit", function(event) {
            event.preventDefault(); // Sprečava podrazumevano ponašanje forme
          
            var validno = true;
          
            if (document.getElementById("naziv").value.length < 3) {
              document.getElementById("naziv").classList.add("error");
              document.getElementById("naziv").classList.remove("success");
              validno = false;
            } else {
              document.getElementById("naziv").classList.add("success");
              document.getElementById("naziv").classList.remove("error");
            }
          
            // ... ostatak vaše validacije ...
          
            if (!validno) {
              return;
            }
          
            var novaPonuda = {};
            novaPonuda.destinacija = document.getElementById("naziv").value;
            novaPonuda.lokacije_id = document.getElementById("lokacija").value;
            novaPonuda.kategorije_id = document.getElementById("kategorija").value; 
            novaPonuda.datum = document.getElementById("date").value;
            novaPonuda.brojDana = document.getElementById("brDana").value;
            novaPonuda.brojOsoba = document.getElementById("brOsoba").value; 
            novaPonuda.cena = document.getElementById("cena").value;
            novaPonuda.dodatneOpcije_id = 1;
            //novaPonuda.cena = document.getElementById("cena").value;
          
            
            fetch("http://localhost:9000/ponude/" + id, {
              method: "PUT",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(novaPonuda)
            })
            .then(response => response.json())
            .then(data => {

                console.log("U PUT JE" + novaPonuda);
              
              window.location.href = "ponude.html";
            })
            .catch(err => console.log(err));
          });

          document.getElementById("obrisiBtn").addEventListener("click", function(event) {
            event.preventDefault(); 

            console.log("usao u dugme OBRISI");
            fetch("http://localhost:9000/ponude/" + id, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Neuspelo brisanje');
                }
                return response.json();
            })
            .then(data => {
                alert("Ponuda uspešno obrisana");
                // Možete redirektovati korisnika na određenu stranicu nakon brisanja, ako je to potrebno
                window.location.href = "ponude.html";
            })
            .catch(err => console.log(err));
        });
        
});

        

function dodajOpciju(id){

    document.querySelector(`#spisak-opcija > option[value='${id}']`).disabled = true;
    document.getElementById("spisak-opcija").selectedIndex = 0;

    var naziv = document.querySelector(`#spisak-opcija > option[value='${id}']`).innerHTML;

     var span = document.createElement("span");
            span.classList.add("badge");
            span.classList.add("bg-secondary");
            span.dataset.id = id;
            span.innerHTML = naziv;

    var button = document.createElement("button");
            button.type="button";
            button.classList.add("btn");
            button.classList.add("btn-default");
            button.classList.add("btn-sm");
            button.innerHTML = "X";

    span.appendChild(button);
    

    document.getElementById("opcije").appendChild(span);
    document.getElementById("opcije").appendChild(document.createTextNode(" "));

    button.addEventListener("click", function(){   

            var id = this.parentNode.dataset.id;

              this.parentNode.parentNode.removeChild( this.parentNode );
               document.querySelector(`#spisak-opcija > option[value='${id}']`).disabled = false;


     });


}