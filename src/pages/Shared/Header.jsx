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
					spellCheck='false'
					className="bg-[#f6f8fa] text-[12px] w-8/12 ml-auto border-2 border-[#d2d6db] pl-5 pr-2 py-1 rounded-full focus:outline-none"
				/>
				<img
					src={serachIcon}
					className="w-[12px] absolute top-[30%] left-[37%] "
					alt=""
				/>
			</div>
		</header>
	);
};

export default Header;
