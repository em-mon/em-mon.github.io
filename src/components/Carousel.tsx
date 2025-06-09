import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type CarouselItem = {
  color: string;
  title: string;
};

type CarouselProps = {
  activeItemIndex: number;
  setActiveItemIndex: React.Dispatch<React.SetStateAction<number>>;
  carouselData: CarouselItem[];
};

const Carousel: React.FC<CarouselProps> = ({ activeItemIndex, setActiveItemIndex, carouselData }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          activeItemIndex !== 0 &&
            setActiveItemIndex((prevIndex) => prevIndex - 1);
        }}
        className="min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div
        style={{ backgroundColor: carouselData[activeItemIndex].color }}
        className="min-w-[300px] grid place-items-center rounded-lg h-[200px] duration-500"
      >
        <p>{carouselData[activeItemIndex].title}</p>
      </div>
      <button
        onClick={() => {
          activeItemIndex !== carouselData.length - 1 &&
            setActiveItemIndex((prevIndex) => prevIndex + 1);
        }}
        className="min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
