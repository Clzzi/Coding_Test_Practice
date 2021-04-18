function changeLowerCase(value) {
    return value.toLowerCase();
} // c

function removeOtherThing(value) {
    for(let i = 0; i < value.length; i++) {
        if(isNaN(value[i]) === false || (value[i].charCodeAt() > 96 && value[i].charCodeAt() < 123) 
        || value[i] === '-' || value[i] === '_' || value[i] === '.') {
            console.log(value[i]);
        } else {
            value[i] = '';
        }
    }
    return value;
}

function removeDot(value) {
    for(let j = 0; j < value.length; j++) {
        for(let i = 0; i < value.length; i++) {
           if(value[i] === '.' && value[i+1] === '.') {
                value[i] = ''
                value[i+1] = '.';
            }
        }  
    }
    return value;
}

function removeFrontLast(value) {
    if(value[0] === ".") {
        value[0] = '';
    } 
    
    if(value[value.length - 1] === '.') {
        value[value.length - 1] = '';
    }
    
    return value;
}

function changeA (value) {
    let strValue = value.join("");
    if(strValue === '') {
        value[0] = 'a';
        return value;
    } else {
        return value;
    }
}

function remove15(value) {
    if(value.length > 15) {
        return removeFrontLast(value.slice(0,15));
    } else {
        return value;
    }
}

function if2Lower(value) {
    if(value.length === 1) {
        let arr = [];
        for(let i = 0 ; i < 3; i++) {
            arr.push(value);
        }
        return arr;
    } else {
        for(let i = value.length; i < 3; i++) {
            value.push(value[value.length-1]);
        }
        return value;
    }
}

function solution(test) {
    
    let test2 = changeLowerCase(test); // 알파벳 소문자로 완료
    
    let test3 = removeOtherThing(test2.split("")).join(""); // 문자열중 특정문자 제외하고 다 제거 완료
    
    let test4 = removeDot(test3.split("")).join(""); // 문자열중 마침표연속된거 제거 완료
    
    let test5 = removeFrontLast(test4.split("")).join(""); // 문자열중 앞뒤에 마침표 있는것 제거 완료
    
    let test6 = changeA(test5.split("")).join(""); // 빈 문자열이라면 a로 치환하는것 완료
    
    let test7 = remove15(test6.split("")).join("");
    
    if(test7.length < 3) {
        let test8 = if2Lower(test7.split("")).join("");
        return test8;
    } else {
        return test7;
    }    
    
}
