import Banner from "../Banner/Banner";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const categories = useLoaderData()



    return (
        <div className="bg-gray-100 mb-6">
            <Helmet>
                <title>Home - Gadget Heaven</title>
                <meta name="description" content="View gadget statistics and performance." />
            </Helmet>
            <div className="-mt-16 mb-12">
                <Banner></Banner>
            </div>
            <div className="w-9/12 mx-auto">
                <h2 className="text-4xl text-center font-semibold mb-10">
                    Explore Cutting-Edge Gadgets
                </h2>

                <div className="flex gap-5">
                    <div className="w-3/12">
                        <Categories categories={categories}></Categories>
                    </div>
                    <div className="w-9/12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;