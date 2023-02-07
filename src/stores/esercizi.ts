import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Esercizio } from '@/models/Schede'

export const useEserciziStore = defineStore('esercizi', {
	state: () => ({
		_esercizi: useStorage('esercizi',
			[{
				"nome": "Cable one arm lat pulldown",
				"gif": "5895.gif",
				"descrizione": "Da seduti, si tira verso di sé una maniglia sospesa in presa supina fino a raggiungere l'altezza del mento, quindi la si rilascia verso l'alto con controllo per una ripetizione. Questo esercizio può essere eseguito come parte di un allenamento di forza per la parte superiore del corpo.",
				"muscoli": "dorsali",
			}, {
				"nome": "Barbell standing calf raise",
				"gif": "barbell-standing-leg-calf-raise.jpg",
				"descrizione": "Posizionare il bilanciere al livello del trapezio, e posizionare la punta del piede sopra uno step aerobico, scendere sino a sentire il completo tiramento del muscolo e dopodichè spingere su usando la forza del piede",
				"muscoli": "polpacci",
			}, {
				"nome": "Jumping jack",
				"gif": "jumping-jack-male.jpg",
				"descrizione": "Partire con le braccia e gambe chiuse, attaccate al corpo, effettuare un salto e divaricare sia gambe che braccia, sempre da questa posizione effettuare un altro salto e tornare nella posizione originale.",
				"muscoli": "cardio",
			}, {
				"nome": "Paused barbell benchpress",
				"gif": "21889.gif",
				"descrizione": "Consiste nello sdraiarsi su una panca e premere il peso verso l'alto utilizzando un bilanciere. Durante la distensione su panca, si abbassa il peso all'altezza del petto, si aspetta un secondo e poi si preme verso l'alto estendendo le braccia.",
				"muscoli": "petto",
			}, {
				"nome": "Barbell standing military press",
				"gif": "barbell-standing-military-press.jpg",
				"descrizione": "Mettersi in piedi e posizionare i piedi alla larghezza delle spalle, i palmi delle mani possono essere rivolti in avanti o verso il corpo. Una volta assunta la posizione corretta, iniziare a premere i manubri sopra la testa fino a estendere completamente le braccia.",
				"muscoli": "spalle",
			}, {
				"nome": "EZ bar standing french press",
				"gif": "7553.gif",
				"descrizione": "Consiste nel sedersi tenendo una barra EZ dietro la testa, con i gomiti rivolti verso l'alto, e poi estendere le braccia verso l'alto, in corrispondenza dei gomiti.",
				"muscoli": "tricipiti",
			}, {
				"nome": "Barbell spider curl",
				"gif": "21605.gif",
				"descrizione": "Appoggiare il busto a una panca inclinata con un angolo di 45 gradi, prendere il bilanciere con presa prona, bloccare i gomiti e portare il bilanciere verso se stessi.",
				"muscoli": "bicipiti",
			}, {
				"nome": "Barbell squat",
				"gif": "4774.gif",
				"descrizione": "Eseguire gli squat con bilanciere stando in piedi con i piedi alla larghezza delle spalle. Tenere il petto in alto e la schiena dritta mentre piegate le anche e le ginocchia per abbassare il corpo attraverso una gamma completa di movimenti fino a raggiungere la posizione di squat per poi spingere con le gambe e tornare nella posizione iniziale.",
				"muscoli": "quadricipiti",
			}, {
				"nome": "Standing leg curl",
				"gif": "21613.gif",
				"descrizione": "Mettersi in una posizione d'incastro in modo tale da usare il ginocchio come perno, usare la parte posteriore della caviglia per eseguire l'esercizio e lavorare il femorale",
				"muscoli": "femorale",
			}, {
				"nome": "Rocky pull-up",
				"gif": "rockypullup.jpg",
				"descrizione": "Il rocky pull-up è un esercizio per la parte superiore del corpo che consiste nell'appendersi alla sbarra per le mani, con i palmi rivolti verso l'esterno, e nel sollevare l'intero corpo con i muscoli delle braccia e della schiena fino a quando il petto tocca la sbarra, inarcando leggermente la schiena",
				"muscoli": "dorsali",
			}, {
				"nome": "Bench dip",
				"gif": "benchdip.jpg",
				"descrizione": "Le dip sono un esercizio con il peso corporeo che sviluppa i tricipiti e altri muscoli della parte superiore del corpo. L'esercizio inizia tenendosi alla panca con le braccia dritte. Si piegano quindi i gomiti fino a quando la parte superiore delle braccia è parallela al suolo prima di risalire alla posizione di partenza.",
				"muscoli": "petto, tricipiti",
			}, {
				"nome": "Barbell pullover",
				"gif": "pullover.gif",
				"descrizione": "Sdraiarsi a faccia in su su una panca piana tenendo un bilanciere con una presa overhand sopra il petto e con una leggera flessione dei gomiti. Abbassare lentamente il bilanciere sopra la testa fino a sentire uno stiramento del petto, quindi contrarre i dorsali per riportarlo alla posizione di partenza.",
				"muscoli": "petto, tricipiti, dorso",
			}, {
				"nome": "Strict curl",
				"gif": "strictcurl.gif",
				"descrizione": "Appoggiare la schiena ad una superficie, mantenendo una presa supina con le mani, portare il bilanciere a livello del petto e ritornare nella posizione originale, portando leggermente in avanti i gomiti",
				"muscoli": "bicipiti",
			}, {
				"nome": "Lateral raises",
				"gif": "lateralraise.gif",
				"descrizione": "Il sollevamento laterale è un esercizio di forza per le spalle che consiste nel sollevare un paio di manubri lontano dal corpo in una rotazione esterna. Le alzate laterali fanno lavorare il muscolo trapezio della parte superiore della schiena e il gruppo muscolare deltoide delle spalle, in particolare i deltoidi anteriori e laterali.",
				"muscoli": "spalle",
			}, {
				"nome": "Dumbbell walking lunges",
				"gif": "lunges.gif",
				"descrizione": "E' un esercizio in cui una persona in posizione eretta fa un passo in avanti in una posizione in cui il ginocchio anteriore è profondamente piegato, mantenendo il busto eretto, e poi continua in avanti ripetendo lo stesso procedimento per l'altra gamba.",
				"muscoli": "quadricipiti",
			}, {
				"nome": "Romanian deadlift",
				"gif": "romaniandeadlift.gif",
				"descrizione": "E' un deadlift in cui il corpo è piegato sui fianchi e le ginocchia non sono piegate. Il deadlift è un esercizio di potenziamento in cui un bilanciere carico viene sollevato da terra da una posizione stabilizzata e piegata, con le ginocchia libere di piegarsi.",
				"muscoli": "femorali",
			}, {
				"nome": "Bent over row",
				"gif": "bentover.gif",
				"descrizione": "Piegarsi in avanti sui fianchi e mantenere la schiena dritta con una leggera flessione delle ginocchia. Abbassare la sbarra verso il pavimento fino a quando i gomiti sono completamente dritti e mantenere la schiena piatta mentre la sbarra viene tirata verso l'ombelico. Quindi abbassare lentamente la sbarra fino alla posizione di partenza e ripetere.",
				"muscoli": "dorso",
			}, {
				"nome": "Chest fly",
				"gif": "chestfly.gif",
				"descrizione": "IÈ una variante della panca standard e si esegue sdraiandosi su una panca piana con un peso in ogni mano. È possibile eseguire questo esercizio con manubri o bilancieri, portare il peso in basso sino a sentire il massimo tiramento del petto e tornare nella posizione originale portando il peso in alto",
				"muscoli": "petto",
			}, {
				"nome": "Upright row",
				"gif": "uprightrow.jpg",
				"descrizione": "L'upright row è un esercizio di allenamento con i pesi che si esegue tenendo un peso con una presa overhand e sollevandolo direttamente fino alla clavicola. Si tratta di un esercizio composto che coinvolge principalmente spalle e trapezio",
				"muscoli": "spalle",
			}, {
				"nome": "Cable kickback",
				"gif": "cablekickback.jpg",
				"descrizione": "Piegatevi leggermente in avanti in modo che il busto sia quasi parallelo al pavimento. Impegnate il core e mantenete la testa, il collo e la colonna vertebrale in linea. Appoggiate una mano sulla coscia come sostegno. Espirando, impegnate i tricipiti estendendo lentamente il braccio all'indietro il più possibile, tenendolo stretto al fianco.",
				"muscoli": "tricipiti",
			}, {
				"nome": "Cable overhead curl",
				"gif": "cableoverheadcurl.jpg",
				"descrizione": "L'overhead cable curl è un esercizio per i bicipiti eseguito tra due pile di cavi, utilizzando un paio di maniglie a D. Le braccia e i gomiti sono tenuti all'altezza delle spalle per tutta la durata del movimento, mentre entrambe le mani si curvano verso le orecchie.",
				"muscoli": "bicipiti",
			}, {
				"nome": "Leg press",
				"gif": "legpress.gif",
				"descrizione": "La leg press si esegue in posizione seduta. Le gambe premono ripetutamente contro i pesi, che possono essere regolati in base al livello di forma fisica. In questo modo si allenano i quadricipiti, i glutei, i bicipiti femorali, i fianchi e i polpacci. La posizione seduta delle pressioni sulle gambe aiuta a mantenere fermi la parte superiore del corpo e il busto.",
				"muscoli": "quadricipiti",
			}, {
				"nome": "Straight leg deadlift",
				"gif": "deadliftstraightleg.gif",
				"descrizione": "Posizionarsi nella posizione di snatch o clean pulling con una presa pulita sulla sbarra. Mantenendo le gambe tese con le ginocchia completamente dritte, incardinarsi all'anca e permettere alla schiena di arrotondarsi per portare la sbarra il più possibile lungo le gambe, come se ci si stesse allungando.",
				"muscoli": "femorali",
			}] as Array<Esercizio>
		),
		_eserciziFavourites: useStorage('eserciziFavourites', [] as Array<string>)
	}),
	getters: {
		esercizi: (state) => {
			return state._esercizi.map(e => {
				e.isFavourite = state._eserciziFavourites.find(es => es == e.nome) != undefined
				return e
			}) as Array<Esercizio>
		},
		eserciziFav: (state) => {
			state._eserciziFavourites.map(e => {
				return { ...state._esercizi.find(e2 => e2.nome == e), isFavourite: true }
			})
		}
	},
	actions: {
		toggleFavEsercizio(es: Esercizio) {
			if (this._eserciziFavourites.find(e => e == es.nome)) {
				this._eserciziFavourites = this._eserciziFavourites.filter(e => e != es.nome)
			} else {
				this._eserciziFavourites.push(es.nome)
			}
		}
	},
})
