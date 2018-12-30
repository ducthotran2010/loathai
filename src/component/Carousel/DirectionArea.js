import styled from 'styled-components';

export const LeftArea = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    left: 0px;
    z-index: 9;
`;
export const RightArea = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    right: 0px;
    z-index: 9;
`;

export default styled.div`
    position: relative;
    height: 100%;
`;
