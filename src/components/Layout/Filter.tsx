import { Input,Select} from 'antd';
import { Button } from 'antd';



type Props={

    submit:(e: React.FormEvent<EventTarget>)=>void,
    valueDepartment:undefined,
    changeDepartment:(e:any)=>void,
    valueAge:number,
    changeAge:(e:any)=>void

    


}

const Filter:React.FC<Props>=({submit,valueDepartment,changeDepartment, valueAge,changeAge})=>{

    const { Option } = Select;

    return(
       
        <form onSubmit={submit} >
          <Select
            
            defaultValue={valueDepartment}
            placeholder="Department"
            onChange={changeDepartment}
            style={{ width: 141 }}
            allowClear
          >
            <Option value="Heart">Heart</Option>
            <Option value="Eye">Eye</Option>
          </Select>
          <Input
            type="number"
            min="1"
            placeholder="Age"
            value={valueAge}
            name="age"
            onChange={changeAge}
            style={{ width:'auto', margin:'0 10px' }}
          />

        <button   >
         Filter
        </button>
        </form>

    )
}

export default Filter;