export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick} style={{ width: 60, height: 60, fontSize: 24}}>{props.value}</button>
    )
}