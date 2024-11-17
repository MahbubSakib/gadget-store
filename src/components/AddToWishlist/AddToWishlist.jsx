import { useEffect, useState } from "react";
import { getAllWishlist } from "../../utilities";

const AddToWishlist = () => {
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        setGadgets(getAllWishlist())
    }, [])
    return (
        <div>
            <div className="w-10/12 mx-auto space-y-3 pb-80 mt-16">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-xl font-bold">Wishlist</h1>
                    </div>
                </div>
                {
                    gadgets.map((gadget, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-3 flex justify-between items-center gap-5">
                            <div className="flex gap-5">
                                <img className="w-20 h-25 rounded-lg" src={gadget.product_image} alt="" />
                                <div>
                                    <h6 className="font-semibold">{gadget.product_title}</h6>
                                    <p><small className="text-gray-500">{gadget.description}</small></p>
                                    <p><small className="text-gray-500">{gadget.price}$</small></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AddToWishlist;