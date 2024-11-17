import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content py-10">
            <div className='w-1/2 mx-auto text-center mb-6'>
                <h2 className='text-xl font-bold'>Gadget Heaven</h2>
                <p className='text-gray-500'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='footer flex justify-between w-1/2 mx-auto text-center'>

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;