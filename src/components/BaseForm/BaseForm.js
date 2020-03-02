import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'
import NetlifyForm from 'react-netlify-form'

const Styles = {

  FieldWrapper: styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
  `,

  InputWrapper: styled.div`
    width:calc(50% - 20px);
    padding:10px;
  `,

  InputLabel: styled.label`
    display:block;
    margin-bottom:8px;
  `,

  TextInput: styled.input`
    border:1px solid ${vars.COLOR_GRAY_2};
    padding:10px;
    width:100%;
  `,

}

export default ({name, fields}) => {

  
  return(
    <NetlifyForm
      name={name}
      recaptcha={{
        sitekey: 'my_recaptcha_site_key',
        size: 'normal'
      }}
    >
      {({ loading, error, recaptchaError, success, recaptcha }) => (
        <div>
          { loading && <div>Loading...</div> }
          { error && <div>Your information was not sent. Please try again later.</div> }
          { recaptchaError && <div>Recaptcha did not match. Please make sure the box is checked.</div> }
          { success && <div>Thank you for contacting us!</div> }
          {!loading && !success &&
            <Styles.FieldWrapper>
              {/* <input type='text' name='Name' required />
              <textarea name='Message' required />
              {recaptcha}
              <button>Submit</button> */}
              { fields.map((field, index) => ( <Field key={index} name={field.name} type={field.type} label={field.label} required={field.required} /> ))}
            </Styles.FieldWrapper>
          }
        </div>
      )}
    </NetlifyForm>
  )
}

const Field = ({name, type, label, required}) => {

  let input = ''

  switch(type){
    case 'text':
      input = ( 
            <Styles.InputWrapper>
              <Styles.InputLabel htmlFor={name}>{label}</Styles.InputLabel>
              <Styles.TextInput name={name} type={type} required={required} />
            </Styles.InputWrapper> 
          )
    break;

    default:
      input = ( 
            <Styles.InputWrapper>
              <Styles.InputLabel htmlFor={name}>{label}</Styles.InputLabel>
              <Styles.TextInput name={name} type={type} required={required} />
            </Styles.InputWrapper> 
          )
  }

  return input
}