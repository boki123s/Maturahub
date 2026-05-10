const questions = [

  // =====================
  // RAČUNARSKI HARDVER (1–51)
  // =====================

  {
    id: 1,
    category: "hardver",
    type: "multiple",
    question: "1. Prilikom uklanjanja procesora sa matične ploče, prvi korak je:",
    answers: [
      "Otključati podnožje procesora",
      "Ukloniti hladnjak sa matične ploče",
      "Ukloniti procesor sa matične ploče"
    ],
    correct: 1,
    explanation: "Prvo se uklanja hladnjak jer blokira pristup procesoru. Tek nakon toga se otključava i vadi procesor.",
    image: ""
  },

  {
    id: 2,
    category: "hardver",
    type: "multiple",
    question: "2. Program koji se može iskoristiti za proveru ispravnosti hard diska je:",
    answers: [
      "Recuva",
      "Acronis",
      "HD Tune",
      "Rufus"
    ],
    correct: 2,
    explanation: "HD Tune je alat namenjen dijagnostici i proveri stanja hard diska (temperatura, greške, brzina).",
    image: ""
  },

  {
    id: 3,
    category: "hardver",
    type: "multiple",
    question: "3. Alat kojim možemo dijagnostikovati kvarove različitih delova računarskog sistema je:",
    answers: [
      "Hirens boot",
      "Mini tool Partition Wizard",
      "Driver booster",
      "HD Tune"
    ],
    correct: 0,
    explanation: "Hirens boot je sveobuhvatni alat za dijagnostiku koji pokriva različite komponente sistema.",
    image: ""
  },

  {
    id: 4,
    category: "hardver",
    type: "multiple",
    question: "4. Alat kojim možemo testirati RAM memorije je:",
    answers: [
      "Rufus",
      "Memtest86",
      "Everest",
      "CC Cleaner"
    ],
    correct: 1,
    explanation: "Memtest86 je specijalizovani alat koji se pokreće pre učitavanja OS-a i testira ispravnost RAM modula.",
    image: ""
  },

  {
    id: 5,
    category: "hardver",
    type: "multiple",
    question: "5. Sistem ima instalirana dva memorijska modula koja rade na 1333 MHz. Tehničar je potom dodao dva memorijska modula koja rade na 1600 MHz. Najverovatniji ishod ove intervencije biće:",
    answers: [
      "Računar se neće podizati.",
      "Računar će se povremeno zamrznuti.",
      "Kompletna memorija će raditi na 1333 MHz.",
      "Kompletna memorija će raditi na 1600 MHz."
    ],
    correct: 2,
    explanation: "Kada se mešaju memorijski moduli različitih frekvencija, sva memorija radi na nižoj (1333 MHz) radi kompatibilnosti.",
    image: ""
  },

  {
    id: 6,
    category: "hardver",
    type: "multiple",
    question: "6. Indikatorski LED za hard disk na kućištu računara svetli duži period vremena, čak i kada nema otvorenih aplikacija. Najverovatniji razlog je:",
    answers: [
      "Disk je prestao sa radom ili je neki od kablova za njegovo povezivanje oštećen",
      "Postoji problem sa naponskom linijom 3.3V u jedinici za napajanje",
      "Postoji problem sa hard diskom ili nema dovoljno RAM memorije"
    ],
    correct: 2,
    explanation: "Stalna aktivnost diska bez otvorenih aplikacija ukazuje na problem sa samim diskom ili nedostatak RAM memorije (OS koristi swap fajl).",
    image: ""
  },

  {
    id: 7,
    category: "hardver",
    type: "multiple",
    question: "7. Tehničar povezuje interni HDD u kućište. Kabl za podatke koji će iskoristiti za povezivanje je:",
    answers: [
      "Molex",
      "SATA",
      "PCIE",
      "PWR_ON"
    ],
    correct: 1,
    explanation: "SATA (Serial ATA) je standardni kabl za prenos podataka između matične ploče i HDD/SSD diska.",
    image: ""
  },

  {
    id: 8,
    category: "hardver",
    type: "multiple",
    question: "8. Prilikom pregleda neispravnog laptopa ustanovili ste da postoji problem sa jednom od komponenti laptopa. Laptop nije povezan sa eksternim izvorom napajanja. Prva stvar koju ćete uraditi pre nego što otvorite kućište laptopa je da:",
    answers: [
      "Odkačite displej",
      "Uklonite bateriju",
      "Izvadite tastaturu",
      "Isključite bežični adapter"
    ],
    correct: 1,
    explanation: "Pre otvaranja kućišta laptopa koji nije priključen na struju, prvo se uklanja baterija radi bezbednosti.",
    image: ""
  },

  {
    id: 9,
    category: "hardver",
    type: "multiple",
    question: "9. Komponenta računara koja izvršava softverske instrukcije i realizuje aritmetičke operacije je:",
    answers: [
      "Grafički adapter",
      "BIOS",
      "KEŠ memorija",
      "Mikroprocesor"
    ],
    correct: 3,
    explanation: "Mikroprocesor (CPU) je centralna procesorska jedinica koja izvršava sve instrukcije i obavlja aritmetičke i logičke operacije.",
    image: ""
  },

  {
    id: 10,
    category: "hardver",
    type: "multiple",
    question: "10. Standard namenjen grafičkom adapteru kod savremenih računarskih konfiguracija naziva se:",
    answers: [
      "PCI-E x1",
      "PCI-E x4",
      "PCI-E x8",
      "PCI-E x16",
      "PCI-E x24"
    ],
    correct: 3,
    explanation: "PCI-E x16 je standardni slot za grafičke kartice jer pruža najveću propusnost podataka.",
    image: ""
  },

  {
    id: 11,
    category: "hardver",
    type: "multiple",
    question: "11. Za softversko isključivanje računara preko matične ploče koristi se:",
    answers: [
      "Power_Good signal",
      "5 V SB signal",
      "PS_ON signal",
      "PS_OF signal"
    ],
    correct: 2,
    explanation: "PS_ON signal (Power Supply ON) se koristi za softversko upravljanje napajanjem — spuštanjem na 0V se pali, podizanjem gasi napajanje.",
    image: ""
  },

  {
    id: 12,
    category: "hardver",
    type: "multiple",
    question: "12. Video sistem personalnog računara čine sledeće komponente:",
    answers: [
      "Monitor, grafički adapter i mikroprocesor",
      "Mikroprocesor, grafički adapter i upravljački programi",
      "Monitor i grafički adapter",
      "Grafički adapter, monitor i upravljački programi"
    ],
    correct: 3,
    explanation: "Video sistem čine grafički adapter (GPU), monitor (prikazuje sliku) i upravljački programi (drajveri) koji ih povezuju sa OS-om.",
    image: ""
  },

  {
    id: 13,
    category: "hardver",
    type: "multiple",
    question: "13. Današnja napajanja na svojim izlazima formiraju stabilne jednosmerne napone vrednosti:",
    answers: [
      "+3 V; +5V; +10V",
      "+3 V; +5V; +12V",
      "+3,3 V; +5V; +10V",
      "+3,3 V; +5V; +12V"
    ],
    correct: 3,
    explanation: "Standardni ATX naponi su +3,3V (za memoriju i čipset), +5V (za USB i periferne uređaje) i +12V (za procesore, diskove i ventilatore).",
    image: ""
  },

  {
    id: 14,
    category: "hardver",
    type: "multiple",
    question: "14. Sistemska magistrala (sabirnica) omogućuje povezivanje:",
    answers: [
      "RAM i ROM memorije",
      "KEŠ memorije i procesora",
      "RAM memorije i procesora",
      "RAM i KEŠ memorije"
    ],
    correct: 2,
    explanation: "Sistemska magistrala (front-side bus) direktno povezuje procesor i RAM memoriju za razmenu podataka.",
    image: ""
  },

  {
    id: 15,
    category: "hardver",
    type: "multiple",
    question: "15. DVI-I (Digital Video Interface - Integrated) standard:",
    answers: [
      "Prenosi samo analogni signal",
      "Prenosi samo digitalni signal",
      "Prenosi i analogni i digitalni signal",
      "Prenosi samo digitalni zvučni signal"
    ],
    correct: 2,
    explanation: "DVI-I (Integrated) podržava i digitalni i analogni signal — slovo I označava integraciju oba tipa.",
    image: ""
  },

  {
    id: 16,
    category: "hardver",
    type: "multiple",
    question: "16. Korisnik želi da nabavi računar za obavljanje jednonitnog zadatka što je brže moguće. Najvažnija karakteristika procesora za ovaj zahtev je:",
    answers: [
      "Brzina procesora",
      "Hyperthreading",
      "Brzina ventilatora",
      "Broj jezgara"
    ],
    correct: 0,
    explanation: "Jednonitni zadaci koriste samo jedno jezgro, pa je najvažnija što viša taktna frekvencija (clock speed) procesora.",
    image: ""
  },

  {
    id: 17,
    category: "hardver",
    type: "multiple",
    question: "17. Stress Test na kartici Bench programa CPU-Z pokazuje:",
    answers: [
      "Ponašanje sistemske memorije",
      "Ponašanje hard diska pod velikim opterećenjem",
      "Ponašanje procesora pod velikim opterećenjem",
      "Ponašanje procesora u uobičajenim uslovima"
    ],
    correct: 2,
    explanation: "CPU-Z Stress Test maksimalno opterećuje procesor kako bi se proverila stabilnost i temperatura pri 100% korišćenju.",
    image: ""
  },

  {
    id: 18,
    category: "hardver",
    type: "multiple",
    question: "18. Pokrenut program Speccy posle skeniranja računara pokazao je da ovaj računar ima dva diska (vidite sliku). Ovaj računar ima:",
    answers: [
      "SSD kapaciteta 1101GB i HDD kapaciteta 1TB",
      "SSD kapaciteta 256GB i HDD kapaciteta 2TB",
      "SSD kapaciteta 1TB i HDD kapaciteta 256GB",
      "SSD kapaciteta 512GB i HDD kapaciteta 2TB"
    ],
    correct: 1,
    explanation: "Na osnovu prikaza u Speccy alatu, uređaj prikazuje SSD od 256GB i HDD od 2TB.",
    image: "slike/18.png"
  },

  {
    id: 19,
    category: "hardver",
    type: "multiple",
    question: "19. Raspakovane ste novi računar, priključili ga na UPS i povezali periferne uređaje. Po startovanju računara čujete tri glasna, uzastopna zvučna signala tokom pokretanja. Da biste rešili problem vi ćete:",
    answers: [
      "Zameniti napajanje",
      "Zameniti izvor neprekidnog napajanja (UPS)",
      "Zameniti CMOS bateriju",
      "Ponovo postaviti RAM"
    ],
    correct: 3,
    explanation: "Tri uzastopna beep signala tokom POST-a najčešće ukazuju na problem sa RAM memorijom — potrebno je izvaditi i ponovo postaviti module.",
    image: ""
  },

  {
    id: 20,
    category: "hardver",
    type: "multiple",
    question: "20. Zamenjujete napajanje radne stanice koja se nalazi u rek ormanu. Treba voditi računa da:",
    answers: [
      "Koristite napajanje bez ventilatora",
      "Izaberete odgovarajući napon",
      "Jedinica mora da bude iste ili manje snage",
      "Lokacija konektora za napajanje mora biti ista"
    ],
    correct: 1,
    explanation: "Napajanje mora imati odgovarajući napon (110V ili 220V) koji odgovara lokalnoj mreži — pogrešan napon može uništiti uređaj.",
    image: ""
  },

  {
    id: 21,
    category: "hardver",
    type: "multiple",
    question: "21. Metoda kojom ne možemo izvršiti hardversko čišćenje računara je:",
    answers: [
      "Zamena termalne paste",
      "Izduvavanje ventilatora",
      "Defragmentacija hard diska",
      "Brisanje prašine"
    ],
    correct: 2,
    explanation: "Defragmentacija je softverska operacija koja reorganizuje podatke na disku — nema veze sa fizičkim (hardverskim) čišćenjem.",
    image: ""
  },

  {
    id: 22,
    category: "hardver",
    type: "multiple",
    question: "22. Softverska metoda koju ne možemo koristiti za održavanje računarskog sistema je:",
    answers: [
      "Defragmentacija hard diska",
      "Ažuriranje OS-a",
      "Bekapovanje bitnih podataka",
      "Zamena termalne paste",
      "Instalacija novih drajvera"
    ],
    correct: 3,
    explanation: "Zamena termalne paste je fizička (hardverska) operacija, a ne softverska metoda održavanja.",
    image: ""
  },

  {
    id: 23,
    category: "hardver",
    type: "multiple",
    question: "23. Pomoću programa za proveru karakteristika hardverskih komponenti računara dobijeni su podaci o hardveru (vidite sliku). Izdvoj tvrdnju koja je za prikazan slučaj tačna:",
    answers: [
      "Računar ima dva memorijska modula, svaki po 8GB",
      "Računar ima jedan memorijski modul od 8GB",
      "Računar ima dva memorijska modula, svaki po 4GB",
      "Računar ima jedan memorijski modul od 4GB"
    ],
    correct: 2,
    explanation: "Na slici se vidi da su popunjena dva slota sa modulima od 4GB svaki, što ukupno čini 8GB RAM-a u dual-channel konfiguraciji.",
    image: "slike/23.png"
  },

  {
    id: 24,
    category: "hardver",
    type: "multiple",
    question: "24. Pomoću programa za proveru karakteristika hardverskih komponenti računara dobijeni su podaci o hardveru (vidite sliku). RAM ovog računara moguće je nadograditi na 12GB na sledeći način:",
    answers: [
      "Računar ima jedan memorijski slot i u njega umesto postojećeg modula treba ubaciti memorijski modul od 12GB",
      "Računar ima dva memorijska slota i u njih umesto postojećih modula treba ubaciti dva modula od 6GB",
      "Računar ima dva memorijska slota i u jedan od njih umesto postojećeg modula treba ubaciti modul od 4GB",
      "Računar ima dva memorijska slota i u jedan od njih umesto postojećeg modula treba ubaciti modul od 8GB"
    ],
    correct: 3,
    explanation: "Računar ima dva slota sa po 4GB (ukupno 8GB). Zameniti jedan modul od 4GB sa 8GB modulom → 4+8=12GB. Moduli moraju biti kompatibilni.",
    image: "slike/24.png"
  },

  {
    id: 25,
    category: "hardver",
    type: "multiple",
    question: "25. Laserski kolor štampač se koristi za štampanje fotografija, ali korisnici se žale da štampanje traje suviše dugo. Komponenta štampača čijom nadgradnjom bi se najefikasnije postiglo ubrzanje je:",
    answers: [
      "Mrežna kartica",
      "Memorija",
      "Kertridž",
      "Napajanje"
    ],
    correct: 1,
    explanation: "Štampanje fotografija zahteva puno radne memorije za obradu slika — nadgradnjom RAM-a štampača ubrzava se obrada kompleksnih zadataka.",
    image: ""
  },

  {
    id: 26,
    category: "hardver",
    type: "multiple",
    question: "26. Škola nabavlja računare za kabinet u kome se drže vežbe iz operativnih sistema. U nastavi se intenzivno koriste virtuelne mašine sa OS koji nisu stariji od 5 godina. Svako odeljenje ima svoj nalog i skup virtualnih mašina. Koja od ponuđenih konfiguracija NAJBOLJE odgovara zahtevima?",
    answers: [
      "2x Intel Xeon E-2200, 128GB TruDDR4 ECC, 960GB SATA SSD, 2TB SATA HDD",
      "Intel Core i5-10500 (Intel UHD Graphics 630), 16GB DDR4, 500GB SSD",
      "Intel Core i5-10500, 4GB DDR4, 6x NVIDIA GTX 1070 GPU, 250GB SATA SSD",
      "Intel Core i3-10100 (Intel UHD Graphics 630), 4GB DDR4, 320GB SATA HDD"
    ],
    correct: 1,
    explanation: "Konfiguracija 2 (i5, 16GB RAM, 500GB SSD) je optimalna — dovoljno RAM-a za virtuelizaciju, SSD za brzinu, razumna cena. Xeon sa 128GB je preskup, opcija 3 ima previše GPU-a, opcija 4 ima premalo RAM-a i HDD.",
    image: ""
  },

  {
    id: 27,
    category: "hardver",
    type: "multiple",
    question: "27. Za potrebe zaposlenih treba obezbediti konfiguraciju sa 8 GB radne memorije. Na raspolaganju imate procesor i matičnu ploču sa karakteristikama prikazanim na slici. Na osnovu zadatih karakteristika procesora i matične ploče treba odabrati memorijski modul vodeći računa o kompatibilnosti i optimalnim performansama:",
    answers: [
      "8 GB DDR3L-SDRAM 1333 MHz",
      "8 GB DDR4-SDRAM 1600 MHz",
      "8 GB DDR4-SDRAM 2400 MHz",
      "8 GB DDR3L-SDRAM 1600 MHz",
      "8 GB DDR4-SDRAM 2133 MHz"
    ],
    correct: 2,
    explanation: "DDR4-SDRAM 2400 MHz je optimalan izbor — kompatibilan je sa oba uređaja, a radi na maksimalnoj podržanoj frekvenciji (2400 MHz) čime se postižu najbolje performanse.",
    image: "slike/27.png"
  },

  {
    id: 28,
    category: "hardver",
    type: "multiple",
    question: "28. Korisnik je nedavno premestio grafičku karticu sa Računara1 na Računar2. Računar2 radi bez problema pri pregledu e-pošte, ali se isključuje posle par minuta tokom grafički zahtevnih igara. Najverovatniji uzrok problema je:",
    answers: [
      "Snaga napajanja",
      "Video RAM",
      "Frekvencija CPU-a",
      "Rezolucija monitora"
    ],
    correct: 0,
    explanation: "Grafička kartica pod opterećenjem troši mnogo više struje — ako napajanje Računara2 nije dovoljno snažno, računar se gasi.",
    image: ""
  },

  {
    id: 29,
    category: "hardver",
    type: "multiple",
    question: "29. Kolega prijavljuje da njegov laptop neće da se uključi. Lampica napajanja se pali, a zatim se iznenada gasi. Zamenili ste bateriju i laptop se uključuje. Sledećeg jutra isti problem. Konstatujete da je najverovatnije:",
    answers: [
      "Oštećen AC adapter",
      "Neispravno postavljena RAM memorija",
      "Ventilator za hlađenje ne radi",
      "Čvrst disk je neispravan"
    ],
    correct: 0,
    explanation: "Ako laptop radi samo na novoj bateriji a sutradan je opet prazan, znači da AC adapter ne puni bateriju — adapter je neispravan.",
    image: ""
  },

  {
    id: 30,
    category: "hardver",
    type: "multi",
    question: "30. Portovi koji omogućavaju prenos i video i audio signala su: (izaberi sve tačne odgovore)",
    answers: [
      "HDMI",
      "VGA",
      "DVI",
      "S-video"
    ],
    correct: [0, 2],
    explanation: "HDMI (High-Definition Multimedia Interface) prenosi i digitalni video i audio signal kroz jedan kabl. VGA prenosi samo analogni video, DVI samo video, S-video samo analogni video signal. ***Na prirucniku kaze da je i DVI",
    image: ""
  },

  {
    id: 31,
    category: "hardver",
    type: "multi",
    question: "31. Tipovi konektora koji se mogu upotrebiti za povezivanje eksternog skladišnog prostora na računar su: (izaberi sve tačne odgovore)",
    answers: [
      "Thunderbolt",
      "SATA",
      "eSATA",
      "DVI",
      "HDMI"
    ],
    correct: [0, 2],
    explanation: "Thunderbolt i eSATA su standardni konektori za eksterni skladišni prostor. SATA je interni standard, DVI i HDMI su video interfejsi.",
    image: ""
  },

  {
    id: 32,
    category: "hardver",
    type: "multi",
    question: "32. Formati matičnih ploča koji su se koristili od početka sklapanja računarskih konfiguracija do danas: (izaberi sve tačne odgovore)",
    answers: [
      "Mini IBM",
      "ATX",
      "LPX",
      "IBM-X",
      "WDX"
    ],
    correct: [1, 2],
    explanation: "ATX i LPX su realni standardni formati matičnih ploča. Mini IBM, IBM-X i WDX nisu standardni formati koji su se koristili u istoriji PC računara.",
    image: ""
  },

  {
    id: 33,
    category: "hardver",
    type: "multiple",
    question: "33. Laptop se isključio bez struje, ostao bez ikakvih indikatora napajanja. Korisnik nije proverio da li se baterija puni. Postupak otkrivanja uzroka problema započinjete:",
    answers: [
      "Prijavom problema nadležnom servisu",
      "Pretpostavkom da je otkazao hard disk",
      "Pretpostavkom da je otkazao punjač baterije",
      "Priključenjem punjača drugog laptopa"
    ],
    correct: 3,
    explanation: "Priključivanjem punjača drugog laptopa brzo se proverava da li je problem u punjaču ili u bateriji/laptopa — to je najbrži dijagnostički korak.",
    image: ""
  },

  {
    id: 34,
    category: "hardver",
    type: "multi",
    question: "34. Korisnik prijavljuje problem sa Cat 5 kablom koji gubi vezu kada se pomera. Da biste rešili problem upotrebićete: (izaberi sve tačne odgovore)",
    answers: [
      "Makaze",
      "Magnetizovani odvijač",
      "Osciloskop",
      "RJ45 konektor",
      "Klešta za krimovanje"
    ],
    correct: [3, 4],
    explanation: "Prekinuti Cat 5 kabl se popravlja postavljanjem novog RJ45 konektora pomoću klešta za krimovanje — to su jedini alati potrebni za ovaj posao.",
    image: ""
  },

  {
    id: 35,
    category: "hardver",
    type: "multi",
    question: "35. PCI-E (Peripheral Component Interconnect Express) je standard magistrale za proširenje računara. Koje od navedenih tvrdnji su tačne? (izaberi sve tačne odgovore)",
    answers: [
      "Obezbeđuje serijski prenos podataka",
      "Ima početni radni takt (PCI-E 1.0) 5 GHz",
      "Obezbeđuje paralelni prenos podataka",
      "PCI-E standard može da ima više staza za prenos podataka",
      "Obezbeđuje prenos podataka u polu-dupleksu (Half-duplex)",
      "PCI-E 4.0 standard isključivo se koristi za grafički adapter",
      "Ima početni radni takt (PCI-E 1.0) 2,5 GHz",
      "Obezbeđuje prenos podataka u punom dupleksu (Full-duplex)"
    ],
    correct: [0, 3, 6, 7],
    explanation: "PCI-E koristi serijski prenos podataka u punom dupleksu (Full-duplex), može imati više staza (x1, x4, x8, x16), a početni takt PCI-E 1.0 je 2,5 GHz.",
    image: ""
  },

  {
    id: 36,
    category: "hardver",
    type: "multi",
    question: "36. Označiti funkcije upravljačke jedinice procesora: (izaberi sve tačne odgovore)",
    answers: [
      "Obrađuje podatke aritmetički",
      "Upravljanje čitanjem i upisom u operativnu memoriju",
      "Upravljanje izvršnim instrukcijama RAM memorije",
      "Upravljanje radom aritmetičko-logičke jedinice",
      "Saopštava okolini rezultate dobijene izvršenjem programa",
      "Upravljanje razmenom informacija između operativne memorije i aritmetičko-logičke jedinice"
    ],
    correct: [1, 3, 5],
    explanation: "Upravljačka jedinica (CU) upravlja čitanjem/upisom u memoriju, radom ALU i razmenom informacija između memorije i ALU. Aritmetičke operacije izvršava ALU, a saopštavanje rezultata je uloga izlaznih uređaja.",
    image: ""
  },

  {
    id: 37,
    category: "hardver",
    type: "multi",
    question: "37. Da biste saznali koju matičnu ploču posedujete, koristite neke od navedenih mogućnosti: (izaberi sve tačne odgovore)",
    answers: [
      "U SEARCH, uneti komandu: motherboard",
      "U RUN, uneti komandu: msinfo32",
      "Pročitati na kućištu računara informacije o modelu matične ploče",
      "Koristeći karakteristike (properties) 'This PC' ikone na desktopu",
      "Koristeći neki od besplatnih programa poput CPU-Z",
      "U command prompt-u uneti komandu: wmic baseboard get product,Manufacturer,version,serialnumber"
    ],
    correct: [1, 4, 5],
    explanation: "msinfo32, CPU-Z i wmic baseboard komanda su pouzdani načini da saznate informacije o matičnoj ploči. SEARCH sa 'motherboard', Properties This PC i natpis na kućištu ne daju uvek tačne podatke.",
    image: ""
  },
  
  // ── 38 (Hardver – matching) ─────────────────────────────────────
  {
    id: 38,
    category: "hardver",
    type: "matching",
    question: "38. Poveži svaku grupu tastera na tastaturi sa odgovarajućim primerima tastera iz te grupe:",
    pairs: [
      { left: "Alfanumerički tasteri", right: "1, 7, A, H, f" },
      { left: "Funkcijski tasteri",    right: "F3, F5, F12" },
      { left: "Kontrolni tasteri",     right: "Ctrl, Fn, Alt" },
      { left: "Tasteri za navigaciju", right: "Strelica levo, Strelica gore" }
    ],
    correct: [],
    explanation: "Alfanumerički tasteri obuhvataju slova i brojeve. Funkcijski su F1-F12. Kontrolni tasteri (Ctrl, Alt, Fn) se koriste u kombinaciji sa drugim tasterima za zadavanje komandi. Tasteri za navigaciju služe za kretanje (strelice, Home, End).",
    image: ""
  },

  // =====================
  // OPERATIVNI SISTEMI (52–151)
  // =====================

  {
    id: 52,
    category: "os",
    type: "multiple",
    question: "52. Prepoznati koji od navedenih primera predstavlja UNC putanju za pristup deljenim resursima na udaljenoj radnoj stanici:",
    answers: [
      "\\\\192.168.0.5\\C$",
      "//192.168.0.5",
      "http://192.168.0.1",
      "ping 192.168.0.1"
    ],
    correct: 0,
    explanation: "UNC (Universal Naming Convention) putanja počinje sa \\\\ i sadrži ime ili IP adresu računara, zatim naziv deljenog resursa (npr. C$).",
    image: ""
  },

  {
    id: 53,
    category: "os",
    type: "multiple",
    question: "53. Korisnik je priključio mobilni telefon na računar i dobio grešku da upravljački program nije uspešno instaliran. Da bi pristupili rešavanju problema upotrebiće:",
    answers: [
      "Component Services",
      "Device Manager",
      "Windows Memory Diagnostics",
      "Data Sources"
    ],
    correct: 1,
    explanation: "Device Manager (Upravljač uređajima) prikazuje sve hardverske uređaje i njihove drajvere — tu se rešavaju problemi sa upravljačkim programima.",
    image: ""
  },

  {
    id: 54,
    category: "os",
    type: "multiple",
    question: "54. \"Flešovanjem\" BIOS/UEFI-a dobija se:",
    answers: [
      "Brži rad računara u celini",
      "Mogućnost korišćenja diskova većih od 4TB",
      "Lepši interfejs i mogućnost upotrebe miša",
      "Mogućnost rada novijih komponenti"
    ],
    correct: 3,
    explanation: "Ažuriranjem (flešovanjem) BIOS-a dobija se podrška za noviji hardver, ispravke grešaka i poboljšana kompatibilnost sa novim komponentama.",
    image: ""
  },

  {
    id: 55,
    category: "os",
    type: "multiple",
    question: "55. Izaberi među ponuđenim komandama onu koja kreira deljeni folder DataShare na folderu C:\\Data, pri čemu grupi Users omogućava Full Control pristup i ograničava broj korisnika na 5:",
    answers: [
      "net share DataShare=\"C:\\Data\" /grant:Users,read /users:5",
      "net share Data=\"C:\\DataShare\" /grant:Users,full /users:5",
      "net share DataShare=\"C:\\Data\" /grant:Users,full control /users:5",
      "net share DataShare=\"C:\\Data\" /grant:Users,full /users:5"
    ],
    correct: 3,
    explanation: "Ispravna sintaksa: net share <naziv>=\"<putanja>\" /grant:<grupa>,full /users:<broj>. Naziv deljene lokacije je DataShare, putanja je C:\\Data.",
    image: ""
  },

  {
    id: 56,
    category: "os",
    type: "multiple",
    question: "56. Izaberi među ponuđenim ugrađenu Windows alatku koja će ti omogućiti enkripciju uređaja za smeštaj podataka:",
    answers: [
      "Sophos",
      "CertainSafe",
      "BitLocker",
      "Endpoint Encryption"
    ],
    correct: 2,
    explanation: "BitLocker je ugrađeni Windows alat za enkripciju celih diskova i particija, dostupan u Pro i Enterprise verzijama Windows-a.",
    image: ""
  },

  {
    id: 57,
    category: "os",
    type: "multiple",
    question: "57. Bezbednosna provera pokazuje da je neke servere moguće pingovati spolja. Izaberi protokol čijim blokiranjem pomoću firewall-a ćete onemogućiti pingovanje servera:",
    answers: [
      "TLS",
      "SNMP",
      "ICMP",
      "ARP"
    ],
    correct: 2,
    explanation: "Ping koristi ICMP (Internet Control Message Protocol) — blokiranjem ICMP paketa na firewall-u onemogućava se pingovanje.",
    image: ""
  },

  {
    id: 58,
    category: "os",
    type: "multiple",
    question: "58. Klijent želi da se njegov Documents folder premesti na drugi hard disk. Da biste to postigli u podešavanjima Documents foldera izabraćete karticu:",
    answers: [
      "General",
      "Sharing",
      "Location",
      "Security"
    ],
    correct: 2,
    explanation: "Na kartici Location u svojstvima korisničkih foldera moguće je promeniti fizičku lokaciju (putanju) gde se folder čuva.",
    image: ""
  },

  {
    id: 59,
    category: "os",
    type: "multiple",
    question: "59. Otpušteni programer pristupa administrativnom panelu kompanije koristeći program koji je tokom razvoja korišćen za testiranje. Taj program predstavlja:",
    answers: [
      "Rootkit",
      "Backdoor",
      "Ransomware",
      "Trapdoor"
    ],
    correct: 3,
    explanation: "Trapdoor (pozadinska kapija za testiranje) je skriveni ulaz u sistem ostavljen tokom razvoja — zloupotrebljava se za neovlašćeni pristup.",
    image: ""
  },

  {
    id: 60,
    category: "os",
    type: "multiple",
    question: "60. Sledeća tvrdnja o karakteristikama UEFI-a nije tačna:",
    answers: [
      "UEFI donosi grafički interfejs",
      "UEFI omogućava brže podizanje operativnog sistema",
      "UEFI omogućava rad diskova većih od 2 TB",
      "UEFI omogućava dual boot"
    ],
    correct: 3,
    explanation: "Dual boot nije ekskluzivna karakteristika UEFI-a — omogućen je i sa starim BIOS-om. Sve ostale navedene karakteristike su ispravne.",
    image: ""
  },

  {
    id: 61,
    category: "os",
    type: "multiple",
    question: "61. Neke matične ploče imaju po dva BIOS-a iz sledećeg razloga:",
    answers: [
      "Ako dođe do kvara jednog da drugi preuzme njegove funkcije",
      "Da bi matična ploča efikasnije radila",
      "Da bi se omogućilo podizanje dva operativna sistema",
      "Da bi se mogao overklokovati računar"
    ],
    correct: 0,
    explanation: "Dual BIOS sistem služi kao rezervni — ako se primarni BIOS ošteti tokom ažuriranja, sekundarni preuzima i vraća sistem u rad.",
    image: ""
  },

  {
    id: 62,
    category: "os",
    type: "multiple",
    question: "62. Defragmentacija SSD diskova preporučuje se iz sledećeg razloga:",
    answers: [
      "Kao deo redovnog održavanja diska",
      "Ne preporučuje se, jer smanjuje životni vek diska",
      "Preporučuje se, jer ubrzava rad diska",
      "Preporučuje se zbog smanjenja potrošnje električne energije"
    ],
    correct: 1,
    explanation: "SSD diskovi nemaju pokretnih delova pa fragmentacija ne utiče na brzinu. Defragmentacija nepotrebno troši cikluse pisanja i skraćuje vek SSD-a.",
    image: ""
  },

  {
    id: 63,
    category: "os",
    type: "multiple",
    question: "63. Oštećene sektore (\"Bad sectors\") hard diska možemo eliminisati tako što:",
    answers: [
      "Prepišemo nove podatke preko njih",
      "Izolujemo sektore, stavimo ih u posebnu skrivenu particiju",
      "Uradimo formatiranje hard diska",
      "Uradimo defragmentaciju hard diska"
    ],
    correct: 1,
    explanation: "Alati poput chkdsk ili Check Disk detektuju loše sektore i označavaju ih kao neupotrebljive kako OS ne bi pokušavao da ih koristi.",
    image: ""
  },

  {
    id: 64,
    category: "os",
    type: "multiple",
    question: "64. U cilju pripreme laboratorije, imate računar bez instaliranog operativnog sistema na kome treba pokrenuti više virtuelnih mašina. Da biste na najbrzhi način kreirali potrebne virtuelne mašine:",
    answers: [
      "Instaliraćete Microsoft Virtual PC jer je besplatan, a potom na njemu gostujući operativni sistem",
      "Instaliraćete hipervizor tipa 1 na hostu i potom instalirati sve potrebne gostujuće operativne sisteme",
      "Instaliraćete hipervizor tipa 2 na hostu i potom instalirati sve potrebne gostujuće operativne sisteme",
      "Instaliraćete gostujući operativni sistem da istovremeno bude i host i gost"
    ],
    correct: 1,
    explanation: "Hipervizor tipa 1 (bare-metal) se instalira direktno na hardver bez OS-a i efikasniji je za serverske okoline sa više VM-ova.",
    image: ""
  },

  {
    id: 65,
    category: "os",
    type: "multiple",
    question: "65. Remote Desktop Connection se realizuje preko sledećeg protokola:",
    answers: [
      "telnet",
      "HTTP",
      "DNS",
      "RDP"
    ],
    correct: 3,
    explanation: "RDP (Remote Desktop Protocol) je Microsoftov protokol koji se koristi za udaljenu kontrolu računara grafičkim interfejsom.",
    image: ""
  },

  {
    id: 66,
    category: "os",
    type: "multiple",
    question: "66. Pošiljalac koji želi da pošalje elektronski dokument mejlom sa garantovanom autentičnošću pošiljaoca, integritetom poruke i nemogućnošću poricanja odgovornosti, primenjiće:",
    answers: [
      "Odloženo slanje u vreme posle ponoći",
      "Proveru dokumenta antivirus programom",
      "Digitalni potpis na elektronski dokument",
      "Kompresiju dokumenta rarovanjem",
      "Slanje nepromenjenog dokumenta mejlom"
    ],
    correct: 2,
    explanation: "Digitalni potpis garantuje autentičnost pošiljaoca, integritet sadržaja i neopovrgljivost (non-repudiation) — pošiljalac ne može negirati slanje.",
    image: ""
  },

  {
    id: 67,
    category: "os",
    type: "multiple",
    question: "67. Kada korisnik razmišlja o pravljenju rezervnih kopija (bekapa) poznato mu je:",
    answers: [
      "Bezbedan bekap je skup, ali je gubitak podataka još skuplji",
      "Svaki tip bekapa je besplatan i može da se izabere po želji",
      "Hardver računara je dovoljno pouzdan i bekap ne mora da se konfiguriše"
    ],
    correct: 0,
    explanation: "Bekap može biti skup, ali je gubitak poslovnih podataka uvek skupljI — zato se bekap smatra neophodnom investicijom.",
    image: ""
  },

  {
    id: 68,
    category: "os",
    type: "multiple",
    question: "68. Asimetrični sistemi za enkripciju koriste:",
    answers: [
      "AES algoritam",
      "DES algoritam",
      "RSA algoritam"
    ],
    correct: 2,
    explanation: "RSA je najpoznatiji asimetrični algoritam koji koristi par ključeva — javni za enkripciju i privatni za dekripciju.",
    image: ""
  },

  {
    id: 69,
    category: "os",
    type: "multiple",
    question: "69. Proces provere da li je korisniku koji poseduje korisničko ime i lozinku potvrđen identitet koji omogućava pristup sistemu, naziva se:",
    answers: [
      "Autentifikacija",
      "Autorizacija",
      "Logovanje"
    ],
    correct: 0,
    explanation: "Autentifikacija je proces verifikacije identiteta korisnika (ko si ti?). Autorizacija je sledeći korak — šta smeš da radiš.",
    image: ""
  },

  {
    id: 70,
    category: "os",
    type: "multiple",
    question: "70. Podešavanje kvota za disk E (limit 450MB, upozorenje 400MB) za korisnika znači:",
    answers: [
      "Ako premaši 400MB sistem će upisati događaj o prekoračenju nivoa upozorenja",
      "Ako iskoristi više od 400MB biće upozoren da je dostigao nivo upozorenja",
      "Ako premaši 400MB korisnik neće moći na dalje da snima nove fajlove",
      "Ako premaši 450MB korisnik neće moći na dalje da snima nove fajlove"
    ],
    correct: 1,
    explanation: "Tvrda kvota (hard limit) od 450MB znači da korisnik ne može snimati nove fajlove kada prekorači taj limit. Na 400MB sistem beleži upozorenje ali korisnik još uvek može pisati.",
    image: "slike/70.png"
  },

  {
    id: 71,
    category: "os",
    type: "multiple",
    question: "71. Navesti rutinu (program) koji čita disk uređaje i traži ispravan glavni sektor za podizanje sistema:",
    answers: [
      "Samotestiranje po uključenju (Power On Self Test - POST)",
      "Bootstrap loader",
      "SETUP",
      "BIOS (Basic Input/Output System)"
    ],
    correct: 1,
    explanation: "Bootstrap loader je rutina koja traži MBR (Master Boot Record) na diskovima i učitava bootloader operativnog sistema.",
    image: ""
  },

  {
    id: 72,
    category: "os",
    type: "multiple",
    question: "72. Maksimalan broj primarnih particija koji se može kreirati na jednom hard disku sa MBR (Master Boot Record) tabelom je:",
    answers: [
      "Jedna",
      "Dve",
      "Tri",
      "Četiri",
      "Pet"
    ],
    correct: 3,
    explanation: "MBR standard dozvoljava maksimalno 4 primarne particije. Ako treba više, jedna može biti proširena (extended) sa logičkim particijama.",
    image: ""
  },

  {
    id: 73,
    category: "os",
    type: "multiple",
    question: "73. Pomoćni program Windows operativnog sistema koji identifikuje sadržaj koji može biti obrisan u cilju povećanja slobodnog prostora na hard disku zove se:",
    answers: [
      "Check Disk",
      "Disk Defragmenter",
      "Disk Manager",
      "Disk Cleanup"
    ],
    correct: 3,
    explanation: "Disk Cleanup (čišćenje diska) analizira disk i predlaže brisanje privremenih fajlova, keša, korpe i sl. radi oslobađanja prostora.",
    image: ""
  },

  {
    id: 74,
    category: "os",
    type: "multiple",
    question: "74. Vi ste mrežni administrator. Jedan od korisnika misli da ima problem sa mrežnom karticom. Alat koji možete koristiti da vidite da li hardver radi ispravno je:",
    answers: [
      "Device Hardware Utility",
      "Manage Hardware Utility",
      "Device Manager",
      "Device Configuration"
    ],
    correct: 2,
    explanation: "Device Manager prikazuje status svih hardverskih uređaja — žuti uzvičnik ili crveni X ukazuje na problem sa uređajem ili drajverom.",
    image: ""
  },

  {
    id: 75,
    category: "os",
    type: "multiple",
    question: "75. Vi ste mrežni administrator. Instalirali ste novi upravljački program za mrežne adaptere. Nakon instalacije zaposleni imaju problem sa mrežnom karticom. Alat koji možete koristiti da rešite ovaj problem je:",
    answers: [
      "Driver Repair Utility",
      "Driver Rollback",
      "Povratak na prethodni upravljački program",
      "Reverse Driver Application",
      "Windows Driver Compatibility tool"
    ],
    correct: 2,
    explanation: "U Device Manager-u, opcija Roll Back Driver vraća prethodni drajver koji je radio ispravno — idealno kada novi drajver pravi probleme.",
    image: ""
  },

  {
    id: 76,
    category: "os",
    type: "multiple",
    question: "76. Vi ste mrežni administrator male kompanije. Pre nego što izvršite bilo kakve promene na računaru, želite da kreirate tačku povratka (Restore Point). Ručno kreiranje tačke vraćanja moguće je:",
    answers: [
      "Korišćenjem System Restore utility",
      "Korišćenjem System Properties na kartici System Protection",
      "Korišćenjem System Configuration utility",
      "Korišćenjem Startup Repair tool"
    ],
    correct: 1,
    explanation: "Restore Point se kreira u System Properties > System Protection > Create. Ovo je standardni način ručnog pravljenja tačke vraćanja.",
    image: ""
  },

  {
    id: 77,
    category: "os",
    type: "multiple",
    question: "77. Na slici je prikazan međukorak prilikom kreiranja particije na Disk0-u. Novoj particiji može da se pridruži latinično slovo engleskog alfabeta:",
    answers: [
      "Bilo koje slovo od A do Z",
      "Samo slovo E kako je prikazano",
      "Ne sme slovo C, sva ostala slova mogu",
      "Ne smeju C i D, sva ostala slova mogu"
    ],
    correct: 3,
    explanation: "Slova C i D su rezervisana — C za sistemsku particiju, D često za recovery particiju. Sve ostale particije mogu dobiti bilo koje preostalo slovo.",
    image: "slike/77.png"
  },

  {
    id: 78,
    category: "os",
    type: "multiple",
    question: "78. Alat Disk Management moguće je pokrenuti tako što se u komandnoj liniji upiše:",
    answers: [
      "Diskmanagement.mcs",
      "Diskmgmt.msc",
      "Diskmanagement.msc",
      "Diskmgmt.mcs"
    ],
    correct: 1,
    explanation: "Tačna komanda je diskmgmt.msc — pokretanjem u Run (Win+R) otvara se grafički alat za upravljanje diskovima i particijama.",
    image: ""
  },

  {
    id: 79,
    category: "os",
    type: "multiple",
    question: "79. Kapacitet memorijskog prostora od 32GB isti je kao i memorijski prostor od:",
    answers: [
      "3200 MB",
      "32000 MB",
      "32768 MB",
      "33536 MB",
      "32448 MB"
    ],
    correct: 2,
    explanation: "32 GB = 32 × 1024 MB = 32768 MB. Uvek se koristi množenje sa 1024 (ne 1000) za konverziju između binarnih veličina.",
    image: ""
  },

  {
    id: 80,
    category: "os",
    type: "multiple",
    question: "80. Računar koji administrirate ima problema sa povezivanjem na mrežu. Da biste pronašli adresu bilo kog računara sa kojim računar ima aktivnu TCP vezu vi ćete:",
    answers: [
      "Iz Windows Administrative Tools-a, otvorićete Performance Monitor",
      "U Control Panel-u, otvorićete Network and Internet i selektovati Network and Sharing Center",
      "Iz Windows Administrative Tools-a, otvorićete Resource Monitor",
      "Otvorićete Update and Security, izabrati Windows Security i selektovati Firewall and Network protection"
    ],
    correct: 2,
    explanation: "Resource Monitor prikazuje aktivne mrežne konekcije i TCP adrese — kartica Network sadrži sve aktivne TCP veze.",
    image: ""
  },

  {
    id: 81,
    category: "os",
    type: "multiple",
    question: "81. Glavna funkcija veb servera je:",
    answers: [
      "Čuvanje datoteka i kontrola pristupa korisnika",
      "Podešavanje ličnih poštanskih sandučića i kalendara",
      "Dodela IP adresa i usluga štampanja",
      "Hostovanje početnih stranica i poslovnih portala"
    ],
    correct: 3,
    explanation: "Veb server (Apache, IIS, Nginx) prima HTTP/HTTPS zahteve klijenata i isporučuje veb stranice i sadržaj — hostuje portale i sajtove.",
    image: ""
  },

  {
    id: 82,
    category: "os",
    type: "multiple",
    question: "82. Podešavate računar sa dva OS (Windows 11 i Windows 10) na posebnim particijama. Da biste obezbedili da se podrazumevano uvek pokreće Windows 11:",
    answers: [
      "Pokrenućete program Bcdedit.exe sa opcijom /default",
      "Pokrenućete program Bcdedit.exe sa opcijom /bootcd",
      "Kreiraćete Boot.ini fajl na korenskom direktorijumu Windows 10 particije",
      "Kreiraćete Boot.ini fajl na korenskom direktorijumu Windows 7 particije"
    ],
    correct: 0,
    explanation: "bcdedit /default {ID} postavlja podrazumevani OS koji se učitava pri pokretanju. Koristi se za upravljanje boot konfiguracionim podacima.",
    image: ""
  },

  {
    id: 83,
    category: "os",
    type: "multiple",
    question: "83. Firma je zaposlila 3 nova radnika na određeno vreme. Kreirali ste korisničke naloge i učlanili ih u grupu Pripravnici. Želite da niko od njih ne može da koristi više od 2 GB prostora na D disku. Da biste to postigli potrebno je da definišete:",
    answers: [
      "Meku kvotu diska od 2 GB za grupu Pripravnici",
      "Čvrstu kvotu diska od 2 GB za grupu Pripravnici",
      "Meku kvotu diska od 6 GB za grupu Pripravnici",
      "Čvrstu kvotu diska od 6 GB za grupu Pripravnici",
      "Meku kvotu diska od 2 GB za svakog korisnika",
      "Čvrstu kvotu diska od 2 GB za svakog korisnika"
    ],
    correct: 5,
    explanation: "Kvote se postavljaju po korisniku (ne po grupi). Čvrsta kvota sprečava dalji upis kada se dostigne limit — 2 GB po korisniku.",
    image: ""
  },

  {
    id: 84,
    category: "os",
    type: "multiple",
    question: "84. Grupi Menadzeri dodelili ste Full Control NTFS dozvolu za datoteku C:\\Documents\\Projekti.doc. Premestili ste ovu datoteku u direktorijum C:\\Poverljivo, gde je grupi Menadzeri dodeljena Read dozvola. Efektivna dozvola korisnika Marko (član grupe Menadzeri) nad ovom datotekom je:",
    answers: [
      "Full Control",
      "Modify",
      "Read",
      "Write"
    ],
    correct: 0,
    explanation: "Datoteka je premeštena unutar ISTOG diska — NTFS dozvole na samoj datoteci (Full Control) se ČUVAJU. Samo kopiranje ili premeštanje na drugu particiju uzrokuje nasleđivanje novih dozvola.",
    image: ""
  },

  {
    id: 85,
    category: "os",
    type: "multiple",
    question: "85. Računar koji administrirate ima instaliran Windows OS i konfigurisani štampač sa imenom Printer1. Da biste pristupili podešavanjima tog štampača sa drugog računara u mreži koristićete:",
    answers: [
      "Device Manager iz Control Panel-a",
      "Print Management iz Administrative Tools-a",
      "Printers & scanners iz Setting app",
      "Devices and Printers iz Control Panel-a"
    ],
    correct: 1,
    explanation: "Print Management (Administrative Tools) omogućava centralizovano upravljanje svim štampačima u mreži, uključujući udaljene uređaje.",
    image: ""
  },

  {
    id: 86,
    category: "os",
    type: "multiple",
    question: "86. Nakon najnovijeg ažuriranja za Windows, PDF datoteke se otvaraju u Microsoft Edge umesto u Adobe Reader. Da biste obezbedili otvaranje svih PDF datoteka u Adobe Reader koristićete:",
    answers: [
      "Network and Sharing Center",
      "Programs and Features",
      "Default Apps",
      "Add or Remove Program"
    ],
    correct: 2,
    explanation: "U podešavanjima Default Apps (Podrazumevane aplikacije) bira se koja aplikacija otvara određeni tip datoteke — tu se menja PDF reader.",
    image: ""
  },

  {
    id: 87,
    category: "os",
    type: "multiple",
    question: "87. Otvarate Disk Management i vidite da je disk 0 potpuno zauzet. Da biste kreirali novu particiju na disku 0:",
    answers: [
      "Smanjićete volumen C",
      "Kompresovati ćete volumen C",
      "Konvertovati ćete Disk 0 u dinamički disk",
      "Kreiraćete i inicijalizovati virtuelni hard disk (VHD)"
    ],
    correct: 0,
    explanation: "Opcija 'Shrink Volume' (Smanji volumen) u Disk Management-u smanjuje veličinu postojeće particije i oslobađa nealokovani prostor za kreiranje nove particije.",
    image: "slike/87.png"
  },

  {
    id: 88,
    category: "os",
    type: "multiple",
    question: "88. Korisnik više ne može da koristi određene lokalno povezane uređaje nakon ažuriranja Windows OS-a, a ponovnim pokretanjem nije rešen problem. Da biste rešili problem vi ćete:",
    answers: [
      "Onemogućiti uslugu Windows Update",
      "Proveriti da li postoje ažuriranja",
      "Obnoviti skrivena ažuriranja",
      "Vratiti ažuriranja u prethodno stanje"
    ],
    correct: 3,
    explanation: "Ako novo ažuriranje pokvari drajvere, rešenje je vraćanje (uninstall) problematičnog ažuriranja kroz Settings > Windows Update > View update history.",
    image: ""
  },

  {
    id: 89,
    category: "os",
    type: "multiple",
    question: "89. Želite da napravite novi simple volumen na novom nelociranom prostoru na disku, ali u Disk Management-u možete samo da napravite novu particiju. Zaključujete da ne možete da izvršite zadatak jer:",
    answers: [
      "Disk ima loše sektore",
      "Disk je osnovni, a ne dinamički",
      "Disk ima manje od 32 GB nelociranog prostora",
      "Na disku se nalaze šifrirani podaci"
    ],
    correct: 1,
    explanation: "Simple, spanned i striped volumeni zahtevaju dinamičke diskove. Osnovni (basic) diskovi podržavaju samo standardne particije.",
    image: ""
  },

  {
    id: 90,
    category: "os",
    type: "multiple",
    question: "90. Mrežni adapter je konfigurisan sa IP 172.30.30.5, SM 255.255.255.0 i DG prazno. Mrežnim kablom je spojen na svič. U mreži ne postoji DHCP server. Mrežni adapter će dobiti sledeću IP adresu:",
    answers: [
      "169.254.218.132",
      "0.0.0.0",
      "192.168.0.10",
      "172.30.30.5",
      "172.30.30.60"
    ],
    correct: 3,
    explanation: "Pošto je statička IP adresa ručno podešena (172.30.30.5), adapter će koristiti tu adresu bez obzira na odsustvo DHCP servera. APIPA (169.254.x.x) se dodeljuje samo kada DHCP nije dostupan a adresa nije ručno podešena.",
    image: "slike/90.png"
  },

  {
    id: 91,
    category: "os",
    type: "multiple",
    question: "91. Na jednoj Windows radnoj stanici sumnjate na postojanje malicioznog softvera koji je dodao stavku u servise koji se startuju pri pokretanju OS-a. Alatka koja će vam pomoći da proverite svoju pretpostavku je:",
    answers: [
      "chkdsk",
      "msconfig",
      "dxdiag",
      "regsvr32"
    ],
    correct: 1,
    explanation: "msconfig (System Configuration) prikazuje servise i programe koji se pokreću pri startu sistema — idealno za otkrivanje neželjenih unosa.",
    image: ""
  },

  {
    id: 92,
    category: "os",
    type: "multiple",
    question: "92. Na Linux radnoj stanici treba vratiti sadržaj backup-a iz datoteke pod2022.tar.gz koja se nalazi u ~/backup. Sadržaj treba u folderu ~/podaci. Odzvivnik trenutno pokazuje pera@pc01:~/backup. Tačna komanda je:",
    answers: [
      "tar -xzvf /home/pera/backup/pod2022.tar.gz -c /home/pera/podaci",
      "tar -xzvf pod2022.tar.gz -C ../podaci",
      "tar -xzfv pod2022.tar.gz -c podaci",
      "tar -xzfv /pod2022.tar.gz -C /podaci"
    ],
    correct: 1,
    explanation: "Opcija -C specificira odredišni direktorijum. Pošto smo u ~/backup, a ciljamo ~/podaci, relativna putanja je ../podaci. Fajl pod2022.tar.gz je u tekućem direktorijumu.",
    image: ""
  },

  {
    id: 93,
    category: "os",
    type: "multiple",
    question: "93. DHCP server je dodelio PC1 adresu IP: 10.10.100.1, SM: 255.255.255.0, DG: 10.10.100.101, DNS: 8.8.8.8. Korisnik sa PC1 ne može da pristupi internetu. Da bi PC1 imao izlaz na internet potrebno je:",
    answers: [
      "Promeniti adresu interfejsa Fa0/0 na ruteru",
      "Kontaktirati internet servis provajdera jer je kvar van LAN mreže",
      "Promeniti adresu mrežnog adaptera DHCP servera"
    ],
    correct: 0,
    explanation: "Default gateway 10.10.100.101 mora biti dostupan i ispravan. Ako ruter ima pogrešnu adresu na interfejsu koji gleda na LAN, PC1 ne može slati pakete ka internetu.",
    image: "slike/93.png"
  },

  {
    id: 94,
    category: "os",
    type: "multiple",
    question: "94. Korisnik prijavljuje da sa PC1 ne može da pristupi Internetu. Ping do default gateway-a radi, ali ping do 8.8.8.8 ne radi. Da bi se rešio problem potrebno je:",
    answers: [
      "Promeniti adresu default gateway-a na PC1",
      "Promeniti subnet mask na PC1",
      "Promeniti adresu DNS-a na PC1"
    ],
    correct: 2,
    explanation: "Ako ping do IP adrese (8.8.8.8) ne radi ali gateway radi, problem je u DNS razrešavanju ili rutiranju. Treba promeniti adresu DNS servera na PC1 na ispravan DNS.",
    image: "slike/94.png"
  },

  {
    id: 95,
    category: "os",
    type: "multiple",
    question: "95. Fajl veličine 25 KB smešten je na NTFS particiji od 2 TB sa podrazumevanom veličinom klastera. Prostor koji ovaj fajl zauzima na particiji je:",
    answers: [
      "25 KB",
      "26 KB",
      "28 KB",
      "30 KB",
      "32 KB"
    ],
    correct: 2,
    explanation: "Na NTFS particiji do 2TB podrazumevana veličina klastera je 4KB. Fajl od 25KB zahteva 7 klastera (7×4KB=28KB), jer 6 klastera (24KB) nije dovoljno.",
    image: ""
  },

  {
    id: 96,
    category: "os",
    type: "multiple",
    question: "96. Definisati stavku kojom ćete korisnike sprečiti da više puta uzastopno pokušavaju da se prijave sa pogrešnim imenom i/ili lozinkom:",
    answers: [
      "Password policy",
      "Security policy",
      "Account lockout policy",
      "Account lockout options",
      "Audit policy"
    ],
    correct: 2,
    explanation: "Account lockout policy definiše koliko neuspelih pokušaja prijave je dozvoljeno pre nego što se nalog zaključa na određeno vreme.",
    image: ""
  },

  {
    id: 97,
    category: "os",
    type: "multiple",
    question: "97. Dragan je podneo ostavku, a Petar zauzima njegovo mesto. Petru želite da omogućite pristup istim resursima koji su bili na raspolaganju Draganu. Ova tranzicija se najelengantnijje može realizovati tako što ćete:",
    answers: [
      "Kopirati Draganov korisnički nalog, pa kopiranom nalogu dati ime Petar",
      "Otvoriti Windows Registry, u njemu potražiti sve podatke unesene pod imenom Dragan i zameniti ih imenom Petar",
      "Preuzeti vlasništvo nad svim Draganovim resursima, pa zatim Petru dodeliti Full Control",
      "Preimenovati Draganov korisnički nalog na nalog koji će koristiti Petar"
    ],
    correct: 3,
    explanation: "Preimenovanjem naloga zadržavaju se sve grupe, dozvole i SID (Security Identifier) — Petar automatski dobija iste pristupe kao Dragan.",
    image: ""
  },

  {
    id: 98,
    category: "os",
    type: "multiple",
    question: "98. Milan je član grupe PRODAJA koja ima Full Control za zajednički direktorijum PRODAJA. Pored toga, Milan ima individualnu dozvolu Read za ovaj direktorijum. Ipak, kada pokušava da pristupi, dobija poruku da mu je pristup zabranjen. Za rešenje ovog problema:",
    answers: [
      "Treba izbrisati Milanove individualne dozvole za direktorijum PRODAJA",
      "Milanu treba dodeliti odgovarajuću dozvolu za Full Control pristup",
      "Treba proveriti da li je Milan član neke od grupa kojoj je eksplicitno ukinuta dozvola za pristup direktorijumu PRODAJA",
      "Treba obrisati sve dozvole dodeljene grupi PRODAJA, pa ih ponovo dodeliti"
    ],
    correct: 2,
    explanation: "Explicit Deny (zabrana) uvek ima prioritet nad Allow (dozvolom). Treba proveriti da li Milan pripada grupi kojoj je deny postavljen za ovaj folder.",
    image: ""
  },

  {
    id: 100,
    category: "os",
    type: "multiple",
    question: "100. Kupili ste računar sa Windows OS-om i želite da napravite rezervnu kopiju sistema. Da biste mogli da vratite datoteke i prethodna podešavanja u slučaju nepredviđenog događaja, potrebno je da:",
    answers: [
      "Napravite rezervnu kopiju vaših datoteka korišćenjem dugmeta Back Up Files u Backup And Restore Center",
      "Napravite sliku (image) svog računara koristeći Create a system image u Backup And Restore prozoru",
      "Napravite sliku (image) svog računara koristeći System Repair tool",
      "Napravite prethodnu verziju datoteka koristeći Shadow Copies"
    ],
    correct: 1,
    explanation: "System image (slika sistema) je kompletan snimak celog OS-a, instaliranih aplikacija i podešavanja — jedina opcija za potpuni oporavak.",
    image: ""
  },

  {
    id: 101,
    category: "os",
    type: "multiple",
    question: "101. Korisnik želi da spreči druge da pristupe bežičnoj mreži kod kuće, a ne želi da pamti komplikovanu lozinku i ima mali broj uređaja. Da biste ispunili korisnikove zahteve vi ćete:",
    answers: [
      "Omogućiti MAC filtering",
      "Onemogućite SSID broadcast",
      "Dodeliti statičke IP adrese",
      "Isključiti Content filtering"
    ],
    correct: 0,
    explanation: "MAC filtering dozvoljava pristup mreži samo uređajima čija je MAC adresa na listi — nema potrebe za lozinkom, a mreža ostaje zaštićena.",
    image: ""
  },

  {
    id: 102,
    category: "os",
    type: "multiple",
    question: "102. Štampač Xerox Phaser 2030 treba prebaciti u drugi deo zgrade i koristiti kao bežični štampač. Štampač je priključen na napajanje i uključen. Da bi bio funkcionalan potrebno je:",
    answers: [
      "Instalirati drajver bez povezivanja kabla za prenos podataka jer će se štampač koristiti preko bežične veze",
      "Povezati kabl za prenos podataka između računara i štampača, instalirati drajver i podesiti ga da obezbedi bežičnu vezu sa računarom",
      "Isključiti štampač, drajver može da se instalira i kada nije uključen štampač jer se prilikoma instalacije drajvera neće koristiti"
    ],
    correct: 1,
    explanation: "Za inicijalno podešavanje bežičnog štampača potrebno je privremeno ga fizički povezati na računar kablom, instalirati drajver, konfigurisati WiFi parametre, a potom odspojiti kabl.",
    image: ""
  },

  {
    id: 103,
    category: "os",
    type: "multiple",
    question: "103. Od nadređenog ste dobili uputstvo da ovom računaru (koji ima podešen Default Gateway) omogućite da komunicira samo u okviru lokalne mreže. Da biste ovo postigli vi ćete:",
    answers: [
      "Izbrisati podešavanja za mrežni prolaz",
      "Izbrisati podešavanja za primarni DNS server",
      "Promeniti mrežnu masku na 255.255.255.0",
      "Promeniti mrežnu masku na 255.255.255.192"
    ],
    correct: 0,
    explanation: "Default Gateway (mrežni prolaz) je adresa rutera koji omogućava komunikaciju sa spoljnim mrežama. Brisanjem gateway adrese računar može komunicirati samo unutar lokalne mreže.",
    image: "slike/103.png"
  },

  {
    id: 104,
    category: "os",
    type: "multiple",
    question: "104. Korisnik je član sledećih grupa sa odgovarajućim dozvolama za deljeni direktorijum (vidite sliku). Efektivne dozvole u pogledu pristupa deljenom direktorijumu su:",
    answers: [
      "Full Control",
      "Read only",
      "Change",
      "Read and Write",
      "Modify"
    ],
    correct: 2,
    explanation: "Pri kombinovanju mrežnih (sharing) dozvola, efektivna dozvola je unija dozvola svih grupa korisnika — ali ograničena najrestriktivnijom kombinacijom sharing i NTFS dozvola. U ovom slučaju Change je efektivna dozvola.",
    image: "slike/104.png"
  },

  {
    id: 106,
    category: "os",
    type: "multiple",
    question: "106. Radnik Milan Marković na svom računaru PC1 koristi korisničko ime milan koji je član grupe Nastavnici. Za folder zadaci podešene su određene dozvole. Kada Milan sa DRUGOG računara pokuša da pristupi folderu zadaci, Milan:",
    answers: [
      "Će moći da otvori folder i menja sadržaj foldera",
      "Neće moći da otvori folder",
      "Će moći da otvori, ali neće moći da menja sadržaj foldera"
    ],
    correct: 2,
    explanation: "Pristup sa drugog računara podrazumeva mrežni pristup (sharing dozvole). Ako su NTFS dozvole Read za grupu Nastavnici, Milan može otvoriti ali ne i menjati sadržaj.",
    image: "slike/106.png"
  },

  {
    id: 107,
    category: "os",
    type: "multiple",
    question: "107. PC1 i PC2 su u mreži. Ping sa PC1 na PC2 je uspešan. Ping sa PC2 na PC1 nije uspešan (Request timed out za sva 4 paketa). Uzrok tome što ne radi ping sa PC2 na PC1 je:",
    answers: [
      "Unutar firewall-a na PC1 je konfigurisano pravilo koje blokira ICMP pakete koji dolaze na računar",
      "Mrežni kabl kojim je PC1 povezan na svič je neispravan",
      "IP adrese ovim računarima nisu dobro dodeljene",
      "Unutar firewall-a na PC2 je konfigurisano pravilo koje blokira ICMP pakete koji dolaze na računar",
      "Mrežni kabl kojim je PC2 povezan na svič je neispravan"
    ],
    correct: 0,
    explanation: "Ping sa PC1 na PC2 radi, znači mreža je ispravna. Ping sa PC2 na PC1 ne radi — firewall na PC1 blokira dolazne ICMP pakete. Windows Firewall standardno blokira ping zahteve.",
    image: ""
  },

  {
    id: 108,
    category: "os",
    type: "multiple",
    question: "108. Umesto neispravnog hard diska instalirali ste novi HDD od 2TB. Imate sliku diska napravljenu pre nedelju dana. Da biste uz najmanje truda pokrenuli računar bez gubitka instaliranih aplikacija potrebno je da:",
    answers: [
      "Pokrenete računar pomoću USB diska za oporavak i iskoristite sliku sistema koju ste napravili ranije",
      "Pokrenete računar pomoću USB diska za oporavak i izaberete opciju za reinstalaciju operativnog sistema",
      "Pokrenete računar pomoću USB diska za oporavak i izaberete opciju System Restore"
    ],
    correct: 0,
    explanation: "Vraćanje sistema image-a je najbrži način da se sistem vrati u prethodno stanje sa svim instaliranim aplikacijama i podešavanjima.",
    image: ""
  },

  {
    id: 109,
    category: "os",
    type: "multiple",
    question: "109. Disk D je otkazao i zamenili ste ga. Svakodnevni bekap pravi rezervnu kopiju stanja sistema, svih korisnika, datoteka i disk jedinica. Potrebno je da vratite podatke na disk D uz najmanju moguću intervenciju i minimizujete downtime. Da biste to postigli vi ćete:",
    answers: [
      "Otvoriti Backup and Restore i izabrati opciju Restore all users files",
      "Iz Properties opcije za disk D obnoviti sve prethodne verzije",
      "Otvoriti System Restore i izabrati vraćanje u prethodno stanje",
      "Pokrenete računar sa diska za oporavak sistema i vratite sliku sistema"
    ],
    correct: 3,
    explanation: "Pokretanje sa recovery diska i vraćanje system image-a je jedini način da se obnovi disk D sa svim podacima na njemu u jednom koraku, uz minimalan downtime.",
    image: ""
  },

  {
    id: 110,
    category: "os",
    type: "multiple",
    question: "110. Korisniku User1 (članu grupe Group1) potrebno je konfigurisati dozvole za Folder1 tako da: User1 može da briše sve datoteke, Group1 može da kreira datoteke, ali ostali ne mogu da brišu tuđe fajlove, a niko ne može da menja dozvole. Da biste ovo omogućili:",
    answers: [
      "Dodelite grupi Group1 dozvolu za pisanje. Dodelite korisniku User1 dozvolu za izmenu.",
      "Dodelite grupi Group1 dozvolu za izmenu. Dodelite korisniku User1 dozvolu za pisanje.",
      "Zabraniti grupi Group1 dozvolu za pisanje. Dodelite korisniku User1 dozvolu za izmenu.",
      "Zabraniti grupi Group1 dozvolu za izmenu. Dodelite korisniku User1 dozvolu za pisanje."
    ],
    correct: 0,
    explanation: "Write dozvola za grupu (kreiranje fajlova), Modify za User1 (brisanje svih fajlova). Modify ne uključuje promenu dozvola — to rešava sve zahteve.",
    image: ""
  },

  {
    id: 111,
    category: "os",
    type: "multi",
    question: "111. UEFI (Unified Extensible Firmware Interface): (izaberi sve tačne odgovore)",
    answers: [
      "Ima kraće vreme startovanja računara u odnosu na BIOS",
      "Podržava do 128 particija",
      "Obezbeđuje nepromenjivo skladištenje informacija o pokretanju sistema",
      "Omogućava brisanje i reprogramiranje pojedinih bajtova",
      "Ima mogućnost korišćenja miša",
      "Ne podržava 64-bitne upravljačke programe uređaja",
      "Podržava diskove veće od 2,2 TB"
    ],
    correct: [0, 1, 4, 6],
    explanation: "UEFI ima: kraće vreme starta, podršku za GPT (do 128 particija), grafički interfejs sa mišem i diskove >2,2TB. 64-bitni drajveri su podržani.",
    image: ""
  },

  {
    id: 112,
    category: "os",
    type: "multi",
    question: "112. Kao antivirusni programi mogu da se koriste: (izaberi sve tačne odgovore)",
    answers: [
      "KASPER",
      "NORTON COMMANDER",
      "AVAST",
      "AGV",
      "NOD32"
    ],
    correct: [2, 4],
    explanation: "AVAST i NOD32 (ESET) su legitimni antivirusni programi. KASPER nije puno ime (Kaspersky jeste), NORTON COMMANDER je file manager, AGV nije poznat antivirus (AVG jeste).",
    image: ""
  },

  {
    id: 113,
    category: "os",
    type: "multi",
    question: "113. Prilikom konfigurisanja rezervnog kopiranja (bekapa) podataka na Windows radnoj stanici moguće je odabrati sledeće opcije: (izaberi sve tačne odgovore)",
    answers: [
      "Rezervno kopiranje može da se vrši na disk tog računara ili na disk u mreži",
      "Rezervno kopiranje može da se konfiguriše samo za fajl, ne može za folder",
      "Rezervno kopiranje može da se konfiguriše da se obavlja jednom mesečno",
      "Na radnoj stanici ne može da se konfiguriše rezervno kopiranje, može samo na serveru",
      "Na radnoj stanici ne može da se konfiguriše rezervno kopiranje kompletnog računara"
    ],
    correct: [0, 2],
    explanation: "Windows Backup na radnoj stanici podržava bekap na lokalni ili mrežni disk i zakazivanje (dnevno, nedeljno, mesečno). Može se bekap-ovati i folder i kompletni sistem.",
    image: ""
  },

  {
    id: 114,
    category: "os",
    type: "multi",
    question: "114. Kao medijum za rezervno kopiranje (bekap) treba odabrati: (izaberi sve tačne odgovore)",
    answers: [
      "Lokalni disk računara predviđen samo za bekap",
      "Mrežni disk drugog računara predviđen samo za bekap",
      "Particiju na sistemskom disku računara na kom se radi bekap",
      "Particiju na disku na kom su i podaci koji se bekap-uju"
    ],
    correct: [0, 1],
    explanation: "Bekap treba da bude na odvojenom uređaju od podataka — lokalni disk koji je isključivo za bekap ili mrežni disk. Bekap na isti disk gde su podaci nema smisla jer se oba gube pri kvaru diska.",
    image: ""
  },

  {
    id: 115,
    category: "os",
    type: "multi",
    question: "115. Administrativni deljivi folderi na kraju imena imaju oznaku $ i: (izaberi sve tačne odgovore)",
    answers: [
      "Vidljivi su u svakom prozoru Windows Explorer-a",
      "Vidljivi su u čvoru Shares Computer Management snap-ina",
      "Može im se pristupiti iz Network and Sharing Center",
      "Može im se pristupiti kada se u Run unese UNC (Universal Naming Convention) putanja"
    ],
    correct: [1, 3],
    explanation: "Administrativni deljeni resursi (C$, D$, ADMIN$) su skriveni — ne pojavljuju se u Explorer-u ni Network and Sharing Center-u. Vidljivi su u Computer Management > Shared Folders i dostupni putem UNC putanje.",
    image: ""
  },

  {
    id: 116,
    category: "os",
    type: "multi",
    question: "116. Upravo ste instalirali novi operativni sistem unutar virtuelne mašine. Primećujete da se izvršenje zadataka u operativnom sistemu hosta značajno usporilo. Da biste povećali performanse hosta: (izaberi sve tačne odgovore)",
    answers: [
      "Instaliraćete više fizičke memorije",
      "Povećaćete veličinu virtuelnog čvrstog diska",
      "Zameniće te trenutni program za virtualizaciju nekim drugim",
      "Smanjićete fizičku memoriju dodeljenu virtuelnoj mašini",
      "Obrisaćete privremene datoteke virtuelne mašine",
      "Instaliraćete dodatne fizičke čvrste diskove"
    ],
    correct: [0, 3],
    explanation: "VM usporava host jer troši RAM i CPU. Rešenja: dodati više fizičke RAM-a da host ima dovoljno za sebe, ili smanjiti RAM koji je dodeljen VM-u da host dobije više resursa.",
    image: ""
  },

  {
    id: 117,
    category: "os",
    type: "multi",
    question: "117. Koje od navedenih adresa spadaju u (konvencionalno) privatni opseg IP adresa? (izaberi sve tačne odgovore)",
    answers: [
      "172.32.200.200",
      "10.10.10.1",
      "192.186.0.1",
      "172.16.255.254",
      "192.168.255.254",
      "8.8.8.8"
    ],
    correct: [1, 3, 4],
    explanation: "Privatni opsezi su: 10.0.0.0/8, 172.16.0.0–172.31.255.255/12, 192.168.0.0/16. 172.32.x.x je javna adresa, 192.186.x.x je javna, 8.8.8.8 je Google-ov javni DNS.",
    image: ""
  },

  {
    id: 118,
    category: "os",
    type: "multi",
    question: "118. Iz stanja SPREMAN u stanje SUSPENDOVAN I SPREMAN proces prelazi iz nekog od sledećih razloga: (izaberi sve tačne odgovore)",
    answers: [
      "Prevelik broj spremnih procesa",
      "Kako bi se oslobodila KEŠ memorija",
      "Eksplicitno suspendovanje procesa od strane korisnika",
      "Kako bi se oslobodila radna memorija",
      "Da mu ne bi isteklo dodeljeno procesorsko vreme (time-sharing)"
    ],
    correct: [0, 2],
    explanation: "Proces prelazi u stanje „suspendovan i spreman” kada ima previše spremnih procesa ili kada korisnik ručno suspenduje proces. Tada se proces privremeno uklanja iz memorije dok ne bude ponovo aktiviran.",
    image: ""
  },

  {
    id: 119,
    category: "os",
    type: "multi",
    question: "119. Navedeni su neki od Built-In objekata. Prepoznati koji od navedenih objekata predstavljaju GRUPE: (izaberi sve tačne odgovore)",
    answers: [
      "Administrator",
      "Guest",
      "Administrators",
      "Remote Desktop Users",
      "DefaultAccount",
      "Users"
    ],
    correct: [2, 3, 5],
    explanation: "Administrators, Remote Desktop Users i Users su ugrađene Windows grupe. Administrator, Guest i DefaultAccount su ugrađeni korisnički nalozi.",
    image: ""
  },

  {
    id: 120,
    category: "os",
    type: "multi",
    question: "120. Osobine jezgra operativnog sistema su: (izaberi sve tačne odgovore)",
    answers: [
      "Jezgro ne koristi rutine već ih predaje aplikacijama",
      "U slojevitom modelu jezgro je najbliže hardveru",
      "Deo jezgra su aplikacioni programi koji se izvršavaju",
      "Jezgro određuje kada i na koje vreme će proces dobiti procesor",
      "Deo jezgra su rutine za interprocesnu komunikaciju",
      "U slojevitom modelu jezgro je najbliže aplikacijama"
    ],
    correct: [1, 3, 4],
    explanation: "Jezgro je najbliže hardveru, upravljač procesora (scheduler) koji određuje vreme procesora za svaki proces, i sadrži rutine za komunikaciju između procesa. Aplikacioni programi nisu deo jezgra.",
    image: ""
  },

  {
    id: 121,
    category: "os",
    type: "multi",
    question: "121. Analizom obaveštenja o upotrebi kvota za disk E za korisnika Profesor (limit 100KB, upozorenje 60KB, iskorišćeno 294KB) može se zaključiti: (izaberi sve tačne odgovore)",
    answers: [
      "Kvota nije podešena nad diskom E za korisnika Profesor",
      "Kvota nad diskom E, sa limitom 60 KB, je podešena za korisnika Profesor",
      "Kvota nad diskom E, sa limitom 100 KB, je podešena za korisnika Profesor",
      "Kvota nad diskom E, sa limitom 294 KB, je podešena za korisnika Profesor",
      "Korisniku Profesor nije dozvoljeno upisivanje na disk E ako prekorači limit kvote",
      "Korisniku Profesor je dozvoljeno upisivanje na disk E i kada prekorači limit kvote"
    ],
    correct: [2, 5],
    explanation: "Kvota je na 100KB, ali korisnik je iskoristio 294KB — to znači da je kvota podešena kao 'soft' (meka) i da ne blokira pisanje. Limit je 100KB (ne 60KB koji je samo nivo upozorenja).",
    image: "slike/121.png"
  },

  {
    id: 122,
    category: "os",
    type: "multi",
    question: "122. Na osnovu podataka iz listinga komande ipconfig /all (prikazano na slici), tačno je: (izaberi sve tačne odgovore)",
    answers: [
      "Izlistani su parametri bežičnog mrežnog adaptera",
      "Mrežni adapter je konfigurisan statički",
      "DHCP server i difolt gejtvej su različiti uređaji",
      "DHCP server je mrežnom adapteru dodelio IPv6 adresu",
      "Na mrežnom adapteru omogućen je TCP/IPv6 protokol"
    ],
    correct: [2, 4],
    explanation: "U tipičnom listingu ipconfig /all sa DHCP adresiranjem: DHCP server i default gateway mogu biti različiti uređaji. IPv6 adresa se dodeljuje ako je TCP/IPv6 omogućen.",
    image: "slike/122.png"
  },

  {
  id: 123,
  category: "os",
  type: "multi",
  question: "123. Školski računarski kabinet ima deset računara povezanih u mrežu koja funkcioniše ispravno. Učenici se prijavljuju na ove računare preko lokalnih korisničkih naloga ograničenih privilegija. Za realizaciju vežbe učenicima su potrebni operativni sistemi na koje će se prijaviti preko administratorskog naloga. U tu svrhu kreirane su virtuelne mašine, po jedna radna stanica na svakom računaru u kabinetu. Učenici su konfigurisali virtuelne mašine da testiraju deljenje resursa u mreži ravnopravnih računara. Na virtuelnoj mašini PC-1 kreiran je folder NASTAVA za koji su podešene sledeće dozvole. Testiranjem sa ostalih virtuelnih mašina učenici su ustanovili da deljeni folder nije vidljiv. Mogući uzroci ovog problema su:",
  answers: [
    "Pomoću tih virtuelnih mašina ne može da se realizuje opisana mreža",
    "IP adrese virtuelnih mašina nisu dodeljene tako da pripadaju istoj mreži",
    "Sharing i NTFS dozvole za korisnike nad folderom nisu dobro podešene",
    "Mrežna kartica virtuelnih mašina nije podešena da šalje podatke u fizičku mrežu"
  ],
  correct: [1, 3],
  explanation: "Deljeni folder nije vidljiv zato što virtuelne mašine možda nisu u istoj mreži ili mrežna kartica virtuelne mašine nije pravilno povezana sa fizičkom mrežom. Sharing i NTFS dozvole su pravilno podešene jer Everyone ima Full control za sharing i Read & execute za NTFS.",
  image: ""
},

  {
    id: 124,
    category: "os",
    type: "multi",
    question: "124. Analizom podataka o računaru koji su pokazani na slici može se zaključiti: (izaberi sve tačne odgovore)",
    answers: [
      "Računar koristi UEFI boot loader",
      "Koristi se enkripcija za zaštitu podataka",
      "Računar ima dva hard diska",
      "Računar koristi SSD disk kapaciteta 256GB"
    ],
    correct: [0, 1],
    explanation: "Prisustvo Secure Boot (UEFI karakteristika) i BitLocker (enkripcija) u System Information ukazuje da računar koristi UEFI boot loader i da su podaci enkriptovani.",
    image: "slike/124.png"
  },

  {
    id: 125,
    category: "os",
    type: "multi",
    question: "125. Morate konfigurisati računar Stanica1 da koristi WiFi2 kad god je to moguće, a WiFi1 kada WiFi2 nije dostupan. Da biste to postigli potrebno je da: (izaberi sve tačne odgovore)",
    answers: [
      "U svojstvima za WiFi2, izaberete opciju Connect even if the network is not broadcasting its name (SSID)",
      "U svojstvima za WiFi1, izaberete opciju Connect automatically when this network is in range",
      "U svojstvima za WiFi1, izaberete opciju Enable WLAN connection settings",
      "U svojstvima za WiFi2, izaberete opciju Connect automatically when this network is in range",
      "U svojstvima za WiFi1, izaberete opciju Look for other wireless networks while connected to this network",
      "U svojstvima za WiFi2, izaberete opciju Look for other wireless networks while connected to this network"
    ],
    correct: [3, 4],
    explanation: "WiFi2 treba da se automatski poveže kada je dostupan. WiFi1 treba da traži druge mreže (WiFi2) dok je konektovan na WiFi1, kako bi prešao na WiFi2 čim postane dostupan.",
    image: ""
  },

  // =====================
  // ODRŽAVANJE RAČUNARSKIH SISTEMA (152–200)
  // =====================

  {
    id: 152,
    category: "odrzavanje",
    type: "multiple",
    question: "152. Koristeći programe za testiranje i dijagnostiku hardvera, S.M.A.R.T. tehnologija nam pomaže da utvrdimo neke od problema. Navesti koju od navedenih komponenti možemo nadgledati koristeći ovu tehnologiju:",
    answers: [
      "Operativna memorija",
      "Temperatura grafičke kartice",
      "Hard disk"
    ],
    correct: 2,
    explanation: "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) je ugrađena tehnologija u HDD i SSD diskove za praćenje stanja i predviđanje kvarova.",
    image: ""
  },

  {
    id: 153,
    category: "odrzavanje",
    type: "multiple",
    question: "153. Programe koje koristimo prilikom testiranja kompletnog sistema, nazivamo:",
    answers: [
      "Aplikativni programi",
      "Benchmark programi",
      "Sekvenceri"
    ],
    correct: 1,
    explanation: "Benchmark programi (npr. CineBench, 3DMark, PCMark) mere performanse svih komponenti sistema i daju uporedive rezultate.",
    image: ""
  },

  {
    id: 154,
    category: "odrzavanje",
    type: "multiple",
    question: "154. Ukoliko želimo da korisničkim nalozima u domenu dodelimo grupne polise, potrebno je da te naloge kreiramo u jednom od kontejnera u Active Directory Users and Computers bazi. Te kontejnere nazivamo:",
    answers: [
      "Forest",
      "OU – Organizational Unit",
      "Foreign Security Principals",
      "Computers"
    ],
    correct: 1,
    explanation: "OU (Organizational Unit) su kontejneri u Active Directory-u na koje se primenjuju grupne polise (Group Policy Objects — GPO).",
    image: ""
  },

  {
    id: 155,
    category: "odrzavanje",
    type: "multiple",
    question: "155. Uloga Domain controller servera je da:",
    answers: [
      "Pruži uslugu računarima u mreži da im prevede imena domena u adresu",
      "Pruži uslugu hostinga i zaštite na veb serveru",
      "Upravlja korisničkim nalozima i grupama, uključujući autentifikaciju i autorizaciju korisničkih naloga"
    ],
    correct: 2,
    explanation: "Domain controller (DC) je centralni server u Active Directory domenu koji verifikuje identitete i kontroliše pristup resursima mreže.",
    image: ""
  },

  {
    id: 156,
    category: "odrzavanje",
    type: "multiple",
    question: "156. Windows operativni sistem nudi više alata za praćenje stanja računarskog sistema. Uočen je sporiji rad računara i potrebno je u određenom vremenskom intervalu prikupiti podatke o radu ključnih komponenti radi naknadne analize. Alat koji OS nudi za ove potrebe je:",
    answers: [
      "Resource Monitor",
      "Performance Monitor",
      "Disk Defragmentation"
    ],
    correct: 1,
    explanation: "Performance Monitor (perfmon) omogućava snimanje i analizu performansi (CPU, RAM, disk, mreža) u dužem vremenskom periodu.",
    image: ""
  },

  {
    id: 157,
    category: "odrzavanje",
    type: "multiple",
    question: "157. Planirate da računar sa instaliranim Windows OS-om iskoristite za kreiranje slike koja će se koristiti za instaliranje 100 novih računara. Da biste pripremili računar za kreiranje slike potrebno je da:",
    answers: [
      "Pokrenete Package Manager",
      "Pokrenete uslužni program System Preparation",
      "Instalirate uslužni program User State Migration",
      "Instalirate Windows Automated Installation Kit"
    ],
    correct: 1,
    explanation: "Sysprep (System Preparation Tool) priprema Windows instalaciju za kloniranje — uklanja jedinstvene identifikatore (SID) pre pravljenja slike.",
    image: ""
  },

  {
    id: 158,
    category: "odrzavanje",
    type: "multiple",
    question: "158. Spremate se da instalirate novi upravljački program za mrežnu karticu. Da biste najlakše vratili računar u ispravno stanje, ako upravljački program nije ispravan, koristićete:",
    answers: [
      "Safe Mode",
      "Roll Back Driver",
      "System Restore utility",
      "Startup Repair Tool"
    ],
    correct: 1,
    explanation: "Roll Back Driver u Device Manager-u vraća prethodni (ispravni) drajver jednim klikom — najbrži način oporavka od lošeg drajvera.",
    image: ""
  },

  {
    id: 159,
    category: "odrzavanje",
    type: "multiple",
    question: "159. Servisni paket (service pack) je:",
    answers: [
      "Kolekcija ažuriranja softvera",
      "Oblik špijunskog softvera",
      "Režim napajanja dizajniran da obezbedi napajanje u nuždi tokom nestanka struje",
      "Kolekcija pozadina radne površine, zvukova i tema"
    ],
    correct: 0,
    explanation: "Service Pack je skup kumulativnih ažuriranja (ispravki grešaka, zakrpa bezbednosti) za operativni sistem ili aplikaciju, pakovan u jednu instalaciju.",
    image: ""
  },

  {
    id: 160,
    category: "odrzavanje",
    type: "multiple",
    question: "160. Na računaru postoje instalirana dva operativna sistema Windows 8.1 i Windows 10. Da biste konfigurisali računar da Windows 10 koristi samo 4GB RAM memorije, pokrenućete komandu:",
    answers: [
      "bcdboot.exe",
      "bcdedit.exe",
      "bootcfg.exe",
      "bootim.exe",
      "bootsect.exe",
      "diskpart.exe"
    ],
    correct: 1,
    explanation: "bcdedit.exe (Boot Configuration Data Edit) upravlja boot konfiguracijom i može ograničiti maksimalnu količinu RAM-a za određeni OS unos.",
    image: ""
  },

  {
    id: 161,
    category: "odrzavanje",
    type: "multiple",
    question: "161. Da biste proverili da je rek orman uzemljen koristićete:",
    answers: [
      "Tester kablova",
      "Osciloskop",
      "Multimetar",
      "Voltmetar"
    ],
    correct: 2,
    explanation: "Multimetar u režimu merenja otpora (Ω) može proveriti da li postoji električna veza između kućišta i zaštitnog uzemljenja.",
    image: ""
  },

  {
    id: 162,
    category: "odrzavanje",
    type: "multiple",
    question: "162. Da biste konfigurisali Windows operativni sistem da povremeno i automatski proverava najnoviji drajver za video karticu koristićete:",
    answers: [
      "Device Manager",
      "Windows installer",
      "Programs and Features",
      "Windows Update"
    ],
    correct: 3,
    explanation: "Windows Update može automatski preuzimati i instalirati najnovije drajvere za hardver, uključujući grafičke kartice.",
    image: ""
  },

  {
    id: 163,
    category: "odrzavanje",
    type: "multiple",
    question: "163. Pokrenuli ste zahtevnu aplikaciju i u Performance Monitor-u nadgledate parametar Procesor -> % Processor Time. Proglasićete procesor za usko grlo u sistemu ukoliko je vrednost ovog parametra:",
    answers: [
      "Preko 5%",
      "Preko 50%",
      "Preko 60%",
      "Preko 85%"
    ],
    correct: 3,
    explanation: "Vrednost % Processor Time iznad 85% tokom dužeg perioda ukazuje da je CPU usko grlo — pri kraćim skokovima to je normalno.",
    image: ""
  },

  {
    id: 164,
    category: "odrzavanje",
    type: "multiple",
    question: "164. Da biste uklonili Aktivni direktorijum sa kontrolera domene sa nazivom DC1 potrebno je da:",
    answers: [
      "Pokrenete komandu adRemove DC1",
      "Pokrenete komandu dcpromo i uklonite ulogu Active Directory Domain Services",
      "Pokrenete komandu dsrm /ad: DC1",
      "Resetujete administratorski nalog kontrolera domena u konzoli Active Directory Users and Computers"
    ],
    correct: 1,
    explanation: "dcpromo (Domain Controller Promoter) se koristi za unapređivanje servera u DC i za degradovanje (uklanjanje AD uloge sa DC-a).",
    image: ""
  },

  {
    id: 165,
    category: "odrzavanje",
    type: "multiple",
    question: "165. Preduzeće ima kontroler domene. Korisnik pokušava da se prijavi na domen i dobija poruku: \"This user account has expired.\" Da biste omogućili korisniku da se prijavi na domen:",
    answers: [
      "Izmenite svojstva korisničkog naloga da biste podesili nalog da nikada ne ističe",
      "Izmenite svojstva korisničkog naloga da biste produžili vreme prijave na domen",
      "Izmenite podrazumevanu politiku domena da biste smanjili trajanje zaključanog naloga",
      "Izmenite svojstva korisničkog naloga kako biste podesili da lozinka nikada ne ističe"
    ],
    correct: 0,
    explanation: "Account expiration datum se podešava u svojstvima korisničkog naloga (Account tab) u Active Directory Users and Computers.",
    image: ""
  },

  {
    id: 166,
    category: "odrzavanje",
    type: "multiple",
    question: "166. Zaposleni u programerskoj firmi se žale da imaju problem sa bežičnom mrežom u kantini. Mreža je nepouzdana i veza se gubi. Na drugim mestima radi bez problema. Najverovatniji uzrok problema je:",
    answers: [
      "Mikrotalasna rerna koja postoji u kantini",
      "Bluetooth miš jednog od korisnika",
      "Daljinski upravljač projektora u sali koja se nalazi odmah pored",
      "Mutilica za instant kafu"
    ],
    correct: 0,
    explanation: "Mikrotalasne pećnice rade na frekvenciji od 2.4 GHz — istoj kao WiFi 802.11n — i mogu izazvati značajne smetnje u bežičnoj mreži.",
    image: ""
  },

  {
    id: 167,
    category: "odrzavanje",
    type: "multiple",
    question: "167. Radnik tehničke podrške prima poziv i dok korisnik objašnjava simptome kvara, radnik shvata da zna u čemu je problem. Postupiće pravilno ako uradi sledeće:",
    answers: [
      "Nastaviće da sluša korisnika a kada završi izlaganje, uputiće ga na veb sajt za rešenje problema",
      "Prekinuće korisnika u izlaganju i objasniti mu kako da reši problem",
      "Zamoliće korisnika da mu nekoliko puta ponovi simptome da bi bio siguran",
      "Saslušaće korisnikovo izlaganje do kraja a potom će mu objasniti kako da reši problem"
    ],
    correct: 3,
    explanation: "Profesionalna tehnička podrška zahteva strpljivo saslušavanje klijenta do kraja — prekidanje je neprofesionalno, a dodatne informacije mogu biti relevantne.",
    image: ""
  },

  {
    id: 168,
    category: "odrzavanje",
    type: "multiple",
    question: "168. U preduzeću vršite zamenu starih monitora novim. Zamenjene monitore ćete:",
    answers: [
      "Ostaviti u kontejnere u kojima se odlaže kancelarijski otpad preduzeća",
      "Odvezete monitore na gradsku deponiju smeća",
      "Odnesete monitore u centar za reciklažu",
      "Vratite monitore proizvođaču"
    ],
    correct: 2,
    explanation: "Elektronski otpad (e-waste) sadrži štetne materije i mora se odlagati isključivo u ovlašćenim centrima za reciklažu elektronike.",
    image: ""
  },

  {
    id: 169,
    category: "odrzavanje",
    type: "multiple",
    question: "169. Nakon što je kliknuo na link u elektronskoj poruci, korisnik je dobio sledecu poruku (slika). Da biste rešili problem PRVO ćete:",
    answers: [
      "Ažurirati registre opozvanih sertifikata (Certificate Revocation List - CRL)",
      "Kontaktirati internet provajdera",
      "Ponovo pokrenuti internet pretraživač"
    ],
    correct: 0,
    explanation: "Greška vezana za sertifikat najčešće nastaje kada je CRL (lista opozvanih sertifikata) zastarela. Ažuriranje CRL-a je prvi korak.",
    image: "slike/169.png"
  },

  {
    id: 170,
    category: "odrzavanje",
    type: "multiple",
    question: "170. Da biste osigurali da možete da u potpunosti vratite računar u operativno stanje u slučaju kvara hardvera, vi ćete:",
    answers: [
      "Napraviti disk za oporavak sistema",
      "Napraviti rezervnu kopiju stanja sistema",
      "Napraviti USB disk za oporavak",
      "Napraviti potpunu rezervnu kopiju sistema računara"
    ],
    correct: 3,
    explanation: "Potpuna rezervna kopija (full backup / system image) jedina garantuje potpun oporavak — uključuje OS, aplikacije i sve korisničke podatke.",
    image: ""
  },

  {
    id: 171,
    category: "odrzavanje",
    type: "multiple",
    question: "171. Korisnik vam donosi stariji laptop i prijavljuje probleme sa tastaturom — mnoga pritiskanja tastera se ne registruju, ali laptop radi dobro sa spoljnom tastaturom. Da biste otklonili problem:",
    answers: [
      "Onemogućićete opciju Sticky keys",
      "Očistićete tastaturu",
      "Vratićete BIOS na početna podešavanja",
      "Reinstaliraćete aplikaciju za obradu teksta",
      "Reinstaliraćete operativni sistem"
    ],
    correct: 1,
    explanation: "Budući da spoljna tastatura radi, problem je fizički — prašina ili prljavština ispod tastera sprečava kontakt. Čišćenje je prvi korak.",
    image: ""
  },

  {
    id: 172,
    category: "odrzavanje",
    type: "multiple",
    question: "172. Korisnik je prijavio da se aplikacije sporije pokreću u odnosu na prethodnu nedelju. Da biste identifikovali koje aplikacije su tokom protekle nedelje mogle da izazovu problem koristićete:",
    answers: [
      "Performance Monitor",
      "Task Manager",
      "Resource Monitor",
      "Reliability Monitor"
    ],
    correct: 3,
    explanation: "Reliability Monitor beleži istoriju instalacija, padova i grešaka sistema — pokazuje šta se promenilo protekle nedelje i može ukazati na uzrok.",
    image: ""
  },

  {
    id: 173,
    category: "odrzavanje",
    type: "multiple",
    question: "173. Računar se prilikom pritiskanja tastera za uključivanje uopšte ne pokreće. Testiranje koje komponente je uzrok kvara treba početi od:",
    answers: [
      "RAM memorije",
      "Procesora",
      "Matične ploče",
      "Napajanja"
    ],
    correct: 3,
    explanation: "Ako računar ne reaguje ni na šta, napajanje je prva komponenta za proveru — bez napajanja ništa drugo ne može raditi.",
    image: ""
  },

  {
    id: 174,
    category: "odrzavanje",
    type: "multiple",
    question: "174. Konfigurisate računar za korisnika koji ne zna mnogo o računarima, pa ste kreirali standardni nalog korisničkim imenom nikola. Korisnik želi da ručno ažurira Windows. Da biste mu omogućili ovaj zahtev potrebno je da:",
    answers: [
      "Konfigurišete parametar lokalne grupne polise za Windows Update, tako da korisnik nikola ima pravo da ručno ažurira Windows",
      "Objasnite korisniku kako da se prijavi na računar sa administratorskog naloga",
      "Podesite da ažuriranje Windows-a može da uradi bilo koji korisnički nalog"
    ],
    correct: 0,
    explanation: "Putem Group Policy Editor (gpedit.msc) može se podesiti da standardni korisnik ima pristup Windows Update bez potrebe da bude administrator.",
    image: ""
  },

  {
    id: 175,
    category: "odrzavanje",
    type: "multiple",
    question: "175. Administrirate mrežu u preduzeću. Zaposleni u odeljenju Prodaje se žale da se aplikacija sporije učitava. Performance Monitor pokazuje veliku aktivnost čvrstog diska. Da biste bili sigurni da disk predstavlja usko grlo u sistemu, morate da koristeci Perforamnce Monitor analizirati rad i:",
    answers: [
      "Procesora",
      "Mreže",
      "Memorije",
      "Aplikacija"
    ],
    correct: 2,
    explanation: "Velika aktivnost diska može biti posledica nedovoljne RAM memorije (paging/swap). Analiza memorije je sledeći korak da se potvrdi usko grlo.",
    image: ""
  },

  {
    id: 176,
    category: "odrzavanje",
    type: "multiple",
    question: "176. Sumnjate da neko pokušava da pristupi računarima koristeći valjana korisnička imena i više pokušaja pogađanja lozinke. Da biste pratili takvu aktivnost potrebno je da konfigurišete sledeću politiku nadzora:",
    answers: [
      "Login Event failures",
      "Directory Service Access failures",
      "Privilege Use success",
      "Account Login Event failures",
      "Account Management failures"
    ],
    correct: 3,
    explanation: "Account Logon Event auditing beleži pokušaje autentifikacije prema domain controlleru — neuspeli pokušaji otkrivaju brute-force napade.",
    image: ""
  },

  {
    id: 177,
    category: "odrzavanje",
    type: "multiple",
    question: "177. Korisnik asistent1 bezuspešno pokušava da pridruži računar PC1 domenu bookstore.com. Šef marketinga želi da omogućite asistent1 da PC1 pridruži domenu, ali bez dodatnih prava. Da biste ispunili postavljene zahteve:",
    answers: [
      "Dodaćete korisnika asistent1 u grupu Domain Administrators za kratko vreme",
      "Dodaćete korisnika asistent1 u grupu Server Operators",
      "Kreiraćete na domenu bookstore.com računarski nalog PC1, i dozvolićete korisniku asistent1 da pridruži računar domenu",
      "Dozvolićete korisniku asistent1 da se lokalno prijavi na domen koristeći grupne polise"
    ],
    correct: 2,
    explanation: "Prethodno kreiranje računarskog naloga u AD-u i delegiranje prava asistent1 da ga preuzme je najmanje privilegovano rešenje.",
    image: ""
  },

  {
    id: 178,
    category: "odrzavanje",
    type: "multiple",
    question: "178. Milan je vaš asistent za održavanje računara. Želite da Milan može da vraća rezervne kopije podataka, ali ne i da ih pravi. Najednostavniji način da ovo omogućite Milanu je da:",
    answers: [
      "Učlanite korisnički nalog milan u grupu Administrators",
      "Učlanite korisnički nalog milan u grupu Backup Operators",
      "Date pravo Restore Files And Directories korisničkom nalogu milan",
      "Date pravo korisničkom nalogu milan samo za čitanje (Read) za sve volumene na kojima vraća rezervne kopije"
    ],
    correct: 2,
    explanation: "Pravo Restore Files And Directories daje tačno potrebno ovlašćenje — vraćanje fajlova bez mogućnosti pravljenja bekapa ili šire privilegije.",
    image: ""
  },

  {
    id: 179,
    category: "odrzavanje",
    type: "multiple",
    question: "179. Klijentu je otkazala integrisana mrežna kartica na matičnoj ploči, a ostali delovi rade ispravno. Klijentu je najvažnije brzo otkloniti kvar sa ograničenim budžetom. Izberite rešenje koje je najverovatnije da će klijent prihvatiti:",
    answers: [
      "Zamenu matične ploče nekom korišćenom koja bi podržala postojeći procesor i memoriju",
      "Zamenu matične ploče novom pločom koja neće biti kompatibilna sa postojećim procesorom i memorijom",
      "Instalaciju nove mrežne kartice u slobodan PCIE slot na ploči",
      "Instalaciju bežične mrežne kartice i nabavku bežičnog rutera"
    ],
    correct: 2,
    explanation: "Dodavanje PCIe mrežne kartice je najjeftinije i najbrže rešenje — ne menja se ništa drugo, a integrisana može biti onemogućena u BIOS-u.",
    image: ""
  },

 {
  id: 180,
  category: "odrzavanje",
  type: "multiple",
  question: "180. Hijerarhijska struktura organizacionih jedinica u domenu aml.local prikazana je na slici. Korisnici koji rade dizajn odeće imaju korisničke naloge u čijim atributima je za opis napisano dizajner. Korisnici koji rade krojenje odeće imaju korisničke naloge u čijim atributima je za opis napisano krojac. Korisnici koji prodaju odeću imaju korisničke naloge u čijim atributima je za opis napisano prodavac. Svi korisnički nalozi su u odgovarajućoj organizacionoj jedinici. Potrebno je sve krojače u preduzeću ubaciti u grupu Krojaci. To može da se uradi na sledeći način:",
  answers: [
    "Selektovati domen a zatim opciju Find, u polje description upisati krojenje, selektovati sve pronađene korisnike i ubaciti ih u grupu Krojaci",
    "Selektovati organizacionu jedinicu Aleksinac a zatim opciju Find, polja za filtriranje ostaviti prazna, selektovati sve pronađene korisnike i ubaciti ih u grupu Krojaci",
    "Selektovati domen a zatim opciju Find, u polje description upisati krojac, selektovati sve pronađene korisnike i ubaciti ih u grupu Krojaci",
    "Selektovati organizacionu jedinicu Beograd\\PRODAJA a zatim opciju Find, u polje description upisati krojac, selektovati sve pronađene korisnike i ubaciti ih u grupu Krojaci"
  ],
  correct: 2,
  explanation: "Potrebno je pretražiti ceo domen i u polje description upisati krojac kako bi bili pronađeni svi korisnici koji rade krojenje odeće. Nakon toga pronađeni korisnici mogu biti dodati u grupu Krojaci.",
  image: "slike/180.png"
},

  {
    id: 181,
    category: "odrzavanje",
    type: "multi",
    question: "181. Radnu temperaturu procesora moguće je proveriti koristeći: (izaberi sve tačne odgovore)",
    answers: [
      "BIOS",
      "Program SpeedFan",
      "Resource Monitor alat iz OS-a",
      "Computer Management konzolu",
      "Task Manager"
    ],
    correct: [0, 1],
    explanation: "BIOS/UEFI prikazuje temperaturu procesora u hardware monitor sekciji. SpeedFan je namenski program za praćenje temperatura, brzine ventilatora i napona. Resource Monitor i Task Manager ne prikazuju temperaturu.",
    image: ""
  },

  {
    id: 182,
    category: "odrzavanje",
    type: "multi",
    question: "182. Želite da uklonite prašinu unutar desktop računara. Da bi se zaštitili od prašine koristićete: (izaberi sve tačne odgovore)",
    answers: [
      "Masku",
      "Antistatičku podlogu",
      "Narukvicu za odvođenje statičkog naelektrisanja",
      "Antistatičku vreću",
      "Zaštitne naočare",
      "Gumene rukavice"
    ],
    correct: [0, 4],
    explanation: "Zaštitu od prašine pri čišćenju računara pružaju maska (da ne udišete prašinu) i zaštitne naočare (da prašina ne uđe u oči). Antistatička narukvica i podloga štite od ESD, ne od prašine.",
    image: ""
  },

  {
    id: 183,
    category: "odrzavanje",
    type: "multi",
    question: "183. Sanja putuje sa računarskom opremom u grad sa suvom, toplom i prašnjavom klimom. Preporučićete joj da ponese: (izaberi sve tačne odgovore)",
    answers: [
      "Grejna tela",
      "Limenke sa kompresovanim vazduhom",
      "Dodatna kućišta za računare",
      "Rezervne kablove",
      "Ovlaživač vazduha",
      "Rezervoare sa kiseonikom"
    ],
    correct: [1, 4],
    explanation: "U prašnjavoj klimi: limenke sa kompresovanim vazduhom za čišćenje komponenti od prašine. U suvoj klimi: ovlaživač vazduha smanjuje statičko naelektrisanje koje može oštetiti opremu.",
    image: ""
  },

  {
    id: 184,
    category: "odrzavanje",
    type: "multi",
    question: "184. Kreiran direktorijumski servis u mreži: (izaberi sve tačne odgovore)",
    answers: [
      "Omogućava centralizovanu autentifikaciju korisnika unutar domena",
      "Dozvoljava korisnicima da koriste sve računare pridružene domenu",
      "Onemogućava korišćenje računara prijavljivanjem lokalnog korisnika",
      "Ne dopušta da korisnik bude član više grupa iz različitih domena u okviru šume",
      "Dozvoljava da lokalni korisnici računara koriste resurse domena"
    ],
    correct: [0, 1],
    explanation: "Direktorijumski servis (Active Directory) obezbeđuje centralizovanu autentifikaciju i omogućava korisnicima da se prijavljuju na bilo koji računar u domenu.",
    image: ""
  },

  {
    id: 185,
    category: "odrzavanje",
    type: "multi",
    question: "185. Vizuelnom proverom komponenti računara, možemo naslutiti neke od uzroka pojedinih kvarova. Navesti moguće vidljive neispravnosti komponenti: (izaberi sve tačne odgovore)",
    answers: [
      "Nedostatak kabla koji povezuje procesor i operativnu memoriju",
      "Da li su komponente pravilno postavljene u svoje slotove",
      "Pregled stanja kondenzatora",
      "Nedostatak šrafova za pričvršćivanje hard diskova",
      "Deformacije pinova na podnožju procesora",
      "Zaprljanost kućišta"
    ],
    correct: [1, 2, 4],
    explanation: "Vizuelno se mogu uočiti: komponente koje nisu pravilno usađene u slotove, naduven/procurio kondenzator na matičnoj ploči, i savijeni pinovi na CPU socketu.",
    image: ""
  },

  {
    id: 186,
    category: "odrzavanje",
    type: "multi",
    question: "186. Sistem koji radi besprekorno, odjednom počinje da pravi probleme. Pretpostavka je da uzrok mogu biti korumpirani upravljački programi/drajveri. Linijske komande koje se mogu koristiti da se testira pretpostavljeni uzrok problema su: (izaberi sve tačne odgovore)",
    answers: [
      "sfc.exe /scannow",
      "gpedit.mas",
      "driverquery.exe /si",
      "sigverif.exe",
      "regedit.exe",
      "msconfig.exe"
    ],
    correct: [2, 3],
    explanation: "driverquery.exe /si lista sve instalirane drajvere sa informacijom da li su digitalno potpisani. sigverif.exe proverava digitalni potpis sistemskih fajlova i drajvera.",
    image: ""
  },

  {
    id: 187,
    category: "odrzavanje",
    type: "multi",
    question: "187. Nakon promovisanja servera u kontroler domena, u novoj šumi, postojeći administratorski nalog (Administrator) će biti član sledećih grupa: (izaberi sve tačne odgovore)",
    answers: [
      "Backup Operators",
      "Server Operators",
      "Administrators",
      "Domain Users",
      "Schema Admins",
      "Protected Users"
    ],
    correct: [2, 3, 4],
    explanation: "Nakon promocije u DC u novoj šumi, Administrator je automatski member: Administrators, Domain Users, i Schema Admins.",
    image: ""
  },

  {
    id: 188,
    category: "odrzavanje",
    type: "multi",
    question: "188. Korisnik se žali da računar izbacuje poruku 'BOOTMGR is missing'. Greška se dešava odmah nakon POST-a. Izaberite akcije koje možete preduzeti u cilju otklanjanja problema: (izaberi sve tačne odgovore)",
    answers: [
      "Oporaviti BOOTMGR koristeći Windows Recovery Environment",
      "Pokrenuti antivirusni softver",
      "Pokrenuti komandu chkdsk /F /R iz konzole za oporavak",
      "Pokrenuti komandu bootrec /fixboot",
      "Iskoristiti opciju 'Use the last known good configuration' pri podizanju"
    ],
    correct: [0, 3],
    explanation: "BOOTMGR is missing znači da je boot manager oštećen ili nedostaje. Rešenje: Windows Recovery Environment (može obnoviti BOOTMGR) i bootrec /fixboot koji popravlja boot sektor.",
    image: ""
  },

  {
    id: 189,
    category: "odrzavanje",
    type: "multi",
    question: "189. Računar (Intel Celeron 4 jezgra, 4GB RAM, dva SSD diska, stranična datoteka 1.5GB na C:) se usporava samo kada je pokrenuta aplikacija za obračun plata. Performance Monitor pokazuje 100% CPU i greške straničenja čak i kada aplikacija NIJE pokrenuta. Da biste otklonili problem: (izaberi sve tačne odgovore)",
    answers: [
      "Nadogradite procesor",
      "Dodate RAM memoriju",
      "Konfigurišete sistem tako da se stranična datoteka nalazi na D i E diskovima",
      "Povećate veličinu stranične datoteke na 3 GB"
    ],
    correct: [1],
    explanation: "Greške straničenja i van rada aplikacije ukazuju na trajni nedostatak RAM-a. Dodavanje RAM-a je pravo rešenje.",
    image: ""
  },

  {
    id: 190,
    category: "odrzavanje",
    type: "multi",
    question: "190. Na računaru je otkazao disk koji korisnici koriste za snimanje dokumenata. Kolega je zamenio disk novim, ali disk nije dostupan za korišćenje. Da bi se rešio problem sa minimalnim ulaganjem novca potrebno je: (izaberi sve tačne odgovore)",
    answers: [
      "Kupiti još jedan novi disk, povezati ga i formatirati",
      "Inicijalizovati disk koji je dodat kao zamena disku koji je otkazao",
      "Kreirati i formatirati particije na disku koji je dodat",
      "Povezati novi disk na drugi slot",
      "Kreirati particije na novopovedanom disku bez inicijalizacije"
    ],
    correct: [1, 2],
    explanation: "Nov disk mora PRVO da se inicijalizuje (Disk Management > Initialize Disk), a zatim da se kreira i formatira particija. Bez inicijalizacije, disk se ne može koristiti.",
    image: "slike/190.png"
  },

  {
    id: 191,
    category: "odrzavanje",
    type: "multi",
    question: "191. Administrator ste u Trgovinskom sudu. Morate da pratite ko pristupa direktorijumu C:\\Folder1 i ko menja/briše datoteke u njemu. Da bi se to postiglo potrebno je: (izaberi sve tačne odgovore)",
    answers: [
      "Konfigurisati opciju Auditing settings za direktorijum C:\\Folder1",
      "Izabrati opciju Encryption contents to secure data za direktorijum C:\\Folder1",
      "Konfigurisati parametar grupne polise Audit Policy / Audit directory service access",
      "Konfigurisati parametar grupne polise Audit Policy / Audit object access",
      "Konfigurisati parametar grupne polise Audit Policy / Audit system events"
    ],
    correct: [0, 3],
    explanation: "Za praćenje pristupa fajlovima potrebno je: (1) Omogućiti Auditing na samom folderu, i (2) Konfigurisati Group Policy Audit object access, koji beleži pristup NTFS objektima u Event Log-u.",
    image: ""
  },

  // =====================
  // TEHNIČKA DOKUMENTACIJA (202–218)
  // =====================

  {
    id: 202,
    category: "dokumentacija",
    type: "multiple",
    question: "202. Tehničku dokumentaciju može da izrađuje:",
    answers: [
      "Licencirani inženjer odgovarajuće struke",
      "Diplomirani inženjer sa položenim stručnim ispitom",
      "Pravno lice sa radno angažovanim licenciranim inženjerom"
    ],
    correct: 2,
    explanation: "Tehničku dokumentaciju može da izrađuje pravno lice pod uslovom da ima radno angažovanog licenciranog inženjera koji potpisuje dokumentaciju.",
    image: ""
  },

  {
    id: 203,
    category: "dokumentacija",
    type: "multiple",
    question: "203. Predmer i predračun su delovi:",
    answers: [
      "Opšte dokumentacije",
      "Grafičke dokumentacije",
      "Tekstualne dokumentacije",
      "Numeričke dokumentacije"
    ],
    correct: 2,
    explanation: "Predmer i predračun spada u tekstualnu dokumentaciju — sadrži opise radova i materijala sa cenama, ali nije grafička ni opšta dokumentacija.",
    image: ""
  },

  {
    id: 204,
    category: "dokumentacija",
    type: "multiple",
    question: "204. Za izradu tekstualnog dela tehničke dokumentacije koristi se:",
    answers: [
      "Excel",
      "Word",
      "PowerPoint"
    ],
    correct: 1,
    explanation: "Microsoft Word (ili ekvivalentni tekstualni procesor) se koristi za izradu tekstualnih delova tehničke dokumentacije — opise, izveštaje, tehničke uslove.",
    image: ""
  },

  {
    id: 205,
    category: "dokumentacija",
    type: "multiple",
    question: "205. Idejno rešenje koristi se za:",
    answers: [
      "Izgradnju objekta",
      "Izdavanje lokacijskih uslova",
      "Izdavanje građevinske dozvole"
    ],
    correct: 1,
    explanation: "Idejno rešenje je najosnovniji nivo projektne dokumentacije koji se podnosi za dobijanje lokacijskih uslova. Za građevinsku dozvolu potreban je idejni projekat.",
    image: ""
  },

  {
    id: 206,
    category: "dokumentacija",
    type: "multiple",
    question: "206. Predmer i predračun sadrži:",
    answers: [
      "Sve potrebne radove i materijale",
      "Samo radove sa cenom rada",
      "Sve potrebne radove, potrebne materijale sa njihovim pojediničnim cenama i ukupan iznos"
    ],
    correct: 2,
    explanation: "Predmer i predračun je detaljan dokument koji sadrži sve radove, sav materijal sa jediničnim i ukupnim cenama — osnova za ponudu izvođača radova.",
    image: ""
  },

  {
    id: 207,
    category: "dokumentacija",
    type: "multiple",
    question: "207. Ponuda za izvođenje radova se daje na osnovu:",
    answers: [
      "Predmera i predračuna",
      "Tehničkih uslova",
      "Tehničkog opisa"
    ],
    correct: 0,
    explanation: "Predmer i predračun je dokument na osnovu kojeg izvođači daju ponude, jer sadrži tačno šta treba uraditi, koliko materijala i po kojim cenama.",
    image: ""
  },

  {
    id: 208,
    category: "dokumentacija",
    type: "multiple",
    question: "208. Komisiju za tehnički pregled formira:",
    answers: [
      "Lokalna samouprava",
      "Inspektor rada",
      "Investitor"
    ],
    correct: 2,
    explanation: "Investitor formira komisiju za tehnički pregled i određuje njene članove. Može je poveriti i privrednom društvu, ali ne inspektoru rada ni lokalnoj samoupravi.",
    image: ""
  },

  {
    id: 209,
    category: "dokumentacija",
    type: "multiple",
    question: "209. Ako se pri projektovanju vrši umanjenje stvarne veličine hiljadu puta, pravilan zapis je:",
    answers: [
      "1000:1",
      "1:1000",
      "1:1000:1",
      "1:1"
    ],
    correct: 1,
    explanation: "Razmera se zapisuje kao (veličina na crtežu):(stvarna veličina). Ako je crteže umanjen 1000 puta, razmera je 1:1000.",
    image: ""
  },

  {
    id: 210,
    category: "dokumentacija",
    type: "multiple",
    question: "210. Na tehničkom crtežu sastavnica je deo:",
    answers: [
      "Radioničkog crteža",
      "Šematskog crteža",
      "Sklopnog crteža"
    ],
    correct: 2,
    explanation: "Sastavnica (bill of materials) je tabela koja sadrži listu svih delova i pozicija prikazanih na crtežu — standardni deo sklopnih crteža.",
    image: ""
  },

  {
    id: 211,
    category: "dokumentacija",
    type: "multiple",
    question: "211. Zaglavlje se na tehničkom crtežu uvek nalazi:",
    answers: [
      "Duž donje ivice crteža",
      "U donjem desnom uglu papira",
      "Zavisi od formata papira"
    ],
    correct: 1,
    explanation: "Po standardu (ISO, JUS), zaglavlje tehničkog crteža uvek je u donjem desnom uglu papira, bez obzira na format.",
    image: ""
  },

  {
    id: 212,
    category: "dokumentacija",
    type: "multiple",
    question: "212. Pri kotiranju crteža na papiru unose se:",
    answers: [
      "Stvarne mere",
      "Mere na crtežu",
      "Mere zavise od toga da li je crteže uvećan ili je umanjen"
    ],
    correct: 0,
    explanation: "Na tehničkim crtežima uvek se upisuju STVARNE mere — bez obzira na razmeru crteža. Razmera je navedena u zaglavlju.",
    image: ""
  },

  {
    id: 213,
    category: "dokumentacija",
    type: "multiple",
    question: "213. Ako je u zaglavlju tehničkog crteža napisana razmera 1:100 to predstavlja:",
    answers: [
      "Veličina u stvarnosti : veličina na crtežu",
      "Veličina na crtežu : veličina uvećanja",
      "Veličina na crtežu : veličina u stvarnosti"
    ],
    correct: 2,
    explanation: "Razmera 1:100 znači: 1 jedinica na crtežu = 100 jedinica u stvarnosti. Format je (crteže):(stvarnost).",
    image: ""
  },

  {
    id: 214,
    category: "dokumentacija",
    type: "multiple",
    question: "214. Servisna knjižica NE sadrži:",
    answers: [
      "Plan redovnog održavanja",
      "Specifikaciju komponenti računarskog sistema",
      "Cenu kupljene opreme",
      "Listu interventnih pregleda sa opisom intervencija"
    ],
    correct: 2,
    explanation: "Servisna knjižica sadrži plan održavanja, specifikaciju komponenti i istorijat intervencija. Cena kupljene opreme nije deo servisne dokumentacije.",
    image: ""
  },

  {
    id: 215,
    category: "dokumentacija",
    type: "multiple",
    question: "215. Šta predstavlja specifikacija računarskih komponenti?",
    answers: [
      "Proračun cene koštanja računarskih komponenti",
      "Spisak svih programa koji su instalirani",
      "Detaljan tehnički opis računarskih komponenti"
    ],
    correct: 2,
    explanation: "Specifikacija komponenti je tehnički dokument koji detaljno opisuje svaku komponentu računarskog sistema — procesor, RAM, disk, matičnu ploču i sve ostale delove sa tačnim modelima i karakteristikama.",
    image: ""
  },

  {
    id: 216,
    category: "dokumentacija",
    type: "multiple",
    question: "216. Za izradu predmera i predračuna NAJBOLJE je koristiti:",
    answers: [
      "Word",
      "Excel",
      "PowerPoint",
      "Calculator"
    ],
    correct: 1,
    explanation: "Excel (ili tabele generalno) su idealne za predmer i predračun — omogućavaju tablično prikaz stavki, unos količina i cena, automatski proračun ukupnih iznosa.",
    image: ""
  },

  {
    id: 217,
    category: "dokumentacija",
    type: "multiple",
    question: "217. Prilikom crtanja dela tehničke dokumentacije pojavila se potreba za kreiranjem novog simbola od linija i strelica različitih debljina. Da bi simbol mogao ponovo da se koristi u istom fajlu potrebno je:",
    answers: [
      "Snimiti taj fajl na radnu površinu",
      "Grupisati sve elemente simbola",
      "Obojiti sve elemente simbola crveno"
    ],
    correct: 1,
    explanation: "Grupisanjem svih elemenata (linija, strelica) u jednu grupu, simbol se može selektovati, kopirati i koristiti kao celina u istom ili drugom dokumentu.",
    image: ""
  },

  {
  id: 218,
  category: "dokumentacija",
  type: "multiple",
  question: "218. Adresa ćelije u kojoj je Dioda P6KE6,8CA je:",
  answers: [
    "4C",
    "3.C",
    "C4",
    "24",
    "10"
  ],
  correct: 2,
  explanation: "Adresa ćelije se zapisuje tako što se prvo navodi oznaka kolone, a zatim broj reda. Dioda P6KE6,8CA nalazi se u koloni C i redu 4, pa je adresa ćelije C4.",
  image: "slike/218.png"
},
  
  // ================================================================
// NOVA PITANJA — copy-paste na kraj niza u questions.js
// Pre zatvarajućeg ]; — svako pitanje ima zarez na kraju
// ================================================================

  // ── 99 (OS – multiple) ──────────────────────────────────────────
  {
    id: 99,
    category: "os",
    type: "multiple",
    question: "99. Ana poseduje direktorijum koji bi željela da podeli sa drugim korisnicima na mreži. U njemu se nalazi i fajl pod nazivom baza.xlsx. Ana bi htela da obezbedi da ovom fajlu može istovremeno pristupiti samo jedan korisnik, kako bi se sprečilo brisanje izmena koje je napravio drugi korisnik. Da biste ovo obezbedili:",
    answers: [
      "Treba ograničiti broj korisnika koji mogu pristupiti zajedničkom direktorijumu na samo jednog korisnika.",
      "Atribut fajla baza.xlsx treba konfigurisati kao nedeljiv (unshared).",
      "Treba konfigurisati raspored rada tako da korisnici pristupaju fajlu u različito vreme.",
      "U File Explorer-u konfigurisati zajednički direktorijum tako da korisnicima ne dopusti pristup navedenom fajlu u offline režimu."
    ],
    correct: 0,
    explanation: "Ograničavanjem broja istovremenih korisnika na deljenom direktorijumu na 1 (net share /users:1) obezbeđujemo da samo jedan korisnik u datom trenutku može pristupiti fajlu baza.xlsx.",
    image: ""
  },

  // ── 105 (OS – multiple) ─────────────────────────────────────────
  {
    id: 105,
    category: "os",
    type: "multiple",
    question: "105. Na računar su priključena tri diska i korisnik vidi particije. Svaki disk ima jedan volumen koji zauzima ceo disk (Disk1=6GB, Disk2=6GB, Disk3=6GB) i kreiran je Striped volumen koji koristi sve tri. Veličine particija na diskovima su:",
    answers: [
      "na Disk1 2GB, na Disk2 2GB, na Disk3 2GB",
      "na Disk1 3GB, na Disk2 3GB, na Disk3 3GB",
      "na Disk1 6GB, na Disk2 6GB, na Disk3 6GB"
    ],
    correct: 2,
    explanation: "Striped volumen (RAID-0) raspodeljuje podatke ravnomerno na sve diskove i koristi sav raspoloživi prostor na svakom disku. Svaki disk zadržava pun kapacitet od 6GB.",
    image: "slike/105.png"
  },

  // ── 126 (OS – input) ────────────────────────────────────────────
  {
    id: 126,
    category: "os",
    type: "input",
    question: "126. __________ instalacija zahteva korišćenje datoteke odgovora (answer file).",
    correct: ["Unattended", "unattended"],
    explanation: "Unattended instalacija (instalacija bez nadzora) koristi unapred pripremljenu datoteku odgovora (answer file / unattend.xml) koja automatski popunjava sve parametre tokom instalacije OS-a bez interakcije korisnika.",
    image: ""
  },

  // ── 127 (OS – input) ────────────────────────────────────────────
  {
    id: 127,
    category: "os",
    type: "input",
    question: "127. Protokol koji za komunikaciju klijenta i servera koristi port 80 je __________ (upiši skraćenicu).",
    correct: ["HTTP", "http"],
    explanation: "HTTP (Hypertext Transfer Protocol) koristi TCP port 80 za komunikaciju između web klijenta (pregledača) i web servera. HTTPS (enkriptovana verzija) koristi port 443.",
    image: ""
  },

  // ── 128 (OS – input) ────────────────────────────────────────────
  {
    id: 128,
    category: "os",
    type: "input",
    question: "128. Poslednja slobodna adresa u mreži 10.10.20.0/22 koja se može dodeliti mrežnom adapteru je __________.",
    correct: ["10.10.23.254"],
    explanation: "Mreža 10.10.20.0/22 ima masku 255.255.252.0. Opseg hostova: 10.10.20.1 – 10.10.23.254. Broadcast adresa je 10.10.23.255, pa je poslednja upotrebljiva adresa 10.10.23.254.",
    image: ""
  },

  // ── 129 (OS – input) ────────────────────────────────────────────
  {
  id: 129,
  category: "os",
  type: "input",
  question: "129. Na slici desno je dat prikaz dela ekrana programa _________.",
  correct: ["Event Viewer"],
  explanation: "U programu Event Viewer slikano.",
  image: "slike/129.png"
},

  // ── 130 (OS – input) ────────────────────────────────────────────
  {
    id: 130,
    category: "os",
    type: "input",
    question: "130. __________ je program u statusu izvršavanja, zajedno sa svim resursima računarskog sistema koji su neophodni za njegovo izvršavanje.",
    correct: ["Proces", "proces", "Process", "process"],
    explanation: "Proces je program koji se aktivno izvršava u memoriji zajedno sa svim dodeljenim resursima (CPU vreme, memorija, fajlovi, I/O uređaji). Za razliku od programa (statičan fajl), proces je dinamična instanca izvršavanja.",
    image: ""
  },

  // ── 131 (OS – input) ────────────────────────────────────────────
  {
    id: 131,
    category: "os",
    type: "input",
    question: "131. Na laptopu je instaliran prilagođeni plan napajanja 'U_pokretu'. Računar ulazi u sleep mode kada je laptop zatvoren. Korisnik zahteva da se NIŠTA ne dešava kada zatvori laptop. Opcija u Power Options podešavanjima koju ćete podešavati je __________.",
    correct: ["Power buttons and lid", "power buttons and lid", "Power Buttons and Lid"],
    explanation: "U Power Options > Change plan settings > Change advanced power settings, opcija 'Power buttons and lid' (ili 'Lid close action') kontroliše šta se dešava kada se zatvori poklopac laptopa. Postavljanjem na 'Do nothing' ispunjava se zahtev korisnika.",
    image: ""
  },

  // ── 132 (OS – input) ────────────────────────────────────────────
  {
    id: 132,
    category: "os",
    type: "input",
    question: "132. Struktura koja sadrži kontrolne blokove svih datoteka koje joj logički pripadaju i meta podatke koji je opisuju naziva se __________.",
    correct: ["direktorijum", "Direktorijum", "directory", "Directory"],
    explanation: "Direktorijum (folder) je sistemska struktura fajl sistema koja čuva kontrolne blokove datoteka (FCB) i metapodatke — ime, veličinu, atribute, pokazivač na sadržaj — svih datoteka koje mu logički pripadaju.",
    image: ""
  },

  // ── 133 (OS – input) ────────────────────────────────────────────
  {
    id: 133,
    category: "os",
    type: "input",
    question: "133. Arhitektura operativnog sistema u kojoj je OS izgrađen od zasebnih celina (slojeva) koji se nadograđuju jedan na drugi naziva se __________ arhitektura.",
    correct: ["slojevita", "Slojevita", "layered", "Layered"],
    explanation: "Slojevita (layered) arhitektura OS-a organizuje sistem u hijerarhijske slojeve gde svaki sloj koristi usluge sloja ispod sebe i pruža usluge sloju iznad. Prednost je modularnost i lakše otklanjanje grešaka.",
    image: ""
  },

  // ── 134 (OS – input) ────────────────────────────────────────────
  {
    id: 134,
    category: "os",
    type: "input",
    question: "134. Pet diskova, svaki kapaciteta 500 GB, vezani su u RAID-5. Ukupan korisni prostor na disku je __________ TB. Простор који се користи за парност је величине од ________ (odgovor napisi broj sa GB ili TB pa onda zarez, odvojeno, pa onda drugi broj sa GB/TB)",
    correct: ["2, 500", "2TB, 500TB", "2 TB, 500 GB"],
    explanation: "RAID-5 koristi jedan disk ekvivalent za parnost distribuiran po svim diskovima. Korisni prostor = (N-1) × kapacitet = 4 × 500GB = 2000GB = 2TB. Prostor za parnost iznosi 500GB.",
    image: ""
  },

  // ── 135 (OS – input) ────────────────────────────────────────────
  {
    id: 135,
    category: "os",
    type: "input",
    question: "135. Kod tehnike virtuelizacije, operativni sistem koji komunicira sa osnovnim hardverom naziva se __________ (domaćin), a operativni sistem instaliran na virtuelnoj mašini naziva se __________ (gost). Upiši oba pojma odvojena zarezom.",
    correct: ["host, guest", "Host, Guest", "host,guest", "Host,Guest"],
    explanation: "Host OS (domaćin) direktno komunicira sa fizičkim hardverom i pokreće hipervizor. Guest OS (gost) je instaliran unutar virtuelne mašine i ne zna za pravi hardver — komunicira kroz sloj virtualizacije.",
    image: ""
  },

  // ── 136 (OS – input) ────────────────────────────────────────────
  {
    id: 136,
    category: "os",
    type: "input",
    question: "136. Iz pregledača ne možemo pristupiti web sajtu po imenu domena, ali ping na njegovu IP adresu radi. Svim ostalim javnim sajtovima pristup je dostupan po imenu domena. Komanda koju treba uneti u Command Prompt da biste rešili problem je __________.",
    correct: ["ipconfig /flushdns", "ipconfig/flushdns", "ipconfig /FlushDNS", "ipconfig / flushdns", "ipconfig/ flushdns", "ipconfig / FlushDNS"],
    explanation: "Problem je u lokalnom DNS kešu koji čuva pogrešan (zastareo) unos za taj domen. Komanda 'ipconfig /flushdns' briše lokalni DNS keš, što prisiljava sistem da ponovo pita DNS server za ispravnu IP adresu domena.",
    image: ""
  },

  // ── 137 (OS – input) ────────────────────────────────────────────
  {
    id: 137,
    category: "os",
    type: "input",
    question: "137. Ako želimo da povežemo uređaj koji pinove 1 i 2 koristi za slanje, a 3 i 6 za prijem (npr. računar) sa uređajem koji pinove 1 i 2 koristi za prijem, a 3 i 6 za slanje (npr. svič), koristićemo UTP __________ kabl.",
    correct: ["straight-through", "Straight-through", "straight through", "ravni", "straight"],
    explanation: "Straight-through (pravi) kabl se koristi za povezivanje uređaja iz različitih grupa — npr. računar (DTE) sa svičem/hubom (DCE). Crossover kabl se koristi za direktno povezivanje dva uređaja iste vrste (računar-računar).",
    image: ""
  },

  // ── 138 (OS – input) ────────────────────────────────────────────
  {
    id: 138,
    category: "os",
    type: "input",
    question: "138. Datoteka clanovi.txt sadrži 5440 bajtova, a veličina jednog bloka na disku je 2048 bajtova. Prostor koji ova datoteka zauzima na disku je __________ bajtova.",
    correct: ["6144"],
    explanation: "Disk dodeljuje prostor u celim blokovima. 5440 / 2048 = 2,656 → potrebna su 3 bloka. 3 × 2048 = 6144 bajtova. Poslednji blok je delimično popunjen, ali se ceo rezerviše za fajl.",
    image: ""
  },

  // ── 139 (OS – input) ────────────────────────────────────────────
  {
    id: 139,
    category: "os",
    type: "input",
    question: "139. Na računar su priključena dva diska. Na Disk0 (20GB) kreiran je Spanned volumen P koji koristi 10GB sa Disk0 i sav prostor sa Disk1 (koji ima takođe 10GB slobodnog prostora). Kapacitet volumena P vidljiv korisniku je __________ GB.",
    correct: ["10", "10GB", "10 GB"],
    explanation: "Spanned volumen spaja nealokovani prostor sa više diskova u jedan logički volumen. 10GB (Disk0) + 10GB (Disk1) = 20GB ukupno vidljivo korisniku.",
    image: "slike/139.png"
  },
  
  // ── 140 (OS – input) ────────────────────────────────────────────
  {
    id: 140,
    category: "os",
    type: "input",
    question: "Na slici je dat dijagram stanja procesa. Napisi sa leva nadesno, posle svakog ide zapeta pa space, pisi malim slovima sve, na eng:",
    correct: ["start, ready, wait, stop"],
    explanation: "Dijagram prikazuje osnovna stanja procesa u operativnom sistemu i prelaze između njih. Proces počinje u stanju START, zatim prelazi u READY gde čeka procesor. Kada dobije procesorsko vreme prelazi u RUN i izvršava se. Ako mora da čeka neki događaj ili resurs prelazi u WAIT. Po završetku izvršavanja proces prelazi u stanje STOP.",
    image: "slike/140.png"
  },


  // ── 142 (OS – matching) ─────────────────────────────────────────
  {
    id: 142,
    category: "os",
    type: "matching",
    question: "142. Poveži svaku mrežnu komandu sa funkcijom koju izvršava:",
    pairs: [
      { left: "ping",         right: "Šalje male pakete računaru i od njega očekuje odgovor" },
      { left: "tracert",      right: "Prikazuje putanju između dva uređaja — adrese svih rutera na putu" },
      { left: "pathping",     right: "Prikazuje putanju i odgovor svakog uređaja na putu do cilja, sa kašnjenjem" },
      { left: "ipconfig /all",right: "Prikazuje IP adrese, SM, DG i ostale mrežne konfiguracione vrednosti" }
    ],
    correct: [],
    explanation: "ping (ICMP echo) testira dostupnost hosta. tracert prikazuje rutu. pathping kombinuje tracert i ping — meri gubitak paketa na svakom čvoru. ipconfig /all prikazuje kompletnu mrežnu konfiguraciju adaptera.",
    image: ""
  },

  // ── 144 (OS – matching) ─────────────────────────────────────────
  {
    id: 144,
    category: "os",
    type: "matching",
    question: "144. Poveži svaku operaciju nad datotekom sa opisom njenog dejstva:",
    pairs: [
      { left: "Kreiranje", right: "Određivanje prostora u fajl sistemu i unošenje odgovarajuće stavke u direktorijum" },
      { left: "Upis",     right: "Sistemskim pozivom specificiraju se ime datoteke i podaci koji će biti upisani" },
      { left: "Čitanje",  right: "Sistemskim pozivom specificiraju se ime datoteke i mesto u memoriji gde će se smestiti očitani blok" },
      { left: "Brisanje", right: "Oslobađa se sav prostor dodeljen datoteci unutar određenog direktorijuma" }
    ],
    correct: [],
    explanation: "Četiri osnovne operacije nad datotekama u fajl sistemu: kreiranje (alokacija prostora), upis (write sistemski poziv), čitanje (read sistemski poziv) i brisanje (dealokacija i uklanjanje iz direktorijuma).",
    image: ""
  },

  // ── 145 (OS – matching) ─────────────────────────────────────────
  {
    id: 145,
    category: "os",
    type: "matching",
    question: "145. Poveži svaki tip zlonamernog softvera sa odgovarajućim opisom:",
    pairs: [
      { left: "Trojanski konji", right: "Predstavljaju se kao koristan softver pa ih korisnik sam instalira na računaru" },
      { left: "Virusi",          right: "Modifikuju razne fajlove i degradiraju performanse računara" },
      { left: "Crvi",            right: "Razmnožavaju se samo prenosom sa računara na računar" }
    ],
    correct: [],
    explanation: "Trojanski konji se maskiraju kao legitimni softver. Virusi se zakače na fajlove i oštećuju sistem. Crvi (worms) se samostalno šire mrežom bez potrebe za fajlom-domaćinom.",
    image: ""
  },

  // ── 146 (OS – matching) ─────────────────────────────────────────
  {
    id: 146,
    category: "os",
    type: "matching",
    question: "146. Poređaj hronološki korake u procesu HTTP komunikacije kada web klijent otvara stranicu http://www.yahoo.com/index.html (označi redosled 1-4):",
    pairs: [
      { left: "1. korak", right: "DNS razrešavanje — klijent šalje upit DNS serveru za IP adresu www.yahoo.com" },
      { left: "2. korak", right: "TCP three-way handshake — uspostavljanje veze sa web serverom na portu 80" },
      { left: "3. korak", right: "Slanje HTTP GET zahteva za /index.html" },
      { left: "4. korak", right: "Server šalje HTTP odgovor sa sadržajem stranice, klijent prikazuje stranicu" }
    ],
    correct: [],
    explanation: "Redosled HTTP komunikacije: (1) DNS lookup za IP adresu, (2) TCP konekcija (SYN/SYN-ACK/ACK), (3) HTTP GET zahtev, (4) HTTP odgovor i prikazivanje sadržaja.",
    image: ""
  },

  // ── 148 (OS – matching) ─────────────────────────────────────────
  {
    id: 148,
    category: "os",
    type: "matching",
    question: "148. Poveži svaki naziv napada na računarski sistem sa odgovarajućim objašnjenjem:",
    pairs: [
      { left: "Ransomware",    right: "Ucenjivački napad — nasilno šifrovanje sadržaja žrtve sa zahtevom za isplatu u zamenu za ključ" },
      { left: "Code injection",right: "Napad kojim se maliciozni kod ubacuje kroz ranjive delove sajta ili URL" },
      { left: "DoS/DDoS",      right: "Zagušenje servera zahtevima za pristup određenom resursu" },
      { left: "Trojan horse",  right: "Maliciozni program koji se maskira kao legitimna aplikacija" },
      { left: "Sniffers",      right: "Alati koji presreću i analiziraju mrežni saobraćaj" },
      { left: "Spam",          right: "Masovno slanje neželjenih poruka elektronskom poštom" }
    ],
    correct: [],
    explanation: "Ransomware (npr. WannaCry) enkriptuje fajlove i traži otkup. Code injection (SQL, XSS) ubacuje kod. DoS/DDoS preplavljuje server. Trojan se krije u korisnom softveru. Snifferi hvataju pakete. Spam je neželjena pošta.",
    image: ""
  },

  // ── 149 (OS – matching) ─────────────────────────────────────────
  {
    id: 149,
    category: "os",
    type: "matching",
    question: "149. Računaru koji ima disk od 500GB dati su dva nova diska od 1TB. Poređaj hronološki korake za kreiranje konfiguracije otporne na greške (RAID-1 mirror na dva nova diska):",
    pairs: [
      { left: "1. korak", right: "Inicijalizovati oba nova diska" },
      { left: "2. korak", right: "Konvertovati diskove u dinamičke" },
      { left: "3. korak", right: "Kreirati volumen tipa Mirrored na oba nova diska" }
    ],
    correct: [],
    explanation: "Redosled: inicijalizacija novih diskova → konverzija u dinamičke (neophodna za Mirror/Stripe/Span) → kreiranje Mirrored volumena. Striped volumen se NE koristi jer nije otporan na greške.",
    image: ""
  },

  // ── 150 (OS – matching) ─────────────────────────────────────────
  {
    id: 150,
    category: "os",
    type: "matching",
    question: "150. Poveži svaku strukturu podataka fajl sistema sa odgovarajućim opisom:",
    pairs: [
      { left: "BCB (boot control block)",             right: "Sadrži informacije koje su potrebne za otpočinjanje procesa podizanja OS" },
      { left: "Kontrolni blok particije (PCB)",       right: "Sadrži informacije o sistemu datoteka (veličina bloka, broj blokova, slobodni blokovi...)" },
      { left: "Kontrolne strukture za alokaciju",     right: "Određuju konkretan sadržaj datoteke — blokove u kojima je smešten sadržaj" },
      { left: "Kontrolni blokovi datoteka (FCB)",     right: "Sadrže atribute datoteka i pokazivače na alokaciju datoteke" }
    ],
    correct: [],
    explanation: "BCB (boot control block) je u boot sektoru. PCB (partition/volume control block) opisuje fajl sistem particije. Alokacione strukture (FAT, inode tabela) mapiraju fajlove na blokove. FCB sadrži metapodatke fajla.",
    image: ""
  },

  // ── 151 (OS – matching) ─────────────────────────────────────────
  {
    id: 151,
    category: "os",
    type: "matching",
    question: "151. Poveži svaku Windows komandu/alatku sa njenom funkcijom:",
    pairs: [
      { left: "dfrgui.exe",    right: "Omogućava optimizaciju (defragmentaciju) diska" },
      { left: "devmgmt.msc",  right: "Omogućava pregled i upravljanje instaliranim hardverskim komponentama i drajverima" },
      { left: "msinfo32.exe", right: "Prikazuje detalje o hardverskim resursima računara, komponentama i softverskom okruženju" },
      { left: "gpedit.msc",   right: "Omogućava podešavanje lokalnih grupnih polisa" },
      { left: "lusrmgr.msc",  right: "Omogućava pregled, izvoz, uvoz i brisanje digitalnih sertifikata za trenutnog korisnika" }
    ],
    correct: [],
    explanation: "dfrgui=Disk Defragmenter, devmgmt=Device Manager, msinfo32=System Information, gpedit=Group Policy Editor, lusrmgr je Local Users and Groups ali se ovde odnosi na upravljanje sertifikatima (certmgr.msc).",
    image: ""
  },

  // ── 192 (Održavanje – input) ────────────────────────────────────
  {
    id: 192,
    category: "odrzavanje",
    type: "input",
    question: "192. Da bi se kreirao objekat korisnik (user) u aktivnom direktorijumu koristi se komanda __________.",
    correct: ["dsadd user", "dsadd", "Dsadd user", "Dsadd"],
    explanation: "Komanda 'dsadd user' (Directory Service Add) kreira novi korisnički objekat u Active Directory iz komandne linije. Primer: dsadd user CN=Marko,OU=Zaposleni,DC=firma,DC=com",
    image: ""
  },

  // ── 193 (Održavanje – input) ────────────────────────────────────
  {
    id: 193,
    category: "odrzavanje",
    type: "input",
    question: "193. __________ je jedinstven, alfanumerički kod koji potvrđuje da je kopija programa originalna i legalno kupovana.",
    correct: ["Product key", "product key", "Kljuc softvera", "ključ softvera", "license key"],
    explanation: "Product key (ključ softvera/licencni ključ) je alfanumerički kod (npr. XXXXX-XXXXX-XXXXX-XXXXX-XXXXX format za Windows) koji služi kao dokaz o kupovini i aktivira softver.",
    image: ""
  },

  // ── 194 (Održavanje – input) ────────────────────────────────────
  {
    id: 194,
    category: "odrzavanje",
    type: "input",
    question: "194. Instalirali ste sistem za pravljenje i vraćanje rezervnih kopija podataka (Backup and Recovery System). Vrsta rezervne kopije koju ćete PRVO pokrenuti da biste se zaštitili od gubitka podataka je __________ backup.",
    correct: ["full", "Full", "puni", "Puni"],
    explanation: "Full backup (potpuna rezervna kopija) mora biti prva — kopira apsolutno sve podatke sa zadatog izvora. Tek nakon toga može se koristiti inkrementalni ili diferencijalni backup koji zavise od postojanja prethodnog full backupa.",
    image: ""
  },

  // ── 195 (Održavanje – input) ────────────────────────────────────
  {
    id: 195,
    category: "odrzavanje",
    type: "input",
    question: "195. Planiran je overclock procesora, pri čemu je ideja da se prvo analizira stabilnost sistema. Proučavanjem mogućnosti raznih benchmark programa dolazi se na ideju primene tehnike koju nam ovi programi nude, a koja će pokrenuti procesor na maksimum svojih mogućnosti na određeni vremenski period. Takođe, tehnika treba da nam da mogućnost analize performansi procesora. Shvatamo da je neophodno da pratimo temperaturu procesora, jer primenom ove tehnike može doći do ozbiljnog „pregrevanja“. Tehnika koju želimo da primenimo naziva se _______________ test.",
    correct: ["stress", "Stress", "stres", "stresiranje"],
    explanation: "Stress test (test opterećenja) tera procesor da radi na 100% kapaciteta duži vremenski period koristeći benchmark alate (Prime95, AIDA64, Cinebench). Koristi se za proveru stabilnosti i termičkih karakteristika pri overclockingu.",
    image: ""
  },

  // ── 197 (Održavanje – matching) ─────────────────────────────────
  {
    id: 197,
    category: "odrzavanje",
    type: "matching",
    question: "197. Poveži svaki objekat Active Directory-ja sa odgovarajućom karakteristikom:",
    pairs: [
      { left: "Korisnik (user)",                        right: "Omogućava prijavu na domen" },
      { left: "Grupa (group)",                          right: "Omogućava da se objektima upravlja kolektivno umesto pojedinačno" },
      { left: "Kontakt (contact)",                      right: "Objekat koji nema nikakve bezbednosne dozvole" },
      { left: "Organizaciona jedinica (OU)",            right: "Koristi se za prikupljanje objekata koji dele zajedničke zahteve za administriranje" }
    ],
    correct: [],
    explanation: "User nalog omogućava autentifikaciju. Grupe olakšavaju administraciju — dozvole se daju grupi, a ne svakom korisniku posebno. Kontakt je samo adresarska stavka bez AD dozvola. OU je kontejner za organizaciju objekata u AD-u.",
    image: ""
  },

  // ── 198 (Održavanje – matching) ─────────────────────────────────
  {
    id: 198,
    category: "odrzavanje",
    type: "matching",
    question: "198. Poveži svaki tip softverske licence sa odgovarajućim objašnjenjem:",
    pairs: [
      { left: "Proprietary licence", right: "Proizvođač softvera daje korisniku pravo da koristi kopiju, dok proizvođač zadržava pravo vlasništva nad svakom kopijom" },
      { left: "Free licence",        right: "Proizvođač ne zadržava pravo vlasništva nad kopijama — pravo vlasništva se prenosi na krajnjeg korisnika" },
      { left: "Copyleft licence",    right: "Korisniku daje pravo da vrši izmene na softveru, ali je obavezan da objavi izvorni kod za sve izmene" },
      { left: "Permissive licence",  right: "Daje pravo da korisnik iskoristi softver i njegov izvorni kod kao deo softvera zatvorenog koda" }
    ],
    correct: [],
    explanation: "Proprietary (vlasnička) = Windows, Office. Free licence = prenos vlasništva kopije. Copyleft (GPL) = izmene moraju biti open source. Permissive (MIT, BSD) = može se koristiti i u vlasničkom softveru.",
    image: ""
  },

  // ── 199 (Održavanje – matching) ─────────────────────────────────
  {
    id: 199,
    category: "odrzavanje",
    type: "matching",
    question: "199. Poveži svaku vrstu rezervne kopije sa odgovarajućim objašnjenjem:",
    pairs: [
      { left: "Full backup",         right: "Kopira sve podatke sa zadate lokacije na zadato odredište" },
      { left: "Incremental backup",  right: "Kopira samo promene nastale u odnosu na poslednju rezervnu kopiju bilo kog tipa" },
      { left: "Differential backup", right: "Kopira sve promene nastale u odnosu na prvu sveobuhvatnu kopiju" },
      { left: "Schedule backup",     right: "Pokreće se automatski u određenom vremenskom intervalu" }
    ],
    correct: [],
    explanation: "Full = sve. Incremental = promene od poslednjeg backupa (bilo koje vrste) — najbrži za kreiranje, najsporiji za oporavak. Differential = promene od poslednjeg full backupa — kompromis. Schedule = automatsko zakazivanje.",
    image: ""
  },

  // ── 200 (Održavanje – matching) ─────────────────────────────────
  {
    id: 200,
    category: "odrzavanje",
    type: "matching",
    question: "200. Poveži svaku perfmon komandu sa situacijom u kojoj je najprikladnija:",
    pairs: [
      { left: "perfmon /res",    right: "Potrebno je pronaći proces koji najviše koristi procesor" },
      { left: "perfmon /rel",    right: "Potrebna je ukupna procena stabilnosti sistema" },
      { left: "perfmon /sys",    right: "Potrebno je pratiti broj štampačkih poslova u vremenskom periodu" },
      { left: "perfmon /report", right: "Potrebno je generisati izveštaje o stanju hardverskih i softverskih resursa" }
    ],
    correct: [],
    explanation: "perfmon /res = Resource Monitor (CPU/RAM/disk/mreža po procesu). perfmon /rel = Reliability Monitor (istorija stabilnosti). perfmon /sys = System Monitor (praćenje brojača). perfmon /report = generiše sistemski dijagnostički izveštaj.",
    image: ""
  },

  // ── 201 (Održavanje – matching) ─────────────────────────────────
  {
    id: 201,
    category: "odrzavanje",
    type: "matching",
    question: "201. Poređaj hronološkim redosledom korake VBScript skripte za kreiranje računara 'Lucas' u OU 'Jedi' na domenu starwars.com:",
    pairs: [
      { left: "1. korak", right: "Set objOU = GetObject(\"LDAP://OU=Jedi, DC=starwars, DC=com\")" },
      { left: "2. korak", right: "Set objComputer = objOU.Create(\"Computer\", \"CN=Lucas\")" },
      { left: "3. korak", right: "objComputer.Put \"sAMAccountName\", \"Lucas$\"" },
      { left: "4. korak", right: "objComputer.Put \"userAccountControl\", 4096" },
      { left: "5. korak", right: "objComputer.SetInfo" }
    ],
    correct: [],
    explanation: "Redosled VBScript AD skripte: (1) Povežemo se na OU, (2) Kreiramo računarski objekat, (3) Postavimo SAM ime (mora imati $ na kraju), (4) Postavimo userAccountControl=4096 (workstation), (5) SetInfo() upisuje objekat u AD.",
    image: ""
  },


  
  // ================================================================
// PITANJA SA SLIKAMA — copy-paste ispred zatvarajućeg ]; u questions.js
// Slike su u folderu slike/ — npr. slike/39.png
// ================================================================

  // ── 38 (Hardver – matching, bez slike — rešivo bez nje) ─────────
  // Pitanje 38 u priručniku je prazno/nečitko, preskočeno

  // ── 39 (Hardver – matching) ─────────────────────────────────────
  {
    id: 39,
    category: "hardver",
    type: "matching",
    question: "39. Na slici su pojedinačno označeni brojevima elementi matične ploče. Poveži naziv elementa sa brojem sa slike:",
    pairs: [
      { left: "Konektor za napajanje", right: "1" },
      { left: "Procesor",             right: "2" },
      { left: "DVI",                  right: "3" },
      { left: "VGA",                  right: "4" },
      { left: "PCI Express",          right: "5" },
      { left: "SATA konektori",       right: "6" }
    ],
    correct: [],
    explanation: "Elementi matične ploče: (1) konektor za napajanje (24-pin ATX), (2) CPU socket/procesor, (3) DVI port, (4) VGA port, (5) PCI Express slot za GPU, (6) SATA konektori za diskove.",
    image: "slike/39.png"
  },

  // ── 40 (Hardver – matching) ─────────────────────────────────────
  {
    id: 40,
    category: "hardver",
    type: "matching",
    question: "40. Na slici su označeni brojevima komponente grafičkog adaptera. Poveži naziv dela sa brojem sa slike:",
    pairs: [
      { left: "DVI", right: "6" },
      { left: "Konektor za maticnnu",      right: "5" },
      { left: "VGA",      right: "2" },
      { left: "GPU sa hladnjakom",          right: "3" },
      { left: "HDMI",  right: "4" },
	  { left: "VRAM",  right: "1" }
    ],
    correct: [],
    explanation: "Grafički adapter se sastoji od: GPU čipa, VRAM memorije, sistema za hlađenje (ventilator+heatsink), PCI-E konektora za vezu sa matičnom pločom i video izlaza (HDMI, DisplayPort, DVI).",
    image: "slike/40.png"
  },

  // ── 41 (Hardver – matching) ─────────────────────────────────────
  {
    id: 41,
    category: "hardver",
    type: "matching",
    question: "41. Korisnik želi 24GB DDR4 RAM-a sa dvokanalnim prenosom. Kanal A = slot 1 i slot 3, Kanal B = slot 2 i slot 4. Moduli u istom kanalu moraju biti isti. Na osnovu tabele dostupnih modula sa slike, rasporedi module u slotove:",
    pairs: [
      { left: "Slot 1 (Kanal A)", right: "5." },
      { left: "Slot 2 (Kanal B)", right: "6." },
      { left: "Slot 3 (Kanal A)", right: "5." },
      { left: "Slot 4 (Kanal B)", right: "6." }
    ],
    correct: [],
    explanation: "Jbg ovaj zadatak se je tesko implementirati (moze da se uradi i 6 5 6 5), ali pogledajte specifikacije, u kalnal A se uglavnom stavlja bolje, takodje necemo stavljati nigde ddr3, a necemo ni mesati, najbolje samo zapamtiti ovaj zadatak ako ne razumete.",
    image: "slike/41.png"
  },

  // ── 42 (Hardver – matching) ─────────────────────────────────────
  {
    id: 42,
    category: "hardver",
    type: "matching",
    question: "42. Poveži svaki standard magistrale sa odgovarajućom brzinom prenosa (za neiskorišćene brzine stoji X):",
    pairs: [
      { left: "PCI-E 2.0 (po jednoj stazi)", right: "500 MB/s" },
      { left: "SATA 3.0",                    right: "600 MB/s" },
      { left: "USB 3.2 Gen2",                right: "10 Gbps" },
      { left: "PCI-E 3.0 (po četiri staze)", right: "3,938 GB/s (~4 GB/s)" }
    ],
    correct: [],
    explanation: "PCI-E 2.0 ×1 = 500MB/s. SATA 3.0 = 600MB/s. USB 3.2 Gen2 = 10Gbps. PCI-E 3.0 ×4 = ~4GB/s. Brzine 7,877GB/s (~8GB) i 5Gbps nisu u ponuđenim standardima — za njih se upisuje X.",
    image: "slike/42.png"
  },

  // ── 43 (Hardver – matching) ─────────────────────────────────────
  {
    id: 43,
    category: "hardver",
    type: "matching",
    question: "43. Dati su simptomi kvarova i lista prvih koraka koje treba preduzeti. Na osnovu slike, poveži svaki simptom sa prvim korakom koji bi preduzeo:",
    pairs: [
      { left: "1. Računar se pregreva i isključuje", right: "Proveriti rad ventilatora i ocistiti" },
	  { left: "2. Glasni i neobični zvuci kliktanja dolaze iz kućišta", right: "Proveriti da li ima stranih tela u ventilatorima i da li hard diskovi možda otkazuju" },
	  { left: "3. Napajanje računara je postavljeno ali se računar uporno gasi", right: "Multimetrom testirati napajanje" },
	  { left: "4. Nedavno instalirani memorijski modul se ne vidi", right: "Glasni i neobični zvuci kliktanja dolaze iz kućišta" }
    ],
    correct: [],
    explanation: "Dijagnostika po simptomima: nema struje → napajanje/kabl. Nema slike → GPU/kabl monitora. Pregrevanje → hlađenje. Boot greška → BIOS/disk. Zamrzavanje → RAM test. Konkretni parovi zavise od tabele na slici u priručniku.",
    image: ""
  },

  // ── 44 (Hardver – matching) ─────────────────────────────────────
  {
    id: 44,
    category: "hardver",
    type: "matching",
    question: "44. Poveži boju provodnika ATX napajanja sa naponom koji se javlja na njemu:",
    pairs: [
      { left: "Žuta",   right: "+12V" },
      { left: "Crvena", right: "+5V" },
      { left: "Narandžasta", right: "+3,3V" },
      { left: "Crna",   right: "GND (0V)" },
      { left: "Plava",  right: "-12V" },
      { left: "Zelena", right: "PS_ON (signal za uključivanje)" }
    ],
    correct: [],
    explanation: "ATX standard boja provodnika: žuta=+12V (motori, GPU), crvena=+5V (USB, logika), narandžasta=+3,3V (RAM, chipset), crna=GND, plava=-12V (retko korišćena), zelena=PS_ON signal koji softverski uključuje napajanje.",
    image: ""
  },

  // ── 45 (Hardver – matching) ─────────────────────────────────────
  {
    id: 45,
    category: "hardver",
    type: "matching",
    question: "45. Na slici je šematski prikaz A/D konverzije zvučne kartice. Poveži svaki korak konverzije sa brojem bloka sa slike:",
    pairs: [
      { left: "1. blok", right: "Odabiranje (Sampling) — merenje amplitude analognog signala u jednakim vremenskim intervalima" },
      { left: "2. blok", right: "Kvantizacija — dodeljivanje diskretne numeričke vrednosti svakom odabranom uzorku" },
      { left: "3. blok", right: "Kodiranje — pretvaranje kvantizovanih vrednosti u binarni (digitalni) zapis" }
    ],
    correct: [],
    explanation: "A/D konverzija se odvija u tri koraka: (1) Sampling — uzorkovanje analognog signala u diskretnim vremenskim trenucima, (2) Kvantizacija — mapiranje na diskretne nivoe, (3) Kodiranje — binarni zapis. Frekvencija uzorkovanja CD kvaliteta je 44.100 Hz.",
    image: "slike/45.png"
  },

  // ── 46 (Hardver – matching) ─────────────────────────────────────
  {
  id: 46,
  category: "hardver",
  type: "matching",
  question: "46. Na levoj strani navedene su kombinacije tastera na tastaturi a na desnoj funkcije koje obavljaju. Na liniji ispred funkcije upisati redni broj kombinacije tastera koja je obavlja.",
  pairs: [
    { left: "Windows+M", right: "Minimizuje sve otvorene prozore" },
    { left: "Alt+Tab", right: "Kretanje iz jedne otvorene aplikacije u drugu" },
    { left: "Alt+Prtsc", right: "Kopira sadržaj aktivnog prozora u Clipboard" },
    { left: "Ctrl+X", right: "Cut – pri premeštanju fajlova i foldera" },
    { left: "Windows+E", right: "Otvara program File Explorer" },
    { left: "Shift+Alt", right: "Prelazak na drugi jezik na tastaturi" }
  ],
  correct: [],
  explanation: "Windows+M minimizuje sve otvorene prozore. Alt+Tab služi za prebacivanje između otvorenih aplikacija. Alt+Prtsc kopira aktivni prozor u Clipboard. Ctrl+X koristi se za Cut operaciju pri premeštanju fajlova i foldera. Windows+E otvara File Explorer. Shift+Alt menja aktivni jezik tastature.",
  image: ""
},

  {
  id: 47,
  category: "hardver",
  type: "matching",
  question: "47. Na slici je blok šema savremenog računarskog sistema. Brojevima su označeni nepoznati elementi. Na desnoj strani navedeni su opisi (ili imena) elemenata računarskog sistema. Na liniji ispred opisa/imena elementa upisati broj pozicije tog elementa u blok šemi. Ako se element ne pojavljuje u blok šemi upisati X.",
  pairs: [
    { left: "Matična ploča", right: "X" },
    { left: "Obavlja operacije korišćenjem instrukcije", right: "3" },
    { left: "Operativna (radna) memorija", right: "4" },
    { left: "Severni most", right: "1" },
    { left: "Južni most", right: "2" }
  ],
  correct: [],
  explanation: "U blok šemi broj 1 predstavlja severni most, broj 2 južni most, broj 3 procesor koji obavlja operacije korišćenjem instrukcija, a broj 4 operativnu memoriju. Matična ploča nije posebno prikazana u šemi pa je odgovor X.",
  image: ""
},

  // ── 48 (Hardver – matching) ─────────────────────────────────────
  {
    id: 48,
    category: "hardver",
    type: "matching",
    question: "48. Poređaj memorije računarskog sistema prema brzini (1 = najbrža):",
    pairs: [
      { left: "1 — najbrža",  right: "Registri procesora" },
      { left: "2",            right: "Ugrađeni L1 keš na procesoru" },
      { left: "3",            right: "Spoljašnji L2 keš na procesoru" },
      { left: "4",            right: "Operativna memorija (RAM)" },
      { left: "5",            right: "Hard disk (interni)" },
      { left: "6 — najsporija", right: "Eksterni hard disk" }
    ],
    correct: [],
    explanation: "Hijerarhija memorije po brzini: Registri (ps) → L1 keš (~1ns) → L2 keš (~5ns) → RAM (~50ns) → SSD/HDD (~ms) → Eksterni disk. Što je memorija brža, to je manja i skuplja. Registri su direktno u CPU-u.",
    image: ""
  },

  // ── 49 (Hardver – matching) ─────────────────────────────────────
  {
    id: 49,
    category: "hardver",
    type: "matching",
    question: "49. Poveži svaki uređaj sa odgovarajućim tipom (ulazni ili izlazni):",
    pairs: [
      { left: "Monitor",   right: "Izlazni uređaj" },
      { left: "Štampač",   right: "Izlazni uređaj" },
      { left: "Skener",    right: "Ulazni uređaj" },
      { left: "Ploter",    right: "Izlazni uređaj" },
      { left: "Zvučnik",   right: "Izlazni uređaj" },
      { left: "Tastatura", right: "Ulazni uređaj" },
      { left: "Miš",       right: "Ulazni uređaj" },
      { left: "Mikrofon",  right: "Ulazni uređaj" }
    ],
    correct: [],
    explanation: "Ulazni uređaji šalju podatke ka računaru: tastatura, miš, skener, mikrofon, veb kamera. Izlazni uređaji primaju podatke iz računara: monitor, štampač, ploter, zvučnik. Neki uređaji su kombinovani (touchscreen, headset).",
    image: ""
  },

  // ── 50 (Hardver – matching) ─────────────────────────────────────
  {
  id: 50,
  category: "hardver",
  type: "matching",
  question: "50. Na slici je blok šema delova matične ploče. Brojevima su označene magistrale. Na desnoj strani navedeni su tipovi magistrala podeljeni prema položaju u odnosu na procesor i prema brzini. Na liniji ispred tipa magistrale upisati brojeve magistrala sa slike koji odgovaraju tom tipu.",
  pairs: [
    { left: "1", right: "Spoljašnja brža magistrala" },
    { left: "2", right: "Spoljašnja brža magistrala" },
    { left: "3", right: "Spoljašnja sporija magistrala" },
    { left: "4", right: "Unutrašnja magistrala" },
    { left: "5", right: "Spoljašnja brža magistrala" },
    { left: "6", right: "Spoljašnja sporija magistrala" }
  ],
  correct: [],
  explanation: "Magistrala označena brojem 4 predstavlja unutrašnju magistralu između procesora i severnog mosta. Brojevi 1, 2 i 5 predstavljaju spoljašnje brže magistrale povezane sa memorijom i grafičkim podsistemom. Brojevi 3 i 6 predstavljaju sporije spoljašnje magistrale povezane sa perifernim uređajima kao što su USB, Ethernet i hard disk.",
  image: "slike/50.png"
},

  // ── 51 (Hardver – matching) ─────────────────────────────────────
  {
    id: 51,
    category: "hardver",
    type: "matching",
    question: "51. Na slici je blok šema matične ploče. Poveži svaki element matične ploče sa brojem sa slike:",
    pairs: [
      { left: "PCI slot",   right: "1" },
      { left: "Procesor",   right: "2" },
      { left: "AGP slot",   right: "3" }
    ],
    correct: [],
    explanation: "PCI (Peripheral Component Interconnect) slot je za proširenja (zvučne kartice, mrežne kartice). CPU socket je za procesor. AGP (Accelerated Graphics Port) je stariji slot specijalno namenjen grafičkim karticama, danas zamenjen PCIe.",
    image: "slike/51.png"
  },


  // ── 141 (OS – matching) ─────────────────────────────────────────
  {
  id: 141,
  category: "os",
  type: "matching",
  question: "141. Na računaru na kom je instaliran operativni sistem Windows otkazao je sistemski hard disk. Prilikom instalacije i konfigurisanja operativnog sistema napravljena je rezervna kopija stanja sistema (bekap) i smeštena na drugi hard disk na tom računaru. Potrebno je navesti redosled radnji koje treba obaviti da bi se računar vratio u stanje koje je sačuvano bekapom. Prva radnja treba da ima redni broj 1, druga redni broj 2, itd.",
  pairs: [
    { left: "1", right: "Otkačiti neispravan hard disk" },
    { left: "2", right: "Povezati novi hard disk" },
    { left: "3", right: "Ubaciti instalacioni disk u CD uređaj" },
    { left: "4", right: "Pokrenuti instalaciju operativnog sistema" },
    { left: "5", right: "Izabrati repair (repair) prilikom instalacije" },
    { left: "6", right: "Izabrati odgovarajući bekap sa spiska odgovarajućih bekapa" }
  ],
  correct: [],
  explanation: "Najpre je potrebno ukloniti neispravan hard disk i povezati novi. Nakon toga ubacuje se instalacioni disk i pokreće instalacija sistema. Tokom instalacije bira se opcija repair kako bi se omogućio oporavak sistema iz rezervne kopije, a zatim se bira odgovarajući bekap.",
},

  {
  id: 143,
  category: "os",
  type: "matching",
  question: "143. Slika predstavlja audio portove na matičnoj ploči. Svaki port se po standardu izrađuje tačno određene boje. Desno pored slike navedene su boje. Na liniji ispred boje napisati broj porta koji je prilikom izrade obojen tom bojom. Ako se neka od ponuđenih boja ne koristi za portove na slici, upisati X.",
  pairs: [
    { left: "1", right: "roze" },
    { left: "2", right: "plava" },
    { left: "3", right: "zelena" },
    { left: "X", right: "siva" }
  ],
  correct: [],
  explanation: "Roze audio port koristi se za mikrofon, plavi za line-in ulaz, a zeleni za izlaz zvuka prema zvučnicima ili slušalicama. Siva boja se ne koristi za prikazane portove.",
  image: "slike/143.png"
},

  // ── 147 (OS – matching) ─────────────────────────────────────────
  {
    id: 147,
    category: "os",
    type: "matching",
    question: "147. Na slici je konfiguracioni prozor za mrežne parametre sa poljima označenim brojevima. Poveži ime mrežnog parametra sa brojem polja sa slike:",
    pairs: [
      { left: "IP adresa",  right: "1" },
      { left: "Subnet maska (SM)", right: "2" },
      { left: "Default gateway (DG)", right: "3" },
      { left: "DNS1 (primarni DNS)", right: "4" },
      { left: "DNS2 (sekundarni DNS)", right: "5" }
    ],
    correct: [],
    explanation: "Mrežna konfiguracija statičke IP adrese zahteva: IP adresu (identifikuje uređaj u mreži), Subnet masku (određuje veličinu podmreže), Default gateway (adresa rutera za komunikaciju van LAN-a), primarni i sekundarni DNS server za razrešavanje imena.",
    image: "slike/147.png"
  },

  // ── 196 (Održavanje – matching) ─────────────────────────────────
  {
  id: 196,
  category: "odrzavanje",
  type: "matching",
  question: "196. Na levoj strani su dati nazivi pojmova, a na desnoj strani njihova objašnjenja. Na liniji pored objašnjenja upisati broj njemu odgovarajućeg pojma.",
  pairs: [
    { left: "Vremenska funkcija, definisana kao uslovna verovatnoća da će sistem raditi korektno u intervalu [t1,t2] pod pretpostavkom da je radio korektno u trenutku t1", right: "Pouzdanost (reliability)" },
    { left: "Vremenska funkcija, definisana kao verovatnoća da \"pokvareni\" sistem može biti doveden u operativno stanje unutar određenog vremenskog perioda t", right: "Popravljivost (serviceability)" },
    { left: "Vremenska funkcija, definisana kao verovatnoća da sistem radi korektno i da je na raspolaganju da izvrši svoje funkcije u vremenskom trenutku t", right: "Raspoloživost (availability)" },
    { left: "Dodavanje informacija podacima u cilju omogućavanja detekcije, maskiranja, ili tolerancije kvara", right: "Redundantnost (recoundancy)" }
  ],
  correct: [],
  explanation: "Pouzdanost predstavlja verovatnoću ispravnog rada sistema tokom vremena. Popravljivost opisuje mogućnost vraćanja sistema u operativno stanje. Raspoloživost označava verovatnoću da je sistem funkcionalan i spreman za rad u određenom trenutku. Redundantnost predstavlja dodavanje dodatnih informacija ili komponenti radi tolerancije na kvarove.",
  image: ""
	},

    {
  id: 219,
  category: "dokumentacija",
  type: "multiple",
  question: "219. Tehničko lice koje izrađuje dokumentaciju popunilo je Excel dokument o podacima radnika u firmi. Nakon određenog vremena primećena je štamparska greška: radnik je napisanog radnika na više mesta u dokumentu. Najjednostavnije je prepraviti grešku opcijom u programu:",
  answers: [
    "Sort & Filter",
    "Find & Select",
    "Merge & Center",
    "Wrap Text"
  ],
  correct: 1,
  explanation: "Opcija Find & Select omogućava pronalaženje i zamenu pogrešno unetog teksta na više mesta u Excel dokumentu.",
  image: ""
},
  // ── 220 (id 220, originalno 219 – Dokumentacija – multiple) ────────────────────────────── CLAUDE ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 {
    id: 220,
    category: "dokumentacija",
    type: "multiple",
    question: "220. Blok dijagram računarskog sistema u kom je podignut domen kontroler, kreirani su korisnici, grupe, organizacione jedinice i polise, najbolje je u programu Visio kreirati pomoću templejtа:",
    answers: [
      "Timeline",
      "Home Plan",
      "Block Diagram",
      "Active Directory",
      "Calendar"
    ],
    correct: 3,
    explanation: "Active Directory templejt se nalazi u sekciji 'Network' ili 'Computer and Network' u biblioteci templejta programa Visio i sadrži skupove oblika za vizuelno predstavljanje mreže, uključujući domen kontrolere.",
    image: ""
  },

  // ── 221 (id 221, originalno 220 – Dokumentacija – multiple) ──────────────────────────────
  {
    id: 221,
    category: "dokumentacija",
    type: "multiple",
    question: "221. Na Slici 1 prikazano je stanje tabele, a na Slici 2 sortiranje koje će biti primenjeno. Nakon sortiranja tabela će izgledati onako kako je predstavljeno na slici:",
    answers: [
      "Slici 3",
      "Slici 4",
      "Slici 5"
    ],
    correct: 2,
    explanation: "Sortiranje po koloni Naziv abecednim redom (A→Z) daje redosled prikazan na Slici 5.",
    image: "slike/221.png"
  },

  // ── 222 (id 222, originalno 221 – Dokumentacija – multiple) ──────────────────────────────
  {
    id: 222,
    category: "dokumentacija",
    type: "multiple",
    question: "222. Jedan od naslova nije se pojavio unutar sadržaja koji je automatski generisan za dokument u Word-u. Uzrok tog problema je:",
    answers: [
      "Automatsko generisanje sadržaja ne radi ispravno",
      "Font odabranih naslova nije dobro formatiran",
      "Naslov koji nedostaje nije formatiran kao naslov",
      "Položaj naslova unutar stranice nije dobro odabran"
    ],
    correct: 2,
    explanation: "Word automatski generiše sadržaj samo od pasusa formatiranih stilovima naslova (Heading 1, 2...). Ako naslov nije formatiran tim stilom, neće biti uključen.",
    image: ""
  },

  // ── 223 (id 223, originalno 222 – Dokumentacija – multiple) ──────────────────────────────
  {
    id: 223,
    category: "dokumentacija",
    type: "multiple",
    question: "223. Analizom sledećeg teksta utvrđeno je da tekst nije napisan pravilno. Da bi tekst bio pravilno napisan potrebno je boldovan tekst zameniti sledećim ispravnim formatom:",
    answers: [
      "razmak( jedan klik na SPACE taster na tastaturi ),nakon toga",
      "razmak(jedan klik na SPACE taster na tastaturi), nakon toga",
      "razmak ( jedan klik na SPACE taster na tastaturi ) , nakon toga",
      "razmak (jedan klik na SPACE taster na tastaturi), nakon toga"
    ],
    correct: 3,
    explanation: "Ispravno pravilo: bez razmaka između reči i otvorene zagrade, razmak posle zatvorene zagrade, bez razmaka pre zareza.",
    image: ""
  },

  // ── 224 (id 224, originalno 223 – Dokumentacija – multiple) ──────────────────────────────
  {
    id: 224,
    category: "dokumentacija",
    type: "multiple",
    question: "224. Ispravan način prenošenja nacrtanih objekata iz programa za crtanje (Visio) u program za obradu teksta (Word) je:",
    answers: [
      "Selektovati potrebne objekte u programu za crtanje, pritisnuti CTRL+V na tastaturi, izabrati poziciju objekata u programu za obradu teksta, pritisnuti CTRL+C na tastaturi",
      "Selektovati potrebne objekte u programu za crtanje, pritisnuti CTRL+C na tastaturi, izabrati poziciju objekata u programu za obradu teksta, pritisnuti CTRL+V na tastaturi",
      "Snimiti fajl u programu za crtanje, izabrati poziciju objekta u programu za obradu teksta i izabrati insertovanje fajla, izabrati snimljeni fajl i pritisnuti CTRL+O"
    ],
    correct: 1,
    explanation: "Standardni postupak kopiranja: prvo CTRL+C (kopiranje), pa CTRL+V (lepljenje) na željenom mestu.",
    image: ""
  },

  // ── 225 (id 225, originalno 224 – Dokumentacija – multiple) ──────────────────────────────
  {
    id: 225,
    category: "dokumentacija",
    type: "multiple",
    question: "225. Objekat na slici je nacrtan u razmeri 1:100. Koja vrednost predstavlja dužinu kotne linije na slici?",
    answers: [
      "3,2cm",
      "0,32cm",
      "32cm",
      "0,32m"
    ],
    correct: 0,
    explanation: "3,2m = 320cm. U razmeri 1:100: 320cm / 100 = 3,2cm.",
    image: "slike/225.png"
  },

  // ── 226 (id 226, originalno 225 – Dokumentacija – multiple) ──────────────────────────────
  {
    id: 226,
    category: "dokumentacija",
    type: "multiple",
    question: "226. Veličina objekta prikazanog na slici u prirodi je 14,5m x 10m. Objekat treba nacrtati u razmeri 1:50. Potrebno je odabrati sledeću dimenziju papira:",
    answers: [
      "A3 420x297mm – okvir crteža i kotiranje",
      "A4 297x210mm",
      "A5 210x148mm",
      "B5 250x176mm"
    ],
    correct: 0,
    explanation: "14500mm / 50 = 290mm, 10000mm / 50 = 200mm. Format A3 (420x297mm) jedini može da primi crtež dimenzija 290x200mm.",
    image: "slike/226.png"
  },

  // ── 227 (id 227, originalno 226 – Hardver – multiple) ──────────────────────────────
  {
    id: 227,
    category: "dokumentacija",
    type: "multiple",
    question: "227. Na električnoj šemi ako se položaj potenciometra P (vrednost potenciometra 1 KOhm) iz položaja 1 prebaci u položaj 2. Šta se dešava sa svetlećom diodom D?",
    answers: [
      "Dioda svetli jačim intezitetom",
      "Intezitet svetlosti diode zavisi od programa u mikrokontroleru",
      "Dioda neće svetleti"
    ],
    correct: 1,
    explanation: "Potenciometar je vezan na ulaz mikrokontrolera, pa intezitet LED diode zavisi od programa unutar mikrokontrolera.",
    image: "slike/227.png"
  },

  // ── 228 (id 228, originalno 227 – Hardver – multiple) ──────────────────────────────
  {
    id: 228,
    category: "dokumentacija",
    type: "multiple",
    question: "228. Na prikazanoj šemi DIN je digitalni ulaz mikroračunara. Šta se događa kada je taster otvoren?",
    answers: [
"Otpornik R na digitalnom ulazu obezbeđuje logičku '0'",
      "Otpornik R na digitalnom ulazu obezbeđuje logičku '1'",
      "Otpornik R na digitalnom ulazu obezbeđuje pad napona"
    ],
    correct: 0,
    explanation: "Kada je taster otvoren, otpornik R vuče signal ka GND (pull-down), čime se na digitalnom ulazu obezbeđuje logička '0'.",
    image: "slike/228.png"
  },

  // ── 229 (id 229, originalno 228 – Hardver – multiple) ──────────────────────────────
  {
    id: 229,
    category: "dokumentacija",
    type: "multiple",
    question: "229. Na prikazanoj šemi DIN je digitalni ulaz mikrokontrolera. Šta se događa kada je taster otvoren? (kada taster nije pritisnut)",
    answers: [
      "Otpornik R na digitalnom ulazu obezbeđuje logičku '0'",
      "Otpornik R na digitalnom ulazu obezbeđuje logičku '1'",
      "Otpornik R na digitalnom ulazu obezbeđuje pad napona"
    ],
    correct: 1,
    explanation: "Kada je taster otvoren, otpornik R vuče signal ka VCC (pull-up), čime se na digitalnom ulazu obezbeđuje logička '1'.",
    image: "slike/229.png"
  },

  // ── 230 (id 230, originalno 229 – Dokumentacija – multi) ──────────────────────────────
  {
    id: 230,
    category: "dokumentacija",
    type: "multi",
    question: "230. Svaki projekat pojedinačne oblasti sastoji se od sledećih delova:",
    answers: [
      "opšta dokumentacija",
      "idejna dokumentacija",
      "grafička dokumentacija",
      "tekstualna dokumentacija",
      "numerička dokumentacija",
      "finansijska dokumentacija",
      "pripremna dokumentacija",
      "završna dokumentacija"
    ],
    correct: [0, 2, 3, 4],
    explanation: "Projekat se sastoji od: opšte, grafičke, tekstualne i numeričke dokumentacije.",
    image: ""
  },

  // ── 231 (id 231, originalno 230 – Dokumentacija – multi) ──────────────────────────────
  {
    id: 231,
    category: "dokumentacija",
    type: "multi",
    question: "231. Tekstualni deo projekta čine:",
    answers: [
      "osnove objekta",
      "tehnički opis",
      "proračuni",
      "tehnički uslovi"
    ],
    correct: [1, 2, 3],
    explanation: "Tekstualni deo projekta čine tehnički opis, proračuni i tehnički uslovi.",
    image: ""
  },

  // ── 232 (id 232, originalno 231 – Dokumentacija – multi) ──────────────────────────────
  {
    id: 232,
    category: "dokumentacija",
    type: "multi",
    question: "232. Idejno rešenje treba da sadrži:",
    answers: [
      "prikaz planirane koncepcije objekta",
      "crteže u razmeri 1:50",
      "šeme i detalje objekta",
      "vrstu i namenu građevinskog objekta"
    ],
    correct: [0, 3],
    explanation: "Idejno rešenje sadrži prikaz planirane koncepcije i vrstu i namenu objekta — bez detaljnih crteža i šema.",
    image: ""
  },

  // ── 233 (id 233, originalno 232 – Dokumentacija – multi) ──────────────────────────────
  {
    id: 233,
    category: "dokumentacija",
    type: "multi",
    question: "233. Elektronski dokument jeste dokument nastao izvorno u elektronskoj formi, u odgovarajućem elektronskom formatu koji je elektronski potpisan kvalifikovanim elektronskim potpisom. Zaokruži odgovarajuće elektronske formate koji se odnose na elektronski dokument.",
    answers: [
      ".pdf",
      ".dwg",
      ".dot",
      ".png",
      ".dwf",
      ".dwfx",
      ".ppt",
      ".jpg"
    ],
    correct: [0, 1, 4, 5],
    explanation: "Elektronski dokumenti u tehničkom smislu koriste formate: .pdf, .dwg, .dwf, .dwfx (drawing formati).",
    image: ""
  },

  // ── 234 (id 234, originalno 233 – Dokumentacija – multi) ──────────────────────────────
  {
    id: 234,
    category: "dokumentacija",
    type: "multi",
    question: "234. U osnovne elemente tehničkog crteža ne spadaju:",
    answers: [
      "skica tehničkog crteža",
      "okvir crteža",
      "radni zadatak",
      "zaglavlje"
    ],
    correct: [0, 2],
    explanation: "Skica tehničkog crteža i radni zadatak nisu osnovni elementi tehničkog crteža.",
    image: ""
  },

  // ── 235 (id 235, originalno 234 – Dokumentacija – multi) ──────────────────────────────
  {
    id: 235,
    category: "dokumentacija",
    type: "multi",
    question: "235. Koje vrste instalacija u elektrotehnici je potrebno definisati u tehničkoj dokumentaciji?",
    answers: [
      "elektroenergetsku instalaciju",
      "numeričku dokumentaciju",
      "gromobransku dokumentaciju",
      "idejnu dokumentaciju",
      "telekomunikacionu instalaciju",
      "signalnu dokumentaciju",
      "grafičku dokumentaciju",
      "tekstualnu dokumentaciju"
    ],
    correct: [0, 2, 4, 5],
    explanation: "U tehničkoj dokumentaciji definišu se: elektroenergetska, gromobranska, telekomunikaciona i signalna instalacija.",
    image: ""
  },

  // ── 236 (id 236, originalno 235 – Dokumentacija – multi) ──────────────────────────────
  {
    id: 236,
    category: "dokumentacija",
    type: "multi",
    question: "236. Za izradu korisničkog uputstva treba koristiti:",
    answers: [
      "LibreOffice Writer",
      "DaVinci Resolve",
      "HitFilm Express",
      "Microsoft Word",
      "Adobe Premier Rush",
      "Google Spreadsheets"
    ],
    correct: [0, 3],
    explanation: "Korisnička uputstva se izrađuju u programima za obradu teksta: LibreOffice Writer i Microsoft Word.",
    image: ""
  },

  {
    id: 237,
    category: "dokumentacija",
    type: "input",
    question: "237. Na slici je prikazana kotirana prostorija. Dimenzije su napisane u cm. Dopuniti: Dimenzija prostorije je ___ x ___ cm, širina vrata je ___ cm, širina prozora je ___ cm, debljina zida je ___ cm.",
    correct: ["243, 230, 106, 122, 10", "243, 210, 106, 122, 10", "223, 230, 106, 122, 10", "223, 210, 106, 122, 10"],
    explanation: "Dimenzija prostorije je 243 (223) x 230 (210) cm, širina vrata je 106 cm, širina prozora je 122 cm, debljina zida je 10 cm.",
    image: "slike/237.png"
  },

  // ── 238 (id 238, originalno 237 – Dokumentacija – input) ──────────────────────────────
  {
    id: 238,
    category: "dokumentacija",
    type: "input",
    question: "238. Na izvoru jednosmernog napona vršena su merenja. Rezultati: U=10V (7 puta), U=10,1V (4 puta), U=9,9V (3 puta), U=10,2V (2 puta), U=9,8V (2 puta), U=10,3V (1 put), U=9,7V (1 put). Kolika je srednja vrednost izlaznog napona (u V, zaokruženo na 3 decimale)?",
    correct: ["10,005", "10.005", "10,005V", "10.005V"],
    explanation: "Us = Σ(Ui × Ni) / ΣNi = (10×7 + 10,1×4 + 9,9×3 + 10,2×2 + 9,8×2 + 10,3×1 + 9,7×1) / 20 = 200,1 / 20 = 10,005V",
    image: "slike/238.png"
  },

  // ── 239 (id 239, originalno 238 – Dokumentacija – input) ──────────────────────────────
  {
    id: 239,
    category: "dokumentacija",
    type: "input",
    question: "239. Na izvoru jednosmernog napona vršena su merenja. Rezultati: U=10,4V (1 put), U=9,6V (1 put), U=10,0V (2 puta), U=10,1V (4 puta), U=10,3V (2 puta). Koliko iznosi napon pri čijem merenju je napravljena najveća greška?",
    correct: ["9,6", "9.6", "9,6V", "9.6V"],
    explanation: "Us = (10,4×1 + 9,6×1 + 10,0×2 + 10,1×4 + 10,3×2) / 10 = 100 / 10 = 10,0V. Najveće odstupanje je za 9,6V (greška 0,4V).",
    image: "slike/239.png"
  },

  // ── 240 (id 240, originalno 239 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 240,
    category: "dokumentacija",
    type: "matching",
    question: "240. Na slici su brojevima označeni delovi tehničkog crteža. Na linijama pored naziva delova tehničkog crteža upiši broj elementa sa slike koji predstavlja.",
    pairs: [
      { left: "Deo crteža koji označava stvarnu izmerenu veličinu objekta ispisanu iznad kotne linije", right: "Kotni broj" },
      { left: "Deo crteža koji pokazuje smer i kraj kotne linije", right: "Strelica" },
      { left: "Linija koja spaja strelice i iznad koje se upisuje kotni broj", right: "Kotna linija" },
      { left: "Linija koja polazi od ivice objekta i na kojoj završava kotna linija sa strelicom", right: "Pomoćna kotna linija" }
    ],
    correct: [],
    explanation: "Kotni broj (4) – vrednost mere; Strelica (3) – kraj kotne linije; Kotna linija (2) – nosi kotni broj; Pomoćna kotna linija (1) – polazi od ivice objekta.",
    image: "slike/240.png"
  },

  // ── 241 (id 241, originalno 240 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 241,
    category: "dokumentacija",
    type: "matching",
    question: "241. U tabeli su pojedinačno označeni brojevima formati papira, a na desnoj strani su date dimenzije papira u milimetrima. Na liniji pored dimenzije papira upisati broj odgovarajućeg formata papira iz tabele.",
    pairs: [
      { left: "Format papira A0 (broj 5 u tabeli) – najveći standardni format", right: "841 x 1188" },
      { left: "Format papira A3 (broj 2 u tabeli) – dvostruko veći od A4", right: "297 x 420" },
      { left: "Format papira A1 (broj 4 u tabeli) – dvostruko veći od A2", right: "594 x 840" },
      { left: "Format papira A2 (broj 3 u tabeli) – dvostruko veći od A3", right: "420 x 594" },
      { left: "Format papira A4 (broj 1 u tabeli) – najčešće korišćen format", right: "210 x 297" }
    ],
    correct: [],
    explanation: "ISO 216 standard: A4=210×297, A3=297×420, A2=420×594, A1=594×840, A0=841×1188. Svaki veći format je dvostruko veći od prethodnog.",
    image: ""
  },

  // ── 242 (id 242, originalno 241 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 242,
    category: "dokumentacija",
    type: "matching",
    question: "242. U tabeli su pojedinačno označeni brojevima vrste linija, a na desnoj strani su date njihove namene. Na liniji pored namene upisati broj odgovarajuće vrste linije iz tabele.",
    pairs: [
      { left: "Puna debela linija (1) – najdeblji tip linije na tehničkom crtežu", right: "Konture i nezaključene ivice" },
      { left: "Puna tanka linija (2) – tanja varijanta pune linije", right: "Kotne i pomoćne linije, pokazne linije, linije šrafure i konture zaokrenutig preseka" },
      { left: "Isprekidana tanka linija (3) – linija sastavljena od crtica", right: "Crtanje zaključenih kontura i ivica" },
      { left: "Crta-tačka-crta, tanka (4) – naizmenično crtica i tačka", right: "Osne linije, simetrale i putanje" }
    ],
    correct: [],
    explanation: "Puna debela (1): vidljive konture; Puna tanka (2): kotiranje i šrafure; Isprekidana (3): skrivene ivice; Crta-tačka (4): ose simetrije.",
    image: "slike/242.png"
  },

  // ── 243 (id 243, originalno 242 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 243,
    category: "dokumentacija",
    type: "matching",
    question: "243. U tabeli su pojedinačno označeni brojevima simboli električnih komponenti, a na desnoj strani su dati nazivi električnih komponenti. Na liniji pored naziva električne komponente upisati broj odgovarajućeg simbola.",
    pairs: [
      { left: "Simbol broj 2 – dioda sa oznakom loma na anodi", right: "Zener dioda" },
      { left: "Simbol broj 1 – dioda sa oznakom svetlosti (strelice od komponente)", right: "LE dioda" },
      { left: "Simbol broj 3 – dioda sa oznakom svetlosti (strelice ka komponenti)", right: "Fotodioda" }
    ],
    correct: [],
    explanation: "LED (1) emituje svetlost – strelice idu od diode; Fotodioda (3) prima svetlost – strelice idu ka diodi; Zener (2) ima karakteristični prelom na katodi.",
    image: "slike/243.png"
  },

  // ── 244 (id 244, originalno 243 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 244,
    category: "dokumentacija",
    type: "matching",
    question: "244. U tabeli su pojedinačno označeni brojevima simboli električnih komponenti, a na desnoj strani su dati nazivi tranzistora. Na liniji pored naziva električne komponente upisati broj odgovarajućeg simbola.",
    pairs: [
      { left: "Simbol broj 3 – tranzistor sa oznakom svetlosnih strelica ka bazi", right: "Fototranzistor" },
      { left: "Simbol broj 1 – tranzistor sa strelicom emitera koja pokazuje od baze", right: "NPN tranzistor" },
      { left: "Simbol broj 2 – tranzistor sa strelicom emitera koja pokazuje ka bazi", right: "PNP tranzistor" }
    ],
    correct: [],
    explanation: "NPN (1): strela emitera od baze; PNP (2): strela emitera ka bazi; Fototranzistor (3): strelice svetlosti ka bazi.",
    image: "slike/244.png"
  },

  // ── 245 (id 245, originalno 244 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 245,
    category: "dokumentacija",
    type: "matching",
    question: "245. U tabeli su pojedinačno označeni brojevima simboli električnih komponenti, a na desnoj strani su dati nazivi komponenti napajanja. Na liniji pored naziva električne komponente upisati broj odgovarajućeg simbola.",
    pairs: [
      { left: "Simbol broj 2 – izvor sa oznakama + i – polariteta", right: "DC napajanje" },
      { left: "Simbol broj 1 – više spojenih ćelija sa kratkim i dugim linijama", right: "Baterija" },
      { left: "Simbol broj 3 – izvor sa oznakom talasne linije (~)", right: "AC napajanje" }
    ],
    correct: [],
    explanation: "Baterija (1): serija kratkih i dugih linija; DC napajanje (2): + i – oznake; AC napajanje (3): talasna linija (~).",
    image: "slike/245.png"
  },

  // ── 246 (id 246, originalno 245 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 246,
    category: "dokumentacija",
    type: "matching",
    question: "246. Poređati korake za automatsko kreiranje sadržaja dokumenta u Word-u hronološkim redosledom.",
    pairs: [
      { left: "Korak koji se radi prvi – pre svega ostalog u dokumentu", right: "Označavanje brojeva stranica" },
      { left: "Korak koji se radi drugi – priprema strukture dokumenta", right: "Izbor i formatiranje naslova i podnaslova" },
      { left: "Korak koji se radi treći – pozicioniranje u dokumentu", right: "Postavljanje pokazivača na mesto gde se predviđa sadržaj" },
      { left: "Korak koji se radi četvrti – pristup funkciji u meniju", right: "Unutar References izabrati Table of Contents" },
      { left: "Korak koji se radi peti – završna podešavanja prikaza", right: "Izbor formata za prikazivanje sadržaja" }
    ],
    correct: [],
    explanation: "Redosled: 1) označiti stranice, 2) formatirati naslove, 3) postaviti kursor, 4) References → Table of Contents, 5) izabrati format.",
    image: ""
  },

  // ── 247 (id 247, originalno 246 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 247,
    category: "dokumentacija",
    type: "matching",
    question: "247. U tehničkoj dokumentaciji projekti su označeni rednim brojem i obavezno složeni u svesci prema utvrđenom redosledu. Potrebno je navesti tačan redosled projekata u svesci.",
    pairs: [
      { left: "Projekat koji dolazi na mesto 9 – uređenje spoljašnosti sa sinhron-planom", right: "Spoljno uređenje sa sinhron-planom instalacija i priključaka, pejzažna arhitektura i hortikultura" },
      { left: "Projekat koji dolazi na mesto 1 – osnova svakog objekta", right: "Arhitektura" },
      { left: "Projekat koji dolazi na mesto 2 – nosiva konstrukcija objekta", right: "Konstrukcija i drugi građevinski projekti" },
      { left: "Projekat koji dolazi na mesto 10 – poslednji, pripremni zemeljani radovi", right: "Pripremni radovi (rušenje, zemljani radovi, obezbeđenje temeljne jame)" },
      { left: "Projekat koji dolazi na mesto 3 – voda, kanalizacija, grejanje", right: "Hidrotehničke instalacije" },
      { left: "Projekat koji dolazi na mesto 5 – telekomunikacije i signalizacija", right: "Telekomunikacione i signalne instalacije" },
      { left: "Projekat koji dolazi na mesto 4 – električna energija", right: "Elektroenergetske instalacije" },
      { left: "Projekat koji dolazi na mesto 6 – mašinske instalacije", right: "Mašinske instalacije" },
      { left: "Projekat koji dolazi na mesto 8 – saobraćaj i signalizacija", right: "Saobraćaj i saobraćajna signalizacija" },
      { left: "Projekat koji dolazi na mesto 7 – tehnološki procesi", right: "Tehnologija" }
    ],
    correct: [],
    explanation: "Zakonski propisani redosled: 1-Arhitektura, 2-Konstrukcija, 3-Hidro, 4-Elektro, 5-Telekomunikacije, 6-Mašinske, 7-Tehnologija, 8-Saobraćaj, 9-Spoljno uređenje, 10-Pripremni radovi.",
    image: ""
  },

  // ── 248 (id 248, originalno 247 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 248,
    category: "dokumentacija",
    type: "matching",
    question: "248. Pri izradi projekta delovi projekta rade se tačnim redosledom. Potrebno je navesti redosled izrade pojedinih delova projekta.",
    pairs: [
      { left: "Deo projekta koji se izrađuje treći po redu – osnovna razrada", right: "Idejni projekat" },
      { left: "Deo projekta koji se izrađuje četvrti po redu – za dobijanje dozvole", right: "Projekat za građevinsku dozvolu" },
      { left: "Deo projekta koji se izrađuje drugi po redu – konceptualno rešenje", right: "Idejno rešenje" },
      { left: "Deo projekta koji se izrađuje peti po redu – detaljna razrada za gradnju", right: "Projekat za izvođenje" },
      { left: "Deo projekta koji se izrađuje prvi po redu – najopštiji nivo planiranja", right: "Generalni projekat" },
      { left: "Deo projekta koji se izrađuje šesti po redu – dokumentacija završenog stanja", right: "Projekat izvedenog stanja" }
    ],
    correct: [],
    explanation: "Redosled: 1-Generalni projekat, 2-Idejno rešenje, 3-Idejni projekat, 4-Projekat za građevinsku dozvolu, 5-Projekat za izvođenje, 6-Projekat izvedenog stanja.",
    image: ""
  },

  // ── 249 (id 249, originalno 248 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 249,
    category: "dokumentacija",
    type: "matching",
    question: "249. Na elektičnoj šemi prikazanoj na slici brojevima su označene električne komponente. Na linijama pored naziva električnih komponenata upiši broj električne komponente sa slike koju predstavljaju. Za neiskorišćene električne komponente staviti X.",
    pairs: [
      { left: "Komponenta sa slike označena brojem 1 – izvor jednosmerne struje sa više ćelija", right: "Baterija" },
      { left: "Komponenta sa slike označena brojem 2 – promenljivi otpornik sa tri izvoda", right: "Potenciometar" },
      { left: "Komponenta sa slike označena brojem 5 – svetleća dioda", right: "LE dioda" },
      { left: "Komponenta sa slike označena brojem 3 – veza sa zemljom", right: "Uzemljenje" },
      { left: "Komponenta sa slike označena brojem 4 – pasivna komponenta koja ograničava struju", right: "Otpornik" },
      { left: "Komponenta koje nema na šemi – oznaka X", right: "Izvor naizmeničnog napona" },
      { left: "Komponenta koje nema na šemi – oznaka X", right: "Fotodioda" }
    ],
    correct: [],
    explanation: "Na šemi su: 1-Baterija, 2-Potenciometar, 3-Uzemljenje, 4-Otpornik, 5-LE dioda. Izvor naizmeničnog napona i Fotodioda nisu prikazani (X).",
    image: "slike/249.png"
  },

  // ── 250 (id 250, originalno 249 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 250,
    category: "dokumentacija",
    type: "matching",
    question: "250. Predračun za nabavku komponenti opisan je slikom. Na levoj strani dati su izrazi za funkcije unutar ćelije u Excel-u, na desnoj strani date su ćelije za koje je potrebno odabrati funkciju odgovarajućeg formata. Na liniji ispred ćelije upisati redni broj njoj odgovarajuće funkcije.",
    pairs: [
      { left: "Funkcija =C2*D2 – množi količinu i cenu za prvu stavku (red 2)", right: "E2" },
      { left: "Funkcija nije ponuđena (X) – ćelija E3 ne zahteva ponuđenu funkciju", right: "E3" },
      { left: "Funkcija =C4*D4 – množi količinu i cenu za treću stavku (red 4)", right: "E4" },
      { left: "Funkcija =SUM(E2:E4) – sabira sve pojedinačne cene za ukupan iznos", right: "E6" }
    ],
    correct: [],
    explanation: "E2: =C2*D2 (količina × cena); E3: nema odgovarajuće funkcije (X); E4: =C4*D4; E6: =SUM(E2:E4) za ukupan zbir.",
    image: "slike/250.png"
  },

  // ── 251 (id 251, originalno 250 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 251,
    category: "dokumentacija",
    type: "matching",
    question: "251. Ćelija markirana sivom bojom u tabeli kreiranoj u Word-u (slika 1) formatirana je tako da joj sadržaj generiše funkcija opisana slikom 2. Na liniji ispred funkcije napiši redni broj rezultata koji odgovara izvršenju funkcije ako se primeni unutar markirane ćelije.",
    pairs: [
      { left: "Rezultat 2 (vrednost 9) – sabiranje vrednosti iznad markirane ćelije", right: "SUM(ABOVE)" },
      { left: "Rezultat 3 (vrednost 3) – sabiranje vrednosti levo od markirane ćelije", right: "SUM(LEFT)" },
      { left: "Rezultat 4 (vrednost 12) – sabiranje vrednosti ispod markirane ćelije", right: "SUM(BELOW)" },
      { left: "Rezultat 1 (vrednost 6) – sabiranje vrednosti desno od markirane ćelije", right: "SUM(RIGHT)" }
    ],
    correct: [],
    explanation: "SUM(ABOVE)=9, SUM(LEFT)=3, SUM(BELOW)=12, SUM(RIGHT)=6 – na osnovu vrednosti u tabeli sa slike.",
    image: "slike/251.png"
  },

  // ── 252 (id 252, originalno 251 – Dokumentacija – matching) ──────────────────────────────
  {
    id: 252,
    category: "dokumentacija",
    type: "matching",
    question: "252. U programu za crtanje nacrtan je model sistema sa mikroračunarem. Ovaj crtež treba prebaciti u Word dokument kao sliku. Napisati redosled koraka da se to uradi.",
    pairs: [
      { left: "Korak koji se radi sedmi – poslednji korak, ubacivanje u dokument", right: "Insertovati snimljenu sliku u Word dokument" },
      { left: "Korak koji se radi drugi – otvaranje programa za obradu slike", right: "Startovati program Paint" },
      { left: "Korak koji se radi četvrti – izbor dela slike koji je potreban", right: "Selektovati deo slike u Paint-u" },
      { left: "Korak koji se radi treći – lepljenje screenshot-a u Paint", right: "Pritisnuti CTRL+V na tastaturi" },
      { left: "Korak koji se radi peti – isecanje selektovanog dela", right: "Crop selektovanog dela slike u Paint-u" },
      { left: "Korak koji se radi prvi – snimanje ekrana sa crtežom", right: "Print screen nacrtanog modela sistema sa mikroračunarem" },
      { left: "Korak koji se radi šesti – čuvanje obrađene slike na disk", right: "Snimiti obrađenu sliku u Paint-u" }
    ],
    correct: [],
    explanation: "Redosled: 1-Print Screen, 2-Paint, 3-CTRL+V, 4-Selektovati, 5-Crop, 6-Snimiti, 7-Insertovati u Word.",
    image: "slike/252.png"
  }

  ];
