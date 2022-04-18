import { proxyUrl, ContentTypeheaderValueJson, setSfInstanceUrl, setAccessToken, sfOauthUPEndpoint } from "./salesforceData"

export async function login() {
    let jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzTVZHOXd0NElMNE81d3ZJdThIZDVfbllKQVRVaFJZS2tIQ3V5T3owZGo0UGZWS21xWHF2aWtaR1cwZHlJYzNRUG53RHlqeG5UMHd6aXlPdE1qY0FDIiwic3ViIjoiZ290dHJhcHBlZGludGhlbWF0cml4QGdtYWlsLmNvbS5kY2wiLCJhdWQiOiJodHRwczovL2xvZ2luLnNhbGVzZm9yY2UuY29tIiwiZXhwIjoxNjUwMjIwMjkyNzgyfQ.xSqrhWPhVYgk0IuB9Qy3t2rubIO7t5teKIX0EhrQuQLGI2uOKjf3tlULWilLuoMvWs_PYMIUqhaSXA7Z7_e0qF1JqkOaWrNApMo7BUY0y-v20GzUkBIJ9I3Doxd6yPedCzQrNMZvlE8Uy-5cnNir3WgqV5IQUNGY4JHCHhUHz1x2gC7se1GWrAS9i9oKIqLMS8qjVbRxzvpbEChkmwTcnoDHCDkYDUATC1-4ZZYKpEZFgh83_jMMPk66o62nfVqn2W4qsd0qlqlQCcHxGkEKxNI5Qj-UzIpqWMoP3SrelKGvKttfwCyLas98DoHiOhvewHvTLwJQ5_u_hq7oyzhSUqSu6AJE0-AKSbhtPHmhW69QPQ45Kr1Q7b6vemiHwvpQQ6t8hkuSMJ765IO4kM7UXUumLY9FY3PsQmGPamwIdOQysjTtQuRsfroCUrGcy_xuF4213JG_nZraXiF2FC6mnVFsa59D5iSIL-NwiUNikoeajoawO4G8MITNSOK4Mnmp'
    log("=================login called================>")
    let response = await fetch(`${proxyUrl}${sfOauthUPEndpoint}`, {
        headers: { 
            "Content-Type": ContentTypeheaderValueJson,
        },
        method: "POST", 
    }) 
    let json = await response.json()
    log("==========login json==========>")
    log(json)
    setAccessToken(json.access_token)
    setSfInstanceUrl(json.instance_url)
}