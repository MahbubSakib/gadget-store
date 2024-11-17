import { useEffect, useState } from "react";
import { getAllCart } from "../../utilities";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
    const [gadgets, setGadgets] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const cartItems = getAllCart()
        setGadgets(cartItems)
        calculateTotalCost(cartItems)
    }, []);

    const calculateTotalCost = (cartItems) => {
        const total = cartItems.reduce((acc, gadget) => acc + parseFloat(gadget.price), 0);
        setTotalCost(total.toFixed(2))
    };

    const sortByPrice = () => {
        const sortedGadgets = [...gadgets].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setGadgets(sortedGadgets)
    };

    const handlePurchase = () => {
        localStorage.removeItem('myCart')
        setGadgets([])
        setTotalCost(0)
        setModalVisible(false)
        toast.success('Purchase successful!')
        navigate('/');
    };

    const closeModal = () => {
        setModalVisible(false);
        navigate('/');
    };

    return (
        <div>
            <div className="w-10/12 mx-auto space-y-3 pb-80 mt-16">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-xl font-bold">Cart</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        <h4 className='font-bold'>Total Cost: ${totalCost}</h4>
                        <button
                            className='btn bg-white rounded-full border border-pink-500 text-pink-500 font-bold'
                            onClick={sortByPrice}
                        >
                            Sort By Price <i className="fa-solid fa-sliders rotate-90"></i>
                        </button>

                        <button
                            className={`btn ${totalCost === "0.00" ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-500'} 
                                        border rounded-full text-white font-semibold px-6`}
                            onClick={() => setModalVisible(true)}
                            disabled={totalCost === "0.00"}
                        >
                            Purchase
                        </button>
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
                                    <p><small className="text-gray-500">${gadget.price}</small></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {modalVisible && (
                <div className="fixed inset-0 mx-auto text-center bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-6 w-80 max-w-full">
                        <img className="text-center mx-auto" src="./assets/Group.png" alt="" />
                        <h2 className="text-xl font-bold mb-4">Payment Successfully Done</h2>
                        <hr />
                        <p className="text-gray-500 mt-5">Thanks for purchasing</p>
                        <p className="text-gray-500">Total: ${totalCost}</p>
                        <div className="">
                            <button
                                className="btn bg-gray-300 text-black rounded-full w-full px-6"
                                onClick={handlePurchase}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddToCart;
