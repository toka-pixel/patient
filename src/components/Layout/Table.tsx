import { Table,  Space } from "antd";
 import {DeleteOutlined,EditOutlined} from '@ant-design/icons';

type Props={

    dataSource:any[],
    updatePatient:(id:string)=>void,
    deletePatient:(id:string)=>void

}

const TableData: React.FC<Props> = ({dataSource,updatePatient,deletePatient}) => {


    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Diagnosis",
          dataIndex: "diagnosis",
          key: "diagnosis",
        },
        {
          title: "Department",
          dataIndex: "department",
          key: "department",
        },
    
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
    
        {
          title: "Action",
          dataIndex: "id",
          key: "id",
          render: (id: string) => (
            <Space size="middle">
              <a onClick={() => updatePatient(id)}><EditOutlined  style={{color:'green' ,fontSize: '19px'}} /></a>
              <a onClick={() => deletePatient(id) }><DeleteOutlined style={{color:'red' ,fontSize: '19px'}} /></a>
            </Space>
          ),
        },
      ];

      return (
    
          <Table dataSource={dataSource} columns={columns} rowKey="id" />
       
      );
}

export default TableData;