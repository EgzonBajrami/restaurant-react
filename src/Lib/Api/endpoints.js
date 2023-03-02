const endpoints = {
    register:{url:'/users/register',method:'POST'},
    login:{url:'/users/login', method:'POST'},
    addProduct:{url:'/products/addProduct', method:'POST'},
    addImage:{url:'/products/add-image/', method:'POST'},
    getPizza:{url:'/products/getPizzas/', method:'GET'},
    check:{url:'/checkout/checkout', method:'POST'}



}
export default endpoints;