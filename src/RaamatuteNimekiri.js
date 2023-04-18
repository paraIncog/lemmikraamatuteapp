import { Link } from "react-router-dom"

const WIPtext = '{WIP}'

function RaamatuteNimekiri() {
    return(
        <div className="card_block">
            <p>Raamatute Nimekiri <span className="WIPtext">{WIPtext}</span></p>
            <Link to ="/">Raamat 1</Link>
        </div>
    )
}

export default RaamatuteNimekiri