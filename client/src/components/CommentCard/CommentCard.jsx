import dateConvertor from '../../utils'

import deleteIcon from  '../../assets/icons/icon-delete.svg'

import './CommentCard.scss'


//comment block constructor
const CommentCard = ({commentData, handleDelete}) => {
    return(
        <article className="comment__card">
            <div className="comment__avatar"></div>
            <div className="comment__body">
                <p className="comment__user">
                    {commentData.name}
                </p>
                <p className="comment__date">
                    {dateConvertor(commentData.timestamp)}
                    
                </p>
                <p className="comment__text">
                    {commentData.comment}
                </p>
                <img className="comment__delete" src={deleteIcon} alt="delete icon" onClick={()=>handleDelete(commentData.id)}/>
            </div>
        </article>
    )
}

export default CommentCard