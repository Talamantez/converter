/*
 * Convert an integer between 0 and 100,000
 * to its representative string in English
 * 
 */

const Converter = function(input){
    const single = {
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine'
    }
    const double = {
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety'
    }
    const getSingle = (int) => single[int];
    const getDouble = (arr) => {
        int = parseInt(arr.join(''));
        if(int < 20) return double[int];
        const rem = int % 10;
        const dParam = int-rem;
        if(rem){
            return (double[dParam] + " " + single[rem])
        }
        return (double[dParam])
    };
    this.convert = function(a){
        const thousands = (!a[0] ? getSingle(a[1]):getDouble([a[0],a[1]]));
        const hundreds = (a[2] ? getSingle(a[2]):'');
        const tens = ( !a[3] ? getSingle(a[4]):getDouble([a[3],a[4]]) );
        console.log (
                ( thousands ? `${thousands} thousand `:'')
                +
                ( hundreds ? `${hundreds} hundred `:'')
                +
                (( !thousands && !hundreds )|| !tens ? '': "and ")
                +
                ( tens ? `${tens}`:'')
            )
    }

    // parse input
    const inputArray = input.toString().split('');
    // type- and limit-check input
    if(!input || input === 'NaN' || inputArray.length > 5){
        console.log ('please try again using an integer from 1 to 99999')
    } else {
    // construct array to process

    intArray = inputArray.map(i => parseInt(i));
    let rA = [0,0,0,0,0];
    rA.splice(5-intArray.length,intArray.length, intArray);
    rA = rA.flat();
    this.convert(rA);
    }
}

const cliInput = parseInt(process.argv[2]);
new Converter(cliInput);
