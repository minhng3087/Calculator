function getValue() {
    return document.getElementById("output").innerHTML;
}
function printValue(key) {
    document.getElementById("output").innerHTML = key;
}

function operatorHand(str,oper) {
    if(str[str.length-1]=='+'&&oper=='+') return true;
    else if(str[str.length-1]=='-'&&oper=='-') return true;
    else if(str[str.length-1]=='*'&&oper=='*') return false;
    else if(str[str.length-1]=='/'&&oper=='*') return false;
    else if(str[str.length-1]=='/'&&oper=='/') return false;
    else if(str[str.length-1]=='/'&&oper=='*') return false;
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++) {
    operator[i].addEventListener('click',function(){
        if(this.id=="clear-all") {
            printValue("");
        }
        else if(this.id=="del-char") {
            var output = getValue();
            if(output) {
                output = output.substr(0,output.length-1);
                printValue(output);
            }
        }
        else {
            var output = getValue();
            if(this.id=="=") {
                var result = eval(output);
                printValue(result);
                localStorage.setItem('value',result);
            }
            else if(this.id=="ANS") {
                var numberBefore = localStorage.getItem('value');
                if(output!=''&&isNaN(output[output.length-1])!=false) {
                    output += numberBefore;
                    printValue(output);
                }
                else 
                printValue(numberBefore);
            }
            else {
                if(operatorHand(output,this.id)==false) {
                    alert(output+=this.id + ' is error');
                }
                else if(operatorHand(output,this.id)==true) {
                    output += '';
                    printValue(output);
                }
                else {
                output += this.id;
                printValue(output);
                }
            }
        }
    });
};

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output = getValue();
		if(output!=NaN){ 
			output += this.id;
			printValue(output);
		}
	});
}

