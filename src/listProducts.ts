export type Product = {
    name: string,
    detail: string,
    videoLink: string,
    priceBookEntryId: string
}

export let visitedProducts: Product[] = []

export const products: Product[] = [
    {name: "Sales", detail: `Some details about Sales cloud. And more detail indeed.`, videoLink: "videos/SalesCloudDemo.mp4", priceBookEntryId: ""},
    {name: "Service", detail: `Some details about Service cloud exactly like we have for other clouds.`, videoLink: "videos/ServiceCloudDemo.mp4", priceBookEntryId: ""},
    {name: "Marketing", detail: `Here goes detail for Marketing cloud. If you don't like it watch demo anyways :P`, videoLink: "videos/MarketingCloudDemo.mp4", priceBookEntryId: ""}
]

export function setPricebookEntryId(productName: string, pbeId: string) {
    products.forEach((value) => {
        if(value.name === productName)
            value.priceBookEntryId = pbeId
    })
}