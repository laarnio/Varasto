# Lainausjärjestelmä pirkat 1,2&4 asukastoimikunnan käyttöön 
Kyseessä on harjoitteluprojekti, joka voisi valmistuttuaan tulla Pirkat 1,2&4 asukastoimikunnan käyttöön, helpoittamaan tavaroiden lainaamista. Pirkoilla on siis isot määrät lainatavaroita, mm. yli 50 lautapeliä, työkaluja, ulkopelejä jne. Näitä voi asukkaat lainata pyytämällä asukastoimikuntalaista tulemaan luovuttamaan tavara, ja tämän projektin alkaessa lainattu tavara merkattiin kynällä vihkoon, eli myöskään mistään muualta kuin siitä vihkosta ei nähnyt mitkä tavarat olivat lainassa ja kenellä.
Siitä tuli idea tälle varastoapplikaatiolle.
![alt text](https://www.dropbox.com/s/lmskq84lbnp5xhi/Screenshot%202018-03-28%2019.19.53.png?raw=1)

Toteutus on vielä kesken, ja ulkoasu on suurimmaksi osaksi "placeholder" -tilassa eli esimerkiksi järjestelmän väritys ei ole lopullinen. Lopullisessa toteutuksessa tarkoitus olisi, että kuka tahansa pääsee näkemään listauksen lainattavista tavaroista ja näkee mitkä tuotteet ovat vapaana/lainassa, mutta eivät sen enempää. Asukastoimikuntalaiset pääsevät tunnuksilla(autentikointia ei vielä toteutettu) käsiksi tarkempiin tietoihin, sekä tietysti tekemään lainauksia ja palautuksia.

Backend on toteutettu pääosin Spring-bootilla ja Frontend React.js:llä. Tämä projekti on Backend-frontend harjoitusprojekti, ja osa koodissa olevista ratkaisuista on tarkoituksella tehty muutamallakin eri tavalla, jotta näkee miten ne toimivat. Mitään state-management-systemiä ei myöskään tässä projektissa ole, koska halusin keskittyä ensin opettelemaan nämä tekniikat.

## Ominaisuudet
Tässä osiossa listattuna toteutettuja ominaisuuksia, tulevat ominaisuudet ja jatkokehitysideoita
### Valmiit
* Järjestelmään voi lisätä uuden kategorian. 
* Järjestelmään voi lisätä uuden tuotteen, jonkun kategorian alle.
* Järjestelmään voi lisätä uuden henkilön jolle voi lainata tavaroita.(Lainauksen yhteydessä)
*Tuotteita voi lisätä lainakoriin. 
* Tuotteelle voi lisätä meta-dataa(tekstiä), mihin tallentuu luontipäivämäärä, sekä itse metatieto. Tämän tiedon saa näkyviin tavaran kohdalla.
* Lainakorin avulla useita tavaroita voi lainata kerralla yhdelle henkilölle, ja tästä syntyy Varaukset-välilehteen merkintä päivämäärästä, mitkä tuotteet lainattiin, kenelle lainattiin ja kuka luovutti tavarat.(Tällä hetkellä tavaroiden luovuttaja on placeholder, koska autentikointia ei ole vielä toteutettu).
* Lainakorista lainatessa tuotteet, lisätään uuden lainaajan nimi, asunto ja puhelinnumero tietokantaan ja lainataan tuotteet hänelle. Jos lainaaja on jo tietokannassa, voi hänet valita pudotusvalikosta.
* Lainakorin voi tyhjentää.
* Lainassa olevan tavaran saa palautettua "Palauta" -painikkeella tavaran alta. Palautuksesta ei tule erikseen lokimerkintää.

### Tulevat
* Autentikointi järjestelmän käyttäjille, eli asukastoimikuntalaisille
* Tavaroiden poisto
* Lainakorin staten tallennus vielä ylemmälle tasolle, jotta lainakori ei tyhjene kun käy muilla välilehdillä
* Lainassa olevasta tuotteesta näkisi suoraa kenellä lainassa(Jotta ei tarvitse välttämättä katsoa varausvälilehdeltä)
* Käyttäjän voi poistaa
* Käyttäjän tietoja voi muokata
### Jatkokehitys
* TTY:n kurssilla Mobiiliohjelmointi harjoitustyön aiheeksi valitsin tämän saman järjestelmän frontin tekemisen androidille.
* Lainassa oleville tavaroille voisi tulla värikoodaukset siten, että väri esimerkiksi tummenee, mitä kauemmin se on ollut kerralla lainassa. Eli asukastoimikuntalaiset huomaisivat helposti, jos jokin tavara on ollut todella kauan jollain lainassa.
### Ongelmat
* Bäkkärin kanssa joku ongelma, osa requesteista peruuntuu / ei mene perille. Tilanne missä tuote varataan, ja luodan uusi reservation

## VarastoApi

### Requestit
#### Category
GET "/api/categories"                                               //Hakee kaikki kategoriat

GET "/api/categories/{id}"                                          //Hakee yhden kategorian

POST "/api/categories"                                              //Lisää kategorian

PUT "/api/categories/{id}"                                          //Päivittää kategorian

DELETE "/api/categories/{id}"                                       //Poistaa kategorian


#### Item
GET "/api/categories/{categoryId}/items"            //Hakee tietyn kategorian aikki tavarat

GET "/api/categories/{categoryId}/items/{id}"       //Hakee tietyn tavaran

POST "/api/categories/{categoryId}/items"           //Lisää uuden tavaran tiettyyn kategoriaan

PUT "/api/categories/{categoryId}/items/{id}"       //Päivittää tiettyä tavaraa

PUT "/api/items"                                    //Päivittää annetun tavaralistan kaikkien tavaroiden borrowed-arvon trueksi

DELETE "/api/categories/{categoryId}/items/{id}"    //Poistaa tietyn tavaran

#### Metainfo
GET "/api/categories/{categoryId}/items/{itemId}/metainfos"     //Hakee tietyn tavaran kaikki metainfot

GET "/api/categories/{categoryId}/items/{itemId}/metainfos/{id}"    //Hakee tietyn tavaran tietyn metainfon

POST "/api/categories/{categoryId}/items/{itemId}/metainfos"        //Lisää tietylle tavaralle metainfon

PUT "/api/categories/{categoryId}/items/{itemId}/metainfos/{id}"    //Päivittää metainfoa


#### Reservation
GET "/api/reservations"       //Hakee kaikki tehdyt lainaukset

GET "/api/reservations/{id}"  //Hakee tietyn lainauksen

POST "/api/reservations"      //Lisää uuden lainauksen

#### User
GET "/api/users"    //Hakee kaikki käyttäjät

GET "/api/users/{id}"   //Hakee tietyn käyttäjän

POST "/api/users"       //Lisää käyttäjän

PUT "/api/users/{id}"   //Päivittää käyttäjää

DELETE "/api/users/{id}"    //Poistaa käyttäjän


## VarastoApp kuvia

![alt text](https://www.dropbox.com/s/tjgpyleqjosre0x/Screenshot%202018-03-31%2020.48.10.png?raw=1)
Lainakoriin lisätty tuote Pöytä
- - - - 
![alt text](https://www.dropbox.com/s/q5upt4nv2g6dpp6/Screenshot%202018-03-31%2020.49.19.png?raw=1)
Lainaa-nappia painettu, voidaan valita listasta joko tallennettu käyttäjä, tai voidaan täyttää tiedot uudesta käyttäjästä.
- - - - 
![alt text](https://www.dropbox.com/s/t2b7w1qj470k2rm/Screenshot%202018-03-31%2020.50.41.png?raw=1)
Varaus-listaus, missä näkyy lainauspäivämäärä, kuka lainasi, kuka luovutti tavarat ja mitkä tavarat lainattiin.
- - - -
![alt text](https://www.dropbox.com/s/7jduo91ci54eif8/Screenshot%202018-03-31%2020.50.57.png?raw=1)
Uuden kategorian lisääminen.
- - - -
![alt text](https://www.dropbox.com/s/at9b9wacq2eat0n/Screenshot%202018-03-31%2020.51.09.png?raw=1)
Uuden tavaran lisääminen.
- - - - 
![alt text](https://www.dropbox.com/s/9cgwxqnsbzpu2zx/Screenshot%202018-03-31%2020.51.43.png?raw=1)
Tavarasta metatiedot esille, painamalla näytä-tietoja painiketta.
- - - -
![alt text](https://www.dropbox.com/s/r3k3p73ukphn0mr/Screenshot%202018-03-31%2020.52.17.png?raw=1)
Tavaraan lisätty kaksi metatietoa. Metatiedot saa piiloon painamalla Piilota tiedot -painiketta.
