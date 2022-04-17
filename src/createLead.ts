import { accessToken, ContentTypeheaderValueJson, leadCreatePath, proxyUrl, setLeadId, sfInstanceUrl } from "./salesforceData"
import { login } from "./sfAuth"
import { userId } from "./userData"

export function createLead() {
    executeTask(async () => {
        try {
            await login()
            if(accessToken) {
                let lcres = await fetch(`${proxyUrl}${sfInstanceUrl}${leadCreatePath}`, { 
                    headers: { 
                        "Content-Type": ContentTypeheaderValueJson,
                        "Authorization": `Bearer ${accessToken}`,  
                    },
                    method: "POST",
                    body: `{"LastName":"${userId}", "LeadSource":"Decentraland", "Status":"Working - Contacted", "Company":"ACT"}`, 
                }) 
                let json = await lcres.json()
                log("==============lead created==============>")
                log(json)
                setLeadId(json.id)
            }
        } catch {
          log("failed to Create Lead")
        }
    })
}
