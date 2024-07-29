import MenuTabs from '../components/MenuTabs';
import bgImage from '../assets/pink-7761356_1920.png';

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

const coverLeft = {
    marginLeft: '3%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '20%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid rgb(255, 175, 175)',
    borderRadius: '10px',
    borderRight: 0,
}

const coverRight = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '55%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid rgb(255, 175, 175)',
    borderRadius: '10px',
    borderLeft: 0,
}

const bannerContainer = {
    backgroundColor: 'white',
    marginLeft: '3%',
    width: '17%',
    height: '90%',
}

const dottedOutLineLeft = {
    backgroundColor: 'transparent',
    width: '90%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    border: '2px dashed white',
    borderRight: 0,
    borderRadius: '10px'
}

const dottedOutLineRight = {
    backgroundColor: 'transparent',
    width: '96%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
    border: '2px dashed white',
    borderLeft: 0,
    borderRadius: '10px'
}

const diaryLeft = {
    backgroundColor: '#EFF0F4',
    width: '98%',
    height: '98%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRight: 0,
    borderRadius: '10px'
}

const diaryRight = {
    backgroundColor: '#EFF0F4',
    width: '99%',
    height: '98%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderLeft: 0,
    borderRadius: '10px'
}

const visitorInfo = {
    marginTop: '1.7rem',
    marginBottom: '0.2rem',
    fontSize: '0.7rem',
}

const profileContainer = {
    backgroundColor: 'white',
    width: '95%',
    height: '88%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
}

const todayMoodInfo = {
    marginTop: '1rem',
    width: '65%',
    height: '5%',
    border: '2px solid rgba(0, 0, 0, 0.05)',
}


const profileImage = {
    marginTop: '0.3rem',
    width: '65%',
    height: '33%',
    border: '2px solid rgba(0, 0, 0, 0.05)',
}

const blogSubJect = {
    marginLeft: '0.7rem',
    marginBottom: '0.2rem',
    fontSize: '1.2rem',
}

const contentContainer = {
    backgroundColor: 'white',
    width: '98%',
    height: '88%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    position: 'relative'
}

const menus = {
    position: 'absolute',
    width: '60px',
    height: '400px',
    top: '19%',
    right: '23%'
}

function MainView(props) {
    return (
        <div style={bgStyle}>
            <div style={mainContainer}>
                <div style={coverLeft}>
                    <div style={dottedOutLineLeft}>
                        <div style={diaryLeft}>
                            <span style={visitorInfo}>TODAY 121 | TOTAL. 1555</span>
                            <div style={profileContainer}>
                                <div style={todayMoodInfo}></div>
                                <div style={profileImage}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={coverRight}>
                    <div style={dottedOutLineRight}>
                        <div style={diaryRight}>
                            <span style={blogSubJect}>블로그 제목</span>
                            <div style={contentContainer}></div>
                            <div style={menus}>
                                <MenuTabs />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={bannerContainer}></div>
            </div>
        </div>
    );
}

export default MainView;