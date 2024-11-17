import React from 'react';
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="bg-white p-6 rounded-lg space-y-3 flex flex-col">
                {/* <NavLink className="bg-gray-100 py-3 pl-4 pr-12 rounded-full">All Product</NavLink> */}
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.category}`} key={category.category} className={({isActive}) => `bg-gray-100 py-3 pl-4 pr-12 rounded-full ${isActive ? 'bg-red-400' : ''}` }>{category.category} </NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;