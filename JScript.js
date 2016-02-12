var operator=null,L_val,Final_res,stat_operator=null,point=0;
var flag=0,last_oprtr=null,erase;
function Clear () {
	document.calc.display.value=0;
}

function putValue (value) {

	if(erase!="" && erase!=0){
		if(document.calc.display.value==0){
			document.calc.display.value=value;
		}
		else{
			var temp = document.calc.display.value;
			document.calc.display.value=temp+value;
		}
	}
	else if(erase===undefined){
		if(document.calc.display.value==0){
			document.calc.display.value=value;
		}
		else{
			var temp = document.calc.display.value;
			document.calc.display.value=temp+value;
		}
	}
	else if(erase==0){
		document.calc.display.value=value;
		erase=1;
	}

}

function getOperator(value){
	erase=1;
	var counter=0;
	if (operator!=null)
		last_oprtr = operator;
	operator=value.toString();
	var temp;
	var string = document.calc.display.value.toString();

	var length = string.length;
	length--;
	if(string[length]=="+" || string[length]=="-" || string[length]=="*" || string[length]=="/"){
		temp = string.substr(0, string.length-1); 
		document.calc.display.value=temp.concat(operator); 

		last_oprtr=operator;
		counter=1;
	}
	else{
		for (var i = 0; i < string.length; i++) {
			if(string[i]=="+" || string[i]=="-" ||string[i]=="*" || string[i]=="/"){

				var res = string.split(last_oprtr);
				var First_val = parseFloat(res[0]);
				var Sec_val = parseFloat(res[1]);
				Check(last_oprtr,First_val,Sec_val);
				L_val=Sec_val;
				var f_res = Final_res.toString();
				document.calc.display.value=f_res.concat(operator);
				counter=1;
				break;
			}
		}
		if (counter==0)
			document.calc.display.value=string.concat(operator);
	}
}

function getEqual () {
	var temp;
	var string = document.calc.display.value.toString();
	var arr = string.split("");
	var length = string.length;
	length--;
	if(string[length]=="+" || string[length]=="-" || string[length]=="*" || string[length]=="/"){
		document.calc.display.value="Error";
	}
	else if(operator!=null){
		temp=document.calc.display.value;
		var res = temp.split(operator);
		var First_val = parseFloat(res[0]);
		var Sec_val = parseFloat(res[1]);
		Check(operator.toString(),First_val,Sec_val);

		L_val=Sec_val;
		document.calc.display.value=Final_res.toString();
		stat_operator=operator;
		operator=null;

	}
	else if(stat_operator!=null){
		Check(stat_operator,Final_res,L_val)
		document.calc.display.value=Final_res.toString();
	}
	erase=0;
}

function Check (op,fv,sv) {
	if(op=="+")
		Final_res = Sum(fv,sv);
	else if(op=="-")
		Final_res = Sub(fv,sv);
	else if (op=="*")
		Final_res = Mul(fv,sv);
	else if(op=="/")
		Final_res = Div(fv,sv);
}

function Sum(First_val,Sec_val){
	 return First_val+Sec_val;
}
function Sub(First_val,Sec_val){
	 return First_val-Sec_val;
}
function Mul(First_val,Sec_val){
	 return First_val*Sec_val;
}
function Div(First_val,Sec_val){
	if (Sec_val=="0")
		return "Error";
	return First_val/Sec_val;
}

function Delete () {
	var temp,string,length,arr;
	string = document.calc.display.value.toString();
	length = string.length;
	if(length>1){
		document.calc.display.value=string.substr(0, string.length-1); 
	}
	else if(length==1)
		document.calc.display.value="0";
	else
		document.calc.display.value="0";
}