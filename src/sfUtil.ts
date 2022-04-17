import { setPricebookEntryId } from "./listProducts"
import { accessToken, proxyUrl, sfInstanceUrl, queryPath } from "./salesforceData"

export async function queryPriceBookEntry(productName: string) {
    executeTask(async () => {
        try {
            if(accessToken && productName) {
                let lcres = await fetch(`${proxyUrl}${sfInstanceUrl}${queryPath}select Id from PriceBookEntry WHERE PriceBook2.IsStandard=true AND Product2.Name='${productName}'`, { 
                    headers: { 
                        "Authorization": `Bearer ${accessToken}`,  
                    },
                    method: "GET",
                }) 
                let json = await lcres.json()
                log("==============result==============>")
                log(json)
                if(json.done){
                    setPricebookEntryId(productName, json.records[0].Id)
                }
            }
        } catch {
          log("failed to get records")
        }
    })
}