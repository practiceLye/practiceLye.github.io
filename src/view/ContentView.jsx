import styled from 'styled-components';
import HomeView from './menu/HomeView';

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 1.5rem 1rem;
    box-sizing: border-box;
`

const Scrollbar = styled.div`
    height: 100%;
    overflow-y: scroll;
    padding: 0 10px 0;
`

function ContentView(props) {
    return (
        <MainContainer>
            <Scrollbar>
                <HomeView />
            </Scrollbar>
        </MainContainer>
    );
}

export default ContentView;