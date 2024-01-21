import React from 'react'

export default function Toolbar({ filters, selected, onSelectFilter }) {
  
  return (
    <div>
      {filters.map((filter, index) => (
        <button
          key={index}
          className={filter === selected ? 'button_active' : 'button'}
          onClick={() => onSelectFilter(filter)}
        >
        {filter}
        </button>
          
      ))}
    </div>
)}
