import { Link } from "react-router-dom";
import book1 from "../../assets/images/4561.jpg";
import book2 from "../../assets/images/4562.jpg";
import book3 from "../../assets/images/4563.jpg";
import book4 from "../../assets/images/4564.jpg";
import book5 from "../../assets/images/4565.jpg";
import book6 from "../../assets/images/4566.jpg";

const PopularBook = () => {
	const popolarBooks = [
		{
			image: book1,
			title: "Age of X-M",
			description: "Updated to Chapter 6",
		},
		{
			image: book2,
			title: "Asgardians",
			description: "Updated to Chapter 6",
		},
		{
			image: book3,
			title: "Avengers 0",
			description: "Updated to Chapter 6",
		},
		{
			image: book4,
			title: "Doctor Strange",
			description: "Updated to Chapter 6",
		},
		{
			image: book5,
			title: "Spiderman",
			description: "Updated to Chapter 6",
		},
		{
			image: book6,
			title: "War of the Realms",
			description: "Updated to Chapter 6",
		},
	];

	return (
		<div className="mt-5 shadow-inner">
			<div className="flex justify-between items-center pt-2">
				<h3 className="text-[16px] font-bold">Popular</h3>
				<Link to="/#more" className="text-[12px] font-semibold text-[#AAB2BD]">
					More &gt;{" "}
				</Link>
			</div>
            
			<div className="grid grid-cols-3 gap-2 mt-2">
				{popolarBooks?.map((book, index) => (
					<div key={index}>
						<div className="relative">
							<img
								src={book?.image}
								className="w-full h-[170px] rounded-md"
								alt={book?.title}
							/>
							<p className="absolute bottom-2 left-2 bg-red-500 px-2 py-1 rounded-md text-white text-[8px] font-bold">SERIAL</p>
						</div>
						<h2 className="text-[14px] font-bold">{book?.title}</h2>
						<p className="text-[12px] text-[#AAB2BD]">{book?.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularBook;
