import React from 'react';

const BodyMain = ({ search, setSearch }) => {
  return (
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <form className="d-flex ms-auto" role="search" onSubmit={e => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default BodyMain;