import styled, { css } from "styled-components"

const MainContainer = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

const DiaryCover = styled.div`
    ${(props) => 
        props.isLeft && 
        css`
            margin-left: 3%;
        `}
    background-color: rgba(255, 255, 255, 0.2);
    width: ${(props) => props.isLeft ? '25%' : '70%'};
    height: 90%;
    display: flex;
    align-items: center;
    border: 2px solid rgb(255, 175, 175);
    border-radius: 10px;
    border-right: 0;
`

const DottedOutLine = styled.div`
    background-color: transparent;
    width: ${(props) => props.isLeft ? '90%' : '96%'};
    height: 90%;
    display: flex;
    align-items: center;
    margin-left: auto;
    border: 2px dashed white;
    border-right: 0;
    border-radius: 10px;
`

const DiaryContent = styled.div`
    background-color: #EFF0F4;
    width: ${(props) => props.isLeft ? '98%' : '99%'};
    height: 98%;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.isLeft ? css`
            align-items: center;
            margin-left: auto;
            border: 2px solid rgba(92, 58, 58, 0.1);
            border-right: 0;
        ` : css`
            justify-content: center;
            margin-right: auto;
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-left: 0;
        `
    }
    border-radius: 10px;
`

const VisitorInfo = styled.span`
    margin-top: 1.7rem;
    margin-bottom: 0.2rem;
    font-size: 0.7rem;
`

const ProfileContainer = styled.div`
    background-color: white;
    width: 95%;
    height: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

const BlogSubJect = styled.span`
    margin-left: 0.7rem;
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
`

const ContentContainer = styled.div`
    background-color: white;
    width: 98%;
    height: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
`

function DiaryContainer(props) {
    return (
        <MainContainer>
            <DiaryCover isLeft={true}>
                <DottedOutLine isLeft={true}>
                    <DiaryContent isLeft={true}>
                        <VisitorInfo>{props.visitor}</VisitorInfo>
                        <ProfileContainer>
                            {props.profile}
                        </ProfileContainer>
                    </DiaryContent>
                </DottedOutLine>
            </DiaryCover>
            <DiaryCover isLeft={false}>
                <DottedOutLine isLeft={false}>
                    <DiaryContent isLeft={false}>
                        <BlogSubJect>{props.title}</BlogSubJect>
                        <ContentContainer>
                            {props.contents}
                        </ContentContainer>
                        {props.menus}
                    </DiaryContent>
                </DottedOutLine>
            </DiaryCover>
        </MainContainer>
    );
}

export default DiaryContainer;