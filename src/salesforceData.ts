//consumer key
export const consumerKey: string = ""
//consumer secret
export const consumerSecret: string = ""
//username
export const username: string = ""
//password
export const password: string = ""

export const proxyUrl: string = "https://agile-garden-07512.herokuapp.com/"
export const sfBaseUrl: string = "https://login.salesforce.com"
export const sfOauthEndpoint: string = `${sfBaseUrl}/services/oauth2/token?grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=`
export const sfOauthUPEndpoint: string = `${sfBaseUrl}/services/oauth2/token?grant_type=password&username=${username}&password=${password}&client_id=${consumerKey}&client_secret=${consumerSecret}`
export const leadCreatePath: string = "/services/data/v54.0/sobjects/Lead/"
export const leadConvertPath: string = "/services/apexrest/ConvertLead/"
export const opptyLineItemCreateCompositePath: string = "/services/data/v54.0/composite/tree/OpportunityLineItem/"
export const orderCreatePath: string = "/services/apexrest/CreateOrder/"
export const queryPath: string = "/services/data/v54.0/query/?q="
export const ContentTypeheaderValueJson: string = "application/json"

export let sfInstanceUrl: string = ""
export let accessToken: string = ""
export let orderId: string = ""
export let leadId: string = ""
export let opptyId: string = ""
export let accId: string = ""
export let contactId: string = ""
export let leadConverted: boolean = false

export function setSfInstanceUrl(instUrl: string) {
    sfInstanceUrl = instUrl
}

export function setAccessToken(token: string) {
    accessToken = token
}

export function setLeadId (id: string) {
    leadId = id
}

export function setOpptyId (id: string) {
    opptyId = id
}

export function setOrderId (id: string) {
    orderId = id
}

export function setAccountId (id: string) {
    accId = id
}

export function setContactId (id: string) {
    contactId = id
}

export function convertedLead() {
    leadConverted = true
}
