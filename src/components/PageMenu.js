import React, { useState } from 'react';

const PAGES = [
  { number: 1, label: 'Home' },
  { number: 2, label: 'Skills' },
  { number: 3, label: 'SYSystem' },
  { number: 4, label: 'SynapTech' },
  { number: 5, label: 'Projects' },
  { number: 6, label: 'Education' },
  { number: 7, label: 'Contact' },
];

export default function PageMenu({ currentPage, onNavigate }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="page-menu">
      {PAGES.map((page) => (
        <button
          key={page.number}
          className={`page-menu-item ${currentPage === page.number ? 'page-menu-item--active' : ''}`}
          onClick={() => onNavigate(page.number)}
          onMouseEnter={() => setHovered(page.number)}
          onMouseLeave={() => setHovered(null)}
          title={page.label}
          aria-label={`Go to ${page.label}`}
          aria-current={currentPage === page.number ? 'page' : undefined}
        >
          <span className="page-menu-dot" />
          <span className={`page-menu-label ${hovered === page.number || currentPage === page.number ? 'page-menu-label--visible' : ''}`}>
            {page.label}
          </span>
        </button>
      ))}
    </div>
  );
}
