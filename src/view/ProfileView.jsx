import styled from "styled-components";

const ProfileContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TodayMood = styled.div`
    margin-top: 1.3rem;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 70%;
    height: 5%;
    border: 2px solid rgba(0, 0, 0, 0.05);
    & span {
        font-size: 0.8rem;
        font-weight: 500;
        margin-left: 0.5rem;
    }
`

const ProfileImage = styled.div`
    margin-top: 0.3rem;
    width: 70%;
    height: 30%;
    border: 2px solid rgba(0, 0, 0, 0.05);
`

const Comments = styled.div`
    margin-top: 0.3rem;
    width: 70%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    text-align: center;
`

const History = styled.div`
    display: flex;
    align-items: end;
    width: 70%;
    height: 5%;
    border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
    & span {
        font-size: 0.7rem;
        font-weight: 500;
        margin-left: 0.5rem;
    }
`

const Profile = styled.div`
    width: 70%;
    height: 5%;
    & h4 {
        color: midnightblue;
        margin: 0.3rem 0 0;
    }
    & span {
        font-size: 0.8rem;
        font-weight: 500;
        color: goldenrod;
    }
`

function ProfileView(props) {
    return (
        <ProfileContent>
            <TodayMood>
                <span>TODAY IS ..</span>
            </TodayMood>
            <ProfileImage></ProfileImage>
            <Comments>안녕하세요.<br />추억의 싸이월드를<br />참고하여 만든<br />블로그 입니다.</Comments>
            <History>
                <span>History</span>
            </History>
            <Profile>
                <h4>practiceLye</h4>
                <span>fklye0912@gmail.com</span>
            </Profile>
        </ProfileContent>
    );
}

export default ProfileView;