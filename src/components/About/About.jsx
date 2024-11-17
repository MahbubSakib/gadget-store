import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About - Gadget Heaven</title>
                <meta name="description" content="View gadget statistics and performance." />
            </Helmet>
            <div className="pt-6 pb-32" style={{ background: "rgb(149, 56, 226)" }}>
                <div className="w-7/12 mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-white">About Us</h2>
                    <p className="text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>


            </div>
            <div className="w-7/12 mx-auto my-6">
                <p className="text-gray-800">
                    We are Gadget Heaven. We have a collection of your favourite gadgets. You will find the best and authentic products from our store. We regularly bring the upgraded and latest products. We have a great customer service center also. You are always welcome here.
                </p>
                <h3 className="text-xl font-bold mt-5 text-center">Thank you for being with us.</h3>
            </div>
        </div>
    );
};

export default About;