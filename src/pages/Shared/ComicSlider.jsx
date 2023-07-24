import { useState } from "react";
import photo1 from "../../assets/images/4565.jpg";
import photo2 from "../../assets/images/4562.jpg";
import photo3 from "../../assets/images/4563.jpg";
import photo4 from "../../assets/images/4564.jpg";

const ComicSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const goToSlide = (index) => {
		setActiveIndex(index);
	};

	const images = [photo1, photo2, photo3, photo4];

	return (
		<div className="relative w-full h-64">
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute w-full h-full transition-opacity duration-300 ${
						index === activeIndex
							? "opacity-100"
							: "opacity-0 pointer-events-none"
					}`}
				>
					<img
						src={image}
						alt="Carousel Slide"
						className="w-full h-full object-cover object-top rounded-md shadow-md"
					/>
				</div>
			))}
			<button
				className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#AAB2BD] px-1 py-1 rounded-full"
				onClick={prevSlide}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5L8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			<button
				className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#AAB2BD] px-1 py-1 rounded-full"
				onClick={nextSlide}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
			<div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 mb-4">
				{images.map((_, index) => (
					<button
						key={index}
						className={`mx-1 px-1 py-1 rounded-full ${
							index === activeIndex
								? "bg-[#4A89DC] px-1.5 py-1.5"
								: "bg-gray-300"
						}`}
						onClick={() => goToSlide(index)}
					></button>
				))}
			</div>
		</div>
	);
};

export default ComicSlider;
