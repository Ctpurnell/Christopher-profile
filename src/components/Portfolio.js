
export default function Portfolio () {

// document.querySelector(".work-section").style="display: none"
    return (
<div className="row work-section">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card lazy-dater">
      <div className="card-body">
        <h5 className="card-title"> The Lazy Dater</h5>
        <p className="card-text">This was the first group project I did, and I must say it is my favorite.</p>
        <a href="#" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Cartoonify Your Pic</h5>
        <p className="card-text">Another group project</p>
        <a href="#" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Progressive Web App</h5>
        <p className="card-text">J.A.T.E. is just another text editor I deployed to Heroku.</p>
        <a href="#" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Employee Tracker</h5>
        <p className="card-text">Working with MySQL, this .</p>
        <a href="#" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
</div>

    );
}