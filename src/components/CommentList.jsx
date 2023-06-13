import CommentListElem from "./CommentListElem";

function CommentsList(props) {
	if (!props.comments) {
		return <p className="mx-auto">Post anything you want to notify the participants here!</p>
	} else {
		return (
			<div>
				{props.comments.map(item => <div> <CommentListElem comment={item[0]} /> <br/> </div>)}
			</div>
		);
	}	
}

export default CommentsList;