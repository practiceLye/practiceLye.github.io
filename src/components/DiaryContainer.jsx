
const diaryContainer = {
    width: '85%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center'
}

const coverLeft = {
    marginLeft: '3%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '25%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid rgb(255, 175, 175)',
    borderRadius: '10px',
    borderRight: 0,
}

const coverRight = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '70%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid rgb(255, 175, 175)',
    borderRadius: '10px',
    borderLeft: 0,
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
    border: '2px solid rgba(92, 58, 58, 0.1)',
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

function DiaryContainer(props) {
    return (
        <div style={diaryContainer}>
            <div style={coverLeft}>
                <div style={dottedOutLineLeft}>
                    <div style={diaryLeft}>
                        <span style={visitorInfo}>{props.visitor}</span>
                        <div style={profileContainer}>
                            {props.profile}
                        </div>
                    </div>
                </div>
            </div>
            <div style={coverRight}>
                <div style={dottedOutLineRight}>
                    <div style={diaryRight}>
                        <span style={blogSubJect}>{props.title}</span>
                        <div style={contentContainer}>
                            {props.contents}
                        </div>
                        {props.menus}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiaryContainer;