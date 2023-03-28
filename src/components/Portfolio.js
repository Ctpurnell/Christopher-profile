
export default function Portfolio () {


    return (
<div className="row work-section">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card lazy-dater">
      <div className="card-body">
        <h2 className="card-title"> The Lazy Dater</h2>
        <p className="card-text">This was the first group project I did, and I must say it is my favorite.</p>
        <a href="https://fdjoss.github.io/The-Lazy-Dater/" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card cartoonify">
      <div className="card-body">
        <h2 className="card-title">Cartoonify Your Pic</h2>
        <p className="card-text">Another group project</p>
        <a href="https://cartoonify-my-pic.herokuapp.com/login" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card jate-thing">
      <div className="card-body">
        <h2 className="card-title">Progressive Web App</h2>
        <p className="card-text">J.A.T.E. is just another text editor I deployed to Heroku.</p>
        <a href="https://module-19-christo.herokuapp.com/" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card employee-track">
      <div className="card-body">
        <h2 className="card-title">Employee Tracker</h2>
        <p className="card-text">Working with MySQL, this .</p>
        <a href="https://github.com/Ctpurnell/employee-tracker" className="btn btn-success">Check it Out!</a>
      </div>
    </div>
  </div>
</div>

    );
}