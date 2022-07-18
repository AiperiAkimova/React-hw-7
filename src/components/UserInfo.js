import Avatar from "./Avatar"
import CommentWrapper from "./CommentWrapper"

function UserInfo(props){
    return(
        <CommentWrapper className="UserInfo">
                <Avatar img={props.author}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </CommentWrapper>
    )
}
export default UserInfo