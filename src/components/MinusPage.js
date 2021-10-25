import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { minusQty } from '../reducers/count/action';

const MinusPage = (props) => {

    const {
        onMinusQty,
        qty
    } = props;

    return (
        <div style={{ backgroundColor: "red" }}>
        <div>
            <Link to="/main">메인페이지로</Link>
        </div>
        <div>
            <Link to="/addPage">더하기페이지로</Link>
        </div>
        <div>
            빼기 페이지
        </div>
        <div>
            {"전역 상태 qty 값 = " + qty}
        </div>
        <div>
            <button onClick={onMinusQty}>숫자 빼기</button>
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMinusQty: () => dispatch(minusQty()),
    }
}
const mapStateToProps = (state) => {
    return {
        qty: state.countReducer.qty
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MinusPage);
