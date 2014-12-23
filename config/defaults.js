define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "72453e92fcb4464cbed7232e0b14076a", //"0c5cb13c4fc54b28bb26a125221ed96f",
    "form_layer": {
        "id": "Mariastaden_featureservice_7390"
    },
    "details": {
        "Title": "Webbenkät Mariastaden vinter/våren 2015",
        "Logo": "http://kartor.helsingborg.se/esri-templates/images/hbg_logo_utan_text.png",
        "Description": "Hej, tack för att du vill vara med och tycka till om trafikmiljön i Mariastaden. I denna webbkarta/enkät har du möjlighet att markera på en karta vad du tycker om trafikmiljön, välja olika alternativ och lämna en beskrivning. Resultatet kommer att användas i vår kommande planering. Klicka på pilen nedan för att komma vidare."
    },
    
/**    

 OBJECTID (type: esriFieldTypeOID, alias: OBJECTID, SQL Type: sqlTypeOther, nullable: false, editable: false)
 Age (type: esriFieldTypeString, alias: Age, SQL Type: sqlTypeOther, length: 10, nullable: true, editable: true)
 
 Gender (type: esriFieldTypeString, alias: Gender, SQL Type: sqlTypeOther, length: 10, nullable: true, editable: true)
 Bostad (type: esriFieldTypeString, alias: Bostad, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Lamna_Bostad_Adress (type: esriFieldTypeString, alias: Bostad_Adress, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Trafic_Environment (type: esriFieldTypeString, alias: Trafic_Env, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Trafic_Env_Alternative (type: esriFieldTypeString, alias: Trafic_Env_Alternative, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Trafic_Env_Desc_Alternative (type: esriFieldTypeString, alias: Trafic_Env_Desc_Alternative, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Trafic_Env_Works_Comment (type: esriFieldTypeString, alias: Trafic_Env_Comment, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Bostad_Visit_work_desc (type: esriFieldTypeString, alias: Visit_work, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Working (type: esriFieldTypeString, alias: Working, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_working (type: esriFieldTypeString, alias: Not_working, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Way_Of_Transportation (type: esriFieldTypeString, alias: Way_Of_Transportation, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Transportation_Descr (type: esriFieldTypeString, alias: Transportation_Descr, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_walking (type: esriFieldTypeString, alias: This_is_working, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_walking_descr (type: esriFieldTypeString, alias: This_is_working_walking_descr, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_cycling (type: esriFieldTypeString, alias: This_is_working_cycling, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_cycling_descr (type: esriFieldTypeString, alias: This_is_working_cycling_descr, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_moped (type: esriFieldTypeString, alias: This_is_working_moped, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_moped_descr (type: esriFieldTypeString, alias: This_is_working_moped_descr, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_car (type: esriFieldTypeString, alias: This_is_working_car, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_car_decr (type: esriFieldTypeString, alias: This_is_working_car_decr, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_bus (type: esriFieldTypeString, alias: This_is_working_bus, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_bus_descr (type: esriFieldTypeString, alias: This_is_working_bus_descr, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 This_is_working_friends (type: esriFieldTypeString, alias: This_is_working_friends, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_working_walking (type: esriFieldTypeString, alias: Not_working_walking, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_working_cycling (type: esriFieldTypeString, alias: Not_working_cycling, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_working_walking_descr (type: esriFieldTypeString, alias: Not_working_walking_descr, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_friends (type: esriFieldTypeString, alias: Not_Working_friends, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_car (type: esriFieldTypeString, alias: Not_Working_car, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_working_moped (type: esriFieldTypeString, alias: Not_working_moped, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_bus (type: esriFieldTypeString, alias: Not_Working_bus, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_cycling_desc (type: esriFieldTypeString, alias: Not_Working_cycling_desc, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_friends_desc (type: esriFieldTypeString, alias: Not_Working_friends_desc, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_car_desc (type: esriFieldTypeString, alias: Not_Working_car_desc, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_moped_desc (type: esriFieldTypeString, alias: Not_Working_moped_desc, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)
 Not_Working_bus_desc (type: esriFieldTypeString, alias: Not_Working_bus_desc, SQL Type: sqlTypeOther, length: 50, nullable: true, editable: true)    
 
 **/
 
    "fields": [
/********************************************************************************
		GEOFIELD
********************************************************************************/
    	{
    		type: "esriFieldTypeOID", 
    		alias: "OBJECTID", 
    		nullable: false,
    		editable: false,
	    	length: undefined,
	    	name: "OBJECTID",
	    	tooltip: "",
	    	visible: false
	    	
    	},
/********************************************************************************
		PERSONAL INFORMATION
********************************************************************************/
    	{
	    	alias: "Vem är du?",
	    	domain: {
	    		codedValues: [
		    		{
		    			code: "Man",
		    			name: "Man"
		    		},
		    		{
		    			code: "Kvinna",
		    			name: "Kvinna"
					}
				],
	    		name: "Gender",
	    		type: "codedValue"
	    	},
	    	editable: true,
	    	length: 10,
	    	name: "Gender",
	    	nullable: false,
	    	tooltip: "Kön",
	    	type: "esriFieldTypeString",
	    	visible: true,
	    	typeField: true
    	},
    	{
    		alias: "Ålder",
    		domain: {
    			codedValues: [
    	    		{
    	    			code: "0-15",
    	    			name: "0-15 år"
    	    		},
    	    		{
    	    			code: "16-25",
    	    			name: "16-25 år"
    				},
    				{
    					code: "26-35",
    					name: "26-35 år"
    				},
    				{
    					code: "36-45",
    					name: "36-45 år"
    				},
    				{
    					code: "46-55",
    					name: "46-55 år"
    				},
    				{
    					code: "66-65",
    					name: "66-65 år"
    				},
    				{
    					code: "66-75",
    					name: "66-75 år"
    				},
    				{
    					code: "76-85",
    					name: "76-85 år"
    				},
    				{
    					code: "86-",
    					name: "86- år"
    				}
    			],
    			name: "Age",
    			type: "codedValue"
    		},
    		editable: true,
    		length: 10,
    		name: "Age",
    		nullable: false,
    		tooltip: "Ålder",
    		type: "esriFieldTypeString",
    		visible: true
    	},
    	{
    		alias: "Var bor du i Mariastaden?",
    		domain: {
    			codedValues: [
    	    		{
    	    			code: "No_info",
    	    			name: "Jag vill inte lämna några uppgifter."
    	    		},
    	    		{
    	    			code: "Maria_Park",
    	    			name: "Maria Park"
    				},
    				{
    					code: "Maria_Tradgardsstad",
    					name: "Maria Trädgårdsstad"
    				},
    				{
    					code: "Maria_Ang",
    					name: "Maria Äng"
    				},
    				{
    					code: "Maria_Hage",
    					name: "Maria Hage"
    				},
    				{
    					code: "Maria_Lovisa",
    					name: "Maria Lovisa"
    				},
    				{
    					code: "Maria_Sofia",
    					name: "Maria Sofia"
    				},
    				{
    					code: "Maria_Stationsomrade",
    					name: "Maria Stationsområde"
    				},
    				{
    					code: "Work",
    					name: "Jag jobbar i Mariastaden"
    				},
    				{
    					code: "Visit",
    					name: "Jag besöker Mariastaden"
    				}
    			],
    			name: "UseCase",
    			type: "codedValue"
    		},
    		editable: true,
    		length: 10,
    		name: "Bostad",
    		nullable: false,
    		tooltip: "Kön",
    		type: "esriFieldTypeString",
    		visible: true
    	},
    	{
    		alias: "Var? Beskriv.",
    		editable: true,
    		length: 50,
    		name: "Bostad_Visit_work_desc",
    		nullable: true,
    		tooltip: "Beskrivning för besök eller jobb",
    		type: "esriFieldTypeString",
    		visible: true,
    		displayType: "textarea",
    		fieldDescription: ""
    	},
    	{
    		alias: "Om du vill kan du lämna din adress.",
    		editable: true,
    		length: 50,
    		name: "Lamna_Bostad_Adress",
    		nullable: true,
    		tooltip: "Bostad adress",
    		type: "esriFieldTypeString",
    		visible: true,
    		fieldDescription: ""
    	},
    	
/********************************************************************************
			TRANSPORT WORKING
********************************************************************************/
    	{
    		alias: "Vad fungerar bra i trafikmiljön?",
    		domain: {
    			codedValues: [
    	    		{
    	    			code: "Walk",
    	    			name: "Jag går"
    	    		},
    	    		{
    	    			code: "Bicycle",
    	    			name: "Jag cyklar"
    				},
    				{
    					code: "Moped",
    					name: "Jag kör moped"
    				},
    				{
    					code: "Bil",
    					name: "Jag kör bil"
    				},
    				{
    					code: "Bus",
    					name: "Jag åker buss"
    				},
    				{
    					code: "Friend",
    					name: "Jag leker med  mina kompisar"
    				},
    				{
    					code: "Other",
    					name: "Annat"
    				}
    			],
    			name: "UseCase",
    			type: "codedValue"
    		},
    		editable: true,
    		length: 10,
    		name: "Working",
    		nullable: false,
    		tooltip: "Kön",
    		type: "esriFieldTypeString",
    		visible: true
    	},
//    	{
//    		alias: "Annat fungerar bra beskriv.",
//    		editable: true,
//    		length: 50,
//    		name: "This_is_working_others_desc",
//    		nullable: true,
//    		tooltip: "Beskriv fungerar bra.",
//    		type: "esriFieldTypeString",
//    		visible: true,
//    		displayType: "textarea",
//    		fieldDescription: ""
//    	},
/********************************************************************************
			TRANSPORT NOT WORKING
********************************************************************************/
    	{
    		alias: "Vad fungerar inte i trafikmiljön?",
    		domain: {
    			codedValues: [
    				{
    					code: "Walk",
    					name: "Jag går"
    				},
    				{
    					code: "Bicycle",
    					name: "Jag cyklar"
    				},
    				{
    					code: "Moped",
    					name: "Jag kör moped"
    				},
    				{
    					code: "Bil",
    					name: "Jag kör bil"
    				},
    				{
    					code: "Bus",
    					name: "Jag åker buss"
    				},
    				{
    					code: "Friend",
    					name: "Jag leker med  mina kompisar"
    				},
    				{
    					code: "Other",
    					name: "Annat"
    				}
    			],
    			name: "UseCase",
    			type: "codedValue"
    		},
    		editable: true,
    		length: 10,
    		name: "Not_working",
    		nullable: false,
    		tooltip: "Kön",
    		type: "esriFieldTypeString",
    		visible: true
    	}
    	
//    	{
//    		alias: "Annat fungerar inte beskriv.",
//    		editable: true,
//    		length: 50,
//    		name: "Not_working_others_desc",
//    		nullable: true,
//    		tooltip: "Beskriv fungerar inte.",
//    		type: "esriFieldTypeString",
//    		visible: true,
//    		displayType: "textarea",
//    		fieldDescription: ""
//    	}
    	
//    	,
//		{
//			type: "esriFieldTypeString", 
//			alias: "Age", 
//			domain: {
//				codeValue:[
//					code:
//					name:
//				],
//			},
//			length: 10, 
//			nullable: true, 
//			editable: true,
//			tooltip: "",
//			visible: true
//		}


    
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
    "useSmallHeader": true,
    "enableSharing": true,
    "defaultMapExtent": true,
    "pushpinColor": "green",
    "enableAttachments": true,
    "attachmentIsRequired": true,
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