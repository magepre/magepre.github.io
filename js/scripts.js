var fileContent = '1';

const row5 = {
    1: {"ef-": "PK,"},
    2: {"de-": "OP,"},
    3: {"c-": "I,"},
    4: {"d-": "O,"},
    5: {"e-": "P,"},
    6: {"g-": "L,"},
    7: {"f-": "K,"},
    8: {"a-": "&#214;,"}, //Ö
    9: {"h-": "&#220;,"}, //Ü
    10: {"b-": "&#220;,"}, //Ü
    11: {"-": ","},
}

const row4 = {
    1: {"ah-": "DR,"},
    2: {"ab-": "DR,"},
    3: {"ef-": "EA,"},
    4: {"c-": "Q,"},
    5: {"d-": "W,"},
    6: {"e-": "E,"},
    7: {"f-": "A,"},
    8: {"g-": "S,"},
    9: {"a-": "D,"},
    10: {"h-": "R,"},
    11: {"b-": "R,"},
    12: {"-": ","},
}


function buttonFunction() {

    let contentArray = fileContent.split("\n");
    if (fileContent === "1") {
        const textfieldContent = document.getElementById("input_1").value
        contentArray = textfieldContent.split("\n");
    }

    const convertedArray = getConvertedString(contentArray);

    document.getElementById("label_1").innerHTML = '';
    convertedArray.forEach(function (element) {
        document.getElementById("label_1").innerHTML += "<p>" + element + "</p>";
    });

    const inputTest = document.getElementById("input_1").value

    //alert(window.fileContent);
};


document.getElementById('upload').addEventListener('change', readFileAsString)
document.getElementById('button_1').addEventListener('click', buttonFunction)
document.getElementById('button_show_mapping').addEventListener('click', buttonShowMappingFunction)

function readFileAsString() {
    var files = this.files;
    if (files.length === 0) {
        //console.log('No file is selected');
        return;
    }

    var reader = new FileReader();
    reader.onload = function (event) {
        fileContent = event.target.result;
    };


    reader.readAsText(files[0]);

}

function getConvertedString(lines) {
    var output = [];

    // 5|a-b---c-d-e-f---|
    // 4|a-b---c-d-e-f---|
    // 5|a-b---c-d-e-f---|
    
    lines.forEach(function (x) {
        if (x) {
            if (x[0] == "5") {
                for (var key in row5) {
                    let pKey = Object.keys(row5[key])[0]
                    if (row5.hasOwnProperty(key)) {
                        x = x.replace(new RegExp(pKey, 'g'), row5[key][pKey])
                    }
                }

            } else if (x[0] == "4") {
                for (var key in row4) {
                    let pKey = Object.keys(row4[key])[0]
                    if (row4.hasOwnProperty(key)) {
                        x = x.replace(new RegExp(pKey, 'g'), row4[key][pKey])
                    }
                }
            }
            output.push(x);
        }
    });
    return output;
}

function buttonShowMappingFunction() {
    var output = [];

    for (var key in row5) {
        let pKey = Object.keys(row5[key])[0]
        let pVal = row5[key][pKey]
        if (row5.hasOwnProperty(key)) {
            x = `${pKey} <span class="span-arrow-style">&#10236;</span> ${pVal}`
        }
        output.push(x);
    }

    document.getElementById("label_1").innerHTML = ''
    document.getElementById("label_1").innerHTML += "<p><b>Reihe 5</b></p><hr>";
    output.forEach(function (element) {
        document.getElementById("label_1").innerHTML += "<p>" + element + "</p>";
    });


    output = [];

    for (var key in row4) {
        let pKey = Object.keys(row4[key])[0]
        let pVal = row4[key][pKey]
        if (row5.hasOwnProperty(key)) {
            x = `${pKey} <span class="span-arrow-style">&#10236;</span> ${pVal}`
        }
        output.push(x);
    }


    document.getElementById("label_1").innerHTML += "<hr><p><b>Reihe 4</b></p><hr>";
    output.forEach(function (element) {
        document.getElementById("label_1").innerHTML += "<p>" + element + "</p>";
    });
}


