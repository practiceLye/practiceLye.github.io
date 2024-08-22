import MenuTab from '../components/MenuTab';
import bgImage from '../assets/pink-7761356_1920.png';
import DiaryContainer from '../components/DiaryContainer';
import ProfileView from './ProfileView';

const bgStyle = {
    backgroundImage: `url(${bgImage})`, 
    width: '100vw', 
    height: '100vh'
}

const mainContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center'
}

const bannerContainer = {
    backgroundColor: 'white',
    marginRight: '3%',
    width: '15%',
    height: '90%',
}

function MainView(props) {
    return (
        <div style={bgStyle}>
            <div style={mainContainer}>
                <DiaryContainer
                    visitor={'TODAY 121 | TOTAL. 1555'}
                    title={'블로그 제목'}
                    profile={<ProfileView />}
                    menus={<MenuTab />}
                />
                <div style={bannerContainer}></div>
            </div>
        </div>
    );
}

export default MainView;