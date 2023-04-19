import { useState } from "react";
import { Link } from "react-router-dom"

const WIPtext = '{WIP}'

function RaamatuteNimekiri() {

    const lisamehi = () => {
        setKylastusi(kylastusi + 1)
        // kylastusi += 1; not okay
        console.log('Külamehi: ' + kylastusi)
    }

    const mehedpurjus = () => {
        if (kylastusi < 1) {
            return;
        }
        setKylastusi(kylastusi - 1)
    }

    const [kylastusi, setKylastusi] = useState(1);
    // let kylastusi = 50; Nii ei saa muuta reaktiivse muutuja väärtust

    return(
        <div className="card_block">
            <p>Raamatute Nimekiri <span className="WIPtext">{WIPtext}</span></p>
            <Link to ="/">Raamat 1</Link>
            <div>
                Külamehi: {kylastusi}
                <p>
                    Lisa veel mehi
                </p>
                <button onClick={lisamehi}>+</button>
                <button onClick={mehedpurjus}>Mehed joovad</button>
            </div>
        </div>
    )
}

export default RaamatuteNimekiri