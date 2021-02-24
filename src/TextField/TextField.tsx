import * as React from 'react';

type TextFieldProps = {
  placeholder?: string
  onChange?: () => void;
};
/**
 * 사용자 입력을 받기 위한, TextField 입니다.
 *
 * - **선택** `onChange` 리스너를 지원합니다.
 */
const TextField = ({ onChange, placeholder }:TextFieldProps) => {
  alert('TextField')
  return (
    <input type="text" onChange={onChange} placeholder={placeholder}></input>
  );
};

export default TextField;