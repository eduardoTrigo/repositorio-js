export default function Card(props) {
    return (
        <div className="mx-auto">
            <div className="card m-2">
                <div className="card-body ">
                    <h5 className="text-center card-title">{props.ciudad}</h5>
                    <p className="text-center card-text">{props.descripcion}</p>
                    <p className="text-center text-info">{props.temperatura}</p>
                </div>
            </div>

        </div>
    )

}

