import "./about.css"
import unbcimg from "../../image/UNBC_Logo.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={unbcimg}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    UNDERGRAD @UNBC
                </p>
                <p className="a-desc">
                    <p> I was born and raised in Vadodara(city in province of Gujarat),INDIA.
                        After completing high school in the India, I moved to canada for further studies. Currently, I am a third year undergrad student at Computer Science Department of UNBC.
                    </p>
                    <p> I haved worked and developed in 5 web applications which consists of REACT JS, HTML5/CSS3 , Node JS and other relevant technologies. Below I have attached pictures of my project work. Still, working on other interesting projects.

                    </p>
                    <p>I like to read spiritual books which refreshes my soul and give strength to live incredible life. Soul servant of <b>HDH HARIPRASAD SWAMIJI MAHARAJ</b>, founder of Yogi Divine Society (YDS). I am fortunte to have his inspirations and blessings to all the way of my life.</p>
                </p>
            </div>
        </div>
    );
};

export default About;