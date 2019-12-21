# Greyscale Converter
RGB képek szürke árnyalatosá konvertálására képes a program

# Bevezetés: 
A szoftver képek feltöltését teszi lehetővé, majd a feltöltött képeket, szürkeárnyalatossá alakítja, ezeket előnézetes formában megjeleníti, és egy letöltési opciót ad a felhasználónak, ami lehetőséget nyújt a szürkeállományos kép letöltésére. 
# Funkcionális követelmények: 
- A felhasználó tallózhasson ki képeket a saját gépéről. 
- Az alkalmazás alakítsa át szürkeárnyalatossá és mutassa is meg azokat. 
- Az alkalmazás tegye lehetővé ezeknek az átalakított képeknek a letöltését. 
# Nem funkcionális követelmények:
Megbízhatóság és Biztonság:
Mivel a képeket nem szerver oldalon tárolja feltöltés után, hanem a felhasználó gépén ezért a képek nem juthatnak el más gépére.
Gyorsaság:
Mivel a képek feldolgozása a felhasználó gépén történik és nem szerver oldalon, így a szerver túlterhelését nem okozhatja a képek feldolgozása, így a gyorsaság sem a szerver leterheltségétől függ
Reszponzivitás:
Az oldalon található elemek mindegyike reszponzív, igy bármilyen eszközről szeretnénk az oldalra felmenni, az elemek és a kinézet az eszköz méretéhez igazodik.
Rendszer követelmények: 
- NodeJs 
- AngularJs 
# Használati útmutató: 
Szoftvert kiszolgálóknak:
Töltse le a git-es projektet.
Nyisson egy terminált a letöltött mappába.
Futtassa az “npm install” commandot a packagek telepítéséhez.
Futtassa az “npm start” commandot az angular applikáció indításához.
 
Felhasználóknak:
Kattintson a “Pick Image” gombra.
Válassza ki a szürkeállományossá alakítandó képet/képeket.
Nyissa le a képet/képeket tartalmazó panelt/paneleket.
Kattintson a “Download” gombra a letöltéshez, “Remove” gombra az eltávolításhoz.
 

