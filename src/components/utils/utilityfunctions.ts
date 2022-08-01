

export const wordShortner = (word:string, length:number)=> {

    if (word.length >= length){
        return word.substring(0, length)
    }
    else return word
}
export const numberShortner = (number:number)=> {
    if (String(number).length === 4){
        return`${String(number).substring(0,1)}K`
    }
    else if (String(number).length === 5){
        return`${String(number).substring(0,2)}K`
    }
    else if (String(number).length === 6){
        return`${String(number).substring(0,3)}K`
    }
    else return number
}