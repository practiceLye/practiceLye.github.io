
const profileContent = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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

function ProfileView(props) {
    return (
        <div style={profileContent}>
            <div style={todayMoodInfo}></div>
            <div style={profileImage}></div>
        </div>
    );
}

export default ProfileView;