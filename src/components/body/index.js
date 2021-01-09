import './body.css'

export default function Body(props) {
    return (
        <div className="corpo-aplicacao">
            {props.children}
        </div>
    )
}