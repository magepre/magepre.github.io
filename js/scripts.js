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

const pln_lost_woods = "5|----------------------e-d-|\n" +
    "4|f-a-b---f-a-b---f-a-b-----|\n" +
    "\n" +
    "5|----c---------------------|\n" +
    "4|--b---b-g-e---------d-e-g-|\n" +
    "\n" +
    "4|e-----------f-a-b---f-a-b-|\n" +
    "\n" +
    "5|--------e-d-----c-e-------|\n" +
    "4|--f-a-b-------b-----b-g---|\n" +
    "\n" +
    "4|------b-g-d-e-----------d-|\n" +
    "\n" +
    "5|--------------c-----------|\n" +
    "4|e-f---g-a-b-----b-e-------|\n" +
    "\n" +
    "5|--------------------c-d-e-|\n" +
    "5|--------------c-d---e-f-g-|\n" +
    "4|----f-g-a---b-a-b---------|\n" +
    "4|----d-e-f---g-------------|\n" +
    "\n" +
    "4|----------d-e-f---g-a-b---|\n" +
    "\n" +
    "5|c-------------------------|\n" +
    "4|--b-e-----------f-e-a-g-b-|\n" +
    "4|----------------d-c-f-e-g-|\n" +
    "\n" +
    "5|----------c---d-c--c------|\n" +
    "5|--c---d-c-e-d-f-e-ef-de---|\n" +
    "4|a-a-b-b-a---b-----b--ab---|\n" +
    "4|f---g---------------------|\n" +
    "\n" +
    "5|------------------------e-|\n" +
    "5|------------------------b-|\n" +
    "\n" +
    "5|------------------------e-|\n" +
    "4|--f-a-b---f-a-b---f-a-b---|\n" +
    "\n" +
    "5|d-----c-------------------|\n" +
    "4|----b---b-g-e---------d-e-|\n" +
    "\n" +
    "4|g-e-----------f-a-b---f-a-|\n" +
    "\n" +
    "5|----------e-d-----c-e-----|\n" +
    "4|b---f-a-b-------b-----b-g-|\n" +
    "\n" +
    "4|--------b-g-d-e-----------|\n" +
    "\n" +
    "5|----------------c---------|\n" +
    "4|d-e-f---g-a-b-----b-e-----|\n" +
    "\n" +
    "5|----------------------c-d-|\n" +
    "5|----------------c-d---e-f-|\n" +
    "4|------f-g-a---b-a-b-------|\n" +
    "4|------d-e-f---g-----------|\n" +
    "\n" +
    "5|e-------------------------|\n" +
    "5|g-------------------------|\n" +
    "4|------------d-e-f---g-a-b-|\n" +
    "\n" +
    "5|--c-----------------------|\n" +
    "4|----b-e-----------f-e-a-g-|\n" +
    "4|------------------d-c-f-e-|\n" +
    "\n" +
    "5|------------c---d-c--c----|\n" +
    "5|----c---d-c-e-d-f-e-ef-de-|\n" +
    "4|b-a-a-b-b-a---b-----b--ab-|\n" +
    "4|g-f---g-------------------|\n" +
    "\n" +
    "5|e-------------------------|\n" +
    "5|b-------------------------|";


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
document.getElementById('button_get_lost_woods').addEventListener('click', getLostWoods)

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


function getLostWoods() {
    document.getElementById("input_1").value = pln_lost_woods
}


