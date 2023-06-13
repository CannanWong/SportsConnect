import CommentListElem from "./CommentListElem";

function CommentsList(props) {
	if (!props.comments) {
		return <p className="mx-auto">Post anything you want to notify the participants here!</p>
	} else {
		return (
			<div>
				{props.comments.sort((a,b)=> {
					const aTime = b[0].timestamp == null ? Number.MAX_VALUE : b[0].timestamp.seconds
					const bTime = a[0].timestamp == null ? Number.MAX_VALUE : a[0].timestamp.seconds
					return aTime - bTime})
					.map(item => <div> <CommentListElem comment={item[0]} /> <br/> </div>)}
			</div>
		);
	}	
}

export default CommentsList;