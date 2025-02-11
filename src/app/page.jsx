import CarCard from "./components/carCard/CarCard";
import Header from "./components/header/Header";
import SwiperSlider from "./components/swiperSlider/SwiperSlider";
import { TopBar } from "./components/topBar/TopBar";


export default function Home() {
  return (
    <>
    <TopBar/>
    <Header/>
    <section className="hero-section">
    <SwiperSlider/>
    </section>

    </>
  );
}
