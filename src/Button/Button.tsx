import * as React from 'react';

export type ButtonProps = {
    children : React.ReactNode
    size?: 'md'|'lg'
    onClick : (e:React.MouseEvent<HTMLButtonElement>)=>void
};

/**
 * 사용자 입력을 위한, Button 입니다.
 *
 * - **필수** `onClick` 리스너를 지원합니다.
 */
const Button = ({children, size, onClick}:ButtonProps) => {
    alert('Button')
    if(size === 'lg'){
        return <button onClick={onClick} style={{width:'100px',height:'100px'}}>{children}</button>;
    }
    return <button onClick={onClick}>{children}</button>;
}


export default Button;