import "./contact.css";
import Phone from "../../image/phone.png";
import Email from "../../image/email.png";
import Address from "../../image/address.png";


const Contact = () => {

    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title"> you can find me on below given contact information. </h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone}
                                    alt=""
                                    className="c-icon"
                                />
                                250-552-9935
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={Email} alt="" />
                                prempatel3693@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={Address} alt="" />
                                4329 1st Avenue , Prince George, V2M1C6 , BC , CANADA
                            </div>

                        </div>
                        <div className="c-right" >
                            <p className="c-desc" >
                                <b>What’s your story?</b> Get in touch. Always available for
                                desining and developing applications.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;