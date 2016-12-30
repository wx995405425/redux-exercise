//容器组件 类似于WinForm中的负责业务逻辑的部分
import { connect } from 'react-redux'
import Link from '../components/Link.js';
import {setVisibilityFilter} from '../actions'

//将容器组件的属性和方法映射到展示组件
//mapStateToProps ----> active
//mapDispatchToProps ----> onClick
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);//将映射设好的属性和方法传递给展示组件，生成新的容器组件FilterLink

export default FilterLink;
