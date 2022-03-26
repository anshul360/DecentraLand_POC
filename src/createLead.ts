import { galleryInfoGreen, channelId, channelBus, script1 } from "./game"
//import Script1 from "../feea5fb9-6ee8-479e-8755-0eed817a2931/src/item"
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'

export function createLead() {
    executeTask(async () => {
        try {
            let jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzTVZHOXBSenZNa2pNYjZub3NiT193S2pmX3JESi5KTFA2V1BpeTVUOEdpd0NyT1MyTmNGM0V2cmZKcHBDRjdBTkFiMmRINm9UODl5blhvMzExaXlMIiwic3ViIjoiZ290dHJhcHBlZGludGhlbWF0cml4QGdtYWlsLmNvbS5zZnQiLCJhdWQiOiJodHRwczovL2xvZ2luLnNhbGVzZm9yY2UuY29tIiwiZXhwIjoxNjQ3ODQ3MTk1fQ.wnvqf_Nqg1Uu6M-IXp80c_2Eu2qdZ0fBFv_T3Sc_y58vRalMb9tPwKIWwCHwgfjNY7PryeF-HQhpa5D_vBtDZTePkB6PGSyNAHwWS7GoP7QH2JesXPHefoZ5KOj2C1XkpRNm4oIctqBC3Q7WkdQkTFgevxggqHnK7rwROxFaN0OoLNNIbk4NXnbnwFoDQmYuRwOPWpAtT6wYczcdWjJATKLUNRYy7SF3jKPpSC_pDxx6uL8xIZE78UsCHYBZy040mTdr-Mm2GevY19tEQezAUPOTDC_AgNu7ZrizfR1RsWNWPYpJXyD1huN-E08YFqU6yVzFiH_8OIQBX1PV55jWmoowPytgh_k8sHyeDEb88zhWOnnlx32lT1FFMvXPjJnRlrIuSOXIiHmY1y-Sd9Ip2vq0d4vVePl9U12uCGCVjEVKquK37JPWu-LicD4CpifsXVaVwtNZUw-cFSqfz_QazpkEjajT7kppuAqD3LBjo7y-cm-SfVlZydpRSMAPn6ik'
            let response = await fetch('https://agile-garden-07512.herokuapp.com/https://login.salesforce.com/services/oauth2/token?assertion='+jwt+'&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer', {
                headers: { 
                    "Content-Type": "application/json",
                },
                method: "POST", 
            }) 
            let json = await response.json()
            log(json)
    
            log('-------------access token---------------')
            let accessToken = json.access_token
            log(accessToken)
            log('-------------instance url---------------') 
            let instanceUrl  = json.instance_url
            log(instanceUrl)
            log('--------------first name---------------')
            let firstName = ('Tested at '+new Date()).substring(0,38)
            log(firstName)
            if(accessToken) {
                let lcres = await fetch('https://agile-garden-07512.herokuapp.com/'+instanceUrl+'/services/data/v54.0/sobjects/Lead/', { 
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": "Bearer "+accessToken,  
                    },
                    method: "POST",
                    body: '{"LastName":"From DecentraLand","FirstName":"'+firstName+'","LeadSource":"Decentra Land","Company":"Salesforce"}', 
                }) 
                json = await lcres.json()
                log(json)
                
                script1.init()
                script1.spawn(galleryInfoGreen, {"text":"Salesforce Tower \n Lead Created: "+json.id,"fontSize":7.5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreen, channelBus))
            }
        } catch {
          log("failed to reach URL")
        }
      })
}