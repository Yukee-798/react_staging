import {NameContext} from '../context';
const D = () => {
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            <h3>我是D组件</h3>
            <h4>我从A组件拿到
                <NameContext.Consumer>
                    {
                        value => value
                    }
                </NameContext.Consumer>
            </h4>

        </div>
    )
}
export default D;