// import Home from './pages/Home'


import { Input, Select } from 'antd';




const App = () => {
    const { Option } = Select;

    return (
        <div className="site-input-group-wrapper">
            <Input.Group compact>
                <Select defaultValue="Zhejiang">
                    <Option value="Zhejiang">Zhejiang</Option>
                    <Option value="Jiangsu">Jiangsu</Option>
                </Select>
                <Input style={{ width: '50%' }} />
            </Input.Group>
        </div>
    )
}

export default App