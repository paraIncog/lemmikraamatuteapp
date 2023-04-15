import Raamat from "./Raamat"

import g_orwell_pic from './book_pics/g_orwell_pic.jpg';

const raamat1 = {
    Pealkiri: "1984",
    Autor: "George Orwell",
    Avalikustatud: 1949,
    Kirjeldus: "Winston Smith töötab Okeaania Tõeministeeriumis, kus tema ülesanne on ajalugu ümber kirjutada. Ta on pisike mutter Partei masinavärgis, mida juhib kõikvõimas Suur Vend. Totalitaarses ühiskonnas, kus valitseb propaganda, järelevalve ja tsensuur, leiab Winston kolleeg Julia seltskonnast tuge - armastuse, mõningase vabaduse ja lootuse paremaks tulevikuks. Kuid nad ei tea, et Suur Vend jälgib kõike ja kõiki.",
    RPilt: g_orwell_pic
}

function RaamatuAndmed() {
    return(
        <div className="foreground_block">
            <p>Raamatu Andmed</p>
            <Raamat
                Pealkiri={raamat1.Pealkiri}
                Autor={raamat1.Autor}
                Avalikustatud={raamat1.Avalikustatud}
                Kirjeldus={raamat1.Kirjeldus}
                RPilt={raamat1.RPilt}
            />
            <Raamat />
            <Raamat />
        </div>
    )
}

export default RaamatuAndmed