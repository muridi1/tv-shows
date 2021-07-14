
export function fixText (text: string):string {
        if (text.includes("<p>")){
           return text.replace("<p>","").replace("</p>","").replace("<br />","")
        }
        else{
            return text
        }
    }