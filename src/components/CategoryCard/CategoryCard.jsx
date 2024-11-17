import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const CategoryCard = () => {

    const data = useLoaderData()
    const { category } = useParams()

    const [gadgets, setGadgets] = useState([])

    useEffect(()=> {
        if(category){
            const filteredByCategory = [...data].filter(
                gadget => gadget.category == category
            )
            setGadgets(filteredByCategory)
        } else{
            setGadgets(data)
        }
    },[data, category])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget}></Card>)
            }
        </div>
    );
};

export default CategoryCard;