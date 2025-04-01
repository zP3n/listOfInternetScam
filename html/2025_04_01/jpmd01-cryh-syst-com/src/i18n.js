var translations;

function applyTranslations(){
	if (typeof translations == "undefined")
		return;   
	console.log("APPLY TRANSACTIONS");
    $("[data-i18n]").each(function() {
        var key = $(this).attr("data-i18n");
        if (typeof translations[key] !== "undefined") {            
			switch ($(this).prop("tagName")) {
				case "INPUT":
					$(this).attr("placeholder", translations[key]);
					break;
				default:
					$(this).text(translations[key]);
			}           
        }
    });
};

function StartTranslations(cc){	
	if(!cc || cc=='')return;	
	$.ajax({
        url: "i18n/lang/" + cc.toLowerCase() + ".json",
        type: "get",
        success: function(e) {
            console.log("AJAX +");
            translations = e;
            applyTranslations();
        },
        error: function(e) {
            console.log("AJAX -");           
        },
        complete: function() {}
    });
};
//StartTranslations('it');