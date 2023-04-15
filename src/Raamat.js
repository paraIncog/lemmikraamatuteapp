function Raamat(props) {
    return (
        <div className="RaamatAndmed">
            <p>Pealkiri: "{props.Pealkiri}"</p>
            <p>Autor: {props.Autor}</p>
            <p>Avalikustatud: {props.Avalikustatud}</p>
            <p>{props.Kirjeldus}</p>
        </div>
    )
}

export default Raamat