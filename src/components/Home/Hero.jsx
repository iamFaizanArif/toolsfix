import React from 'react';
import { HiChevronDoubleRight } from 'react-icons/hi';
import hero from '../../assets/images/ilovepanda.jpg'
const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container w-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-4xl sm:text-4xl xl:text-7xl lg:text-7xl md:text-4xl mb-4 font-black text-black">
                        <span className="text-[#454545]">Cheapest</span> Group Buy Tools Marketplace !</h1>
                    <p className="my-8 leading-relaxed text-gray-500 text-lg">As a beginner marketer, freelancer, or blogger, not everyone can afford expensive and paid tools for their startup. We have introduced this service specifically to assist them by making it affordable.</p>
                    <div className="flex w-full md:justify-start justify-center items-end">
                        <a href='https://app.toolsfix.net/signup' className=" inline-flex items-center text-[#FFFEFA] bg-[#454545] border-4 border-gray-50 p-3 px-6 focus:outline-none hover:scale-90 hover:border-[#454545] hover:text-[#454545] hover:bg-[#FFFEFA] rounded-full text-xl font-semibold md:mt-0">
                            Signup Today <span><HiChevronDoubleRight /></span>
                        </a>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">( No Payment Needed ! )</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={hero} />
                </div>
            </div>
        </section>
    )
}

export default Hero