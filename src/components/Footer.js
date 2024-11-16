import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube, FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin, FaPhone, FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <>

            <div className="common-space pb-1 ftr">
                <div className="container-fluid mb-5">
                    <div className="row">

                        <div className="col-md-4 ftr-sub-space">
                            <div className="ftr-second-sec">
                                <h6 className="ftr-small-title">ENTREPRISE</h6>
                                <div className="ftr-sub">
                                    <Link className="ftr-link" to="/about">A propos</Link>
                                    <Link className="ftr-link" to="/feedback">Assistance extraordinaire </Link>
                                    <Link className="ftr-link" to="/terms&conditions"> ADN GoodBarber </Link>
                                    <Link className="ftr-link" to="/privacy-policy">Emplois </Link>
                                    <Link className="ftr-link" to="/contact">Presse</Link>
                                    <Link className="ftr-link" to="/careers">CGV</Link>
                                    <Link className="ftr-link" to="/careers">Politique de confidentialité & GDPR</Link>
                                    <Link className="ftr-link" to="/careers">Nous contacter</Link>

                                </div>











                            </div>
                        </div>
                        <div className="col-md-4 ftr-sub-space">
                            <div className="ftr-second-sec">
                                <h6 className="ftr-small-title">PRODUIT</h6>
                                <div className="ftr-sub">
                                    <Link className="ftr-link" to="/about">App eCommerce</Link>
                                    <Link className="ftr-link" to="/feedback">Créateur d'applications mobiles </Link>
                                    <Link className="ftr-link" to="/terms&conditions">Créer une PWA</Link>
                                    <Link className="ftr-link" to="/privacy-policy"> Liste des Extensions </Link>
                                    <Link className="ftr-link" to="/contact">Revendeur d'applications </Link>
                                    <Link className="ftr-link" to="/contact">Tarifs </Link>
                                    <Link className="ftr-link" to="/contact">Retours utilisateurs </Link>
                                    <Link className="ftr-link" to="/contact"> Développeurs</Link>
                                    <Link className="ftr-link" to="/contact"> Développement sur-mesure</Link>


                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 ftr-sub-space">
                            <div className="ftr-second-sec">
                                <h6 className="ftr-small-title">SOCIAL</h6>
                                <div className="ftr-sub">
                                    <Link className="ftr-link" to="/about"><FaFacebook className="ftr-icon" />Facebook</Link>

                                    <Link className="ftr-link" to="/about"><FaSquareInstagram className="ftr-icon" />Instagram</Link>
                                    <Link className="ftr-link" to="/about"><FaTwitterSquare className="ftr-icon" />Twitter</Link>
                                    <Link className="ftr-link" to="/about"><FaYoutubeSquare className="ftr-icon" /> YouTube</Link>
                                    <Link className="ftr-link" to="/about"><FaLinkedin className="ftr-icon" /> Linkedin</Link>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="my-3 p-2 text-center">
                    © GoodBarber - Since 2011 - Made in Corsica
                </div>


            </div>

        </>
    );
};

export default Footer;
