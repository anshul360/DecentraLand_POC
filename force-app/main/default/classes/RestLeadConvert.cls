@RestResource(urlMapping='/ConvertLead/*')
global with sharing class RestLeadConvert {            

    @HttpGet
    global static String doGet() {
        RestRequest req = RestContext.request;
        String leadId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);              
        Database.LeadConvert lc = new Database.LeadConvert();
        lc.setLeadId(leadId);

        LeadStatus convertStatus = [SELECT Id, MasterLabel FROM LeadStatus WHERE IsConverted=true LIMIT 1];
        lc.setConvertedStatus(convertStatus.MasterLabel);           
        Database.LeadConvertResult lcr ;
        try{
            lcr = Database.convertLead(lc);
        }
        catch(exception ex){
            system.debug('====exception===='+ex);           
        }
        return JSON.serialize(lcr);
    }  
    
     
}