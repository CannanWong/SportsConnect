function CommentListElem ({ comment }) {
  var dateStr = ""
  if (comment.timestamp) {
    dateStr = new Date(comment.timestamp.seconds*1000).toString().match(new RegExp('.{1,' + 21 + '}', 'g'))[0]
  }
  return (
    <div className="card mx-auto" style={{width: "90%"}}> 
    {/* style="width: 18rem;"> */}
      <div className="card-body">
        <blockquote class="blockquote">
          <h5 className="text-right me-auto">{comment.text}</h5>
          <figure class="text-end">
            <footer class="blockquote-footer">{comment.user} <br/><cite title="time"> {dateStr} </cite></footer>
          </figure>
        </blockquote>
      </div>
    </div>
  )
}

export default CommentListElem;