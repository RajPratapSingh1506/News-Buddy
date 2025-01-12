import React from 'react';

const Navbar = ({setCategory}) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News Buddy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setCategory("technology")} href="#">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setCategory("business")} href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setCategory("health")} href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setCategory("sports")} href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setCategory("entertainment")} href="#">Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;
