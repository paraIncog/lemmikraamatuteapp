import Raamat from "./Raamat"

import g_orwell_pic from './book_pics/g_orwell_pic.jpg';
import a_exupery_pic from './book_pics/a_exupery_pic.jpg';
import m_laar_pic from './book_pics/m_laar_pic.jpg';

const raamat1 = {
    Pealkiri: '1984',
    Autor: 'George Orwell',
    Avalikustatud: 1949,
    Kirjeldus: 'Winston Smith töötab Okeaania Tõeministeeriumis, kus tema ülesanne on ajalugu ümber kirjutada. Ta on pisike mutter Partei masinavärgis, mida juhib kõikvõimas Suur Vend. Totalitaarses ühiskonnas, kus valitseb propaganda, järelevalve ja tsensuur, leiab Winston kolleeg Julia seltskonnast tuge - armastuse, mõningase vabaduse ja lootuse paremaks tulevikuks. Kuid nad ei tea, et Suur Vend jälgib kõike ja kõiki.',
    RPilt: g_orwell_pic
}

const raamat2 = {
    Pealkiri: 'Väike Prints',
    Autor: 'Antoine de Saint-Exupery',
    Avalikustatud: 1943,
    Kirjeldus: '1943. aastal ilmunud „Väikest printsi”, ühtaegu lihtsat ja sügavamõttelist lasteraamatut, mis arutleb üksinduse, sõpruse, armastuse ja kaotuse üle, on avaldatud sadades keeltes ja murretes ning müüdud kümneid miljoneid eksemplare. Seda peetakse tõlgituimaks ja loetuimaks prantsuse raamatuks ning prantslased hääletasid selle ka 20. sajandi parimaks prantsuse raamatuks. Käesolev väljaanne on „Väikese printsi” algselt 2017 ilmunud uus tõlge.',
    RPilt: a_exupery_pic
}

const raamat3 = {
    Pealkiri: 'Sinimäed 1944',
    Autor: 'Mart Laar',
    Avalikustatud: 2006,
    Kirjeldus: '1944. aastal Narva jõel ja Sinimägedes toimunud heitlused on veriseimad Eesti pinnal peetud lahingutest. 1944. aasta kevadel kujunes Narva rinne siia koondatud jõudude kontsentratsiooni poolest kõige kuumemaks kohaks idarindel. Narva all peatati Punaarmee edasitung üheksaks kuuks, siin hukkusid kümned tuhanded sõdurid. Käesolev raamat annab mälestustele ja rikkalikule arhiivimaterjalile tuginedes esimese põhjalikuma ülevaate Narva jõel ja Sinimägedes toimunud lahingutest, kajastades Punaarmee sissetungi Eestis, Punaarmee sillapeade hävitamist Narva jõel, lahinguid Krivasoo sillapeal 1944. aasta märtsis-aprillis, Auvere lahingut, Narva langemist ja lahinguid Sinimägedes. Raamat on osa Eesti 1944. aasta lahinguid käsitlevast tetraloogiast, kuhu kuuluvad ka „Emajõgi 1944”, „September 1944” ja „Saaremaa 1944“. Täiendatud ja parandatud kordustrükk.',
    RPilt: m_laar_pic
}

const raamatud = [raamat1, raamat2, raamat3]

function RaamatuAndmed() {
    return(
        <div className="card_block">
            {raamatud.map((raamat, index) => {
                return (
                <Raamat
                key={index}
                Pealkiri={raamat.Pealkiri}
                Autor={raamat.Autor}
                Avalikustatud={raamat.Avalikustatud}
                Kirjeldus={raamat.Kirjeldus}
                RPilt={raamat.RPilt}
            />)
            })}
        </div>
    )
}

export default RaamatuAndmed