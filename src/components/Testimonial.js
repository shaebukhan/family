import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from "react-icons/fa";
const carouselData = [
    {
        id: 2,
        title: "Une équipe bien à l'écoute",
        name: "Tarik Essaadi",
        text: "Un produit de qualité et une équipe derrière qui est bien à l'écoute des utilisateurs et aux signes des développements. Je suis très satisfait du rendement."
    },
    {
        id: 3,
        title: "Une expérience exceptionnelle",
        name: "Amina Benhalima",
        text: "Un service impeccable avec une équipe toujours disponible pour répondre à mes besoins. Très satisfait de leur professionnalisme et de leur réactivité."
    },
    {
        id: 4,
        title: "Une solution innovante",
        name: "Youssef El Amrani",
        text: "L'interface est simple à utiliser et parfaitement adaptée à nos attentes. Une innovation qui a changé la manière dont nous travaillons."
    },
    {
        id: 5,
        title: "Excellent support technique",
        name: "Salma Berrada",
        text: "L'équipe technique est toujours à l'écoute et très réactive. Je recommande vivement leurs services pour leur efficacité."
    },
    {
        id: 6,
        title: "Fiable et efficace",
        name: "Mohamed Lahlou",
        text: "Un produit fiable avec un support excellent. Cela m'a permis de gagner un temps précieux dans mes activités quotidiennes."
    },
    {
        id: 7,
        title: "Une approche orientée utilisateur",
        name: "Kenza Ouazzani",
        text: "Ils ont su adapter leur produit à mes besoins spécifiques. Le résultat est exactement ce que j'espérais, sinon plus."
    },
    {
        id: 8,
        title: "Un service au top",
        name: "Rachid Boukhal",
        text: "Un accompagnement parfait du début à la fin. Je suis impressionné par leur disponibilité et leur engagement."
    },
    {
        id: 9,
        title: "Des résultats impressionnants",
        name: "Sara Idrissi",
        text: "Depuis que nous utilisons leurs services, nos performances se sont considérablement améliorées. Une équipe compétente et des résultats concrets."
    }
];



const Testimonial = () => {

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Auto slide
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // For screen width less than 1024px
                settings: {
                    slidesToShow: 2, // Show 3 slides
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For screen width less than 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For screen width less than 480px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className="why-main">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">Témoignages clients</h1>
                </div>
                <div className="testimonial-sub">
                    <div className="carousel-container">
                        <Slider {...settings}>
                            {carouselData.map((item) => (
                                <div key={item.id}>
                                    <div className="best-sold-card">
                                        <h5 className="best-sold-card-text c-clr">{item.title}</h5>
                                        <h6 className="c-clr mb-5 pt-2">{item.name}</h6>
                                        <h6 className='why-card-text'>{item.text}</h6>
                                        <div className="stars-main">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;