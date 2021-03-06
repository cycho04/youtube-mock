// converts raw number (ex: 980980) into abbreviations using letters (ex:980K). K= thousands, M = millions, B= billions

export const numShortener = num => {
    if (num < 1000) {
        return num
    }
    else if (num < 999999){
        return `${Math.floor(num / 1000)}K`
    }
    else if (num < 999999999){
        return `${Math.floor(num / 1000000)}M`
    }
    else if (num < 999999999999){
        return `${Math.floor(num / 1000000000)}B`
    }
}