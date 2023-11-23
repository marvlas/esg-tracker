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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, veritatis nisi voluptatem nam rerum distinctio consectetur rem? Sequi, voluptas rem?</p>
                </div>
                <div className="icons-card">
                    <img src={socialIcon} alt="" />
                    <h2>Social</h2>
                    <p>Sapiente iusto expedita officiis libero at iste deserunt qui dignissimos. Consequuntur veritatis nisi voluptatem nam, qui odit.</p>
                </div>
                <div className="icons-card">
                    <img src={governanceIcon} alt="" />
                    <h2>Governance</h2>
                    <p>Eos, autem nesciunt nostrum ipsum harum quia reprehenderit accusantium! Eos sunt quos repellendus est animi quibusdam maiores ab tempora ex, i dolorum!</p>
                </div>
            </div>
        </div>
    )
}


export default Icons