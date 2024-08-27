import styled from 'styled-components';

import MenuTab from '../components/MenuTab';
import bgImage from '../assets/pink-7761356_1920.png';
import DiaryContainer from '../components/DiaryContainer';
import ProfileView from './ProfileView';
import ContentView from './ContentView';

const BgImage = styled.div`
    background-image: url(${bgImage});
    width: 100vw;
    height: 100vh;
`

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

const BannerContainer = styled.div`
    background-color: white;
    margin-right: 3%;
    width: 15%;
    height: 90%;
`

function MainView(props) {
    return (
        <BgImage>
            <MainContainer>
                <DiaryContainer
                    visitor={'TODAY 121 | TOTAL. 1555'}
                    title={'블로그 제목'}
                    profile={<ProfileView />}
                    contents={<ContentView />}
                    menus={<MenuTab menu={['홈','다이어리','프로젝트','방명록']} />}
                />
                <BannerContainer></BannerContainer>
            </MainContainer>
        </BgImage>
    );
}

export default MainView;