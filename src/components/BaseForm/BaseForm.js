import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'
import BaseActivityIndicator from '../BaseActivityIndicator/BaseActivityIndicator'
import BaseText1 from '../BaseText1/BaseText1'
import BaseText2 from '../BaseText2/BaseText2'
import { useForm } from 'react-hook-form'
import Reaptcha from 'reaptcha'

import SelectArrowDownSVG from '../../assets/img/select-arrow-down.svg'
import FormErrorSVG from '../../assets/img/form-error.svg'
import FormSuccessSVG from '../../assets/img/form-success.svg'
import TickSVG from '../../assets/img/tick.svg'

const Styles = {

  Wrapper: styled.div`
    
  `,

  FormTitleWrapper: styled.div`
    text-align:center;
    padding:20px;
    margin-bottom:20px;
  `,

  FieldWrapper: styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    margin-left:auto;
    margin-right:auto;
    background-color:${vars.COLOR_WHITE_1};
    padding-top:50px;
    padding-bottom:50px;
    padding-left:10px;
    padding-right:10px;
    border-radius:3px;
    box-shadow:${vars.BOX_SHADOW_2};

    ${up('md')} {
      width:640px;
      padding-left:50px;
      padding-right:50px;
    }
  `,

  StatusWrapper: styled.div`
    width:100%;
    margin-left:auto;
    margin-right:auto;
    

    ${up('md')} {
      width:660px;
      padding:10px 10px 0px 10px;
    }
  `,

  InputWrapper: styled.div`
    width:100%;
    padding-top:10px;
    padding-bottom:20px;
    padding-left:10px;
    padding-right:10px;
    display:${ props => props.display || 'block' };

    ${up('md')} {
      width:${props => props.width || '100%'};
    }

    label{
      line-height:18px;
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
    border:2px solid ${props => props.error ? vars.FORM_ERROR : vars.COLOR_GRAY_2};
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
  
  CheckInput: styled.input`
    border:2px solid ${props => props.error ? vars.FORM_ERROR : vars.COLOR_GRAY_2};
    padding:10px;
    width:100%;
    transition:border 0.6s;
    height:48px;
    align-items:center;
    font-size:16px;
    color:${vars.COLOR_BLACK_2};
    margin-right:12px;

    &:focus{
      border:2px solid ${vars.COLOR_BLUE_1};
    }

    &:checked{
      background-image:url(${TickSVG});
      background-repeat:no-repeat;
      background-position:4px 5px;
      background-size:70%;
    }
  `,
  
  TextArea: styled.textarea`
    border:2px solid ${props => props.error ? vars.FORM_ERROR : vars.COLOR_GRAY_2};
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
    border:2px solid ${props => props.error ? vars.FORM_ERROR : vars.COLOR_GRAY_2};
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

  RadioGroup: styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
  `,
  
  RadioButton: styled.div`
    input[type=radio]{
      position: absolute;
      visibility: hidden;
    }

    input[type=radio]:checked ~ label{
      color:${vars.COLOR_RED_1};
      border-color:${vars.COLOR_RED_1};
    }
  `,

  RadioLabel: styled.label`
    border:2px solid ${props => props.error ? vars.FORM_ERROR : vars.COLOR_GRAY_2};
    padding:12px 18px;
    font-size:16px;
    margin:4px;
  `,

  Recaptcha: styled.div`
    width:100%;
    padding:0px 10px;
    margin-bottom:20px;
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

    &:disabled{
      opacity:0.5;
    }
  `,

  StatusMessage: styled.div`
    background-color:${props => props.color || vars.FORM_WARNING};
    padding:12px 16px;
    font-size:14px;
    margin-bottom:0px;
    align-items:center;
    display:flex;

    img{
      margin-right:10px;
    }
  `,

}

export default ({name, fields, title, description}) => {

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const formRef = useRef(null)
  const recaptchaRef = useRef(null)
  const { register, handleSubmit, errors, triggerValidation, formState, reset } = useForm({ mode: 'onChange'})
  const [ loading, setLoading ] = useState(false)
  const [ success, setSuccess ] = useState(false)
  const [ error, setError ] = useState(false)
  const [ recaptcha, setRecaptcha ] = useState(null)

  const handleRecaptcha = value => {
    setRecaptcha(value)
    triggerValidation()
    console.log(formState)
  }

  const onSubmit = data => {
    
    setLoading(true)

    const payload = encode({
      "form-name": name,
      "g-recaptcha-response": recaptcha,
      ...data
    })

    console.log(payload)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload
    })
    .then((response) => {
      setLoading(false)
      setSuccess(true)
      console.log(response)
      window.scrollTo({
        top: formRef.current.offsetTop,
        behavior: 'smooth',
      })
      reset()
      // recaptchaRef.reset()
    })
    .catch(error => {
      setLoading(false)
      setError(true)
      console.log(error)
      window.scrollTo({
        top: formRef.current.offsetTop,
        behavior: 'smooth',
      })
    })
  }

  return(
    <Styles.Wrapper>
      <Styles.FormTitleWrapper  ref={formRef}>
        <BaseText1 text={title} />
        <BaseText2 text={description} />
      </Styles.FormTitleWrapper>
      <Styles.StatusWrapper>
      { error && <Styles.StatusMessage color={vars.FORM_WARNING}><img alt="form-error" src={FormErrorSVG} /> Your information was not sent. Please try again later.</Styles.StatusMessage> }
      { success && <Styles.StatusMessage color={vars.FORM_SUCCESS}><img alt="form-error" src={FormSuccessSVG} /> Thank you for contacting us!</Styles.StatusMessage> }
      </Styles.StatusWrapper>
      <form 
        name={name} 
        data-netlify="true" 
        onSubmit={handleSubmit(onSubmit)}
      >
        <Styles.FieldWrapper>
          { fields.map((field, index) => ( 
              <Field 
                key={index} 
                name={field.name} 
                type={field.type} 
                label={field.label} 
                required={field.required} 
                placeholder={field.placeholder}
                options={field.options}
                width={field.width}
                validation={field.validation}
                register={register}
                error={errors[field.name]}
              /> 
            ))
          }
          <Styles.Recaptcha>
            <Reaptcha
              ref={recaptchaRef}
              sitekey="6Lf-z90UAAAAAESGvDKQSmKgl-DOAaGW6B7VcjjM"
              onVerify={ recaptchaResponse => {
                setRecaptcha(recaptchaResponse)
                triggerValidation()
                console.log(formState.isValid)
              }}
            />
          </Styles.Recaptcha>
          <Styles.InputWrapper>
            <Styles.SubmitButton disabled={!recaptcha || !formState.isValid} type="submit">SUBMIT</Styles.SubmitButton>
            { loading && <BaseActivityIndicator color={vars.COLOR_RED_1} /> }
          </Styles.InputWrapper>
        </Styles.FieldWrapper>
      </form>
    </Styles.Wrapper>
  )
}

const Field = ({name, type, label, required, placeholder, options, width, validation, register, error}) => {

  let input = ''

  const getWidth = (w) => {

    let width = '100%'

    if(w === 'full') width = '100%'
    
    if(w === 'half') width = '50%'
    
    if(w === 'third') width = '33.33333333333%'

    if(w === 'quarter') width = '25%'
    
    return width

  }

  const Validator = (name) => {

    let pattern = null

    if(name === 'phone')
      pattern = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/

    if(name === 'email')  
      pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(name === 'dob')  
      pattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    
    if(name === 'name')  
      pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    
    if(name === 'postcode')  
      pattern = /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/
    
    if(name === 'abn')  
      pattern = /^(\d *?){11}$/
    
    if(name === 'qff')  
      pattern = null

    return pattern

  }

  switch(type){
    case 'text':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)}>
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
              <Styles.TextInput name={name} type={type} error={error} placeholder={placeholder} ref={register({ required: required, pattern: Validator(validation) })} />
            </Styles.InputWrapper> 
          )
    break;
    
    case 'long':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)}>
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
              <Styles.TextArea name={name} type={type} error={error} rows="10" ref={register({ required: required })}>{placeholder}</Styles.TextArea>
            </Styles.InputWrapper> 
          )
    break;
    
    case 'checkbox':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)} display="flex">
              <Styles.CheckInput name={name} type={type} error={error} placeholder={placeholder} ref={register({ required: required })} />
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>   
            </Styles.InputWrapper> 
          )
    break;

    case 'select':
        input = (
          <Styles.InputWrapper width={getWidth(width)}>
            <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
            <Styles.SelectInput name={name} error={error} defaultValue={options[0]} ref={register({ required: required })}>
              { options.map((option, index) => (<option key={index} value={option}>{option}</option>)) }
            </Styles.SelectInput>
          </Styles.InputWrapper>
        )
    break;
    
    case 'radio':
        input = (
          <Styles.InputWrapper width={getWidth(width)}>
            <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
            <Styles.RadioGroup>
              {options.map((option, index) => (
                <Styles.RadioButton key={index}>
                  <input id={`radio-${index}`} type="radio" name={name} value={option} ref={register} defaultChecked={(index < 1) ? true : false} />
                  <Styles.RadioLabel htmlFor={`radio-${index}`}>{option}</Styles.RadioLabel>
                </Styles.RadioButton>
              ))}
            </Styles.RadioGroup>
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
              <Styles.TextInput name={name} type={type} error={error} placeholder={placeholder} ref={register({ required: required, pattern: Validator(validation) })} />
            </Styles.InputWrapper> 
          )
  }

  return input
}