/**
    * 👉 : moves the memory pointer to the next cell

    * 👈 : moves the memory pointer to the previous cell

    * 👆 : increment the memory cell at the current position

    * 👇 : decreases the memory cell at the current position.

    * 🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛

    * 🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜

    * 👊 : Display the current character represented by the ASCII code defined by the current position.        
 */



function translate(input) {

    const byteArray = [];
    let pointer = 0;
    let index = 0;
    let operationCounter = 0;


    let output = '';

    const arrayOfInstruccions = Array.from(input); // algo como [ "👉", "👈", "👆", "👇", "🤜", "🤛", "👊" ];

    const actions = {
        '👆': () => {
            byteArray[pointer] ??= 0;

            if (byteArray[pointer] === 255) {
                byteArray[pointer] = 0;
            }
            else {
                byteArray[pointer]++;     
            }
        },
        '👇': () => {
            byteArray[pointer] ??= 0;

            if (byteArray[pointer] === 0) {
                byteArray[pointer] = 255;
            } else {
                byteArray[pointer]--;   
            }
        },
        '👉': () => {
            pointer++;
            byteArray[pointer] ??= 0;
        },
        '👈': () => {
            pointer--;
            byteArray[pointer] ??= 0;
        },
        '🤜': () => {
            if (byteArray[pointer] === 0) {

                let fistCounter = 1;
                while ((index < arrayOfInstruccions.length - 1)) {
                    index++;
                    if (arrayOfInstruccions[index] === "🤜") {
                        fistCounter++;
                    } else if (arrayOfInstruccions[index] === "🤛") {
                        fistCounter--;
                    }
                    if (fistCounter === 0) {
                        break;
                    }
                }
            }            
        },
        '🤛': () => {
            if (byteArray[pointer] !== 0) {

                let fistCounter = 1;
                while ((index > 0)) {
                    index--;
                    if (arrayOfInstruccions[index] === "🤜") {
                        fistCounter--;
                    } else if (arrayOfInstruccions[index] === "🤛") {
                        fistCounter++;
                    }
                    if (fistCounter === 0) {
                        break;
                    }
                }
            }
        },
        '👊': () => {
            // console.log(String.fromCharCode(byteArray[pointer]))
            output += String.fromCharCode(byteArray[pointer]);
        }

    }
        
    const array_de_acciones = [];

    while (index < arrayOfInstruccions.length) {
        const action = arrayOfInstruccions[index];
        actions[action]();
        array_de_acciones.push(action)
        // console.log({ action,
        //     "index": index, 
        //     "pointer": pointer,
        //     "currentValue": byteArray[pointer],
        //     "output": output
        // })
        index++;
    }


    return output;
    
}

console.log(translate("👆👆👆👆👆👆👆👆👆👆👆👆👆🤜👇👉👆👆👉👉👉👆👆👆👆👆👉👆👆👉👆👈👈👈👈👈👈🤛👉👉👉👉👉👆👆👆👆👆👆👉👇👇👇👉👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👆🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆🤜👉👉👉👉👉👉👉👉🤜👇🤛👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤜👇🤛👆👈👈👈👈👈👈👈👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👉👉👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆🤜👉👉👉👉👉👉🤜👉👉👉👉👉👉👉🤜👇🤛👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉🤜👇🤛👆👈👈👈👈👈👈👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👉👆👈👈👈👈👈👈👆👆👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜🤜👇🤛👉👉👉👉👉👉🤜👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👆👈👈👆👈👈👈👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👆👈👈👈👆👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👆👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👆👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆🤜👉👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👇👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👈👈🤜👇👉👉🤜👇👈👈👆👉👉🤛👈👈🤜👇👉👉👆👉👉👆👈👈👈👈🤛👆👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈🤛👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉🤜👇👈👈👈👈👆👉🤜👈👇👉👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👇👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈👈🤜👇👉👉👉🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👉👆👈👈👈👈🤛👆👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈👈🤛👉👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉🤜👇👈👈👈👈👆👉🤜👈👇👉👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈👇👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👆👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉🤜👇👈👈👈👇👉👉👉🤛👆👈👈👈🤜👇👉👉👉👇👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉👆👈🤛🤛👆👉👉👉👉🤜👇👈👈👈👈👇👉👉👉👉🤛👆👈👈👈👈🤜👇👉👉👉👉👇👈🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉🤜👇🤛👆👈🤛🤛👆👉🤜👇👈🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈🤜👇👉👆👉👉👉👇👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈🤜👇🤛👈👈🤛👉👉🤜👈👈👈👈👈👈👈👆👈🤜👇👈👆👉👉👉👉👆👈👈🤜👇🤛🤛👉🤜👇👈👈🤜👇👉👆👉👉👉👇👈👈👈👈🤛👉👉👉🤛👉👉👉👉👉👉👉👉👉👉👉👉👉🤜👉👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👉👉👉👉👉👉🤜👉👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉🤜👇👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👆👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆🤜👉👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👇👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈👈🤜👇👉👉🤜👇👈👈👆👉👉🤛👈👈🤜👇👉👉👆👉👆👈👈👈🤛👆👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈🤛👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉🤜👇👈👈👈👆👉🤜👈👇👉👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉🤛👈👈🤜👇👉👉👆👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👇👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈👈🤜👇👉👉🤜👇👈👈👆👉👉🤛👈👈🤜👇👉👉👆👉👉👆👈👈👈👈🤛👆👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈🤛👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉🤜👇👈👈👈👈👆👉🤜👈👇👉👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉🤜👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈👇👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆🤜👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👈👈👈👈👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉🤜👇🤛👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👆👉🤜👇👈👇👈👈👈👈👆👉👉👉👉👉🤛👉🤜👇👈👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👆👆👈👈👈👈🤛👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👇👉👆👉🤛👈🤜👇👉👆👈🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈🤛👉👉👉👉👉👉🤜👇🤛👈👈👈👈👈👈👆👉👉👉👉🤜👇👈👈👈👈👇👉👉👉👉🤛👆👈👈👈👈🤜👇👉👉👉👉👇👉👉👉👉👉🤜👉👉🤜👇👈👈👇👉👉🤛👆👈👈🤜👇👉👉👇👉🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉👆👈🤛🤛👆👉👉👉🤜👇👈👈👈👇👉👉👉🤛👆👈👈👈🤜👇👉👉👉👇👈🤜👇👈👈👆👉👉🤛👈👈🤜👇👉👉👆👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉🤜👇🤛👆👈🤛🤛👆👉🤜👇👈🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👉👉👉👉👉🤜👉👆👉👉🤜👇👈👈👇👉👉🤛👈👈🤜👇👉👉👆👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👆👈🤜👉🤜👇👉👉👉👉👉👆👈👈👈👈🤜👇👉👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤜👇👉👉👉👆👈👈👈🤛👈🤛👉🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈👈🤛👉🤜👇👉👉👉👉👆👈👈👈🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈🤛👉🤜👇👉👉👉👆👈👈👈🤛👈👈👈👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👈👈👈👈🤛👉👉👉🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👉👉👉👉👉👉🤜👉👆👉🤜👇👈👇👉🤛👈🤜👇👉👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👆👈🤜👉🤜👇👉👉👉👉👉👆👈👈👈🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉🤜👇👉👉👉👉👆👈👈👈👈🤛👉🤛👈🤜👇👉👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉🤛👈🤛👉👉🤜👇👉👉👉👆👈👈👈👈🤜👇👉👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉🤛👉🤛👈🤜👇👉👉👉👉👆👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👆👈👈👈👈👈👈🤛🤛👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇👉👉👉👉👉👆👈👈👈👈🤜👇👉👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤜👇👉👉👉👆👈👈👈🤛👈🤛👉🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈👈🤛👉🤜👇👉👉👉👉👆👈👈👈🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈🤛👉🤜👇👉👉👉👆👈👈👈🤛👈👈👈👈👈👈👈👈👈👈👈👈🤛🤛👉🤜👇🤛👉👉🤜👇🤛👉🤜👇🤛👉👉👉👉👉🤜👉👉🤜👇🤛👉🤜👇🤛👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👆👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆🤜👉👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👇👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👈👈🤜👇👉👉🤜👇👈👈👆👉👉🤛👈👈🤜👇👉👉👆👉👆👈👈👈🤛👆👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈🤛👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉🤜👇👈👈👈👆👉🤜👈👇👉👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉🤛👈👈🤜👇👉👉👆👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉🤜👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉🤜👇🤛👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈👇👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆🤜👉👉👉🤜👇👈👈👈👇👉👉👉🤛👆👈👈👈🤜👇👉👉👉👇👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉👆👈🤛🤛👆👉👉👉👉🤜👇👈👈👈👈👇👉👉👉👉🤛👆👈👈👈👈🤜👇👉👉👉👉👇👈🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉🤜👇🤛👆👈🤛🤛👆👉🤜👇👈🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👉👉👉👉👉👉🤜👉👆👉👉👉🤜👇👈👈👈👇👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👆👈🤜👉🤜👇👉👆👉🤜👇👈👇👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉🤜👇👈👈👆👉👉🤛👈🤛👉🤜👇👈👈👇👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉🤛👈👈👈🤛👉👉🤜👇👈👆👉👉🤜👇👈👈👇👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉🤛👈🤛👉🤜👇👈👈👆👉👉🤛👈👈👈👈👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👉👉👉👉👉🤜👉👆👉👉🤜👇👈👈👇👉👉🤛👈👈🤜👇👉👉👆👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👆👈🤜👉🤜👇👉👆👉👉🤜👇👈👈👇👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤜👇👈👆👉🤛👉🤛👈🤜👇👈👇👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈👈🤛👉👉👉🤜👇👈👈👆👉🤜👇👈👇👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👉🤛👈🤜👇👈👆👉🤛👈👈👈👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👆👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👉🤜👇🤛👉👉👉👉👉🤜👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👆👈👈👈👈👆👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👆👉🤜👇👈👇👈👈👈👈👆👉👉👉👉👉🤛👉👉🤜👇👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👆👆👈👈👈👈🤛👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👇👉👆👉👉🤛👈👈🤜👇👉👉👆👈👈🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈🤛👆👉👉👉👉🤜👇👈👈👈👈👇👉👉👉👉🤛👆👈👈👈👈🤜👇👉👉👉👉👇👉👉👉👉👉🤜👉👉👉🤜👇👈👈👈👇👉👉👉🤛👆👈👈👈🤜👇👉👉👉👇👈🤜👇👈👈👆👉👉🤛👈👈🤜👇👉👉👆👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉👆👈🤛🤛👆👉👉🤜👇👈👈👇👉👉🤛👆👈👈🤜👇👉👉👇👉🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉🤜👇🤛👆👈🤛🤛👆👉🤜👇👈🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👉👉👉👉👉👉🤜👉👆👉🤜👇👈👇👉🤛👈🤜👇👉👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👆👈🤜👉🤜👇👉👉👉👉👆👈👈🤜👇👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉🤜👇👉👉👉👆👈👈👈🤛👉🤛👈🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉🤛👈🤛👉👉🤜👇👉👉👆👈👈👈🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉🤛👉🤛👈🤜👇👉👉👉👆👈👈👈🤛👈👈👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉🤜👇🤛👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👆👈👈👈👈👈🤛🤛👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👉👉👉👉👉🤜👉👆👉👉🤜👇👈👈👇👉👉🤛👈👈🤜👇👉👉👆👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👆👈🤜👉🤜👇👉👉👉👉👆👈👈👈🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤜👇👉👉👆👈👈🤛👈🤛👉🤜👇👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈👈🤛👉🤜👇👉👉👉👆👈👈🤜👇👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈🤛👉🤜👇👉👉👆👈👈🤛👈👈👈👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉🤜👇🤛👈👈👈👈🤛👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👉🤜👇🤛👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👆👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇👉👉👉👉👆👈👈👈🤜👇👉👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤜👇👉👉👆👈👈🤛👈🤛👉🤜👇👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈👈🤛👉🤜👇👉👉👉👆👈👈🤜👇👉👉👇👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉🤛👈🤛👉🤜👇👉👉👆👈👈🤛👈👈👈👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉🤜👇🤛👉🤜👇🤛👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👉🤜👇🤛👉👉👉👉👉🤜👉👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👆👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👆👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆🤜👉👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👇👉👉👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👈👈🤜👇👉👉🤜👇👈👈👆👉👉🤛👈👈🤜👇👉👉👆👉👉👆👈👈👈👈🤛👆👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈🤛👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉🤜👇👈👈👈👈👆👉🤜👈👇👉👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👇👉👉👉👉👉🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈👈🤜👇👉👉👉🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👉👆👈👈👈👈🤛👆👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👈👈👈👈👈👈👈👈👈🤛👉👉🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👈👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉🤜👇👈👈👈👈👆👉🤜👈👇👉👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🤜🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈👇👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉👇🤛👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👆👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉🤜👇👈👈👈👇👉👉👉🤛👆👈👈👈🤜👇👉👉👉👇👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉👆👈🤛🤛👆👉👉👉👉🤜👇👈👈👈👈👇👉👉👉👉🤛👆👈👈👈👈🤜👇👉👉👉👉👇👈🤜👇👈👈👈👆👉👉👉🤛👈👈👈🤜👇👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉🤜👇🤛👆👈🤛🤛👆👉🤜👇👈🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👇👉👉🤜👇👈👈👈👈👆👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈🤜👇🤛👈👈🤛👉👉🤛👈👈👆👉👉👉👉🤜👇👈👈👈👈👇👉👉👉👉🤛👆👈👈👈👈🤜👇👉👉👉👉👇👈👈👈👈👈👈👊👉👉🤛👉👉👉👉🤜👇👈👈👈👈👈👈👈👊👉👉👉👉👉👉👉🤛👈👈👈🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉👉👉🤜👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉🤜👇🤛👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉🤜👇🤛👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👆👆👆👆👆👆👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👆👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆🤜👇🤛👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👆👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉🤜👇🤛👆👉👉👉🤛👈👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👉👉🤜👉👆👉👉👉👉🤜👇👈👈👈👈👇👉👉👉👉🤛👈👈👈👈🤜👇👉👉👉👉👆👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👆👈👈👈👈👈👈👈🤜👉👉👉👉👉🤜👇👉👉👆👈👈🤛👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉🤜👈👇👉👇👈👈👈👆👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉👉👉👉🤛👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👆👈👈👈👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👇👈👈👈👈🤜👇🤛👆👈👈👈🤛👆👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👇👉👉👉👉👉👉👉🤛👆👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👇👉👉🤜👉👉👉👉👉🤜👇👉👉👆👈👈🤛👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉🤜👈👇👉👇👈👈👈👆👉👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉👉👉👉🤛👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👆👈👈👈👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👆👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉🤜👇👈👈👈👈👈👇👉👉👉👉👉🤛👆👈👈👈👈👈🤜👇👉👉👉👉👉👇👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉👆👈🤛🤛👆👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👇👉👉👉👉👉👉👉🤛👆👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👇👈👈🤜👇👈👈👈👈👈👆👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉🤜👇🤛👆👈🤛🤛👆👉🤜👇👈🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👈👈👈👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👇👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉🤛👈👈👈👈👊👉👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉🤜👇🤛👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👆👆👆👆👆👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👆👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👉👆🤜👇🤛👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤜👇🤛👆👉👉🤛👈👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👉👆👉🤜👉👆👉👉👉👉👉🤜👇👈👈👈👈👈👇👉👉👉👉👉🤛👈👈👈👈👈🤜👇👉👉👉👉👉👆👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👆👈👈👈👈👈👈👈👈🤜👉👉👉👉👉👉🤜👇👉👉👆👈👈🤛👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👆👉🤜👈👇👉👇👈👈👆👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👇👈👈👈👈👈🤜👇🤛👆👈👈👈🤛👆👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👇👉👉👉👉👉👉👉👉🤛👆👈👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👉👇👉🤜👉👉👉👉👉👉🤜👇👉👉👆👈👈🤛👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👉🤜👇🤛👈👇👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👆👉🤜👈👇👉👇👈👈👆👉👉🤛👈🤜👇👉👆👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈🤛👈👆👈👈👈👈👈👈👈👈👈🤛👉👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👆👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤜👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👇👉👉👉👉👉👉🤛👆👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👇👉👉🤜👇👈👈👈👈👈👈👈👈👆👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👆👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉👆👈🤛🤛👆👉👉👉👉👉👉👉👉🤜👇👈👈👈👈👈👈👈👈👇👉👉👉👉👉👉👉👉🤛👆👈👈👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👉👉👇👈👈🤜👇👈👈👈👈👈👈👆👉👉👉👉👉👉🤛👈👈👈👈👈👈🤜👇👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉🤜👇🤛👆👉👉👉👉👉👉🤜👉👉👉👉👉👉👉👉👉🤛👉🤜👇🤛👆👈🤛🤛👆👉🤜👇👈🤜👉👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉🤛👈👈👈👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛👉👉👉👉🤜👇🤛👈👈👈👆👆👆👆👆🤜👇🤜👇👉👉👉👉👉👉👉👉👉👆👈👈👈👈👈👈👈👈👈🤛👉👉👉👉👉👉👉👉👉🤛👉👉👉👉👉👇👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👇👈👈👈👈👈👈🤜👈👈👈👈👈👈👈👈👈🤛🤛👉👉👉🤛👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👆🤜👇👇👇👉👆👆👈🤛👉👆👊👇🤜👇👇👇👉👆👈🤛👉👊👇👇👇👇👇👇👇👇👇👊👆👆👆👆👆👆👆👆👆👆👆👊👆👆👆🤜👇👉👆👆👆👈🤛👉👊👇👇🤜👇👇👇👉👆👈🤛👉👇👊🤜👇👉👆👆👆👈🤛👉👆👊👆👆👆👆👆👆👆👆👆👆👆👆👆👊👇🤜👇👉👆👆👆👆👆👈🤛👉👇👊👆🤜👇👉👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👆👊👇👇👇👇👇👇👇👇👇👇👇👇👊👆👆👆👆👆👆👆👆👊👆👆👆👊🤜👆👆👉👇👇👇👈🤛👉👇👇👊👇👇🤜👇👉👆👆👆👆👈🤛👉👇👊👆🤜👇👉👆👆👆👈🤛👉👆👊👆👆👆👆👆👆👆👆👆👆👆👊👇👇👇👇👇👇👇👇👇👇👇👇👊👇👇🤜👇👇👇👉👆👈🤛👉👇👇👊👇👇👇🤜👇👉👆👆👆👆👈🤛👉👇👊👆👆👊👆🤜👇👉👆👆👆👈🤛👉👊👆👆👆👆👆👆👆👆👊👇👇👇👇👇👊👇👇👊👇🤜👇👇👇👉👆👈🤛👉👇👇👊🤜👇👇👇👇👉👆👈🤛👉👆👆👆👊👆👆👊🤜👇👇👇👉👆👆👈🤛👉👆👊👇👇👇👇👇👇👇👇👇👇👇👇👊👆👆👆👆👆👆👆👆👆👆👆👆👆👊👇👇👇👇👇👇👇👇👇👇👊👆👊👆👆👆👆👆👆👆👊👇👇👇👇👇👇👇👇👇👇👊🤜👇👇👇👉👆👈🤛👉👇👇👇👇👊👇👇👇👊👆👆👆👆👆👊🤜👇👇👉👆👆👆👆👆👈🤛👉👊👇👇👊👇👇👇🤜👇👉👆👆👆👆👈🤛👉👊👇👇👇👇👇👊🤜👇👇👇👉👆👈🤛👉👇👇👇👇👇👊👇🤜👇👇👇👉👆👆👈🤛👉👊👆👆👆👆👆👆👆👆👆👊👆👆👆👆🤜👇👉👆👆👆👈🤛👉👊👆👆👆👆👊👆👊👇👇👇👇👇👇👇👇👇👊👇👇🤜👇👇👇👉👆👈🤛👉👇👇👊👆👆👆🤜👇👉👆👆👆👈🤛👉👆👆👊👆👊👆👆👆👆👆👆👆👊👇👇👇👇👇👇👇👇👇👇👇👊👆👆👆👆👆👊👇🤜👇👇👇👉👆👈🤛👉👇👇👊👆👆🤜👇👉👆👆👆👈🤛👉👊👆👆👆👆👆👆👆👆👆👊👆👆👆👆👆👆👊👆👆👆🤜👇👉👆👆👆👈🤛👉👊👇👇🤜👇👇👇👉👆👆👈🤛👉👇👇👊👇🤜👇👇👇👇👇👉👆👈🤛👉👊👆👆🤜👇👉👆👆👆👈🤛👉👆👆👊👆👆👊👇🤜👇👇👉👆👈🤛👉👇👇👇👊🤜👇👇👇👉👆👆👈🤛👉👇👊👇👇👇👇👇👇👇👇👇👇👇👊👆👊👆👆👆👆👆👆👆👆👆👆👊👆👆👆👆🤜👇👉👆👆👆👈🤛👉👊👆👆👆👆👊👇👇👇👇👇👊👆👆👆👆👆👆👆👆👆👆👆👊🤜👇👉👆👆👆👆👆👈🤛👉👆👆👆👊👇👇🤜👇👇👇👉👆👈🤛👉👇👊👆👆👆👆👆👆👆👆👆👆👆👆👊👇👇"))

export default translate;
