define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "90cfe6b80ec14b2aa26e36b3b00fc311",
    "webmap": "72453e92fcb4464cbed7232e0b14076a", //"0c5cb13c4fc54b28bb26a125221ed96f",
    "form_layer": {
        "id": "Mariastaden_featureservice_7390"
    },
    "details": {
        "Title": "Webbenkät Mariastaden vinter/våren 2015",
        "Logo": "images/hborglogo.png",
        "Description": "Hej, tack för att du vill vara med och tycka till om trafikmiljön i Mariastaden. I denna webbkarta/enkät har du möjlighet att markera på en karta vad du tycker om trafikmiljön, välja olika alternativ och lämna en beskrivning. Resultatet kommer att användas i vår kommande planering. Klicka på pilen nedan för att komma vidare."
    },
    
    
    
//    OBJECTID (type: esriFieldTypeOID, alias: OBJECTID, SQL Type: sqlTypeOther, nullable: false, editable: false)
//    Age (type: esriFieldTypeString, alias: Age, SQL Type: sqlTypeOther, length: 10, nullable: true, editable: true)
//    Gender (type: esriFieldTypeString, alias: Gender, SQL Type: sqlTypeOther, length: 10, nullable: true, editable: true)
//    Bostad (type: esriFieldTypeString, alias: Bostad, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
//    Bostad_Description (type: esriFieldTypeString, alias: Bostad_Comment, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
//    Bostad_Adress (type: esriFieldTypeString, alias: Bostad_Adress, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
//    Trafic_Environment (type: esriFieldTypeString, alias: Trafic_Env, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
//    Trafic_Env_Alternative (type: esriFieldTypeString, alias: Trafic_Env_Alternative, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
//    Trafic_Env_Desc_Alternative (type: esriFieldTypeString, alias: Trafic_Env_Desc_Alternative, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
//    Trafic_Env_Works_Comment (type: esriFieldTypeString, alias: Trafic_Env_Comment, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
    
    
    "fields": [
//    	{
//    		type: "esriFieldTypeOID", 
//    		alias: "OBJECTID", 
//    		nullable: false,
//    		editable: false,
//	    	length: undefined,
//	    	name: "OBJECTID",
//	    	tooltip: "",
//	    	visible: false
//	    	
//    	}

    
//    	{
//	    	alias: "OBJECTID",
//	    	editable: false,
//	    	length: undefined,
//	    	name: "OBJECTID",
//	    	nullable: false,
//	    	tooltip: "",
//	    	type: "esriFieldTypeOID",
//	    	visible: false
//    	},
//    	{
//	    	alias: "Vem är du?",
//	    	domain: {
//	    		codedValues: [
//		    		{
//		    			code: "1",
//		    			name: "Man"
//		    		},
//		    		{
//		    			code: "2",
//		    			name: "Kvinna"
//					}
//				],
//	    		name: "UseCase",
//	    		type: "codedValue"
//	    	},
//	    	editable: true,
//	    	length: 50,
//	    	name: "Rating",
//	    	nullable: false,
//	    	tooltip: "How would you rate the usability of this app?",
//	    	type: "esriFieldTypeString",
//	    	visible: true
//    	}
    ],
    "theme": "bootstrap", // see values in themes.js
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "units": null,
    "useSmallHeader": false,
    "enableSharing": true,
    "defaultMapExtent": true,
    "pushpinColor": "blue",
    "enableAttachments": true,
    "attachmentIsRequired": false,
    "attachmentLabel": "",
    "attachmentHelpText": "",
    "showLayer":true,
    "locationSearchOptions": {
        "enableMyLocation": true,
        "enableSearch": true,
        "enableLatLng": true,
        "enableUSNG": false,
        "enableMGRS": false,
        "enableUTM": false
    },
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    },
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e"
});