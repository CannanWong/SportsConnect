import CommentsList from "./CommentList";
import NewComment from './NewComment';

function CommentSection(props) {
  return (
    <div className="container text-left justify-content-around">
      <div className="card">
        <h2 className="card-title mx-4 my-4">Comments</h2>
        <CommentsList comments={props.comments}/>
        <NewComment id={props.id}/>
      </div>
    </div>
  );
}
  
export default CommentSection;