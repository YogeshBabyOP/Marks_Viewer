var rollNo = "";
var alertWindow = false;

function stopProcess() {
    document.getElementById("btnid").disabled = true;
}

document.getElementById("okid").onclick = function () {
    document.getElementById("btnid").disabled = false;
    alertWindow = false
    var table = document.getElementById("myTable");
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    document.getElementById("notfound").innerHTML = " ";
};

document.getElementById("btnid").onclick = function getMarks() {

    // this.disabled = true;
    stopProcess(); 

    RollnoList.indexOf(document.getElementById("textid").value)
    document.getElementById("titleOP").innerHTML = NamesList[RollnoList.indexOf(document.getElementById("textid").value)] + " Marks"

    input = document.getElementById("textid")
    rollNo = input.value.toString().toLowerCase();

    var exist = false;
    var index = 0;
    
    RollnoList.forEach(Roll => {

        if (Roll == rollNo) {
            exist = true
            index = RollnoList.indexOf(Roll);
        }
    })
   
    if (!exist) {


        if (rollNo.length == " ") {
            document.getElementById("notfound").innerHTML = "Write something !!!";
            document.getElementById("titleOP").innerHTML = "Enter Roll Number";
        } else {
            document.getElementById("notfound").innerHTML = "Entered Roll Number is not present in the Database!!!"
            document.getElementById("titleOP").innerHTML = " No Student Found";
        }

    }
    
    // if (exist) {
    //     if (rollNo == "20kt1a0501") document.getElementById("textid").value = "Abdul Gaffar"
    //     if (rollNo == "20kt1a0503") document.getElementById("textid").value = "Anil Kumar"
    //     if (rollNo == "20kt1a0517") document.getElementById("textid").value = "Sai Pavan"
    //     if (rollNo == "20kt1a0524") document.getElementById("textid").value = "Akhil"
    //     if (rollNo == "20kt1a0527") document.getElementById("textid").value = "Phani"
    //     if (rollNo == "20kt1a0555") document.getElementById("textid").value = "Imtiaz"
    //     if (rollNo == "20kt1a0560") document.getElementById("textid").value = "YogeshBaby"
    //     if (rollNo == "20kt1a0562") document.getElementById("textid").value = "Abhi Ram"
    // }

    if (!alertWindow) {

        if (rollNo == "20kt1a0501") window.alert("Abdul Gaffar");    
        if (rollNo == "20kt1a0503") window.alert("Anil Kumar");
        if (rollNo == "20kt1a0514") window.alert("Jayanth");   
        if (rollNo == "20kt1a0517") window.alert("Sai Pavan");
        if (rollNo == "20kt1a0522") window.alert("Deepika");    
        if (rollNo == "20kt1a0524") window.alert("Akhil");
        if (rollNo == "20kt1a0525") window.alert("Sumanth"); 
        if (rollNo == "20kt1a0527") window.alert("Phani");    
        if (rollNo == "20kt1a0537") window.alert("poojitha");    
        if (rollNo == "20kt1a0546") window.alert("Chaitanya");    
        if (rollNo == "20kt1a0555") window.alert("Imtiaz");    
        if (rollNo == "20kt1a0560") window.alert("God or What");    
        if (rollNo == "20kt1a0562") window.alert("Abhi Ram");    

        alertWindow = true
    }

    if (exist) {

        document.getElementById("notfound").innerHTML = "";

        // stopProcess();

        let indexEle = index;
        let FinalArray = [s1, s2, s3, s4, s5];

        var table = document.getElementById("myTable");
        var myRow = table.insertRow();
        var subCell = myRow.insertCell(0);
        var marksCell = myRow.insertCell(1);

        subCell.innerHTML = "Subject";
        marksCell.innerHTML = "Marks";

        for (let i = 0; i < FinalArray.length; i++) {
            let arr = FinalArray[i];
            for (let j = 0; j < 1; j++) {

                var table = document.getElementById("myTable");
                var myRow = table.insertRow();
        
                var subCell = myRow.insertCell(0);
                var marksCell = myRow.insertCell(1);
                var ind = i + 1;
                subCell.innerHTML = "S" + ind;
                marksCell.innerHTML = arr[index];
            }
        }

        var table = document.getElementById("myTable");
        var myRow = table.insertRow();
        var subCell = myRow.insertCell(0);
        var marksCell = myRow.insertCell(1);
        subCell.innerHTML = "TotalMarks"
        marksCell.innerHTML = getTotal();


        var table = document.getElementById("myTable");
        var myRow = table.insertRow();
        var subCell = myRow.insertCell(0);
        var marksCell = myRow.insertCell(1);
        subCell.innerHTML = "Percentage"
        marksCell.innerHTML = getPercentage();

        console.log(index)
    }  
}

function getTotal () {
    var TotalArrays = [s1, s2, s3, s4, s5];
    var sum = 0;
    for (let i = 0; i < TotalArrays.length; i++) {
        let arrayOfMarks = TotalArrays[i];
        for (let j = 0; j < 1; j++) {
            sum += arrayOfMarks[RollnoList.indexOf(document.getElementById("textid").value)];
        }
    }
    return sum;
}

function getPercentage () {
    var maxMarks = getTotal();
    if (maxMarks == Infinity) return Infinity
    return Math.round((maxMarks / 150) * 100) + "%"
}

var RollnoList = ["20kt1a0501", "20kt1a0503", "20kt1a0514", "20kt1a0517", "20kt1a0522","20kt1a0524", "20kt1a0525", "20kt1a0527", "20kt1a0537", "20kt1a0546", "20kt1a0555","20kt1a0560","20kt1a0562"]
var NamesList = ["Abdul Gaffar", "Anil Kumar", "Jayanth", "Sai Pavan", "Deepika","Akhil", "Sumanth", "Phani", "Poojitha", "Chaitanya", "Imtiaz","God Or What","Abhi Ram"]

var s1 = [18, 13, 16, 14, 20, 26, 25, 16, 18, 18, 10, Infinity, 15]
var s2 = [15, 24, 18, 16, 23, 30, 28, 26, 23, 20, 15, Infinity, 20]
var s3 = [20, 20, 20, 18, 26, 28, 22, 15, 18, 25, 14, Infinity, 25]
var s4 = [25, 10, 14, 20, 22, 27, 20, 10, 25, 23, 18, Infinity, 18]
var s5 = [18, 18, 17, 21, 23, 27, 18, 15, 22, 22, 24, Infinity, 23]