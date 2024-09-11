import { DigiFooter, } from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <DigiFooter className="footer">


            <div slot="content-bottom-left">
                {/* Länk till hemsidan med logotyp */}
             
                    <div className="logoContainer">
                        <a href="/">
                            <div className="logo">
                                <img className="logo" src="logo\logo.png" alt="logo" />
                            </div>
                        </a>

                        <p className="logo-title">| KarriärJakten</p>
                    </div>
            
            </div>

            <div slot="content-bottom-right">
                {/* Information om projektet */}
                <p>
                    Projektet skapades vid Medieinstitutet av Mona, Andreas och Leonard. <br />
                    Kontakt: <a href="mailto:info@medieinstitutet.se">info@medieinstitutet.se</a>
                </p>
            </div>
        </DigiFooter>

    );
};


