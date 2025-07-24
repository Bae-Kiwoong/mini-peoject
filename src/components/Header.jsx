import React from 'react';

const Header = () => {
 
  return (

   <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyBlog</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">글 목록</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">새 글 쓰기</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">로그인</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default Header;