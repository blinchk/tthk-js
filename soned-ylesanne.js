/* 
1. Kellaaeg
Luua kolm muutujat: tunnid, minutid, sekundid. Ühenda muutujad kokku, lisades nende vahele kooloni (:) ja lõppu tähed PM.

2. Tsitaat lause sees
Luua muutuja, mis sisaldab kuulsat tsitaati. 
Moodustada uus string, mis sisaldab selle tsitaadi teksti koos autori nimega, kasutades erinevaid jutumärke. 
Veenduda, et tsitaadi tekst ja autori nimi on korralikult vormistatud.

3. Mallide kasutamine
Loo kaks muutujat: eesnimi ja perenimi. Võta kummaski nimest esitähed ning kasuta lauses
Kasuta lause moodustamisel malle (Template literals).

4. Perenime pikkus
Loo muutuja kujul “Perenimi, Eesnimi”.
Loo muutuja ja lisa selle väärtuseks koma asukoht sõnes (index)
Kasuta eelmist muutujat, et eraldada sõnest perenimi
Muuda perenimi suurtähtedeks ja kuva konsooliakanas
Kuva perenime pikkus

5. E-posti aadressi muutmine
Loo muutuja kasutaja emailiga. 
Ülesande eesmärk on asendada e-posti aadressi domeen (näiteks: “netlog.com”) domeeniga “gmail.com” ning tagastada muudetud e-posti aadress.
*/

const email = "karrolk@netlog.com";

/*
6. Andmerida analüüs
Sul on kasutada järgmine andmerida
*/

const andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
	
// Oodatav tulemus: "40.19.226.175" ja "mmartinovic0"
