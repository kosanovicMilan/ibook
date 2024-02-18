const express = require('express');
const path = require('path');
const BP = require('body-parser');
const Joi = require('joi');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { Console } = require('console');




const app = express();

function getCookies(req) {
  if (req.headers.cookie == null) return {};

  const rawCookies = req.headers.cookie.split('; ');
  const parsedCookies = {};

  rawCookies.forEach(rawCookie => {
    const parsedCookie = rawCookie.split('=');
    parsedCookies[parsedCookie[0]] = parsedCookie[1];
  });

  return parsedCookies;
}

function authToken(req, res, next) {
  const cookies = getCookies(req);
  //alert("Ovo je kolacic : " + cookies);
  const token = cookies['token'];
  if (token == null) {
    //alert('Nema validnog tokena, vršimo redirekciju na /admin/login');
    return res.redirect(301, '/admin/login.html');
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error('Greška pri verifikaciji tokena:', err);
      return res.redirect(301, '/admin/login.html');
    }
   // alert(".env " + process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    console.log("OVO je user: " + req.user)
    next();
  });
}


app.use(express.static(path.join(__dirname, 'static')))

// function checkAuth(req, res, next) {
//   const cookies = getCookies(req); // Pretpostavka da već imate funkciju getCookies implementiranu

//   // Provera da li postoji token u kolačićima
//   const token = cookies['token'];
//   if (!token) {
//     // Ako nema tokena, korisnik nije ulogovan, preusmeravamo ga na stranicu za prijavu
//     return res.redirect('/admin/login');
//   } else {
//     // Ako postoji token, korisnik je ulogovan, nastavljamo sa sledećom middleware funkcijom
//     next();
//   }
// }

// Postavljanje middleware funkcije za proveru autentifikacije na sve rute koje treba da budu zaštićene


// Definicija ruta za registraciju i prijavu
app.get('/admin/register', (req, res) => {
  res.sendFile('register.html', { root: './static/admin' });
});

app.get('/admin/login', (req, res) => {
  res.sendFile('login.html', { root: './static/admin' });
});

// Ostale rute koje treba da budu zaštićene
app.get('/admin', authToken, (req, res) => {
  //alert(authToken);
  res.sendFile('booking.html', { root: './static/admin' });
});

// app.get('/admin/ponude', authToken, (req, res) => {
//   res.sendFile('ponude.html', { root: './static/admin' });
// });


app.use('/', express.static(path.join(__dirname, 'static', 'dist')));




app.use('/admin/novaPonuda',BP.urlencoded({extended: false}));

app.post('/admin/novaPonuda', (req,res) =>{

    const shema = Joi.object().keys({
        naziv: Joi.string().trim().min(5).max(25).required(),
        kategorija: Joi.string().trim().min(1).required(),
        date: Joi.string().trim().min(5).max(25).required(),
        brDana: Joi.number().greater(0).required(),
        brOsoba: Joi.number().greater(0).required(),
        cena: Joi.number().greater(0).required()
    });
   
    const {error, succ} = shema.validate(req.body);

    if(error){
        
        res.send("Greska: " + error.details[0].message);
        
        return;
    } else{
        
        

        fs.appendFile("ponude.txt", 
                 JSON.stringify(req.body) + "\n", 
                 function(err, succ){
                  
                 }
            );

    }

    
    res.sendFile(path.join(__dirname, 'static','admin/ponude.html'));

});

app.get('/admin/ponude', (req, res) => {
    fs.readFile('ponude.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Greška pri čitanju fajla:', err);
        res.status(500).send({ error: "Greška" });
        return;
      }
  
      try {
        const redovi = data.split('\n');
        const ponude = [];
  
        for (let i = 0; i < redovi.length; i++) {
          if (redovi[i]) { // Preskoči prazne redove
            let obj = JSON.parse(redovi[i]);
            ponude.push(obj);
          }
        }
  
        res.json(ponude);
      } catch (error) {
        console.error('Greška pri parsiranju JSON-a:', error);
        res.status(500).send({ error: "Greška pri parsiranju JSON-a" });
      }
    });
  });
  


app.listen(8000);
