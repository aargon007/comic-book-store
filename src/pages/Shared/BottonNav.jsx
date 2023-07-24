import { Link } from 'react-router-dom'
import icon1 from '../../assets/icons/6.svg'
import icon2 from '../../assets/icons/7.svg'
import icon3 from '../../assets/icons/8.svg'
import icon4 from '../../assets/icons/9.svg'
import icon5 from '../../assets/icons/10.svg'

const BottonNav = () => {
    const myMenu = [
		{
			image: icon1,
			title: "Recommend",
		},
		{
			image: icon2,
			title: "Category",
		},
		{
			image: icon3,
			title: "Novel",
		},
		{
			image: icon4,
			title: "My Comics",
		},
		{
			image: icon5,
			title: "My Profile",
		},
	];
	return (
		<div className="flex gap-5 px-5 py-2 justify-between items-center">
			{myMenu?.map((menu) => (
				<Link key={menu?.title}>
					<img src={menu?.image} alt={menu?.title} className='mx-auto' />
					<p className="text-[10px] font-bold text-[#AAB2BD] mt-1">{menu?.title}</p>
				</Link>
			))}
		</div>
	);
};

export default BottonNav;