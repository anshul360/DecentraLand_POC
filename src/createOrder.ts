import { accessToken, opptyId, orderCreatePath, proxyUrl, sfInstanceUrl } from "./salesforceData"

export async function createOrder() {
    executeTask(async () => {
        try {
            if(accessToken) {
                log('========calling create order============>')
                let ocres = await fetch(`${proxyUrl}${sfInstanceUrl}${orderCreatePath}${opptyId}`, { 
                    headers: { 
                        "Authorization": `Bearer ${accessToken}`,  
                    },
                    method: "GET",
                }) 
                let json = await ocres.json()
                //json = JSON.parse(json)
                log("==============order created==============>")
                log(json)
            }
        } catch {
          log("failed to Create Order")
        }
    })
}