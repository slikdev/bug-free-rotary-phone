import React, { useState } from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'
import BaseActivityIndicator from '../BaseActivityIndicator/BaseActivityIndicator'
import BaseText1 from '../BaseText1/BaseText1'
import BaseText2 from '../BaseText2/BaseText2'
import { useForm } from 'react-hook-form'

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
    padding-left:50px;
    padding-right:50px;
    border-radius:3px;
    box-shadow:${vars.BOX_SHADOW_2};

    ${up('md')} {
      width:640px;
    }
  `,

  StatusWrapper: styled.div`
    width:100%;
    margin-left:auto;
    margin-right:auto;
    padding:10px;

    ${up('md')} {
      width:600px;
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
  
  CheckInput: styled.input`
    border:2px solid ${vars.COLOR_GRAY_2};
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

export default ({name, fields, title, description}) => {

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const { register, handleSubmit, errors } = useForm()
  const [ loading, setLoading ] = useState(false)

  const onSubmit = data => {
    console.log(data)
    setLoading(true)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": name,
        ...data
      })
    })
    .then((response) => {
      console.log(response)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
    })
  }

  return(
    <Styles.Wrapper>
      <form 
        name={name} 
        data-netlify="true" 
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                register={register}
              /> 
            ))
          }
          <Styles.Recaptcha>
            <div data-netlify-recaptcha="true"></div>
          </Styles.Recaptcha>
          <Styles.InputWrapper>
            <Styles.SubmitButton type="submit">SUBMIT</Styles.SubmitButton>
            { loading && <BaseActivityIndicator color={vars.COLOR_RED_1} /> }
          </Styles.InputWrapper>
        </Styles.FieldWrapper>
      </form>
      {/* <NetlifyForm
        name={name}
        recaptcha={{
          sitekey: '6Lf-z90UAAAAAESGvDKQSmKgl-DOAaGW6B7VcjjM',
          size: 'normal'
        }}
      >
        {({ loading, error, recaptchaError, success, recaptcha }) => {
          return(
            <div>
              <Styles.FormTitleWrapper>
                <BaseText1 text={title} />
                <BaseText2 text={description} />
              </Styles.FormTitleWrapper>
              <Styles.StatusWrapper>
              { error && <Styles.StatusMessage color={vars.FORM_WARNING}><img alt="form-error" src={FormErrorSVG} /> Your information was not sent. Please try again later.</Styles.StatusMessage> }
              { recaptchaError && <Styles.StatusMessage color={vars.FORM_WARNING}><img alt="form-error" src={FormErrorSVG} /> Recaptcha did not match. Please make sure the box is checked.</Styles.StatusMessage> }
              { success && <Styles.StatusMessage color={vars.FORM_SUCCESS}><img alt="form-error" src={FormSuccessSVG} /> Thank you for contacting us!</Styles.StatusMessage> }
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
      </NetlifyForm> */}
    </Styles.Wrapper>
  )
}

const Field = ({name, type, label, required, placeholder, options, width, register}) => {

  let input = ''

  const getWidth = (w) => {

    let width = '100%'

    if(w === 'Full') width = '100%'
    
    if(w === 'Half') width = '50%'
    
    if(w === 'Third') width = '33.33333333333%'

    if(w === 'Quarter') width = '25%'
    
    return width

  }

  switch(type){
    case 'text':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)}>
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
              <Styles.TextInput name={name} type={type} placeholder={placeholder} ref={register({ required: required })} />
            </Styles.InputWrapper> 
          )
    break;
    
    case 'long':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)}>
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
              <Styles.TextArea name={name} type={type} rows="10" ref={register({ required: required })}>{placeholder}</Styles.TextArea>
            </Styles.InputWrapper> 
          )
    break;
    
    case 'checkbox':
      input = ( 
            <Styles.InputWrapper width={getWidth(width)} display="flex">
              <Styles.CheckInput name={name} type={type} placeholder={placeholder} ref={register({ required: required })} />
              <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>   
            </Styles.InputWrapper> 
          )
    break;

    case 'select':
        input = (
          <Styles.InputWrapper width={getWidth(width)}>
            <Styles.InputLabel htmlFor={name}>{label}{(required ? <Styles.RequiredAsterix> *</Styles.RequiredAsterix> : "")}</Styles.InputLabel>
            <Styles.SelectInput name={name} defaultValue={'DEFAULT'} ref={register({ required: required })}>
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
              <Styles.TextInput name={name} type={type} placeholder={placeholder} ref={register({ required: required })} />
            </Styles.InputWrapper> 
          )
  }

  return input
}