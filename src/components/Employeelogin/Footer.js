import "./style.css";
const Footer = () => {
    return (
        <>
            <div className="fixed-bottom">
                <div className="footer">
                    <div className="row">
                        <div className="col">
                            <div className="mailAlingment">
                                <b>{"Mail: "}</b>
                                <a className="mailinfo" href="https://gmail.com/">help@poribar.com</a>
                            </div>

                        </div >
                        <div className="col">
                            <div className="text">
                                PORIBAR 2022
                            </div>
                        </div>
                        <div className="col">
                            <div className="phoneAlingment">
                                <b>{"Phone: "}</b>
                                <span className="phoneinfo">+8801234567899</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
export default Footer;