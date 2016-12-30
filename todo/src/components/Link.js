import React, { PropTypes } from 'react';
//展示组件，类似于WinForm中的design.cs

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,//来自容器组件
  children: PropTypes.node.isRequired,//来this.props.children
  onClick: PropTypes.func.isRequired//来自容器组件
}

export default Link