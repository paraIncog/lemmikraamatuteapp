function RaamatuOtsing() {
    function searchBooks() {
        return;
    }

    return (
        <div className="RaamatuOtsing">
            <input type="text" id="ROtsing" placeholder="Otsi Raamatut {WIP}" className="col-11" onChange={searchBooks} disabled />
        </div>
    )
}

export default RaamatuOtsing