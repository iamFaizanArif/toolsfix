import React, {useState} from 'react'
import PricingCard from './PricingCard'
import {IoTrophy} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import './Pricing.css';
const Pricing = () => {
    const [currency, setCurrency] = useState('PKR'); // default currency is PKR
    const currencyOptions = [
        {name: 'PKR', values: ["1,250 Rs", "1,450 Rs", "1,150 Rs"]},
        {name: 'INR', values: ["390 Inr", "580 Inr", "360 Inr"]},
    ];

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <section className="bg-white white:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Pricing
                        & Plan</h1>
                    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">( That Fits Your
                        Needs )</p>
                    <Popup open={isOpen} onClose={handleClose} closeOnDocumentClick overlayStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: '1000'
                    }}>
                        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
                                <h2 className="text-lg font-medium text-gray-800">Choose your currency</h2>
                                <button className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={handleClose}>
                                    <IoMdClose size="28"/>
                                </button>
                            </div>
                            <div className="px-6 py-4 text-center">
                                <select
                                    className="w-full p-2 border rounded"
                                    value={currency}
                                    onChange={handleCurrencyChange}
                                >
                                    {currencyOptions.map((option, index) => (
                                        <option key={index} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className="mt-4 bg-[#454545] hover:bg-[#606060] text-white font-bold py-2 px-4 rounded"
                                    onClick={handleClose}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </Popup>

                    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                        Choose your currency here
                        <select value={currency} onChange={handleCurrencyChange}
                                className="cursor-pointer bg-white ml-3 border-[1px] border-gray-500 px-4 py-2 text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
                            {currencyOptions.map((option, index) => (
                                <option key={index} value={option.name}
                                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-4">
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 relative">
                    <PricingCard
                        title="Blogging Package"
                        display="hidden"
                        amount={currencyOptions.find((option) => option.name === currency).values[0]}
                        duration="/month"
                        styles="border-[#454545]"
                        service={["S*mrush", "Instr0id ( Plagiarism & Ai )", "M@ngools", "Word Ai", "Word hero", "Rytr.me", "WordTune", "p*k To Chart", "Uber-Suggest", "Serp-stat", "Storybase", "Woo-Rank", "Long Tail Pro", "Grammerly", "Canva", "Scribd", "Amaz0n Prime", "Pluralsight", "SkillShare", "Seoability", "Fra$e.io", "Surfer Se@", "TubeRanker", "pikMonkey", "Quill Bot", "Tubi Tv", "SEOptimer", "Scalenut", "MOZ Pro", "Coming Soon*"]}
                    />
                    <PricingCard
                        title="All in One Package"
                        display="absolute bottom-[3178px] w-[58%] left-[20%] xl:bottom-[99%] lg:bottom-[99%] md:bottom-[3018px] sm:bottom-[3178px] xl:w-[19%] lg:w-[19%] md:w-[38%] sm:w-[58%] xl:left-[452px] lg:left-[452px] md:left-[234px] sm:left-[20%]"
                        icon={<IoTrophy/>}
                        offer="Most Popular"
                        amount={currencyOptions.find((option) => option.name === currency).values[1]}
                        duration="/month"
                        styles="border-white shadow-custom"
                        service={["Moz Pro", "Story Block", "S*mrush", "Motion Arry ", "Envato Element", "ManG!ools", "Placeit","Word hero", "Rytr.me ( Testing tool)", "Fra$e.io ( Limited Time )", "Surfer Se@ (New ! )", "De$igns AI", "TubeRanker", "PikMonk*y", "Quill Bot", "Tubi Tv", "Creatopy", "SEOptimer", "Scalenut", "Word Ai", "Instr0id ( Plagiarism & Ai )", "P*k To chart", "In-Video", "Amz Tracker", "Powtoon", "WordTune", "Epidemic - Sounds", "UberSuggest", "Grammerly", "Serp-stat", "StoryBase", "Woo-Rank", "Long Tail Pro", "Magisto", "Skill Share", "PluralSight", "Scribd", "Crello", "Canva", "Amaz0n Prime", "PicsArt", "Seoability", "Coming soon*"]}
                    />
                    <PricingCard
                        title="Designers Package"
                        display="hidden"
                        amount={currencyOptions.find((option) => option.name === currency).values[2]}
                        duration="/month"
                        styles="border-[#454545]"
                        service={["Story Block", "Envato Element", "Motion Arry ", "Powtoon", "Magisto", "In Video", "Epidemic-Sounds", "Grammerly", "Pik To Chart", "Placit", "De$igns AI", "Tube Ranker", "PikMonkey", "Tubi Tv", "Creatopy", "Pics Art", "Skill Share", "PluralSight", "Crello", "Canva", "Amaz0n Prime", "Comming Soon*"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Pricing