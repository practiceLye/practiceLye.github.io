import styled from 'styled-components';

const PostList = styled.div`
    width: 45%;
    float: left;
    & b {
        display: flex;
        align-items: end;
        height: 5%;
        border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
        font-size: 0.9rem;
        color: darksalmon;
        margin-bottom: 5px;
    }
    & li {
        font-size: smaller;
        list-style: none;
        margin-left: 4px;
    }
`

const TotalPost = styled.div`
    width: 50%;
    float: right;
    margin: 0 15px 0;
    & div {
        display: flex;
        align-items: center;
        height: 20px;
        border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
        & span {
            width: 50%;
            padding-left: 5px;
            font-size: smaller;
        }
    }
`

const MiniRoom = styled.div`
    clear: both;
    padding-top: 1rem;
    margin: 0 15px 0 0;
    & p {
        margin: 0 2px 3px;
        color: darksalmon;
        font-weight: 600;
    }
    & div {
        border: 3px solid rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        height: 250px;
    }
`

function HomeView(props) {
    return (
        <div>
            <PostList>
                <b>최근게시물</b>
                <ui>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ui>
            </PostList>
            <TotalPost>
                <div></div>
                <div>
                    <span>다이어리</span>
                    <span>프로젝트</span>
                </div>
                <div>
                    <span>방명록</span>
                </div>
                <div></div>
            </TotalPost>
            <MiniRoom>
                <p>미니룸</p>
                <div />
            </MiniRoom>
        </div>
    );
}

export default HomeView;