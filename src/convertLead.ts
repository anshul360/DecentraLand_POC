import { accessToken, proxyUrl, sfInstanceUrl, leadId, leadConvertPath, leadConverted, convertedLead, setAccountId, setOpptyId, setContactId } from "./salesforceData"


export async function convertLead() {
    executeTask(async () => {
        try {
            if(accessToken && !leadConverted) {
                log('========calling lead convert============>')
                let lcres = await fetch(`${proxyUrl}${sfInstanceUrl}${leadConvertPath}${leadId}`, { 
                    headers: { 
                        "Authorization": `Bearer ${accessToken}`,  
                    },
                    method: "GET",
                }) 
                let json = await lcres.json()
                json = JSON.parse(json)
                log("==============lead converted==============>")
                log(json)
                convertedLead()
                
                setAccountId(json.accountid)
                setOpptyId(json.opportunityid)
                setContactId(json.contactid)
                
            }
        } catch {
          log("failed to Convert Lead")
        }
    })
}