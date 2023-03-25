# EestecSourc3 Shopping App Source3

## Set Up

Kako bi mogli pokrenuti aplikaciju potrebno je imati npm, verzija noda koja je koristena je v16.19.0. Osim toga potrebno je globalno instalirati ReactNativeCLI (npm install -g react-native-cli). 
Nakon kolniranja repozitorija potrebno je uraditi npm install. 


Nakon sto uradimo npm install trebamo pokrenuti server sa ***npm run android*** ili ***npm start*** i svoj emulator u drugom terminalu sa ***npm start android*** komandom.
Dodatno jedan od načina pokretanja koda jeste  preko Android Studio aplikacije. Simuliramo ili preko USB-a povezujemo telefon sa računarom te u terminalu dok se nalazimo u direktoriju sa android file-ovima koristimo komandu ***npx react-native run-android***.

## Funkcionalnosti Aplikacije
Nakon sto se aplikacija ucita prvi Screen koji cemo vidjeti je Log IN ili Sign UP. Ukoliko prvi put koristimo aplikaciju mozemo dodati novog usera
Nakon sto smo napravili svoj user profil potrebno je da se logujemo u aplikaciju.
Ukoliko ne zelimo da koristimo nekog usera mozemo koristiti guest login.
Nakon sto smo uspjesno usli u Shopping Aplikaciju mozemo odabrati da li zelimo kupovati,prodavati stvari ili kontaktirati contact support. Ukoliko odaberemo da kupujemo odnosno klikom da button BUY na iducem screenu mozemo vidjeti sve iteme search bar i Cart(kosaricu). Na ekranu se prikazuju svi proizvodi sa imenom cijenom i slikom te ukoliko kliknemo na neki item mozemo vidjeti dodatne detalje o tom proizvodu. Sada mozemo vijeti reviews dataog proizvoda te ko je njegov prodavac. Klikom na ikonu + pored review mozemo dodati novi review. Imamo i dugme Add To Cart sto dati proizvod ubacuje u nasu kosaricu te ga mozemo kasnije i kupiti. Ukoliko se vratimo na prethodni zaslon i kliknemo na ikonu Cart mozemo vidjeti sve proizvode koje smo odlucili kupiti, koliko oni zajedno kostaju. Na dnu ekrana imamo button BUY te klikom na ovaj dugmic potvrdjujemo
svoju kupovinu.

Prilikom odabira da li zelimo kupovati ili prodavati mozemo odabrait i da zelimo prodavati neke proizvode klikom na dugmic SELL dolazimo do forme u kojoj mozemo dodati ime, opis i cijenu. Zamislili smo da u ovom dijelu implementiramo koristenje kamere ali to nismo uspjeli.

## Shopping App
Ideja je da na ovoj aplikaciji korisnici mogu kupovati i prodavati rucnoradjene predemete.

## Napomena
U zadnjim radovima na aplikaciji stvoren je drugi direktorij za slikom pod imenom images dok je uporedno postojao Images. Uzimajući u obzir da je linux case sensitive a windows nije svaki path  i sve slike su prebacene u Images ali je folder pod imenom images ostavljen iz sigurnosti.


