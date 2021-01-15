import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(totalPosts / postsPerPage);
    index += 1
  ) {
    pageNumbers.push(index);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(index => (
          <li key={index} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={event => {
                event.preventDefault();
                return paginate(index);
              }}
            >
              {index}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
