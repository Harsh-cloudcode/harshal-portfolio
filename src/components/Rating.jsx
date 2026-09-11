import React, { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ClientReviews = () => {
    const reviews = [
        {
            id: 1,
            project: "Krishisdigital",
            client: "Jiya",
            rating: 5,
            review:
                "Great experience working together. The website was delivered professionally, looked great on different devices, and all the requested Shopify customizations were handled smoothly.",
        },
        {
            id: 2,
            project: "Radinik",
            client: "Devdatta",
            rating: 5,
            review:
                "Very easy to work with and understood the requirements well. The website was completed as expected with a clean design and good attention to detail.",
        },
        {
            id: 3,
            project: "ElorJewel",
            client: "Yashoda",
            rating: 5,
            review:
                "Really happy with the overall work. Communication was clear, changes were handled quickly, and the final website matched what we had discussed.",
        },
        {
            id: 4,
            project: "Dinkalpa Natural ",
            client: "Pankaj",
            rating: 5,
            review:
                "The Shopify customizations were handled very well. The work was responsive, professional, and delivered with a good understanding of our requirements.",
        },
        {
            id: 5,
            project: "ThemesCart ",
            client: "Abad",
            rating: 5,
            review:
                "A smooth experience from start to finish. The website looks professional and works well across different screen sizes.",
        },
        {
            id: 6,
            project: "TravellingTaco",
            client: "Sarika",
            rating: 5,
            review:
                "Very satisfied with the final result. The development work was reliable and the communication throughout the project was excellent.",
        },
        {
            id: 7,
            project: "Astrogazing ",
            client: "Harshal",
            rating: 5,
            review:
                "Really good experience working on the project. The Shopify development was handled smoothly, and the final website was clean, responsive, and easy to manage.",
        },
        {
            id: 8,
            project: "ParamparaEW",
            client: "Parampara",
            rating: 5,
            review:
                "Very happy with the website and the overall development process. Requirements were understood well, and the work was completed with good attention to detail.",
        },
        {
            id: 9,
            project: "Ofsign",
            client: "Madhav",
            rating: 5,
            review:
                "Great work from start to finish. The website turned out exactly as expected, and any changes or improvements were handled quickly and professionally.",
        },  
    ];

    const [current, setCurrent] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    useEffect(() => {
        const updateItems = () => {
            setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
        };

        updateItems();

        window.addEventListener("resize", updateItems);

        return () => {
            window.removeEventListener("resize", updateItems);
        };
    }, []);

    const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev >= totalSlides - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev <= 0 ? totalSlides - 1 : prev - 1
        );
    };

    return (
        <section
            id="reviews"
            className="max-w-6xl mx-auto py-20 px-4"
        >
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-5xl font-extrabold text-white tracking-wide">
                    Client Reviews
                </h2>

                <div className="w-28 h-1 bg-primary mx-auto mt-3 rounded-2xl shadow-[0_0_8px_#06a2c2]"></div>

                <p className="text-gray-400 mt-4 text-sm md:text-base">
                    A few words from people I've worked with.
                </p>
            </div>

            {/* Slider */}
            <div className="relative">

                {/* Cards Container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${
                                current * 100
                            }%)`,
                        }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="min-w-full md:min-w-[33.333333%] px-3"
                            >
                                <div
                                    className="bg-[#0f172a] rounded-xl border border-gray-800
                                    shadow-md hover:shadow-[0_4px_20px_rgba(6,162,194,0.15)]
                                    transition-all duration-300
                                    h-full min-h-[300px]
                                    p-6 flex flex-col"
                                >
                                    {/* Quote Icon */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div
                                            className="w-10 h-10 rounded-lg
                                            bg-[#1e293b] border border-gray-700
                                            flex items-center justify-center"
                                        >
                                            <Quote
                                                size={20}
                                                className="text-primary"
                                            />
                                        </div>

                                        {/* Rating */}
                                        <div className="flex gap-1">
                                            {Array.from({
                                                length: review.rating,
                                            }).map((_, index) => (
                                                <Star
                                                    key={index}
                                                    size={16}
                                                    className="fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Name */}
                                    <p className="text-primary text-sm font-semibold mb-2">
                                        {review.project}
                                    </p>

                                    {/* Review */}
                                    <p className="text-gray-400 text-sm leading-relaxed text-justify flex-1">
                                        "{review.review}"
                                    </p>

                                    {/* Client */}
                                    <div className="border-t border-gray-800/70 mt-5 pt-4">
                                        <p className="text-white font-semibold text-sm">
                                            {review.client}
                                        </p>

                                        <p className="text-gray-500 text-xs mt-1">
                                           
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous reviews"
                    className="absolute left-0 top-1/2 -translate-y-1/2
                    -translate-x-2 md:-translate-x-5
                    w-10 h-10 rounded-full
                    bg-[#0f172a] border border-gray-700
                    text-gray-300 hover:text-white hover:border-primary
                    flex items-center justify-center
                    transition-all duration-300 z-10"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    aria-label="Next reviews"
                    className="absolute right-0 top-1/2 -translate-y-1/2
                    translate-x-2 md:translate-x-5
                    w-10 h-10 rounded-full
                    bg-[#0f172a] border border-gray-700
                    text-gray-300 hover:text-white hover:border-primary
                    flex items-center justify-center
                    transition-all duration-300 z-10"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to review slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            current === index
                                ? "w-7 bg-primary"
                                : "w-2 bg-gray-700"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ClientReviews;