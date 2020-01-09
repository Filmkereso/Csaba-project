**Tesztelésiterv**

**Filmválasztó projekt**



Tartalomjegyzék

**1. Bevezetés**         1

1.1 Tesztelési terv hatóköre, célja        1

1.2 Elvárások        1

**2. Szükséges erőforrások**         1

2.1 Feladatkörök és felelősségek (tesztcsapat meghatározása)        1

2.2 Tesztkörnyezet        2

2.3 Tesztelési eszközök:        2

**3. Tesztelési terv**         2

3.1 Fejlesztői teszt        2

3.2 Elfogadási teszt        3

3.4 Tesztelési feladatok, tesztesetek leírása        3

3.5 Tesztelési ütemterv, függőségek – teszt forgatókönyv        3







# **1****. **** Bevezetés**

## 1.1 Tesztelési terv hatóköre, célja

- A tesztelési terv célja a tesztelés teljes körűségének biztosítása, a tesztelés során alkalmazott eljárások és megoldások meghatározásával.
- A teszt végrehajtásáért a projekt menedzser felel Magó Csaba, és a tesztcsapat hajtja végre a 2.1. fejezetben meghatározott módon.

## 1.2 Elvárások

Az alábbi alap elvárások képezik ennek a teszttervnek az alapját:

- -Az olvasó ismeri az alap dokumentumokat, amelyek meghatározzák a rendszert.
- -A Filmválasztó szervezeti egység / projektcsapat felelős a tesztadatok előállításáért.
- -A tesztprogram az ebben a dokumentumban meghatározott tesztterv alapján fut.

# **2****. **** Szükséges erőforrások**

## 2.1 Feladatkörök és felelősségek (tesztcsapat meghatározása)

Tesztelők: Bátori Henrietta, Miklós Viktor, Magó Csaba

- A teszt végrehajtása
- Észrevételek dokumentálása,
- Teszt terv készítése
- A tesztterv jóváhagyatása a projektmenedzserrel
- Teszt forgatókönyvek létrehozása
- Inkonzisztenciák kezelése
- Szükség esetén problémák eszkalálása a projekt menedzsernek
- Teszt dokumentum archiválása

Projektvezető: Magó Csaba

- Teszt terv jóváhagyása
- Teszt forgatókönyv

## 2.2 Tesztkörnyezet

- A tesztelési környezet otthoni körülmények között zajlik, átlag felhasználói hozzáféréssel a következő szempontok alapján:
  - Xampp szerver megléte az eszközön
  - Többféle böngésző megléte az eszközön: Chrome, Edge, FireFox, Opera, Safari
  - 100 MB szabad lemezterület

## 2.3 Tesztelési eszközök:

- hordozható számítógép
- számítógép (PC)

# **3****. **** Tesztelési terv**

## 3.1 Fejlesztői teszt

- A fejlesztői tesztelés célja a rendszer alapvető funkcióinak ellenőrzése, a hibakezelés és az alapvető funkciók működésének vizsgálata.

Módszere:

- SQL script lefuttatása
- -SQL kapcsolat létrehozása
- Random film lekérése
- Javascript sriptek megfelelő működése

## 3.2 Elfogadási teszt

- Az elfogadási teszt célja a rendszer teljes funkcionalitásának vizsgálata a felhasználók szemszögéből.

Módszere:

- A kezdőképernyő betöltése: megjelennek a filmek borítóképei
- Sorsoló felület megjelenése: a betöltés után 3 másodperccel felugrik a sorsoló felület, a sorsoló gombbal, és a beállított háttérrel
- A sorsoló gomb megfelelő működése: egy véletlenszerűen kiválasztott film megjelenítése, a a sorsoló felület helyén
- A kisorsolt film megjelenése: borítóképének, címének és leírásának megjelenítése
- Újra gomb megfelelő működése: újratölti az oldalt
- Böngészőfüggetlenség: a weboldal működik a specifikációban meghatározott böngészőkben
- Reszponzivitás: a weboldal megjelenése nem okoz gondot a különböző képernyőméreteken

## 3.4 Tesztelési feladatok, tesztesetek leírása

- A tesztelési feladat a következő teszteseteket foglalja magában:

-
  -
    - --Tesztelő csapat teszteli a programot
    - --Az alkotók tesztelik a programot

## 3.5 Tesztelési ütemterv, függőségek – teszt forgatókönyv

- A tesztelő az előírt sorrendben vizsgálja meg a funkcióit a hiteles teszt elvégzése érdekében.
- A tesztelési tervek tartalmazzák a tesztelendő objektumokat, és azok elvárt működését.