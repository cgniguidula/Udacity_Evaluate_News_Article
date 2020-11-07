function isEnglish(input){
    if(!input){
        return false;
    } 
    if(input.length <= 0){
        return false;
    }
    
    const puncList = ".,'!?:;@#$%^&*()'-+=[]<>{}_|/\""
    let stringifiedInput = JSON.stringify(input);
    for (const item of stringifiedInput){
        if (!puncList.includes(item) && !item.match(/[a-z]/) && !item.match(/[A-Z]/) && isNaN(item)){
            return false;
        } 
    }
    return true;
}

export { isEnglish }
