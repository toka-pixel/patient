import React, { useEffect, useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import "./Patient.scss";
import { Select,Alert } from "antd";
import { useAppSelector, useAppDispatch } from "../../hooks/index";
import { deletePatient } from "../../store/patient-slice";
import TitleSearch from "../Layout/Search";
import TableData from "../Layout/Table";
import Filter from "../Layout/Filter";
import swal from 'sweetalert';
//PatientList
const PatientList: React.FC = () => {
  const { Option } = Select;

  const history = useHistory();
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const patientList = useAppSelector((state) => state.patient.patientList);
  const data: any[] = [];
  let [dataPatient, setDataPatient] = useState<any[]>([]);

  const redirect = (id: string) => {
    history.push(`/update-patient/${id}`);
  };

  const dispatchDeletePatient = (id: string) => {
   
    swal({
      title: "Are you sure?",
      text: 'delete  ',
      icon: "warning",
      
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
       
        dispatch(deletePatient({ id }));

        console.log("deleted");

       
      } else {
        swal("row is safe!");
      }
    });
  };

  patientList.map((patient) =>
    data.push({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      phone: patient.phone,
      age: patient.age,
      diagnosis: patient.diagnosis,
      department: patient.department,
      date: moment(patient.date).format("YYYY-MM-DD hh:mm a"),
    })
  );
  useEffect(() => {
    setDataPatient([...data]);
  }, [patientList]);


  const [department, setDepartment] = useState(undefined);
  const [age, setAge] = useState(1);

  const handleDepartment = (e: any) => {
    setDepartment(e);
  
  };

  const handleAge = (e: any) => {
    setAge(e.target.value);
   
  };

  const handlefilter = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (department !== "") {
      const d1 = data.filter((dataPatient) => {
        return dataPatient.department === department;
      });
      console.log(d1);
      setDataPatient([...d1]);
      console.log(dataPatient);
    }

    if (age) {
      let d2 = data.filter((patient) => patient.age == age);
      console.log(d2);
      setDataPatient(d2);
    }
    if (!department && !age) {
      setDataPatient(data);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;

    if (keyword.trim() !== "") {
      const results = data.filter((patient) => {
        return patient.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setDataPatient(results);
    } else {
      setDataPatient(data);
    }
    
  };

  return (
    <section className='container'>
       
      <div className='head'>
      
      <Filter submit={handlefilter} valueDepartment={department} changeDepartment={handleDepartment} valueAge={age} changeAge={handleAge} />
       
      </div>
      <TitleSearch onSearch={handleSearch} />
      <TableData
        dataSource={dataPatient}
        updatePatient={redirect}
        deletePatient={dispatchDeletePatient}
      />
    </section>
  );
};

export default PatientList;
