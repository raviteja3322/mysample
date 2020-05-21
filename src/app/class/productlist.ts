export class products{
    id:string;
    name:string;
    store_id:string;
    created_at:string;
    updated_at:string;
    subcategory:subcategory[];
}

export class subcategory{
    id:string;
    name:string;
    category_id:string;
    created_at:string;
    updated_at:string;
    product:product[];

}

export class product{
    id: string;
    name: string;
    description: string;
    is_active: string;
    variation: string;
    barcode: string;
    price: string;
    offer: string;
    image: string;
    sub_category_id: string;
    created_at: string;
    updated_at: string;
    tax: string;
}
