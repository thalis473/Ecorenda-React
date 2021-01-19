import Material from '../material'

import './materialCard.css'

export default function MaterialCard(props) {
    return (
        <div className="material-card">
            <p>{props.rotulo}</p>
            <div className="material-group">
            <Material />
            <Material />
            <Material />
            <Material />
            <Material />
            <Material />
            </div>
        </div>
    )
}