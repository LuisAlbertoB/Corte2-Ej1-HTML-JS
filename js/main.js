var array;
var string="";
var string2="";

printDate()

function printDate(){
    let date=new Date();
    document.getElementById('date').innerHTML=date;
}

function addText(){
    string= document.getElementById('entry').value;
    array=string.split(' ');
    for(let i=0; i<array.length; i++)
    string2+=array[i]+" ";
    return(string2);
};

function fnPrint(string2){
    document.getElementById('label').innerHTML=string2
}