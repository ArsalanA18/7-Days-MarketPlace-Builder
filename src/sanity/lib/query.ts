import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(` 
    *[_type == "product"]
    {
        name,
        price,
        description,
        "imageUrl" : image.asset->url


        
     }`)

export const Singleproducts = defineQuery(` 
    *[_type == "product"][0..1]
    {
        name,
        price,
        description
        "imageUrl" : image.asset->url


        
     }`)