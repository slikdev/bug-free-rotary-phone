import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'
import NetlifyForm from 'react-netlify-form'
import BaseActivityIndicator from '../BaseActivityIndicator/BaseActivityIndicator'

import SelectArrowDownSVG from '../../assets/img/select-arrow-down.svg'
import FormErrorSVG from '../../assets/img/form-error.svg'
import FormSuccessSVG from '../../assets/img/form-success.svg'

const Styles = {

  FieldWrapper: styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:600px;
    margin-left:auto;
    margin-right:auto;
  `,

  StatusWrapper: styled.div`
    width:600px;
    margin-left:auto;
    margin-right:auto;
    padding:10px;
  `,

  InputWrapper: styled.div`
    width:100%;
    padding-top:10px;
    padding-bottom:20px;
    padding-left:10px;
    padding-right:10px;

    ${up('md')} {
      width:${props => props.width || '100%'};
    }
  `,

  Spacer: styled.div`
    width:100%;
    height:20px;
  `,

  InputLabel: styled.label`
    display:block;
    margin-bottom:8px;
    font-size:14px;
    color:${vars.COLOR_BLACK_2};
  `,

  RequiredAsterix: styled.span`
    color:${vars.COLOR_RED_1};
  `,

  TextInput: styled.input`
    border:2px solid ${vars.COLOR_GRAY_2};
    padding:10px;
    width:100%;
    transition:border 0.6s;
    height:48px;
    align-items:center;
    font-size:16px;
    color:${vars.COLOR_BLACK_2};

    &:focus{
      border:2px solid ${vars.COLOR_BLUE_1};
    }
  `,
  
  TextArea: styled.textarea`
    border:2px solid ${vars.COLOR_GRAY_2};
    padding:10px;
    width:100%;
    transition:border 0.6s;
    align-items:center;
    font-size:16px;
    color:${vars.COLOR_BLACK_2};
    outline:none;

    &:focus{
      border:2px solid ${vars.COLOR_BLUE_1};
    }
  `,
  
  SelectInput: styled.select`
    border:2px solid ${vars.COLOR_GRAY_2};
    padding:10px;
    width:100%;
    transition:border 0.6s;
    height:48px;
    align-items:center;
    font-size:16px;
    color:${vars.COLOR_BLACK_2};
    border-radius:0;
    -webkit-appearance:none;
    background-image:url(${SelectArrowDownSVG});
    background-repeat:no-repeat;
    background-position:calc(100% - 20px) 18px;

    &:focus{
      border:2px solid ${vars.COLOR_BLUE_1};
    }
  `,

  Recaptcha: styled.div`
    width:100%;
    padding:0px 10px;
  `,

  SubmitButton: styled.button`
    font-size: 1.6rem;
    line-height:0;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 1.25em 1.8em;
    border-radius: ${vars.BORDER_RADIUS_1};
    background: ${vars.COLOR_RED_1};
    color: ${vars.COLOR_WHITE_1};
    -webkit-appearance:none;
    transition:
      background-color ${vars.TRANSITION_SETTINGS},
      color ${vars.TRANSITION_SETTINGS};

    &:hover {
      background-color: #ba0000;
      color: ${vars.COLOR_WHITE_1};
    }
  `,

  StatusMessage: styled.div`
    background-color:${props => props.color || vars.FORM_WARNING};
    padding:12px 16px;
    font-size:14px;
    margin-bottom:20px;
    align-items:center;
    display:flex;

    img{
      margin-right:10px;
    }
  `,

}

export default ({name, fields}) => {

  
  return(
    <NetlifyForm
      name={name}
      recaptcha={{
        sitekey: '6Lf-z90UAAAAAESGvDKQSmKgl-DOAaGW6B7VcjjM',
        size: 'normal'
      }}
    >
      {({ loading, error, recaptchaError, success, recaptcha }) => {
        return(
          <div>
            <Styles.StatusWrapper>
            { error && <Styles.StatusMessage color={vars.FORM_WARNING}><img src={FormErrorSVG} /> Your information was not sent. Please try again later.</Styles.StatusMessage> }
            { recaptchaError && <Styles.StatusMessage color={vars.FORM_WARNING}><img src={FormErrorSVG} /> Recaptcha did not match. Please make sure the box is checked.</Styles.StatusMessage> }
            { success && <Styles.StatusMessage color={vars.FORM_SUCCESS}><img src={FormSuccessSVG} /> Thank you for contacting us!</Styles.StatusMessage> }
            </Styles.StatusWrapper>
            {!loading && !success &&
              <Styles.FieldWrapper>
                { fields.map((field, index) => ( 
                    <Field 
                      key={index} 
                      name={field.name} 
                      type={field.type[0]} 
                      label={field.label} 
                      required={field.required} 
                      placeholder={field.placeholder}
                      options={field.options}
                      width={field.width[0]}
                    /> 
                  ))
                }
                <Styles.Recaptcha>{recaptcha}</Styles.Recaptcha>
                <Styles.InputWrapper>
                  <Styles.SubmitButton type="submit">SUBMIT</Styles.SubmitButton>
                  { loading && <BaseActivityIndicator color={vars.COLOR_RED_1} /> }
                </Styles.InputWrapper>
              </Styles.FieldWrapper>
            }
          </div>  
        )
    }}
    </NetlifyForm>
  )
}

const Field = ({name, type, label, required, placeholder, options, width}) => {

  // console.log(name, type, label, required, placeholder, options, width)

  const getWidth = (w) => {

    let width = '100%'

    if(w === 'Full')
      width = '100%'
    
    if(w === 'Half')
      width = '50%'
    
    if(w === 'Third')
      width = '33.33333333333%'

    if(w === 'Quarter')
      width = '25%'
    
    return width

  }

  let input = ''

  switch(type){
    case 'text':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)}>
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
              <Styles.TextInput name={name} type={type} required={required} placeholder={placeholder} />
            </Styles.InputWrapper> 
          )
    break;
    
    case 'long':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)}>
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
              <Styles.TextArea name={name} type={type} required={required} rows="10">{placeholder}</Styles.TextArea>
            </Styles.InputWrapper> 
          )
    break;

    case 'select':
        input = (
          <Styles.InputWrapper width={getWidth(width)}>
            <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
            <Styles.SelectInput name={name} defaultValue={'DEFAULT'} required>
              <option value="DEFAULT" disabled>Please select</option>
              { options.map((option, index) => (<option key={index} value={option}>{option}</option>)) }
            </Styles.SelectInput>
          </Styles.InputWrapper>
        )
    break;
    
    case 'spacer':
        input = (
          <Styles.InputWrapper width={getWidth(width)}>
            <Styles.Spacer />
          </Styles.InputWrapper>
        )
    break;

    default:
      input = ( 
            <Styles.InputWrapper width={getWidth(width)}>
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
              <Styles.TextInput name={name} type={type} required={required} placeholder={placeholder} />
            </Styles.InputWrapper> 
          )
  }

  return input
}