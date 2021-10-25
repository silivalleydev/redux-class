import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQty } from '../reducers/count/action';

const AddPage = (props) => {

    const {
        onAddQty,
        qty
    } = props;
    console.log(props);
    return (
        <div style={{ backgroundColor: "green" }}>
        <div>
            <Link to="/main">메인페이지로</Link>
        </div>
        <div>
            <Link to="/minusPage">빼기페이지로</Link>
        </div>
        <div>
            더하기 페이지
        </div>
        <div>
            {"전역 상태 qty 값 = " + qty}
        </div>
        <div>
            <button onClick={onAddQty}>숫자 더하기</button>
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddQty: () => dispatch(addQty()),
    }
}
const mapStateToProps = (state) => {
    return {
        qty: state.countReducer.qty
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
