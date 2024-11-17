import { toast } from "react-hot-toast";

// get all gadget
const getAllCart = () => {
    const all = localStorage.getItem('myCart')

    const fav = JSON.parse(all)
    // console.log(fav);
    
    if (all) {
        const getCart = JSON.parse(all)
        // console.log(getCart);
        return getCart
    }else {
        // console.log([]);
        return []
    }
}

// add a gadget to local storage
const addToCart = (gadget) => {
    const cart = getAllCart()
    const isExist = cart.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('Gadget already added!');
    cart.push(gadget)
    localStorage.setItem('myCart', JSON.stringify(cart))
    toast.success('Successfully added to Cart!');
}

// get all gadget wishlist
const getAllWishlist = () => {
    const all = localStorage.getItem('myWishlist')

    const fav = JSON.parse(all)
    // console.log(fav);
    
    if (all) {
        const getWishlist = JSON.parse(all)
        // console.log(getWishlist);
        return getWishlist
    }else {
        // console.log([]);
        return []
    }
}

// add a gadget to local storage
const addToWishlist = (gadget) => {
    const wishlist = getAllWishlist()
    const isExist = wishlist.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('Gadget already added!');
    wishlist.push(gadget)
    localStorage.setItem('myWishlist', JSON.stringify(wishlist))
    toast.success('Successfully added to Wishlist!');
}

export {addToCart, addToWishlist, getAllCart, getAllWishlist}