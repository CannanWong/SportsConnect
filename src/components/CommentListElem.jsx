function CommentListElem ({ comment }) {
  return (
    <div className="card mx-auto" style={{width: "90%"}}> 
    {/* style="width: 18rem;"> */}
      <div className="card-body">
        <blockquote class="blockquote mb-0">
          <p>{comment.text}</p>
          <footer class="blockquote-footer">{comment.user}</footer>
        </blockquote>
      </div>
    </div>
  )
}

export default CommentListElem;