function Raamat(props) {
    return (
        <div className="RaamatAndmed">
            <table>
                <tr>
                    <td className="bookimg col-2">
                        <img src={props.RPilt} alt={props.Pealkiri} class="bookimg" />
                    </td>
                    <td className="col-10">
                        <p>"{props.Pealkiri}"</p>
                        <p>Autor: {props.Autor}</p>
                        <p>Avalikustatud: {props.Avalikustatud}</p>
                    </td>
                </tr>
            </table>
            <div class="RaamatKirj">
                <p>{props.Kirjeldus}</p>
            </div>
        </div>
    )
}

export default Raamat