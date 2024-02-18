// window.addEventListener("load", function(){
//     document.getElementById("forma").addEventListener("submit", function(event){
//         var validno = true;

//         if( document.getElementById("naziv").value.length < 3 ){
//             document.getElementById("naziv").classList.add("error");
//             document.getElementById("naziv").classList.remove("success");
//             event.preventDefault();
//         }
//         else {
//             document.getElementById("naziv").classList.add("success");
//             document.getElementById("naziv").classList.remove("error");
//         }

//         var spanovi = document.querySelectorAll("#opcije > span.badge");
//         var niz = [];

//         for(let i=0; i<spanovi.length; i++){
//             niz.push(spanovi[i].dataset.id);
//         }

//         var ulaz = document.getElementById("opcije-input");
//         ulaz.value = niz;

//         var novaPonuda = {};
//         novaPonuda.destinacija = document.getElementById("naziv").value;
//         novaPonuda.lokacija_id = 1;
//         novaPonuda.kategorije_id = document.getElementById("kategorija").value;
//         novaPonuda.datum = document.getElementById("date").value;
//         novaPonuda.brojDana = document.getElementById("brDana").value;
//         novaPonuda.brojOsoba = document.getElementById("brOsoba").value;
//         novaPonuda.cena = document.getElementById("cena").value;
//         novaPonuda.dodatneOpcije_id = 1;

// 		console.log("ovo je nova ponuda" + novaPonuda);

//         fetch("http://localhost:9000/ponude", {
//             method:"POST",
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(novaPonuda)
//         })
//         .then(succ=>succ.json())
//         .then(data=>{
//             window.location.href="ponude.html";
//         })
//         .catch(err => console.log(err));

//         return validno;
//     });

//     // document.getElementById("naziv").addEventListener("keypress", function () {
//     //     this.classList.remove("success");
//     //     this.classList.remove("error");
//     // });

//     // document.getElementById("dodaj-opciju").addEventListener("click", function(){
//     //     var id = document.getElementById("spisak-opcija").value;
//     //     if(!id){
//     //         alert("Izaberi opciju");
//     //         return;
//     //     }
//     //     dodajOpciju( id );
//     // });

//     // function dodajOpciju(id){
//     //     document.querySelector(`#spisak-opcija > option[value='${id}']`).disabled = true;
//     //     document.getElementById("spisak-opcija").selectedIndex = 0;

//     //     var naziv = document.querySelector(`#spisak-opcija > option[value='${id}']`).innerHTML;

//     //     var span = document.createElement("span");
//     //     span.classList.add("badge");
//     //     span.classList.add("bg-secondary");
//     //     span.dataset.id = id;
//     //     span.innerHTML = naziv;

//     //     var button = document.createElement("button");
//     //     button.type="button";
//     //     button.classList.add("btn");
//     //     button.classList.add("btn-default");
//     //     button.classList.add("btn-sm");
//     //     button.innerHTML = "X";

//     //     span.appendChild(button);

//     //     document.getElementById("opcije").appendChild(span);
//     //     document.getElementById("opcije").appendChild(document.createTextNode(" "));

//     //     button.addEventListener("click", function(){
//     //         var id = this.parentNode.dataset.id;
//     //         this.parentNode.parentNode.removeChild( this.parentNode );
//     //         document.querySelector(`#spisak-opcija > option[value='${id}']`).disabled = false;
//     //     });
//     // }
// });


window.addEventListener("load", function(){
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
		novaPonuda.kategorije_id = document.getElementById("kategorija").value; // Popravljeno ime polja
		//console.log(novaPonuda.kategorija + "OVO JE KATEGORIJA NOVA");
		novaPonuda.datum = document.getElementById("date").value;
		novaPonuda.brojDana = document.getElementById("brDana").value;
		novaPonuda.brojOsoba = document.getElementById("brOsoba").value; // Popravljeno ime polja
		novaPonuda.cena = document.getElementById("cena").value;
		novaPonuda.dodatneOpcije_id = 1;
	  
		const cookies = document.cookie.split('=');
const token = cookies[cookies.length - 1];



	  
		fetch("http://localhost:9000/ponude/", {
		  method: "POST",
		  headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` },
		  body: JSON.stringify(novaPonuda)
		})
		.then(response => response.json())
		.then(data => {
		  
		  window.location.href = "ponude.html";
		})
		.catch(err => console.log(err));
	  });


	  


	  

	document.getElementById("naziv").addEventListener("keypress", function () {
    this.classList.remove("success");
    this.classList.remove("error");
    });

	

	
	document.getElementById("dodaj-opciju").addEventListener("click", function(){
        var id = document.getElementById("spisak-opcija").value;
        if(!id){
            alert("Izaberi opciju");
            return;
        }
        dodajOpciju( id );
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





