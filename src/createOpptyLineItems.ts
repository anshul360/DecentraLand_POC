import { visitedProducts } from "./listProducts"
import { accessToken, ContentTypeheaderValueJson, opptyId, opptyLineItemCreateCompositePath, proxyUrl, sfInstanceUrl } from "./salesforceData"

export async function createOpptyLineItems() {
    executeTask(async () => {
        try {
            if(accessToken) {
                let olires = await fetch(`${proxyUrl}${sfInstanceUrl}${opptyLineItemCreateCompositePath}`, { 
                    headers: { 
                        "Content-Type": ContentTypeheaderValueJson,
                        "Authorization": `Bearer ${accessToken}`,  
                    },
                    method: "POST",
                    body: `{"records":[${createBody()}]}`
                }) 
                let json = await olires.json()
                log("==============oppty line item(s) created==============>")
                log(json)
            }
        } catch {
          log("failed to Create oppty line item(s)")
        }
    })
}

function createBody(): string {
    let bodyfrag = ""
    visitedProducts.forEach((value, index) => {
        bodyfrag += `{
            "attributes" : {"type" : "OpportunityLineItem", "referenceId" : "${value.priceBookEntryId}${index}"},
            "OpportunityId": "${opptyId}", "PriceBookEntryId":"${value.priceBookEntryId}", "Quantity": 1, "TotalPrice": 2000
        }`
        if(index != visitedProducts.length - 1)
            bodyfrag += ','
    })
    return bodyfrag
}