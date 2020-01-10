**Hibajavítás Jegyzőkönyv**

**Filmválasztó projekt**

- A dokumentáció a tesztelési jegyzőkönyvben bejelentett hibák javítását tartalmazza.

| **ID** | **Teszt eredménye** | **Hiba megoldása** | **Státusz/Jóváhagyó** |
| --- | --- | --- | --- |
| F1 | Az sql script a phpmyadmin felületen lefut, a tábla és a rekordok létrejönnek, de az adatbázis nem. | Hiányzó CREATE DATABASE parancs, pótolva. | Hiba kijavítvaMiklós Viktor |
| F2 | Az sql adatbázis kapcsolat megnyílásánál hiba lépett fel, helytelen login adatok. | Helytelen login adatok, megfelelő paraméterek (root, és üres jelszó) | Hiba KijavítvaMagó Csaba |
| E5 | Az újra gomb megnyomásánál a localhost oldalra tölt be. | Böngésző cache ürítés, régi script maradt bent. | Hiba kijavítvaMiklós Viktor |
| E7 | Az oldal teljes kijelzőn szétcsúszik, egyéb kisebb, képernyőméretekben, megfelelően működik. | CSS módosítása, width értékek megfelelő beállítása. | Hiba kijavítvaMagó Csaba |