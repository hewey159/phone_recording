import styled, { css, keyframes } from "styled-components";

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(206, 16, 16, 0.5); /* Initial box shadow, fully transparent */
  }
  50% {
    box-shadow: 0 0 2rem 1rem rgba(206, 16, 16, 0.3); /* Semi-transparent glowing effect */
  }
  100% {
    box-shadow: 0 0 0 rgba(206, 16, 16, 0); /* Fully transparent again */
  }
`;

export const InnerCircle = styled.div<{ size: number, color: string, transitionSpeed: number }>`
    width: ${props => props.size}rem; /* Adjust the size of the inner circle */
    height: ${props => props.size}rem; /* Same as width to create a perfect circle */
    border-radius: 50%; /* Sets the border radius to half of the width and height to make it a circle */
    background-color: ${props => props.color}; /* Set the background color of the inner circle to red */
    position: absolute; /* Use absolute positioning to place the inner circle inside the outer circle */
    top: 50%; /* Position the inner circle 50% from the top of the outer circle */
    left: 50%; /* Position the inner circle 50% from the left of the outer circle */
    transform: translate(-50%, -50%);
    transition: all ${props => props.transitionSpeed}s ease-in-out; /* Add transition for smooth animation */
`

export const OutterCircle = styled.div<{ glowing: boolean }>`
    width: 5rem; /* Adjust the size of the outer circle */
    height: 5rem; /* Same as width to create a perfect circle */
    border-radius: 50%; /* Sets the border radius to half of the width and height to make it a circle */
    background-color: #ffffff; /* Set the background color of the outer circle */
    position: relative;
    margin: auto;
    :hover {
        cursor: pointer;
    }
    ${props => props.glowing ? css`
        border-radius: 50%;
        animation: ${glowPulse} 1.5s infinite;    
    ` : ''}    
    

`
export const Square = styled.div<{ size: number }>`
    width: ${props => props.size}rem; /* Adjust the size of the inner circle */
    height: ${props => props.size}rem; /* Same as width to create a perfect circle */
    background-color: #000000; /* Set the background color of the square */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; /* Ensure the square is positioned above the circles */
    transition: all 0.3s ease-in-out; /* Add transition for smooth animation */
`




export const Circle = ({ recording, onClick }: { recording: boolean, onClick: any }) => {

    return (
        <>
            <OutterCircle onClick={() => onClick()} glowing={recording}>
                <InnerCircle transitionSpeed={0.1} size={recording ? 5 : 3.6} color={"#ce1010"} />
                <InnerCircle transitionSpeed={0.3} size={recording ? 5 : 0} color={"#ffffff"} />
                <Square size={recording ? 1.4 : 0} />
            </OutterCircle>
        </>
    )
}