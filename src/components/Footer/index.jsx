import { Link } from "react-router-dom";
import logo from "../../assets/footerLogo.svg";
import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import { Links } from "./LinksData";
import "./style.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container inFooter">
        <div className="left">
          <img src={logo} alt="" />

          <div className="socialLnk">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
          <div className="copyright">&copy; 2022 Metabnb</div>
        </div>
        <div className="right">
          {Links &&
            Links.map((a, akey) => (
              <div key={akey} className="footerLink">
                {a.title && <span>{a.title}</span>}
                {a.list && (
                  <ul className="list-unstyled mb-0 quick-links">
                    {a.list.map((b, bkey) => (
                      <li key={bkey}>
                        <Link to={`${b.slug}`}>{b.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
