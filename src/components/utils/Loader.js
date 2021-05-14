import styled from 'styled-components'

const Loader = ()=>{
    return(
        <StyledLoader>
            <div></div>
            <div></div>
        </StyledLoader>
    )
}

const StyledLoader = styled.div`
  width: 100%;
  /* height: 100%; */
  position: relative;
  div{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 80px !important;
      width: 80px !important;
      border-radius: 50%;
      border: 10px solid transparent;
      border-top-color: #6d6565; 
      animation: spinnerOne 1s linear infinite;
  }
  div:nth-child(2){
    border: 10px solid transparent;
    border-bottom-color: #6d6565;
    animation: spinnerTwo 1s linear infinite;
  }

  @keyframes spinnerOne {
      0%{ transform: rotate(0deg) ; border-width: 10px; }
      50%{ transform: rotate(180deg) ; border-width: 4px; }
      100%{ transform: rotate(360deg) ; border-width: 10px; }
  }
  @keyframes spinnerTwo {
      0%{ transform: rotate(0deg) ; border-width: 4px; }
      50%{ transform: rotate(180deg) ; border-width: 10px; }
      100%{ transform: rotate(360deg) ; border-width: 4px; }
  }
`

export default Loader 