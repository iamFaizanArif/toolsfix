import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoCreditCard } from "react-icons/go";
import { TbHandTwoFingers } from "react-icons/tb";
import FeatureCard from './FeatureCard';
const Feature = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Why Choosing us ?</h1>
                    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">What Makes us Best !</p>
                </div>
                <div className="lg:flex lg:flex-row lg:flex-nowrap xl:flex xl:flex-row xl:flex-nowrap md:flex md:flex-row md:flex-nowrap sm:flex sm:flex-wrap sm:flex-col gap-14 px-0 xl:px-16 lg:px-16 md:px-16 sm:px-0">
                    <FeatureCard
                        icon={<AiOutlineClockCircle />}
                        title="The Best Support"
                        description="Our Team Experts are Always Ready to Assist Our Users with best possible solution of any queries."
                    />
                    <FeatureCard
                        icon={<GoCreditCard />}
                        title="Easy To Pay"
                        description="We accept EasyPaisa, JazzCash and Bank Accounts to make payment easy."
                    />
                    <FeatureCard
                        icon={<TbHandTwoFingers />}
                        title="Best Uptime"
                        description="We have the best uptime of tools over the whole market. Our tools are always Live 24/7."
                    />
                </div>
            </div>
        </section>
    )
}

export default Feature