export function episodeCode(seasonNum: number, episodeNum: number): string{
    if (episodeNum >= 10 && seasonNum >=10){
        return "S"+   seasonNum + 'E' + episodeNum
    }else{
        return 'S0' + seasonNum + 'E0'  + episodeNum
    }
}