import React from "react";
import { useState } from "react";
import {useParams, useHistory } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../hooks';
import { addNewPatient , updatedPatient } from '../../store/patient-slice';
import "antd/dist/antd.css";
import { Form, Input, Button, Select } from "antd";
import { Patient } from "../../types/patient";
import swal from 'sweetalert';

const AddPatient: React.FC = () => {

  const { Option } = Select;
  const {TextArea}=Input;
  

  const {id}=useParams<{id:string}>();
  let titleText:string='';
  
  if(id){
    titleText='Update Patient';
    
  }else{
    titleText='Add New patient';
    
  }
  
  

  const history=useHistory();
  const  dispatch = useAppDispatch();
  const patient=useAppSelector((state)=>state.patient.patientList.find((patient)=>patient.id === id));

  let [values,setValues]=useState<Patient | any>(patient! || '');



  const onFinish = (valuesForm: any) => {
   

    // handle update patient
    if(id){
      
  
      for(let  key in valuesForm){
        if(valuesForm[key] !== undefined){
          values={...values,[key]:valuesForm[key]}
        
         
        }
      } 
      console.log(values);
      
    dispatch(updatedPatient(values));
     
    swal("Success", "add new patient");
      
      return;
    }

    // handle add new patient
     
     dispatch(addNewPatient({...valuesForm,id:Math.random().toString()}));
     swal("Success", "update patient");
    
    history.push('/');
    console.log("Success:", valuesForm);
  };

 

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };


  return (

    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='addForm'
    >
      
      
      <h2>{titleText}</h2>
      <Form.Item
        label="name"
        name="name"
        rules ={  values?.name === undefined  ? ([{ required: true, message: "Please enter name!" }]) : undefined }
      >
      <Input className='addInput' defaultValue={values?.name || ''}/>
      
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          
             values?.email === undefined ? { required: true, message: "Please enter email" } : {}

        ]}

        
      >
        <Input className='addInput' defaultValue={values?.email || ''}/>
      </Form.Item>

      <Form.Item
        label="phone"
        name="phone"
        rules ={  values?.phone === undefined  ? ([{ required: true, message: "Please enter phone!" }]) : undefined}
      >
        <Input
          type="tel"
          placeholder="1237-459-6780"
          
          pattern="[0-9]{11}"
          title='phone must contain 11 number'
          className='addInput'
          defaultValue={values?.phone || ''}
        />
      
      </Form.Item>

      <Form.Item
        label="age"
        name="age"
        rules ={  values?.age === undefined  ? ([{ required: true, message: "Please enter age!" }]) : undefined}
      >
        <Input className='addInput' type="number" min='1' defaultValue={values?.age || ''}  />
      
      </Form.Item>

      <Form.Item
        label="diagnosis"
        name="diagnosis"
       
        rules ={  values?.diagnosis === undefined ? ([{ required: true, message: "Please enter diagnosis!" }]) : undefined}
      >
        <TextArea className='addInput' rows={4} defaultValue={values?.diagnosis || ''} />
      </Form.Item>

      <Form.Item
        label="department"
        name="department"
       
        rules ={  values?.department === undefined  ? ([{ required: true, message: "Please enter department!" }]) : undefined}
      >
    <Select  defaultValue={values?.department || undefined } style={{ width: 120 }} allowClear>
      <Option value="Heart">Heart</Option>
      <Option value="Eye">Eye</Option>

    </Select>
      </Form.Item>

      <Form.Item
        label="date"
        name="date"
        rules ={  values?.date === undefined  ? ([{ required: true, message: "Please enter date!" }]) : undefined}
      >
        <Input className='addInput' type="datetime-local" defaultValue={values?.date || ''} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPatient;
