import styled from "@emotion/styled";

export const ModalBackdrop= styled.div`
position:fixed;
top:0;
left:0;
width:100vw;
height:100vh;
background-color: grey;
`


export const ModalItem=styled.div`
position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    min-height:300px;
    max-width:600px;
    width:100%;
    padding:12px;
    background-color:#fff;
`
