import { getProducts } from "app/services/shopify";
import { json } from "stream/consumers"

export async function GET(){
    const products = await getProducts()

    return Response.json({products});
}