interface PDPContext {
    product: {
        sku: string
        gtin: string
        name: string
        description: string
        releaseDate: string
        unitMultiplier: number | null
        id: string
        seo: { title: string; description: string; canonical: string }
        brand: { name: string }
        breadcrumbList: {
            itemListElement: Array<{ item: string; name: string; position: number }>
        }
        image: Array<{ url: string; alternateName: string }>
        offers: {
            lowPrice: number
            highPrice: number
            lowPriceWithTaxes: number
            priceCurrency: string
            offers: Array<{
                availability: string
                price: number
                priceValidUntil: string
                priceCurrency: string
                itemCondition: string
                priceWithTaxes: number
                listPrice: number
                listPriceWithTaxes: number
                seller: { identifier: string }
            }>
        }
        isVariantOf: {
            name: string
            productGroupID: string
            skuVariants: {
                activeVariations: any | null
                slugsMap: any | null
                availableVariations: any | null
                allVariantProducts: Array<{ name: string; productID: string }> | null
            } | null
        }
        additionalProperty: Array<{
            propertyID: string
            name: string
            value: any
            valueReference: any
        }>
    }
}