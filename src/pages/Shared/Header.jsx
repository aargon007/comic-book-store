import serachIcon from "./../../assets/icons/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="flex justify-between items-center pt-2 px-2">
			{/* Left Tabs */}
			<div className="flex space-x-4 text-[12px] font-bold text-gray-600">
				<Link to="#recommended" className="border-b-2 border-blue-200 text-blue-500">Recommended</Link>
				<Link to="#hot">Hot</Link>
				<Link to="#novel">Novel</Link>
			</div>

			{/* Right Search */}
			<div className="flex items-center relative">
				<input
					type="text"
					placeholder="Search"
					className="bg-[#f6f8fa] rounded-full pl-5 pr-2 py-1 focus:outline-none text-[12px] border-2 border-[#d2d6db]"
				/>
				<img
					src={serachIcon}
					className="w-[12px] absolute top-[30%] left-[8px] "
					alt=""
				/>
			</div>
		</header>
	);
};

export default Header;
