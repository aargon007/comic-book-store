import ComicSlider from "../Shared/ComicSlider";
import Menu from "../Shared/Menu";
import PopularBook from "./PopularBook";

const Home = () => {
    return (
        <div className="mt-2 bg-[#f1f1f7] px-2 pt-2 pb-20">
            <ComicSlider/>
            <Menu/>
            <PopularBook/>
        </div>
    );
};

export default Home;