import styled from "styled-components";
import { CgGenderFemale } from "react-icons/cg";
import { IoMdMusicalNote } from "react-icons/io";

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
    border: 3px solid rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    & span {
        font-size: 0.8rem;
        font-weight: 600;
        margin: 0 0.7rem 0;
    }
    & p {
        margin-left: 3px;
        font-size: 0.9rem;
    }
`

const ProfileImage = styled.div`
    margin-top: 0.3rem;
    width: 70%;
    height: 30%;
    border: 2px solid rgba(0, 0, 0, 0.05);
    border-radius: 5px;
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
    & h4, div {
        color: midnightblue;
        margin: 0.3rem 3px 0;
        float: left;
    }
    & div {
        border: 0.5px solid rgba(0, 0, 0, 0.2);
        border-radius: 1px;
        box-shadow: 0px 0px 2px black;
        height: 0.8rem;
        margin-top: 0.7rem;
        & svg {
            width: 0.8rem;
            height: 0.7rem;
            margin: 0;
            padding-bottom: 5px;
            color: goldenrod;
        }
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
                <IoMdMusicalNote />
                <p>즐거움</p>
            </TodayMood>
            <ProfileImage></ProfileImage>
            <Comments>안녕하세요.<br />추억의 싸이월드를<br />참고하여 만든<br />블로그 입니다.</Comments>
            <History>
                <span>History</span>
            </History>
            <Profile>
                <h4>practiceLye</h4>
                <div><CgGenderFemale  /></div>
                <span>fklye0912@gmail.com</span>
            </Profile>
        </ProfileContent>
    );
}

export default ProfileView;