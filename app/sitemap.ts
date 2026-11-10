import type { MetadataRoute } from "next"
export default function sitemap():MetadataRoute.Sitemap{const base="https://www.shashidhar-sharma.com";return ["/","/speaking","/advisory","/programmes","/research","/media-kit","/green-footprint-trust","/terms"].map(path=>({url:`${base}${path}`,lastModified:new Date()}))}
