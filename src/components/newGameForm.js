import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './newGameFormValidators'
import './newGameForm.css'

const renderField = ({ 
  input, 
  label, 
  type, 
  placeholder, 
  meta: { touched, error, warning }
 }) => (
  <div>
    <label className="item-label">{label}</label>
    <div>
      <input {...input} type={type} placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderRules = ({ fields, meta: { error, submitFailed } }) => (
  <div className="rules">
    <p>Enter Rules</p>  
    
      {fields.map((rule, index) => (
       
        <div key={index} className="rules-fields">
          <Field
          name={`${rule}.description`}
          type="text"
          component={renderField}
          />
        <button
          type="button"
          title="Remove Rule"
          onClick={() => fields.remove(index)}
          >x</button>

        </div> 
      ))}
    
  <div>
      <button type="button" onClick={() => fields.push({})}>
        +
      </button>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </div>
)

const renderScores = ({ fields, meta: { error, submitFailed } }) => (
  <div className="scores">
    <p>Enter Scoring Opportunites</p>
  
    {fields.map((score, index) => (
      <div key={index} className="scores-fields">
        <Field
          name={`${score}.description`}
          type="text"
          component={renderField}
          label="Action"
          placeholder="Enter an Action"
        />
        <Field
          name={`${score}.points`}
          type="number"
          component={renderField}
          label="Point Value"
          placeholder="Enter a Number"
        />
        <button
        type="button"
        title="Remove Score"
        onClick={() => fields.remove(index)}
        >x</button>
      </div> 
    ))}
  
    <div>
      <button type="button" onClick={() => fields.push({})}>
        +
      </button>
        {submitFailed && error && <span>{error}</span>}
      </div>
  </div>
)

const NewGameForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
     <form onSubmit={handleSubmit}> 
      <div className="title-desc">
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Game Name"
        />
        <Field
          name="description"
          type="textarea"
          component={renderField}
          label="Game Description"
          placeholder=""
        />
      </div>
      <FieldArray name="rules" component={renderRules} />
      <FieldArray name="scores" component={renderScores} />
      <div className="title-desc">
          <Field
            name="endScore"
            type="number"
            component={renderField}
            label="Game End Condition"
            placeholder="Enter Max Score"
          />
      </div>
      <div className="reset-submit-btn">
        
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
        </button>

        <button 
          type="submit" 
          disabled={submitting}>
          Submit
        </button>

      </div>
    </form>
  )
}

export default reduxForm({
  form: 'newGameForm', // a unique identifier for this form
  validate
})(NewGameForm)