
const string_pattern = /^[a-zA-Z\s]+$/;
const numeric_pattern = /^\d+$/;
export const  DVDvalidator = (values) =>{
    const errors = {}
    if(values.sku === ''){
        errors.sku = 'SKU is required'
    }
    if (values.name === '') {
        errors.name = 'Name is required'
    }else if(!string_pattern.test(values.name)){
        errors.name = 'Product name must be an alphabet'
    }

    if (values.price === '') {
        errors.price = 'Price is required'
    }else if(!numeric_pattern.test(values.price)){
        errors.price = 'Product price must be a number'
    }

    if (values.size === '') {
        errors.size = 'Size is required'
    }else if(!numeric_pattern.test(values.size)){
        errors.size = 'Product size must be a number'
    }

    return errors;
}  

export const  Furniturevalidator = (values) =>{
    const errors = {}
    if(values.sku === ''){
        errors.sku = 'SKU is required'
    }

    if (values.name === '') {
        errors.name = 'Name is required'
    }else if(!string_pattern.test(values.name)){
        errors.name = 'Product name must be an alphabet'
    }

    if (values.price === '') {
        errors.price = 'Price is required'
    }else if(!numeric_pattern.test(values.price)){
        errors.price = 'Product price must be a number'
    }

    if (values.height === '') {
        errors.height = 'Height is required'
    }else if(!numeric_pattern.test(values.height)){
        errors.height = 'Product height must be a number'
    }

    if (values.width === '') {
        errors.width = 'Width is required'
    }else if(!numeric_pattern.test(values.width)){
        errors.width = 'Product width must be a number'
    }

    if (values.length === '') {
        errors.length = 'Length is required'
    }else if(!numeric_pattern.test(values.length)){
        errors.length = 'Product length must be a number'
    }

    return errors;
} 

export const  Bookvalidator = (values) =>{
    const errors = {}
    if(values.sku === ''){
        errors.sku = 'SKU is required'
    }

    if (values.name === '') {
        errors.name = 'Name is required'
    }else if(!string_pattern.test(values.name)){
        errors.name = 'Product name must be an alphabet'
    }

    if (values.price === '') {
        errors.price = 'Price is required'
    }else if(!numeric_pattern.test(values.price)){
        errors.price = 'Product price must be a number'
    }

    if (values.weight === '') {
        errors.weight = 'Weight is required'
    }else if(!numeric_pattern.test(values.weight)){
        errors.weight = 'Product weight must be a number'
    }

    return errors;
}

export const  ProductTypevalidator = (values) =>{
    const errors = {}
    if(values.productType === ''){
        errors.productType = 'Please select Product type'
    }

    if(values.sku === ''){
        errors.sku = 'SKU is required'
    }

    if (values.name === '') {
        errors.name = 'Name is required'
    }else if(!string_pattern.test(values.name)){
        errors.name = 'Product name must be an alphabet'
    }

    if (values.price === '') {
        errors.price = 'Price is required'
    }else if(!numeric_pattern.test(values.price)){
        errors.price = 'Product price must be a number'
    }

    return errors;
}



