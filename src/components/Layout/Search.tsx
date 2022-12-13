import { Input} from 'antd';

const Search=Input.Search;


type Props={


    onSearch:(e:React.FormEvent<HTMLInputElement>)=>void

}

const TitleSearch:React.FC<Props>=({onSearch})=>{

    return(
     <Search
     placeholder='Enter Name'
     style={{width:200}}
     onChange={onSearch}
    />
    )
}

export default TitleSearch;