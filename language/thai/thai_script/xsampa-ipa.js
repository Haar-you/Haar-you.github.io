
function convert_xsampa_to_ipa(str){
    let ret = "";
    const size = str.length;

    let cur = 0;
    
    while(cur < size){
        switch(str[cur]){
        case "a":
            ret += "a";
            break;

        case "b":
            if(str.substr(cur, 3) == "b_<"){
                ret += "ɓ";
                cur += 2;
            }else{
                ret += "b";
            }
            break;

        case "c":
            ret += "c";
            break;

        case "d":
            if(str.substr(cur, 2) == "d`"){
                ret += "ɖ";
                cur += 1;
            }else if(str.substr(cur, 3) == "d_<"){
                ret += "ɗ";
                cur += 2;
            }else{
                ret += "d";   
            }
            break;

        case "e":
            ret += "e";
            break;

        case "f":
            ret += "f";
            break;

        case "g":
            if(str.substr(cur, 3) == "g_<"){
                ret += "ɠ";
                cur += 2;
            }else{
                ret += "g";
            }
            break;

        case "h":
            if(str.substr(cur, 2) == "h\\"){
                ret += "ɦ";
                cur += 1;
            }else{
                ret += "h";
            }
            break;

        case "i":
            ret += "i";
            break;

        case "j":
            if(str.substr(cur, 2) == "j\\"){
                ret += "ʝ";
                cur += 1;
            }else{
                ret += "j";
            }
            break;

        case "k":
            ret += "k";
            break;

        case "l":
            if(str.substr(cur, 2) == "l`"){
                ret += "ɭ";
                cur += 1;
            }else if(str.substr(cur, 2) == "l\\"){
                ret += "ɺ";
                cur += 1;
            }else{
                ret += "l";
            }
            break;

        case "m":
            ret += "m";
            break;

        case "n":
            if(str.substr(cur, 2) == "n`"){
                ret += "ɳ";
                cur += 1;
            }else{
                ret += "n";
            }
            break;

        case "o":
            ret += "o";
            break;

        case "p":
            if(str.substr(cur, 2) == "p\\"){
                ret += "ɸ";
                cur += 1;
            }else{
                ret += "p";
            }
            break;

        case "q":
            ret += "q";
            break;

        case "r":
            if(str.substr(cur, 2) == "r`"){
                ret += "ɽ";
                cur += 1;
            }else if(str.substr(cur, 2) == "r\\"){
                ret += "ɹ";
                cur += 1;
            }else if(str.substr(cur, 3) == "r\\`"){
                ret += "ɻ";
                cur += 2;
            }else{
                ret += "r";
            }
            break;

        case "s":
            if(str.substr(cur, 2) == "s`"){
                ret += "ʂ";
                cur += 1;
            }else if(str.substr(cur, 2) == "s\\"){
                ret += "ɕ";
                cur += 1;
            }else{
                ret += "s";
            }
            break;

        case "t":
            if(str.substr(cur, 2) == "t`"){
                ret += "ʈ";
                cur += 1;
            }else{
                ret += "t";
            }
            break;

        case "u":
            ret += "u";
            break;

        case "v":
            if(str.substr(cur, 2) == "v\\"){
                ret += "ʋ";
                cur += 1;
            }else{
                ret += "v";
            }
            break;

        case "w":
            ret += "w";
            break;

        case "x":
            if(str.substr(cur, 2) == "x\\"){
                ret += "ɧ";
                cur += 1;
            }else{
                ret += "x";
            }
            break;

        case "y":
            ret += "y";
            break;

        case "z":
            if(str.substr(cur, 2) == "z`"){
                ret += "ʐ";
                cur += 1;
            }else if(str.substr(cur, 2) == "z\\"){
                ret += "ʑ";
                cur += 1;
            }else{
                ret += "z";
            }
            break;

        case "A":
            ret += "ɑ";
            break;

        case "B":
            if(str.substr(cur, 2) == "B\\"){
                ret += "ʙ";
                cur += 1;
            }else{
                ret += "β";
            }
            break;

        case "C":
            ret += "ç";
            break;

        case "D":
            ret += "ð";
            break;

        case "E":
            ret += "ɛ";
            break;

        case "F":
            ret += "ɱ";
            break;

        case "G":
            if(str.substr(cur, 2) == "G\\"){
                ret += "ɢ";
                cur += 1;
            }else if(str.substr(cur, 4) == "G\\_<"){
                ret += "ʛ";
                cur += 3;
            }else{
                ret += "ɣ";
            }
            break;

        case "H":
            if(str.substr(cur, 2) == "H\\"){
                ret += "ʜ";
                cur += 1;
            }else{
                ret += "ɥ";
            }
            break;

        case "I":
            if(str.substr(cur, 2) == "I\\"){
                ret += "ᵻ";
                cur += 1;
            }else{
                ret += "ɪ";
            }
            break;

        case "J":
            if(str.substr(cur, 2) == "J\\"){
                ret += "ɟ";
                cur += 1;
            }else if(str.substr(cur, 4) == "J\\_<"){
                ret += "ʄ";
                cur += 3;
            }else{
                ret += "ɲ";
            }
            break;

        case "K":
            if(str.substr(cur, 2) == "K\\"){
                ret += "ɮ";
                cur += 1;
            }else{
                ret += "ɬ";
            }
            break;

        case "L":
            if(str.substr(cur, 2) == "L\\"){
                ret += "ʟ";
                cur += 1;
            }else{
                ret += "ʎ";
            }
            break;

        case "M":
            if(str.substr(cur, 2) == "M\\"){
                ret += "ɰ";
                cur += 1;
            }else{
                ret += "ɯ";
            }
            break;

        case "N":
            if(str.substr(cur, 2) == "N\\"){
                ret += "ɴ";
                cur += 1;
            }else{
                ret += "ŋ";
            }
            break;

        case "O":
            if(str.substr(cur, 2) == "O\\"){
                ret += "ʘ";
                cur += 1;
            }else{
                ret += "ɔ";
            }
            break;

        case "P":
            ret += "ʋ";
            break;

        case "Q":
            ret += "ɒ";
            break;

        case "R":
            if(str.substr(cur, 2) == "R\\"){
                ret += "ʀ";
                cur += 1;
            }else{
                ret += "ʁ";
            }
            break;

        case "S":
            ret += "ʃ";
            break;

        case "T":
            ret += "θ";
            break;

        case "U":
            if(str.substr(cur, 2) == "U\\"){
                ret += "ᵿ";
                cur += 1;
            }else{
                ret += "ʊ";
            }
            break;

        case "V":
            ret += "ʌ";
            break;

        case "W":
            ret += "ʍ";
            break;

        case "X":
            if(str.substr(cur, 2) == "X\\"){
                ret += "ħ";
                cur += 1;
            }else{
                ret += "χ";
            }
            break;

        case "Y":
            ret += "ʏ";
            break;

        case "Z":
            ret += "ʒ";
            break;

        case ".":
            ret += ".";
            break;

        case "\"":
            ret += "ˈ";
            break;

        case "%":
            ret += "ˌ";
            break;

        case "'":
            ret += "ʲ";
            break;

        case ":":
            if(str.substr(cur, 2) == ":\\"){
                ret += "ˑ";
                cur += 1;
            }else{
                ret += "ː";
            }
            break;

        case "-":
            break;

        case "@":
            if(str.substr(cur, 2) == "@\\"){
                ret += "ɘ";
                cur += 1;
            }else if(str.substr(cur, 2) == "@`"){
                ret += "ɚ";
                cur += 1;
            }else{
                ret += "ə";
            }
            break;

        case "{":
            ret += "æ";
            break;

        case "}":
            ret += "ʉ";
            break;

        case "1":
            ret += "ɨ";
            break;

        case "2":
            ret += "ø";
            break;

        case "3":
            if(str.substr(cur, 2) == "3\\"){
                ret += "ɞ";
                cur += 1;
            }else{
                ret += "ɜ";
            }
            break;

        case "4":
            ret += "ɾ";
            break;

        case "5":
            ret += "ɫ";
            break;

        case "6":
            ret += "ɐ";
            break;

        case "7":
            ret += "ɤ";
            break;

        case "8":
            ret += "ɵ";
            break;

        case "9":
            ret += "œ";
            break;

        case "&":
            ret += "ɶ";

        case "?":
            if(str.substr(cur, 2) == "?\\"){
                ret += "ʕ";
                cur += 1;
            }else{
                ret += "ʔ";
            }
            break;

        case "*":
            break;

        case "/":
            break;

        case "<":
            if(str.substr(cur, 2 == "<\\")){
                ret += "ʢ";
                cur += 1;
            }else if(str.substr(cur, 3) == "<F>"){
                ret += "↘";
                cur += 2;
            }else if(str.substr(cur, 3) == "<R>"){
                ret += "↗";
                cur += 2;
            }else{
                
            }
            break;

        case ">":
            if(str.substr(cur, 2) == ">\\"){
                ret += "ʡ";
                cur += 1;
            }else{
                
            }
            break;

        case "^":
            ret += "ꜛ";
            break;

        case "!":
            ret += "ꜜ";
            break;

        case "|":
            if(str.substr(cur, 4) == "|\\|\\"){
                ret += "ǁ";
                cur += 3;
            }else if(str.substr(cur, 2) == "||"){
                ret += "‖";
                cur += 1;
            }else if(str.substr(cur, 2) == "|\\"){
                ret += "ǀ";
                cur += 1;
            }else{
                ret += "|";
            }
            break;

        case "=":
            if(str.substr(cur, 2) == "=\\"){
                ret += "ǂ";
                cur += 1;
            }else{
                ret += "̩";
            }
            break;

        case "-":
            if(str.substr(cur, 2) == "-\\"){
                ret += "‿";
                cur += 1;
            }else{
                
            }
            break;

        case "`":
            ret += "˞";
            break;

        case "~":
            ret += "̃";
            break;

        case "_":
            switch(str[cur+1]){
            case "\"":
                ret += "̈";
                break;

            case "+":
                ret += "̟";
                break;

            case "-":
                ret += "̠";
                break;

            case "/":
                ret += "̌";
                break;

            case "0":
                ret += "̥";
                break;

            case "<":
                break;

            case "=":
                ret += "̩";
                break;

            case ">":
                ret += "ʼ";
                break;

            case "?":
                if(str.substr(cur+1, 2) == "?\\"){
                    ret += "ˤ";
                    cur += 1;
                }else{
                    
                }
                break;

            case "\\":
                ret += "̂";
                break;

            case "^":
                ret += "̯";
                break;

            case "}":
                ret += "̚";
                break;

            case "A":
                ret += "̘";
                break;

            case "a":
                ret += "̺";
                break;

            case "B":
                if(str.substr(cur+1, 3) == "B_L"){
                    //ret += "᷅";
                    ret += "˩˨"; // low rising tone
                    cur += 2;
                }else{
                    //ret += "̏";
                    ret += "˩"; // extra low tone
                }
                break;

            case "c":
                ret += "̜";
                break;

            case "d":
                ret += "̪";
                break;

            case "e":
                ret += "̴";
                break;

            case "F":
                //ret += "̂";
                ret += "˥˩"; // falling tone
                break;

            case "G":
                ret += "ˠ";
                break;

            case "H":
                if(str.substr(cur+1, 3) == "H_T"){
                    //ret += "᷄";
                    ret += "˦˥"; // high rising tone
                    cur += 2;
                }else{
                    //ret += "́";
                    ret += "˦"; // high tone
                }
                break;

            case "h":
                ret += "ʰ";
                break;

            case "j":
                ret += "ʲ";
                break;

            case "k":
                ret += "̰";
                break;

            case "L":
                //ret += "̀";
                ret += "˨"; // low tone
                break;

            case "l":
                ret += "ˡ";
                break;

            case "M":
                //ret += "̄";
                ret += "˧"; // mid tone
                break;

            case "m":
                ret += "̻";
                break;

            case "N":
                ret += "̼";
                break;

            case "n":
                ret += "ⁿ";
                break;

            case "O":
                ret += "̹";
                break;

            case "o":
                ret += "̞";
                break;

            case "q":
                ret += "̙";
                break;

            case "R":
                if(str.substr(cur+1, 3) == "R_F"){
                    //ret += "᷈";
                    ret += "˦˥˦" // rising falling tone
                    cur += 2;
                }else{
                    //ret += "̌";
                    ret += "˩˥"; // rising tone
                }
                break;

            case "r":
                ret += "̝";
                break;

            case "T":
                //ret += "̋";
                ret += "˥"; // extra high tone
                break;
                
            case "t":
                ret += "̤";
                break;

            case "v":
                ret += "̬";
                break;

            case "w":
                ret += "ʷ";
                break;

            case "X":
                ret += "̆";
                break;

            case "x":
                ret += "̽";
                break;

            default:
                break;
            }
            ++cur;
            
            break;
            
        default:
            ret += str[cur];
            break;
        }

        ++cur;
    }

    return ret;
}
