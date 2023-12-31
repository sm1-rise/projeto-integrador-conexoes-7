import styled from 'styled-components';

export const HeaderStyled = styled.header`
    background-color: #556FF5;
`
export const Container = styled.div`
    width:1200px;
    max-width:100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled.nav`
    ul{
        list-style:none;
        padding 0;
        display: flex;
        justify-content: space-around;
        align-items:center;

        li{
            padding: 10px;
            a:any-link{
                color:#fff;
                text-decoration:none;
                position: relative;

                &:hover {
                    &::after {
                        content: '';
                        position: absolute;
                        bottom: -5px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #fff;
                    }    
                
                    &:hover {
                        &::after {
                            width: 100%; /* Aumenta a largura ao passar o mouse */
                        }
        }
    }
}
`;