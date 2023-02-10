export class Esercizio {
	nome: string
	gif: string
	descrizione: string
	muscoli: string
	isFavourite: boolean

	constructor(nome: string, gif: string, descrizione: string, muscoli: string, isFavourite: boolean) {
		this.nome = nome
		this.gif = gif
		this.descrizione = descrizione
		this.muscoli = muscoli
		this.isFavourite = isFavourite
	}
}

export class SchedaEsercizio {
	esercizio: string
	_esercizio: Esercizio | undefined
	"tempo di recupero": string
	ripetizioni: string | Array<number>
	serie: string

	constructor(esercizio: string, tempo_di_recupero: string, ripetizioni: string, serie: string) {
		this.esercizio = esercizio
		this["tempo di recupero"] = tempo_di_recupero
		this.ripetizioni = ripetizioni
		this.serie = serie
	}
}

export class SchedaEsercizioTempo {
	esercizio: string
	_esercizio: Esercizio | undefined
	tempo: string

	constructor(esercizio: string, tempo: string) {
		this.esercizio = esercizio
		this.tempo = tempo
	}
}

export class Scheda {
	id: string
	nome: string
	gruppo_muscolare: string
	pic: string
	durata: string
	intensita: string
	sala: string
	esercizi: Array<SchedaEsercizio | SchedaEsercizioTempo>
	isFavourite: boolean

	constructor(isFavourite: boolean, id: string, nome: string, gruppo_muscolare: string, pic: string, esercizi: Array<SchedaEsercizio | SchedaEsercizioTempo>, durata: string, intensita: string, sala: string) {
		this.isFavourite = isFavourite
		this.id = id
		this.nome = nome
		this.gruppo_muscolare = gruppo_muscolare
		this.pic = pic
		this.esercizi = esercizi
		this.durata = durata
		this.intensita = intensita
		this.sala = sala
	}
}

export const esercizi = [{
	"nome": "Lat pulldown al cavo con un braccio",
	"gif": "5895.gif",
	"descrizione": "Da seduti, si tira verso di sé una maniglia sospesa in presa supina fino a raggiungere l'altezza del mento, quindi la si rilascia verso l'alto con controllo per una ripetizione. Questo esercizio può essere eseguito come parte di un allenamento di forza per la parte superiore del corpo.",
	"muscoli": "dorso",
}, {
	"nome": "Calf raises bilanciere",
	"gif": "barbell-standing-leg-calf-raise.jpg",
	"descrizione": "Posizionare il bilanciere al livello del trapezio, e posizionare la punta del piede sopra uno step aerobico, scendere sino a sentire il completo tiramento del muscolo e dopodichè spingere su usando la forza del piede",
	"muscoli": "polpacci",
}, {
	"nome": "Jumping jack",
	"gif": "jumping-jack-male.jpg",
	"descrizione": "Partire con le braccia e gambe chiuse, attaccate al corpo, effettuare un salto e divaricare sia gambe che braccia, sempre da questa posizione effettuare un altro salto e tornare nella posizione originale.",
	"muscoli": "cardio",
}, {
	"nome": "Panca piana bilanciere",
	"gif": "21889.gif",
	"descrizione": "Consiste nello sdraiarsi su una panca e premere il peso verso l'alto utilizzando un bilanciere. Durante la distensione su panca, si abbassa il peso all'altezza del petto, si aspetta un secondo e poi si preme verso l'alto estendendo le braccia.",
	"muscoli": "petto",
}, {
	"nome": "Military press bilanciere",
	"gif": "barbell-standing-military-press.jpg",
	"descrizione": "Mettersi in piedi e posizionare i piedi alla larghezza delle spalle, i palmi delle mani possono essere rivolti in avanti o verso il corpo. Una volta assunta la posizione corretta, iniziare a premere i manubri sopra la testa fino a estendere completamente le braccia.",
	"muscoli": "spalle",
}, {
	"nome": "French press bilanciere in piedi",
	"gif": "7553.gif",
	"descrizione": "Consiste nel sedersi tenendo una barra EZ dietro la testa, con i gomiti rivolti verso l'alto, e poi estendere le braccia verso l'alto, in corrispondenza dei gomiti.",
	"muscoli": "tricipiti",
}, {
	"nome": "Spider curl bilanciere",
	"gif": "21605.gif",
	"descrizione": "Appoggiare il busto a una panca inclinata con un angolo di 45 gradi, prendere il bilanciere con presa prona, bloccare i gomiti e portare il bilanciere verso se stessi.",
	"muscoli": "bicipiti",
}, {
	"nome": "Squat bilanciere",
	"gif": "4774.gif",
	"descrizione": "Eseguire gli squat con bilanciere stando in piedi con i piedi alla larghezza delle spalle. Tenere il petto in alto e la schiena dritta mentre piegate le anche e le ginocchia per abbassare il corpo attraverso una gamma completa di movimenti fino a raggiungere la posizione di squat per poi spingere con le gambe e tornare nella posizione iniziale.",
	"muscoli": "quadricipiti",
}, {
	"nome": "Leg curl in piedi",
	"gif": "21613.gif",
	"descrizione": "Mettersi in una posizione d'incastro in modo tale da usare il ginocchio come perno, usare la parte posteriore della caviglia per eseguire l'esercizio e lavorare il femorale",
	"muscoli": "femorale",
}, {
	"nome": "Rocky pull-up",
	"gif": "rockypullup.jpg",
	"descrizione": "Il rocky pull-up è un esercizio per la parte superiore del corpo che consiste nell'appendersi alla sbarra per le mani, con i palmi rivolti verso l'esterno, e nel sollevare l'intero corpo con i muscoli delle braccia e della schiena fino a quando il petto tocca la sbarra, inarcando leggermente la schiena",
	"muscoli": "dorso",
}, {
	"nome": "Dip con panca",
	"gif": "benchdip.jpg",
	"descrizione": "Le dip sono un esercizio con il peso corporeo che sviluppa i tricipiti e altri muscoli della parte superiore del corpo. L'esercizio inizia tenendosi alla panca con le braccia dritte. Si piegano quindi i gomiti fino a quando la parte superiore delle braccia è parallela al suolo prima di risalire alla posizione di partenza.",
	"muscoli": "petto, tricipiti",
}, {
	"nome": "Pullover bilanciere",
	"gif": "pullover.gif",
	"descrizione": "Sdraiarsi a faccia in su su una panca piana tenendo un bilanciere con una presa overhand sopra il petto e con una leggera flessione dei gomiti. Abbassare lentamente il bilanciere sopra la testa fino a sentire uno stiramento del petto, quindi contrarre i dorsali per riportarlo alla posizione di partenza.",
	"muscoli": "petto, tricipiti, dorso",
}, {
	"nome": "Strict curl",
	"gif": "strictcurl.jpg",
	"descrizione": "Appoggiare la schiena ad una superficie, mantenendo una presa supina con le mani, portare il bilanciere a livello del petto e ritornare nella posizione originale, portando leggermente in avanti i gomiti",
	"muscoli": "bicipiti",
}, {
	"nome": "Alzate laterali",
	"gif": "lateralraise.gif",
	"descrizione": "Il sollevamento laterale è un esercizio di forza per le spalle che consiste nel sollevare un paio di manubri lontano dal corpo in una rotazione esterna. Le alzate laterali fanno lavorare il muscolo trapezio della parte superiore della schiena e il gruppo muscolare deltoide delle spalle, in particolare i deltoidi anteriori e laterali.",
	"muscoli": "spalle",
}, {
	"nome": "Affondi in camminata con manubri",
	"gif": "lunges.gif",
	"descrizione": "E' un esercizio in cui una persona in posizione eretta fa un passo in avanti in una posizione in cui il ginocchio anteriore è profondamente piegato, mantenendo il busto eretto, e poi continua in avanti ripetendo lo stesso procedimento per l'altra gamba.",
	"muscoli": "quadricipiti",
}, {
	"nome": "Stacchi rumeni",
	"gif": "romaniandeadlift.gif",
	"descrizione": "E' un deadlift in cui il corpo è piegato sui fianchi e le ginocchia non sono piegate. Il deadlift è un esercizio di potenziamento in cui un bilanciere carico viene sollevato da terra da una posizione stabilizzata e piegata, con le ginocchia libere di piegarsi.",
	"muscoli": "femorali",
}, {
	"nome": "Rematore",
	"gif": "bentover.gif",
	"descrizione": "Piegarsi in avanti sui fianchi e mantenere la schiena dritta con una leggera flessione delle ginocchia. Abbassare la sbarra verso il pavimento fino a quando i gomiti sono completamente dritti e mantenere la schiena piatta mentre la sbarra viene tirata verso l'ombelico. Quindi abbassare lentamente la sbarra fino alla posizione di partenza e ripetere.",
	"muscoli": "dorso",
}, {
	"nome": "Croci petto",
	"gif": "chestfly.gif",
	"descrizione": "È una variante della panca standard e si esegue sdraiandosi su una panca piana con un peso in ogni mano. È possibile eseguire questo esercizio con manubri o bilancieri, portare il peso in basso sino a sentire il massimo tiramento del petto e tornare nella posizione originale portando il peso in alto",
	"muscoli": "petto",
}, {
	"nome": "Alzata al petto",
	"gif": "uprightrow.jpg",
	"descrizione": "L'alzata al petto è un esercizio di allenamento con i pesi che si esegue tenendo un peso con una presa overhand e sollevandolo direttamente fino alla clavicola. Si tratta di un esercizio composto che coinvolge principalmente spalle e trapezio",
	"muscoli": "spalle",
}, {
	"nome": "Kickback al cavo",
	"gif": "cablekickback.jpg",
	"descrizione": "Piegatevi leggermente in avanti in modo che il busto sia quasi parallelo al pavimento. Impegnate il core e mantenete la testa, il collo e la colonna vertebrale in linea. Appoggiate una mano sulla coscia come sostegno. Espirando, impegnate i tricipiti estendendo lentamente il braccio all'indietro il più possibile, tenendolo stretto al fianco.",
	"muscoli": "tricipiti",
}, {
	"nome": "Overhead curl al cavo",
	"gif": "cableoverheadcurl.jpg",
	"descrizione": "L'overhead curl al cavo è un esercizio per i bicipiti eseguito tra due pile di cavi, utilizzando un paio di maniglie a D. Le braccia e i gomiti sono tenuti all'altezza delle spalle per tutta la durata del movimento, mentre entrambe le mani si curvano verso le orecchie.",
	"muscoli": "bicipiti",
}, {
	"nome": "Pressa",
	"gif": "legpress.gif",
	"descrizione": "La pressa si esegue in posizione seduta. Le gambe premono ripetutamente contro i pesi, che possono essere regolati in base al livello di forma fisica. In questo modo si allenano i quadricipiti, i glutei, i bicipiti femorali, i fianchi e i polpacci. La posizione seduta delle pressioni sulle gambe aiuta a mantenere fermi la parte superiore del corpo e il busto.",
	"muscoli": "quadricipiti",
}, {
	"nome": "Stacco a gambe dritte",
	"gif": "deadliftstraightleg.jpg",
	"descrizione": "Posizionarsi nella posizione di snatch o clean pulling con una presa pulita sulla sbarra. Mantenendo le gambe tese con le ginocchia completamente dritte, incardinarsi all'anca e permettere alla schiena di arrotondarsi per portare la sbarra il più possibile lungo le gambe, come se ci si stesse allungando.",
	"muscoli": "femorali",
}, {
	"nome": "Skullcrusher",
	"gif": "skullcrusher.jpg",
	"descrizione": "E' un esercizio di isolamento incentrato sui muscoli tricipiti. Lo schiacciamento del cranio si esegue sdraiandosi supini su una panca piana e sollevando i manubri da dietro la testa fino alla completa estensione sopra di sé..",
	"muscoli": "tricipiti",
}, {
	"nome": "Pendlay row",
	"gif": "pendlayrow.jpg",
	"descrizione": "Il pendlay row è una variante del rematopre in cui si mantiene la parte superiore del corpo fissa per tutta la durata del movimento. Solo la sbarra e le braccia si muovono e si rimette la sbarra a terra tra una ripetizione e l'altra.",
	"muscoli": "dorso"
}, {
	"nome": "Croci cavi",
	"gif": "cablefly.jpg",
	"descrizione": "E' un movimento di isolamento mirato al petto. È un'ottima alternativa a croci con con manubri grazie all'aumento della tensione nella parte superiore del movimento, che aggiunge maggiore attivazione e compressione al petto.",
	"muscoli": "petto"
}, {
	"nome": "Alzate frontali",
	"gif": "cablefrontraise.jpg",
	"descrizione": "L'alzata frontale, è un esercizio di allenamento con i pesi che ha come obiettivo i muscoli delle spalle. L'esercizio consiste nel sollevare un peso dalla parte anteriore delle cosce fino all'altezza delle spalle, davanti al corpo.",
	"muscoli": "spalle"
}, {
	"nome": "Distensioni tricipite alternato",
	"gif": "tricepsextension.jpg",
	"descrizione": "L'estensione dei tricipiti è un movimento di isolamento che aiuta a sviluppare e rafforzare i tricipiti, i muscoli che corrono lungo la parte posteriore del braccio. È possibile praticare questo esercizio in piedi o seduti su una panca per il supporto della schiena.",
	"muscoli": "tricipiti"
}, {
	"nome": "Curl al cavo",
	"gif": "cablecurl.jpg",
	"descrizione": "Il curl bicipiti ai cavi è un esercizio di isolamento per i muscoli bicipiti della parte superiore del braccio. L'azione di trazione viene eseguita con una macchina a cavi ed è adatta ai principianti. Questo esercizio può essere utilizzato come parte di un programma di potenziamento muscolare della parte superiore del corpo.",
	"muscoli": "bicipiti"
}, {
	"nome": "Leg extension",
	"gif": "legextension.gif",
	"descrizione": "Le estensioni delle gambe si eseguono su una macchina per le estensioni delle gambe. Ci si siede sulla macchina con un cuscinetto appesantito sulla parte inferiore delle gambe. Poi si usano i quadricipiti per estendere ripetutamente le ginocchia e sollevare la parte inferiore delle gambe. Sebbene la leg extension sia un ottimo allenamento per i quadricipiti, potrebbe non essere la mossa più pratica.",
	"muscoli": "quadricipiti"
}, {
	"nome": "Good morning",
	"gif": "goodmorning.gif",
	"descrizione": "Il goodmorning si esegue stando in piedi con i piedi alla larghezza delle spalle. Sganciate un bilanciere zavorrato e appoggiatelo sulla parte superiore della schiena, assumendo una posizione simile a quella di uno squat all'indietro.",
	"muscoli": "femorali"
}, {
	"nome": "Calf raises da seduto",
	"gif": "seatedcalf.gif",
	"descrizione": "Sedetevi in alto sulla sedia, con i piedi alla larghezza delle anche. Portate i piedi indietro, in modo che i talloni siano dietro le ginocchia. Da questa posizione, sollevate i talloni dal pavimento, salendo sulle punte dei piedi. Trattenere brevemente e riabbassare delicatamente i talloni. Ripetere per le ripetizioni stabilite.",
	"muscoli": "polpacci"
}] as Array<Esercizio>

export const schede = [{
	"id": "1",
	"nome": "Full body workout",
	"gruppo_muscolare": "tutto",
	"pic": "/assets/workoutcover/16.png",
	"durata": "30",
	"intensita": "1",
	"sala": "Parte superiore, Parte inferiore, Cardio",
	"esercizi": [{
		"esercizio": "Jumping jack",
		"tempo": "10",
	}, {
		"esercizio": "Panca piana bilanciere",
		"serie": "5",
		"ripetizioni": "5",
		"tempo_recupero": "2",
	}, {
		"esercizio": "French press bilanciere in piedi",
		"serie": "3",
		"ripetizioni": "12",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Lat pulldown al cavo con un braccio",
		"serie": "4",
		"ripetizioni": "10",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Spider curl bilanciere",
		"serie": "3",
		"ripetizioni": "12",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Squat bilanciere",
		"serie": "5",
		"ripetizioni": "5",
		"tempo_recupero": "2",
	}, {
		"esercizio": "Leg curl in piedi",
		"serie": "4",
		"ripetizioni": "12",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Calf raises bilanciere",
		"serie": "5",
		"ripetizioni": "20",
		"tempo_recupero": "1",
	}]
}, {
	"id": "2",
	"nome": "Upper body destroyer",
	"gruppo_muscolare": "petto, spalle, braccia",
	"pic": "/assets/workoutcover/13.png",
	"durata": "90",
	"intensita": "2",
	"sala": "Petto, spalle, braccia",
	"esercizi": [{
		"esercizio": "Military press bilanciere",
		"serie": "8",
		"ripetizioni": "3",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Dip con panca",
		"serie": "5",
		"ripetizioni": "15",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Pullover bilanciere",
		"serie": "5",
		"ripetizioni": "10",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Military press bilanciere",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Alzate laterali",
		"serie": "3",
		"ripetizioni": ["8", "8", "8"],
		"tempo di recupero": "1",
	}, {
		"esercizio": "French press bilanciere in piedi",
		"serie": "3",
		"ripetizioni": "10",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Skullcrusher",
		"serie": "4",
		"ripetizioni": "8",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Strict curl",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Spider curl bilanciere",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "1",
	}]
}, {
	"id": "3",
	"nome": "Heavy leg day",
	"gruppo_muscolare": "quadricipiti, femorali, polpacci",
	"pic": "/assets/workoutcover/7.png",
	"durata": "90",
	"intensita": "2",
	"sala": "Quadricipiti, femorali, polpacci",
	"esercizi": [{
		"esercizio": "Squat bilanciere",
		"serie": "5",
		"ripetizioni": "10",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Pressa",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Affondi in camminata con manubri",
		"serie": "5",
		"ripetizioni": "12",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Stacco a gambe dritte",
		"serie": "6",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Stacchi rumeni",
		"serie": "4",
		"ripetizioni": "8",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Leg curl in piedi",
		"serie": "4",
		"ripetizioni": ["8", "8", "8"],
		"tempo di recupero": "1",
	}, {
		"esercizio": "Calf raises bilanciere",
		"serie": "6",
		"ripetizioni": "24",
		"tempo di recupero": "1",
	}]
}, {
	"id": "4",
	"nome": "Spinta",
	"gruppo_muscolare": "quadricipiti, petto, tricipiti, spalle",
	"pic": "/assets/workoutcover/17.png",
	"durata": "180",
	"intensita": "3",
	"sala": "Quadricipiti, femorali, polpacci",
	"esercizi": [{
		"esercizio": "Squat bilanciere",
		"serie": "7",
		"ripetizioni": "5",
		"tempo di recupero": "3",
	}, {
		"esercizio": "Pressa",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Leg extension",
		"serie": "4",
		"ripetizioni": "15",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Panca piana bilanciere",
		"serie": "7",
		"ripetizioni": "2",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Croci petto",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Dip con panca",
		"serie": "5",
		"ripetizioni": "20",
		"tempo di recupero": "1",
	}, {
		"esercizio": "French press bilanciere in piedi",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Spider curl bilanciere",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Alzata al petto",
		"serie": "4",
		"ripetizioni": "10",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Alzate laterali",
		"serie": "5",
		"ripetizioni": "20",
		"tempo di recupero": "1",
	}]
}, {
	"id": "5",
	"nome": "Tirata",
	"gruppo_muscolare": "femorali, dorsali, bicipiti, spalle",
	"pic": "/assets/workoutcover/18.png",
	"durata": "180",
	"intensita": "3",
	"sala": "Quadricipiti, femorali, polpacci",
	"esercizi": [{
		"esercizio": "Stacco a gambe dritte",
		"serie": "5",
		"ripetizioni": "6",
		"tempo di recupero": "3",
	}, {
		"esercizio": "Leg curl in piedi",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Stacchi rumeni",
		"serie": "3",
		"ripetizioni": "12",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Rocky pullup",
		"serie": "6",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Goodmorning",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Rematore",
		"serie": "5",
		"ripetizioni": "10",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Lat pulldown al cavo con un braccio",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Strict curl",
		"serie": "6",
		"ripetizioni": "8",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Overhead curl al cavo",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Alzata al petto",
		"serie": "5",
		"ripetizioni": "10",
		"tempo di recupero": "1",
	}]
}] as Scheda[]