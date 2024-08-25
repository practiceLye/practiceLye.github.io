import styled from "styled-components";

const ProfileContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TodayMood = styled.div`
    margin-top: 1rem;
    width: 65%;
    height: 5%;
    border: 2px solid rgba(0, 0, 0, 0.05);
`

const ProfileImage = styled.div`
    margin-top: 0.3rem;
    width: 65%;
    height: 33%;
    border: 2px solid rgba(0, 0, 0, 0.05);
`

function ProfileView(props) {
    return (
        <ProfileContent>
            <TodayMood>TODAY IS ...</TodayMood>
            <ProfileImage></ProfileImage>
        </ProfileContent>
    );
}

export default ProfileView;