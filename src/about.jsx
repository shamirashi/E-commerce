import React from "react";
import './css/home.css';

export default function About(){
    return(
        <>
        <div className="container">
            <div className="row roow">
                <div className="col-lg-12">
                    <p className="about">About Us</p>
                </div>
                <div className="col-lg-12 para">
                    <p>We as a brand are determined to provide our customers with supreme style, comfort and luxury in the form of class apart footwear, jackets, sunglasses and clothes.</p>
                     <p>Our philosophy is to look beyond what just meets the eye. Along with styles that can take your breath away with their impeccable craftsmanship and pristine design, our products are also made to give your feel an unimaginable level of comfort.</p>
                     <p>We welcome new trends in fashion while still maintaining a strong bond with the classics. Handcrafted leather lace ups, loafers, driving shoes, sneakers, chic sandals, super comfy flats and statement heels, we have got something to fit your every need!</p>
                     <p>Check out our collection today, we're sure you'll fall in love and find your new favourite pair!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <img className="tres-last" src="../image/tresmode.webp" />
                </div>
            </div>
        </div>
        </>
    )
}