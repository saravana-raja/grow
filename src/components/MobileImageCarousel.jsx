import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local image correctly
import growImage from "../assets/growmob.jpeg"; // Adjust the path as necessary

function MobileImageCarousel() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // Small delay to prevent flickering
    }, []);

    const images = [
        growImage, // Local image
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&auto=format",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&auto=format",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    return isVisible ? (
        <div className="mobile-carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Apartment View ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    ) : null;
}

export default MobileImageCarousel;
