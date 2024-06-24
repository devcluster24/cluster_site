"use client";
import Slider from "react-slick";
import ecommerce from "../../../../public/Ecommerce.jpg";
import education from "../../../../public/Education.jpg";
import healthcare from "../../../../public/HealthCare.jpg";
import realEstate from "../../../../public/Real Estate.jpg";
import restaurant from "../../../../public/Restaurent.avif";
import social from "../../../../public/Social.webp";
import sports from "../../../../public/Sports.jpg";
import fitness from "../../../../public/fitness.jpg";
import travel from "../../../../public/travel.jpeg";
import IndCard from "../Card/page";

const industiList = [
  { id: 1, title: "Education", imageUrl: education },
  { id: 2, title: "Health Care", imageUrl: healthcare },
  { id: 3, title: "Fitness", imageUrl: fitness },
  { id: 4, title: "E-commerce", imageUrl: ecommerce },
  { id: 5, title: "Sports", imageUrl: sports },
  { id: 6, title: "Real Estate", imageUrl: realEstate },
  { id: 8, title: "Travel", imageUrl: travel },
  { id: 9, title: "Restaurant", imageUrl: restaurant },
  { id: 10, title: "Social Networking", imageUrl: social },
];

export default function IndusSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {industiList.map((data) => (
          <IndCard key={data.id} imageSrc={data.imageUrl} title={data.title} />
        ))}
      </Slider>
    </div>
  );
}
