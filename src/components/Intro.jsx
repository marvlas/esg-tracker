import environmentIcon from "../assets/ecology.svg"
import socialIcon from "../assets/social.svg"
import governanceIcon from "../assets/scale.svg"

function Icons () {
    return (
        <div className="container icons">
            <h1 className="centered">ESG tracker</h1>
            <div className="icons-wrap">
                <div className="icons-card">
                    <img src={environmentIcon} alt="" />
                    <h2>Environment</h2>
                    <p>The environmental score is a score out of 100 that is calculated based on an evaluation of various criteria, such as biodiversity, climate strategy, and water operations. The higher the score, the better</p>
                </div>
                <div className="icons-card">
                    <img src={socialIcon} alt="" />
                    <h2>Social</h2>
                    <p>The social score is score out of 100 that is calculated based on an evaluation of various criteria, such as human rights, labor practices, and community impact. The higher the score, the better</p>
                </div>
                <div className="icons-card">
                    <img src={governanceIcon} alt="" />
                    <h2>Governance</h2>
                    <p>The governance score is a score out of 100 that is calculated based on an evaluation of various criteria, such as corporate governance, compliance, and supply chain practices. The higher the score, the better</p>
                </div>
            </div>
        </div>
    )
}


export default Icons