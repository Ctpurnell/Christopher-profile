


const title = "Christopher Purnell";

export default function Header({ handlePageChange}) {
  return (
<header className="bg-success text-white">
  <nav className="navbar">
    
      <h1 className="title align-self-center">{title}
      </h1>
        <div className="container-fluid d-flex justify-content-end">
          <a id="AboutMe-btn" className="nav-link fs-3 m-3" onClick={() => handlePageChange('About-Me')} aria-current="page" href="#About-Me">
              About Me 
          </a>
          <a id="Work-btn" className="nav-link fs-3 m-3" onClick={() => handlePageChange('Portfolio')}aria-current="page" href="#Portfolio">
              Portfolio
          </a>
          <a id="Contact-btn" className="nav-link fs-3 m-3" onClick={() => handlePageChange('Contact')} href="#Contact">
              Contact
          </a>
          <a id="Resume-btn" className="nav-link fs-3 m-3" href="https://drive.google.com/file/d/1G_I0x0r3sDMmsUBtiJE9mGbeTpeHOTIb/view?usp=sharing" target='_blank'>
              Resume
              </a>
        </div>
    
  </nav>
</header>
    
  );
}
