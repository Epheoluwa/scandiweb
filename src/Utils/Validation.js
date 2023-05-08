const errors = {}
export const  DVDvalidator = (value) =>{
    if(value.sku === ''){
        errors.sku = 'SKU is required'
    }

    if (value.name === '') {
        errors.name = 'Name is required'
    }

    if (value.price === '') {
        errors.price = 'Price is required'
    }

    if (value.size === '') {
        errors.size = 'Size is required'
    }

    return errors;
}  

export const  Furniturevalidator = (value) =>{
    if(value.sku === ''){
        errors.sku = 'SKU is required'
    }

    if (value.name === '') {
        errors.name = 'Name is required'
    }

    if (value.price === '') {
        errors.price = 'Price is required'
    }

    if (value.height === '') {
        errors.height = 'Height is required'
    }

    if (value.width === '') {
        errors.width = 'Width is required'
    }

    if (value.length === '') {
        errors.length = 'Length is required'
    }

    return errors;
} 

export const  Bookvalidator = (value) =>{
    if(value.sku === ''){
        errors.sku = 'SKU is required'
    }

    if (value.name === '') {
        errors.name = 'Name is required'
    }

    if (value.price === '') {
        errors.price = 'Price is required'
    }

    if (value.weight === '') {
        errors.weight = 'Weight is required'
    }

    return errors;
}

export const  ProductTypevalidator = (value) =>{
    if(value.productType === ''){
        errors.productType = 'Please select Product type'
    }

    if(value.sku === ''){
        errors.sku = 'SKU is required'
    }

    if (value.name === '') {
        errors.name = 'Name is required'
    }

    if (value.price === '') {
        errors.price = 'Price is required'
    }

    return errors;
}



