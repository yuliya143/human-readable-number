module.exports = function toReadable(number) {
    let units = "";
    let dozens = "";
    let interval = "";
    let hundreds = "";
    let result = "";

    if (number === 0) return "zero";

    switch (number % 100 > 9 && number % 100 < 20 && number % 100) {
        case 10:
            interval = " ten";
            break;
        case 11:
            interval = " eleven";
            break;
        case 12:
            interval = " twelve";
            break;
        case 13:
            interval = " thirteen";
            break;
        case 14:
            interval = " fourteen";
            break;
        case 15:
            interval = " fifteen";
            break;
        case 16:
            interval = " sixteen";
            break;
        case 17:
            interval = " seventeen";
            break;
        case 18:
            interval = " eighteen";
            break;
        case 19:
            interval = " nineteen";
            break;
    }

    if (!interval) {
        switch (number % 10 > 0 && number % 10 <= 9 && number % 10) {
            case 1:
                units = " one";
                break;
            case 2:
                units = " two";
                break;
            case 3:
                units = " three";
                break;
            case 4:
                units = " four";
                break;
            case 5:
                units = " five";
                break;
            case 6:
                units = " six";
                break;
            case 7:
                units = " seven";
                break;
            case 8:
                units = " eight";
                break;
            case 9:
                units = " nine";
                break;
        }
    }

    switch (number % 100 >= 20 && (number % 100) - (number % 10)) {
        case 20:
            dozens = " twenty";
            break;
        case 30:
            dozens = " thirty";
            break;
        case 40:
            dozens = " forty";
            break;
        case 50:
            dozens = " fifty";
            break;
        case 60:
            dozens = " sixty";
            break;
        case 70:
            dozens = " seventy";
            break;
        case 80:
            dozens = " eighty";
            break;
        case 90:
            dozens = " ninety";
            break;
    }

    switch (number >= 100 && Math.floor(number / 100)) {
        case 1:
            hundreds = "one hundred";
            break;
        case 2:
            hundreds = "two hundred";
            break;
        case 3:
            hundreds = "three hundred";
            break;
        case 4:
            hundreds = "four hundred";
            break;
        case 5:
            hundreds = "five hundred";
            break;
        case 6:
            hundreds = "six hundred";
            break;
        case 7:
            hundreds = "seven hundred";
            break;
        case 8:
            hundreds = "eight hundred";
            break;
        case 9:
            hundreds = "nine hundred";
            break;
    }

    result = hundreds + dozens + interval + units;
    return result.trim();
};
