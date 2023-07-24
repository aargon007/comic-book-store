import menu1 from "../../assets/icons/1.svg";
import menu2 from "../../assets/icons/2.svg";
import menu3 from "../../assets/icons/3.svg";
import menu4 from "../../assets/icons/4.svg";
import menu5 from "../../assets/icons/5.svg";
import { Link } from "react-router-dom";


const Menu = () => {
	const myMenu = [
		{
			image: menu1,
			title: "Category",
		},
		{
			image: menu2,
			title: "Rating",
		},
		{
			image: menu3,
			title: "Update",
		},
		{
			image: menu4,
			title: "Wallet",
		},
		{
			image: menu5,
			title: "VIP",
		},
	];
	return (
		<div className="flex gap-5 px-16 justify-between items-center mt-10">
			{myMenu?.map((menu) => (
				<Link key={menu?.title}>
					<img src={menu?.image} alt="" />
					<p className="text-[10px] font-bold">{menu?.title}</p>
				</Link>
			))}
		</div>
	);
};

export default Menu;
