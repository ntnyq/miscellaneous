import * as React from 'react'

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  paginate: (arg0: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate
}) => {
  const pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li className='page-item mx-1' key={number}>
          <a
            onClick={() => paginate(number)}
            href='javascript:;'
            className='page-link'
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
