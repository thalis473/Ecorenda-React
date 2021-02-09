import {useSelector} from 'react-redux'
import Material from '../material'

import './materialCard.css'

export default function MaterialCard(props) {
    const user = useSelector(state => state.user.dados)
    return (
        <div className="material-card">
            <p>{props.rotulo}</p>
            <div className="material-group">
                {user.materiais.map(item => <Material key={item.id} dados={item} />)}
            </div>
        </div>
    )
}