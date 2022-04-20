@RestResource(urlMapping='/CreateOrder/*')
global class RestCreateOrder {
	@HttpGet
    global static String doGet() {
        RestRequest req = RestContext.request;
        String opptyId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        
        Opportunity opp = [
            SELECT AccountId, (
                SELECT Product2Id, Quantity, UnitPrice, PricebookEntryId FROM OpportunityLineItems
            ) FROM Opportunity WHERE Id = :opptyId
        ];
        Id pbId = [
            SELECT Id FROM PriceBook2 WHERE IsStandard = true LIMIT 1
        ].Id;
        Order order = new Order(
            AccountId = opp.AccountId,
            EffectiveDate = System.today(),
            Status = 'Draft',
            PriceBook2Id = pbId
        );
        insert order;
        
        OrderItem lineItem = new OrderItem();
        List<OrderItem> orderItems = new List<OrderItem>();
        for(OpportunityLineItem oli : opp.OpportunityLineItems) {
            orderItems.add(
                new OrderItem(
                	OrderId = order.Id,
                    Quantity = oli.Quantity,
                    UnitPrice = oli.UnitPrice,
                    Product2Id = oli.Product2Id,
                    PricebookEntryId = oli.PricebookEntryId
                )
            );
        }
        
        insert orderItems;
        
        order.Status = 'Activated';
        update order;
        return order.Id;
    }
}