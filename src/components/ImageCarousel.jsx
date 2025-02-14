import Slider from 'react-slick'

function ImageCarousel() {
    const images = [
        "/grow.webp",
        "/gembanner2.webp",
        "/republic22.webp",
        "/omr3602.webp",
        "/mc2.webp",
        "/kids2.webp",


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



    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Apartment View ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageCarousel
