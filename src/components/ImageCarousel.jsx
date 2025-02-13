import Slider from 'react-slick'

function ImageCarousel() {
    const images = [
        "/grow.webp",
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
