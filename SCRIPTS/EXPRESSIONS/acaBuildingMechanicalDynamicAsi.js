//ACA BUILDING MECHANICAL ASI DYNAMIC SETTINGS SCRIPT

var toPrecision=function(value){
  var multiplier=10000;
  return Math.round(value*multiplier)/multiplier;
}
function addDate(iDate, nDays){ 
	if(isNaN(nDays)){
		throw("Day is a invalid number!");
	}
	return expression.addDate(iDate,parseInt(nDays));
}

function diffDate(iDate1,iDate2){
	return expression.diffDate(iDate1,iDate2);
}

function parseDate(dateString){
	return expression.parseDate(dateString);
}

function formatDate(dateString,pattern){ 
	if(dateString==null||dateString==''){
		return '';
	}
	return expression.formatDate(dateString,pattern);
}

var servProvCode=expression.getValue("$$servProvCode$$").value;

//INSERT ALL getField------------------------------------------------------------------------------
var variable0=expression.getValue("ASI::ONLINE MECHANICAL PERMIT::Permit Scope");
var variable1=expression.getValue("ASI::GENERAL INFORMATION::Add Workman's Comp INS Review Fee (1 = Yes)");
var variable2=expression.getValue("ASI::GENERAL INFORMATION::Expiration Date");
var variable3=expression.getValue("ASI::GENERAL INFORMATION::Mail-In Fee (1 = Yes)");
var variable4=expression.getValue("ASI::GENERAL INFORMATION::Number of Microfilm/Permit Documents");
var variable5=expression.getValue("ASI::GENERAL INFORMATION::Number of Plan Sheets");
var variable6=expression.getValue("ASI::GENERAL INFORMATION::Occupancy Group");
var variable7=expression.getValue("ASI::GENERAL INFORMATION::Type of Use");
var variable8=expression.getValue("ASI::GENERAL INFORMATION::Type of Work");
var variable9=expression.getValue("ASI::MECHANICAL INFORMATION::Air Handler Including Ducts Equal or Under 10K CFM");
var variable10=expression.getValue("ASI::MECHANICAL INFORMATION::Air Handler Including Ducts Greater than 10K CFM");
var variable11=expression.getValue("ASI::MECHANICAL INFORMATION::Appliance Vent - Only");
var variable12=expression.getValue("ASI::MECHANICAL INFORMATION::Boiler/Compressor/Absorption 15.1 to 30HP");
var variable13=expression.getValue("ASI::MECHANICAL INFORMATION::Boiler/Compressor/Absorption 3.1 to 15HP");
var variable14=expression.getValue("ASI::MECHANICAL INFORMATION::Boiler/Compressor/Absorption 30.1 to 50HP");
var variable15=expression.getValue("ASI::MECHANICAL INFORMATION::Boiler/Compressor/Absorption over 50HP");
var variable16=expression.getValue("ASI::MECHANICAL INFORMATION::Boiler/Compressor/Absorption up to 3HP");
var variable17=expression.getValue("ASI::MECHANICAL INFORMATION::Commercial/Industrial Incinerator");
var variable18=expression.getValue("ASI::MECHANICAL INFORMATION::Decorative Fireplace (gas only)");
var variable19=expression.getValue("ASI::MECHANICAL INFORMATION::Evaporative Cooler");
var variable20=expression.getValue("ASI::MECHANICAL INFORMATION::Floor Furnace");
var variable21=expression.getValue("ASI::MECHANICAL INFORMATION::Furnace Less or Equal to 100K CFM");
var variable22=expression.getValue("ASI::MECHANICAL INFORMATION::Furnace More than 100K CFM");
var variable23=expression.getValue("ASI::MECHANICAL INFORMATION::Gas System for Equipment");
var variable24=expression.getValue("ASI::MECHANICAL INFORMATION::Heater - Floor Mounted");
var variable25=expression.getValue("ASI::MECHANICAL INFORMATION::Heater - Recessed Type");
var variable26=expression.getValue("ASI::MECHANICAL INFORMATION::Heater - Suspended Type");
var variable27=expression.getValue("ASI::MECHANICAL INFORMATION::Mechanical Exhaust System");
var variable28=expression.getValue("ASI::MECHANICAL INFORMATION::Misc. Appliance or Equipment");
var variable29=expression.getValue("ASI::MECHANICAL INFORMATION::Repair, Alteration, Addition");
var variable30=expression.getValue("ASI::MECHANICAL INFORMATION::Vent/Fan Single Duct");
var variable31=expression.getValue("ASI::MECHANICAL INFORMATION::Ventilation System");

//END getField-------------------------------------------------------------------------------------

var totalRowCount = expression.getTotalRowCount();

//INSERT resetField ONLINE PERMIT SELECTION{resetField}--------------------------------------------
if(variable0.value==null || variable0.value.equals("")){
	variable0.required=true;expression.setReturn(variable0);
	variable1.hidden=true;variable1.required=false;variable1.readOnly=false;variable1.value=null;expression.setReturn(variable1);
	variable2.hidden=true;variable2.required=false;variable2.readOnly=false;variable2.value=null;expression.setReturn(variable2);
	variable3.hidden=true;variable3.required=false;variable3.readOnly=false;variable3.value=null;expression.setReturn(variable3);
	variable4.hidden=true;variable4.required=false;variable4.readOnly=false;variable4.value=null;expression.setReturn(variable4);
	variable5.hidden=true;variable5.required=false;variable5.readOnly=false;variable5.value=null;expression.setReturn(variable5);
	variable6.hidden=true;variable6.required=false;variable6.readOnly=false;variable6.value=null;expression.setReturn(variable6);
	variable7.hidden=true;variable7.required=false;variable7.readOnly=false;variable7.value=null;expression.setReturn(variable7);
	variable8.hidden=true;variable8.required=false;variable8.readOnly=false;variable8.value=null;expression.setReturn(variable8);
	variable9.hidden=true;variable9.required=false;variable9.readOnly=false;variable9.value=null;expression.setReturn(variable9);
	variable10.hidden=true;variable10.required=false;variable10.readOnly=false;variable10.value=null;expression.setReturn(variable10);
	variable11.hidden=true;variable11.required=false;variable11.readOnly=false;variable11.value=null;expression.setReturn(variable11);
	variable12.hidden=true;variable12.required=false;variable12.readOnly=false;variable12.value=null;expression.setReturn(variable12);
	variable13.hidden=true;variable13.required=false;variable13.readOnly=false;variable13.value=null;expression.setReturn(variable13);
	variable14.hidden=true;variable14.required=false;variable14.readOnly=false;variable14.value=null;expression.setReturn(variable14);
	variable15.hidden=true;variable15.required=false;variable15.readOnly=false;variable15.value=null;expression.setReturn(variable15);
	variable16.hidden=true;variable16.required=false;variable16.readOnly=false;variable16.value=null;expression.setReturn(variable16);
	variable17.hidden=true;variable17.required=false;variable17.readOnly=false;variable17.value=null;expression.setReturn(variable17);
	variable18.hidden=true;variable18.required=false;variable18.readOnly=false;variable18.value=null;expression.setReturn(variable18);
	variable19.hidden=true;variable19.required=false;variable19.readOnly=false;variable19.value=null;expression.setReturn(variable19);
	variable20.hidden=true;variable20.required=false;variable20.readOnly=false;variable20.value=null;expression.setReturn(variable20);
	variable21.hidden=true;variable21.required=false;variable21.readOnly=false;variable21.value=null;expression.setReturn(variable21);
	variable22.hidden=true;variable22.required=false;variable22.readOnly=false;variable22.value=null;expression.setReturn(variable22);
	variable23.hidden=true;variable23.required=false;variable23.readOnly=false;variable23.value=null;expression.setReturn(variable23);
	variable24.hidden=true;variable24.required=false;variable24.readOnly=false;variable24.value=null;expression.setReturn(variable24);
	variable25.hidden=true;variable25.required=false;variable25.readOnly=false;variable25.value=null;expression.setReturn(variable25);
	variable26.hidden=true;variable26.required=false;variable26.readOnly=false;variable26.value=null;expression.setReturn(variable26);
	variable27.hidden=true;variable27.required=false;variable27.readOnly=false;variable27.value=null;expression.setReturn(variable27);
	variable28.hidden=true;variable28.required=false;variable28.readOnly=false;variable28.value=null;expression.setReturn(variable28);
	variable29.hidden=true;variable29.required=false;variable29.readOnly=false;variable29.value=null;expression.setReturn(variable29);
	variable30.hidden=true;variable30.required=false;variable30.readOnly=false;variable30.value=null;expression.setReturn(variable30);
	variable31.hidden=true;variable31.required=false;variable31.readOnly=false;variable31.value=null;expression.setReturn(variable31);
}

//END resetField ONLINE PERMIT SELECTION-----------------------------------------------------------



//INSERT 1 PERMIT SCOPE CODE{adjustDisplay adjustRequired adjustReadOnly adjustValue updateAsi}----
if(variable0.value.equals("AC Change Out")){
	variable1.hidden=false;variable1.required=false;variable1.readOnly=false;expression.setReturn(variable1);
	if(variable2.value != null && variable2.value != ""){variable2.hidden=false;variable2.readOnly=true;expression.setReturn(variable2);}else{variable2.hidden=true;variable2.readOnly=true;expression.setReturn(variable2);}
	variable3.hidden=true;variable3.required=false;variable3.readOnly=false;variable3.value=null;expression.setReturn(variable3);
	variable4.hidden=false;variable4.required=false;variable4.readOnly=true;variable4.value=1;expression.setReturn(variable4);
	variable5.hidden=true;variable5.required=false;variable5.readOnly=false;variable5.value=null;expression.setReturn(variable5);
	variable6.hidden=false;variable6.required=false;variable6.readOnly=true;variable6.value="R-3 1 and 2 Unit Structure.";expression.setReturn(variable6);
	variable7.hidden=false;variable7.required=false;variable7.readOnly=true;variable7.value="Single Family Residential";expression.setReturn(variable7);
	variable8.hidden=false;variable8.required=false;variable8.readOnly=true;variable8.value="Alteration";expression.setReturn(variable8);
	variable9.hidden=true;variable9.required=false;variable9.readOnly=false;variable9.value=null;expression.setReturn(variable9);
	variable10.hidden=true;variable10.required=false;variable10.readOnly=false;variable10.value=null;expression.setReturn(variable10);
	variable11.hidden=true;variable11.required=false;variable11.readOnly=false;variable11.value=null;expression.setReturn(variable11);
	variable12.hidden=false;variable12.required=false;variable12.readOnly=false;expression.setReturn(variable12);
	variable13.hidden=false;variable13.required=false;variable13.readOnly=false;expression.setReturn(variable13);
	variable14.hidden=false;variable14.required=false;variable14.readOnly=false;expression.setReturn(variable14);
	variable15.hidden=false;variable15.required=false;variable15.readOnly=false;expression.setReturn(variable15);
	variable16.hidden=false;variable16.required=false;variable16.readOnly=false;expression.setReturn(variable16);
	variable17.hidden=true;variable17.required=false;variable17.readOnly=false;variable17.value=null;expression.setReturn(variable17);
	variable18.hidden=true;variable18.required=false;variable18.readOnly=false;variable18.value=null;expression.setReturn(variable18);
	variable19.hidden=true;variable19.required=false;variable19.readOnly=false;variable19.value=null;expression.setReturn(variable19);
	variable20.hidden=true;variable20.required=false;variable20.readOnly=false;variable20.value=null;expression.setReturn(variable20);
	variable21.hidden=true;variable21.required=false;variable21.readOnly=false;variable21.value=null;expression.setReturn(variable21);
	variable22.hidden=true;variable22.required=false;variable22.readOnly=false;variable22.value=null;expression.setReturn(variable22);
	variable23.hidden=true;variable23.required=false;variable23.readOnly=false;variable23.value=null;expression.setReturn(variable23);
	variable24.hidden=true;variable24.required=false;variable24.readOnly=false;variable24.value=null;expression.setReturn(variable24);
	variable25.hidden=true;variable25.required=false;variable25.readOnly=false;variable25.value=null;expression.setReturn(variable25);
	variable26.hidden=true;variable26.required=false;variable26.readOnly=false;variable26.value=null;expression.setReturn(variable26);
	variable27.hidden=true;variable27.required=false;variable27.readOnly=false;variable27.value=null;expression.setReturn(variable27);
	variable28.hidden=true;variable28.required=false;variable28.readOnly=false;variable28.value=null;expression.setReturn(variable28);
	variable29.hidden=true;variable29.required=false;variable29.readOnly=false;variable29.value=null;expression.setReturn(variable29);
	variable30.hidden=true;variable30.required=false;variable30.readOnly=false;variable30.value=null;expression.setReturn(variable30);
	variable31.hidden=true;variable31.required=false;variable31.readOnly=false;variable31.value=null;expression.setReturn(variable31);
}				

//END 1 PERMIT SCOPE-------------------------------------------------------------------------------



//INSERT 2 PERMIT SCOPE CODE{adjustDisplay adjustRequired adjustReadOnly adjustValue updateAsi}----
if(variable0.value.equals("FAU Change Out")){
	variable1.hidden=false;variable1.required=false;variable1.readOnly=false;expression.setReturn(variable1);
	if(variable2.value != null && variable2.value != ""){variable2.hidden=false;variable2.readOnly=true;expression.setReturn(variable2);}else{variable2.hidden=true;variable2.readOnly=true;expression.setReturn(variable2);}
	variable3.hidden=true;variable3.required=false;variable3.readOnly=false;variable3.value=null;expression.setReturn(variable3);
	variable4.hidden=false;variable4.required=false;variable4.readOnly=true;variable4.value=1;expression.setReturn(variable4);
	variable5.hidden=true;variable5.required=false;variable5.readOnly=false;variable5.value=null;expression.setReturn(variable5);
	variable6.hidden=false;variable6.required=false;variable6.readOnly=true;variable6.value="R-3 1 and 2 Unit Structure.";expression.setReturn(variable6);
	variable7.hidden=false;variable7.required=false;variable7.readOnly=true;variable7.value="Single Family Residential";expression.setReturn(variable7);
	variable8.hidden=false;variable8.required=false;variable8.readOnly=true;variable8.value="Alteration";expression.setReturn(variable8);
	variable9.hidden=true;variable9.required=false;variable9.readOnly=false;variable9.value=null;expression.setReturn(variable9);
	variable10.hidden=true;variable10.required=false;variable10.readOnly=false;variable10.value=null;expression.setReturn(variable10);
	variable11.hidden=true;variable11.required=false;variable11.readOnly=false;variable11.value=null;expression.setReturn(variable11);
	variable12.hidden=true;variable12.required=false;variable12.readOnly=false;variable12.value=null;expression.setReturn(variable12);
	variable13.hidden=true;variable13.required=false;variable13.readOnly=false;variable13.value=null;expression.setReturn(variable13);
	variable14.hidden=true;variable14.required=false;variable14.readOnly=false;variable14.value=null;expression.setReturn(variable14);
	variable15.hidden=true;variable15.required=false;variable15.readOnly=false;variable15.value=null;expression.setReturn(variable15);
	variable16.hidden=true;variable16.required=false;variable16.readOnly=false;variable16.value=null;expression.setReturn(variable16);
	variable17.hidden=true;variable17.required=false;variable17.readOnly=false;variable17.value=null;expression.setReturn(variable17);
	variable18.hidden=true;variable18.required=false;variable18.readOnly=false;variable18.value=null;expression.setReturn(variable18);
	variable19.hidden=true;variable19.required=false;variable19.readOnly=false;variable19.value=null;expression.setReturn(variable19);
	variable20.hidden=false;variable20.required=false;variable20.readOnly=false;expression.setReturn(variable20);
	variable21.hidden=false;variable21.required=false;variable21.readOnly=false;expression.setReturn(variable21);
	variable22.hidden=false;variable22.required=false;variable22.readOnly=false;expression.setReturn(variable22);
	variable23.hidden=true;variable23.required=false;variable23.readOnly=false;variable23.value=null;expression.setReturn(variable23);
	variable24.hidden=false;variable24.required=false;variable24.readOnly=false;expression.setReturn(variable24);
	variable25.hidden=false;variable25.required=false;variable25.readOnly=false;expression.setReturn(variable25);
	variable26.hidden=false;variable26.required=false;variable26.readOnly=false;expression.setReturn(variable26);
	variable27.hidden=true;variable27.required=false;variable27.readOnly=false;variable27.value=null;expression.setReturn(variable27);
	variable28.hidden=true;variable28.required=false;variable28.readOnly=false;variable28.value=null;expression.setReturn(variable28);
	variable29.hidden=true;variable29.required=false;variable29.readOnly=false;variable29.value=null;expression.setReturn(variable29);
	variable30.hidden=true;variable30.required=false;variable30.readOnly=false;variable30.value=null;expression.setReturn(variable30);
	variable31.hidden=true;variable31.required=false;variable31.readOnly=false;variable31.value=null;expression.setReturn(variable31);
}				

//END 2 PERMIT SCOPE-------------------------------------------------------------------------------



//INSERT 3 PERMIT SCOPE CODE{adjustDisplay adjustRequired adjustReadOnly adjustValue updateAsi}----
if(variable0.value.equals("FAU / AC Change Out")){
	variable1.hidden=false;variable1.required=false;variable1.readOnly=false;expression.setReturn(variable1);
	if(variable2.value != null && variable2.value != ""){variable2.hidden=false;variable2.readOnly=true;expression.setReturn(variable2);}else{variable2.hidden=true;variable2.readOnly=true;expression.setReturn(variable2);}
	variable3.hidden=true;variable3.required=false;variable3.readOnly=false;variable3.value=null;expression.setReturn(variable3);
	variable4.hidden=false;variable4.required=false;variable4.readOnly=true;variable4.value=1;expression.setReturn(variable4);
	variable5.hidden=true;variable5.required=false;variable5.readOnly=false;variable5.value=null;expression.setReturn(variable5);
	variable6.hidden=false;variable6.required=false;variable6.readOnly=true;variable6.value="R-3 1 and 2 Unit Structure.";expression.setReturn(variable6);
	variable7.hidden=false;variable7.required=false;variable7.readOnly=true;variable7.value="Single Family Residential";expression.setReturn(variable7);
	variable8.hidden=false;variable8.required=false;variable8.readOnly=true;variable8.value="Alteration";expression.setReturn(variable8);
	variable9.hidden=true;variable9.required=false;variable9.readOnly=false;variable9.value=null;expression.setReturn(variable9);
	variable10.hidden=true;variable10.required=false;variable10.readOnly=false;variable10.value=null;expression.setReturn(variable10);
	variable11.hidden=true;variable11.required=false;variable11.readOnly=false;variable11.value=null;expression.setReturn(variable11);
	variable12.hidden=false;variable12.required=false;variable12.readOnly=false;expression.setReturn(variable12);
	variable13.hidden=false;variable13.required=false;variable13.readOnly=false;expression.setReturn(variable13);
	variable14.hidden=false;variable14.required=false;variable14.readOnly=false;expression.setReturn(variable14);
	variable15.hidden=false;variable15.required=false;variable15.readOnly=false;expression.setReturn(variable15);
	variable16.hidden=false;variable16.required=false;variable16.readOnly=false;expression.setReturn(variable16);
	variable17.hidden=true;variable17.required=false;variable17.readOnly=false;variable17.value=null;expression.setReturn(variable17);
	variable18.hidden=true;variable18.required=false;variable18.readOnly=false;variable18.value=null;expression.setReturn(variable18);
	variable19.hidden=true;variable19.required=false;variable19.readOnly=false;variable19.value=null;expression.setReturn(variable19);
	variable20.hidden=false;variable20.required=false;variable20.readOnly=false;expression.setReturn(variable20);
	variable21.hidden=false;variable21.required=false;variable21.readOnly=false;expression.setReturn(variable21);
	variable22.hidden=false;variable22.required=false;variable22.readOnly=false;expression.setReturn(variable22);
	variable23.hidden=true;variable23.required=false;variable23.readOnly=false;variable23.value=null;expression.setReturn(variable23);
	variable24.hidden=false;variable24.required=false;variable24.readOnly=false;expression.setReturn(variable24);
	variable25.hidden=false;variable25.required=false;variable25.readOnly=false;expression.setReturn(variable25);
	variable26.hidden=false;variable26.required=false;variable26.readOnly=false;expression.setReturn(variable26);
	variable27.hidden=true;variable27.required=false;variable27.readOnly=false;variable27.value=null;expression.setReturn(variable27);
	variable28.hidden=true;variable28.required=false;variable28.readOnly=false;variable28.value=null;expression.setReturn(variable28);
	variable29.hidden=true;variable29.required=false;variable29.readOnly=false;variable29.value=null;expression.setReturn(variable29);
	variable30.hidden=true;variable30.required=false;variable30.readOnly=false;variable30.value=null;expression.setReturn(variable30);
	variable31.hidden=true;variable31.required=false;variable31.readOnly=false;variable31.value=null;expression.setReturn(variable31);
}				

//END 3 PERMIT SCOPE-------------------------------------------------------------------------------
