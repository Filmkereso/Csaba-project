**Tesztelési jegyzőkönyv és tesztelési jelentés**

**Filmválasztó projekt**

**1. Tesztelt elvárások**

A tesztelést a csapat minden tagja elvégezte.

Az alábbi funkcionális elvárások szerepelnek a funkcionális specifikációban, amelyek tesztelésre is kerültek:

- E1: A kezdőképernyő betöltése: megjelennek a filmek borítóképei
- E2: Sorsoló felület megjelenése: a betöltés után 3 másodperccel felugrik a sorsoló felület, a sorsoló gombbal, és a beállított háttérrel
- E3: A sorsoló gomb megfelelő működése: egy véletlenszerűen kiválasztott film megjelenítése, a sorsoló felület helyén
- E4: A kisorsolt film megjelenése: borítóképének, címének és leírásának megjelenítése
- E5: Újra gomb megfelelő működése: újratölti az oldalt
- E6: Böngészőfüggetlenség: a weboldal működik a specifikációban meghatározott böngészőkben
- E7: Reszponzivitás: a weboldal megjelenése nem okoz gondot a különböző képernyőméreteken

## **2. Fejlesztői teszt**

- A fejlesztői tesztelés célja a rendszer alapvető funkcióinak ellenőrzése, a hibakezelés és az alapvető funkciók működésének vizsgálata.
- A fejlesztői teszt az alábbiakra tért ki:
  - F1: SQL script lefuttatása
  - F2: SQL kapcsolat létrehozása
  - F3: Random film lekérése
  - F4: Javascript sriptek megfelelő működése



## **3. Elfogadási teszt**

- Az elfogadási teszt célja a rendszer teljes funkcionalitásának vizsgálata a felhasználók szemszögéből.
- Az elfogadási teszt követelményei, megtalálhatóak a _Tesztelési elvárások_ c. fejezetben.

**4. Fejlesztői teszt jelentés**

| **ID** | **Teszt eredménye** | **Státusz/Jóváhagyó** |
| --- | --- | --- |
| F1 | Az sql script a phpmyadmin felületen lefut, a tábla és a rekordok létrejönnek, de az adatbázis nem. | Hiba bejelentveMiklós Viktor |
| F2 | Az sql adatbázis kapcsolat megnyílásánál hiba lépett fel, helytelen login adatok. | Hiba bejelentveMiklós Viktor |
| F3 | A random film lekérés funkció megfelelően működik. | Elvárt működésMagó Csaba |
| F4 | A JavaScript scriptek megfelelően működnek. | Elvárt működésMagó Csaba |











**5. Elfogadási teszt jelentés**

| **ID** | **Teszt eredménye** | **Státusz/Jóváhagyó** |
| --- | --- | --- |
| E1 | A borítóképek rendben megjelennek a kezdőlapon. | Elvárt működésMiklós Viktor |
| E2 | A filmsorsoló ablak rendben megnyílik. | Elvárt működésMiklós Viktor |
| E3 | A sorsoló gomb megfelelően működik, megjelenik a random film felugró ablakja, a sorsoló ablak helyén. | Elvárt működésMagó Csaba |
| E4 |   |   |
| E5 |   |   |
| E6 |   |   |
| E7 |   |   |