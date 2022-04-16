export type Product = {
    name: string,
    detail: string,
    videoLink: string
}

export let visitedProducts: Product[] = []

export const products: Product[] = [
    {name: "Sales", detail: `Sales Cloud’s sales force automation software helps sales managers highlight 
    team-wide insights that can guide the overall sales strategy, from establishing sales quotas to 
    territory management to sales forecasting.`, videoLink: "videos/SalesCloudDemo.mp4"},
    {name: "Service", detail: `Service Cloud by Salesforce is one of the world’s most popular and 
    highly-rated customer service software solutions. Whether by phone, web, chat, or email, this 
    customer support software enables agents and customers to quickly connect and solve customer
     problems.`, videoLink: "videos/ServiceCloudDemo.mp4"},
    {name: "Marketing", detail: `Businesses of any size can grow with professional-level email marketing 
    from Marketing Cloud. Even small businesses can use marketing automation that will help bring in new customers and 
    nurture the ones they already have, without an army of marketers. `, videoLink: "videos/MarketingCloudDemo.mp4"}
]