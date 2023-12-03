import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Navbars from '../../components/navbar/navbar';

const BMI_Calc = () => {
    const [bmiInputs, setBmiInputs] = useState({w: '', h: ''})
    const [errors, setErrors] = useState({wErr: '', hErr: ''})
    const [totalBmi, setTotalBmi] = useState('');
    
    function hasMultipleDecimals(value) {
        // Use a regular expression to check for multiple decimals
        const decimalPattern = /\./g;
        const matches = value.match(decimalPattern);
      
        // If there are more than one matches, it has multiple decimals
        return matches && matches.length > 1;
      }
      
    const CalculationHandler = () => {
        const weightValue = Number(bmiInputs?.w);
        const heightValue = Number(bmiInputs?.h);
        
        console.log('all data >>>', bmiInputs, weightValue, heightValue);
    if(!bmiInputs?.h || !bmiInputs.w){
        setErrors({hErr: `${!bmiInputs.h ? 'Please enter valid values.' : ''}` ,wErr: `${!bmiInputs.w ? 'Please enter valid values.' : ''}`})
    }
    else if ( weightValue < 1.0 || weightValue > 300.0 || hasMultipleDecimals(bmiInputs.w) ){
        console.log('2nd if e dukse')

        setErrors({...errors ,wErr: 'Please enter valid values. Weight should be between 1.0 and 300.0'})
    }
    else if ( heightValue < 0.1 || heightValue > 3.0 || hasMultipleDecimals(bmiInputs.h)){
        console.log('3rd if e dukse')

        setErrors({...errors ,hErr: 'Please enter valid values. height should be between 0.1 and 3.0.'})
    }
    else{
      const bmiValue = weightValue / (heightValue * heightValue);
      setTotalBmi(bmiValue.toFixed(1))
      console.log('bmi >>>> ', )
    } 
    }

    return (
    <div className="bmi_container">
        <Navbars></Navbars>
        <div className="bmi_div">
            <h1>Calculate BMI</h1>

            <h1>{totalBmi && `Your BMI is : ${totalBmi}`}</h1>

            <div className='input_div mt-4'>
                <label className='fw-bold'>Weight (kg):</label>
                <input 
                onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
                    setBmiInputs({...bmiInputs, w: e.target.value})
                    setErrors({...errors, wErr: ''})
                }
                } 
                className='inputs' placeholder='Write Weight'  id="weight" step="0.1" min="1.0" max="300.0" required/>

                <p className='text-danger mt-2 fw-bold'>{errors.wErr}</p>

                <label className='mt-2 fw-bold '>Height (m):</label>
                <input 
                onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
                    setBmiInputs({...bmiInputs, h: e.target.value})
                    setErrors({...errors, hErr: ''})
                }} 
                
                className='inputs' placeholder='Write Height'  id="height" step="0.01" min="0.1" max="3.0" required/>
                <p className='text-danger mt-2 fw-bold'>{errors.hErr}</p>
                
                <Button onClick={CalculationHandler} className='mt-4'>SUBMIT</Button>
            </div>
        </div>
    </div>
    );
};

export default BMI_Calc;