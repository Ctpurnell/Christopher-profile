const title = "Christopher Purnell";

export default function Navbar() {
  return (
<header class="bg-success text-white">
  <nav class="navbar navbar-expand-lg border border-secondary bg-gray">
    <div className="container">
      <h1>{title}
      </h1>
        </div>
        <div class="container-fluid d-flex justify-content-end">
          <div id="AboutMe" class="nav-link fs-3 m-2" aria-current="page" href="#">
              About Me 
          </div>
          <div id="Work" class="nav-link fs-3 m-3" aria-current="page" href="#">
              Portfolio
          </div>
          <div id="Contact" class="nav-link fs-3 m-3" href="#">
              Contact
          </div>
          <div id="Resume" class="nav-link fs-3 m-3" href="#">
              Resume
        </div>
    </div>
  </nav>
</header>
    
  );
}
