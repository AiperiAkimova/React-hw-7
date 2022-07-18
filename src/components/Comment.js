import { dateFormat } from "../helpers/general"
import CommentWrapper from "./CommentWrapper"
import UserInfo from "./UserInfo"

function Comment(props){
    console.log(props.id);
    return(
        <div className="Comment">
            <UserInfo author={props.author} />
            <CommentWrapper className = 'comment'>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{dateFormat(props.date)}</div>
            </CommentWrapper>
          </div>
    )
}

export default Comment 