import {BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./components/Layout/Navbar";
import PatientList from "./components/Patient/PatientList";
import AddPatient from "./components/Patient/AddPatient";


function App() {
  return (
     <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={PatientList}/>
          <Route path='/add-new-patient' component={AddPatient}/>
          <Route path='/update-patient/:id' component={AddPatient}/>

        </Switch>
     </Router>
  );
}

export default App;
