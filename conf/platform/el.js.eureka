importPackage(java.io);
importPackage(java.lang);
importPackage(com.merce.woven.server.util);
function readHdfsFile(fileName){
   return  new com.merce.woven.server.util.HdfsUtils.read(fileName,0).get(0);

}

function date() {
    return new java.util.Date();
}

function format(date, f) {
    //logger.info("date is: " + date + ", format is:" + f)
    var sf = new java.text.SimpleDateFormat(f);
    return sf.format(date);
}

function env(k) {
    var v = System.getenv(k);
    return v == null ? System.getProperty(k) : v;
}

function curdate(f) {
   return format(date(), f);
}

function yesterday(f) {
  var d = new java.util.Date(date().getTime()-3600*1000*24);
  return format(d, f);
}

function today(f) {
  return curdate(f);
}

function uuid() {
  return java.util.UUID.randomUUID().toString();
}

function yyyyMMddHHmm() {
  return today("yyyyMMddHHmm");
}

function sliceTime() {
  return properties.get('sliceTime');
}


function year(offset){
     var date = new Date();
     var strYear = date.getFullYear()+offset;      
     datastr = strYear;
     return datastr;  
}
function month(offset){  
    var date = new Date();
    date.setMonth(date.getMonth()+offset);
    var str_year = date.getFullYear();
    var str_month = date.getMonth()+1;
	if(str_month < 10){
	 str_month='0'+str_month;
	}
    var datastr = str_year +'-'+ str_month;
    return datastr;  
 }  
function today_offset(time_type,offset,f) {	
switch(time_type){
	case "Y":
		var d = new java.text.SimpleDateFormat("yyyy").parse(year(offset));	   
		break;
	case "M" :
		var d = new java.text.SimpleDateFormat("yyyy-MM").parse(month(offset));
	        break;
	case "D":
	       var d = new java.util.Date(date().getTime()+3600*1000*24*offset);
	       break;
	case "H":
	        var d = new java.util.Date(date().getTime()+3600*1000*offset);
	        break;
	case "m":
	      var d = new java.util.Date(date().getTime()+60*1000*offset);
	      break;	
	default:var d = new java.util.Date(date().getTime());
    }
	return format(d,f);
}




