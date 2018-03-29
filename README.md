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
### Jatkokehitys

### Ongelmat
* Bäkkärin kanssa joku ongelma, osa requesteista peruuntuu / ei mene perille. Tilanne missä tuote varataan, ja luodan uusi reservation

## VarastoApp

## VarastoApi

### Requestit
#### Category
GET "/api/categories"                                               //Hakee kaikki kategoriat
GET "/api/categories/{id}"                                          //Hakee yhden kategorian
POST "/api/categories"                                              //Lisää kategorian
PUT "/api/categories/{id}"                                          //Päivittää kategorian
DELETE "/api/categories/{id}"                                       //Poistaa kategorian

#### Item
GET "/api/categories/{categoryId}/items"            
GET "/api/categories/{categoryId}/items/{id}"
POST "/api/categories/{categoryId}/items"
PUT "/api/categories/{categoryId}/items/{id}"
PUT "/api/items"
DELETE "/api/categories/{categoryId}/items/{id}"

#### Metainfo
GET "/api/categories/{categoryId}/items/{itemId}/megainfos" 
GET "/api/categories/{categoryId}/items/{itemId}/megainfos/{id}"
POST "/api/categories/{categoryId}/items/{itemId}/megainfos"
PUT "/api/categories/{categoryId}/items/{itemId}/megainfos/{id}"

#### Reservation
GET "/api/reservations"
GET "/api/reservations/{id}"
POST "/api/reservations"

#### User
GET "/api/users"
GET "/api/users/{id}"
POST "/api/users"
PUT "/api/users/{id}"
DELETE "/api/users/{id}"
