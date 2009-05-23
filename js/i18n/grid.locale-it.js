;(function($){
/**
 * jqGrid Italian Translation
 * Vincenzo Solomita vincenzosolomita@gmail.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "View {0} - {1} of {2}",
	    emptyrecords: "No records to view",
		loadtext: "Caricamento...",
		pgtext : "Page {0} of {1}"
	},
	search : {
	    caption: "Ricerca...",
	    Find: "Cerca",
	    Reset: "Pulisci",
	    odata : ['equal', 'not equal', 'less', 'less or equal','greater','greater or equal', 'begins with','does not begin with','is in','is not in','ends with','does not end with','contains','does not contain'],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		matchText: " match",
		rulesText: " rules"
	},
	edit : {
	    addCaption: "Aggiungi Record",
	    editCaption: "Modifica Record",
	    bSubmit: "Invia",
	    bCancel: "Annulla",
		bClose: "Chiudi",
	    processData: "In elaborazione...",
	    msg: {
	        required:"Campo richiesto",
	        number:"Per favore, inserisci un valore valido",
	        minValue:"il valore deve essere maggiore o uguale a ",
	        maxValue:"il valore deve essere minore o uguale a",
	        email: "e-mail non corretta",
			integer: "Please, enter valid integer value",
			date: "Please, enter valid date value",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')"
		}
	},
	view : {
	    caption: "View Record",
	    bClose: "Close"
	},
	del : {
	    caption: "Cancella",
	    msg: "Cancellare record selezionato/i?",
	    bSubmit: "Cancella",
	    bCancel: "Annulla",
	    processData: "In elaborazione..."
	},
	nav : {
		edittext: " ",
	    edittitle: "Modifica record selezionato",
		addtext:" ",
	    addtitle: "Aggiungi nuovo record",
	    deltext: " ",
	    deltitle: "Cancella record selezionato",
	    searchtext: " ",
	    searchtitle: "Ricerca record",
	    refreshtext: "",
	    refreshtitle: "Aggiorna griglia",
	    alertcap: "Attenzione",
	    alerttext: "Per favore, seleziona un record",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
	    caption: "Mostra/Nascondi Colonne",
	    bSubmit: "Invia",
	    bCancel: "Annulla"	
	},
	errors : {
		errcap : "Errore",
		nourl : "Url non settata",
		norecords: "Nessun record da elaborare",
	    model : "Length of colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaulValue: 0},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaulValue: 0},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaulValue: 0},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "n/j/Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y g:i:s A",
	            MonthDay: "F d",
	            ShortTime: "g:i A",
	            LongTime: "g:i:s A",
	            SortableDateTime: "Y-m-d\\TH:i:s",
	            UniversalSortableDateTime: "Y-m-d H:i:sO",
	            YearMonth: "F, Y"
	        },
	        reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
	    target: '',
	    checkbox : {disabled:true},
		idName : 'id'
	}
};
})(jQuery);