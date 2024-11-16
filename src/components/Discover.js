import React from 'react';
import Discover1 from "../assets/images/discover1.webp";
import Discover2 from "../assets/images/discover2.webp";
import Discover3 from "../assets/images/discover3.webp";
const Discover = () => {
    return (
        <>
            <div className="why-main">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">A découvrir</h1>
                </div>
                <div className="discover-sub">
                    <div className="discover-card">
                        <img src={Discover1} alt="" />
                        <div className="discover-text">
                            <h3 className="discover-card-title c-clr">Comment vendre une app à un Restaurant?
                            </h3>
                            <p className='discover-card-text c-clr'>Avec GoodBarber il vous est possible de créer tout ...</p>
                        </div>
                    </div>
                    <div className="discover-card">
                        <img src={Discover2} alt="" />
                        <div className="discover-text">
                            <h3 className="discover-card-title c-clr"> Edamame Restaurant: digitalisation d'un restaurant familial
                            </h3>
                            <p className='discover-card-text c-clr'>
                                La période que nous venons de vivre en est la...</p>
                        </div>
                    </div><div className="discover-card">
                        <img src={Discover3} alt="" />
                        <div className="discover-text">
                            <h3 className="discover-card-title c-clr"> Comment créer votre propre application mobile de « Livraison locale
                            </h3>
                            <p className='discover-card-text c-clr'>
                                Beaucoup de commerces physiques ont vécu une ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discover;