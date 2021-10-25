import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = (props) => {

    const {
        qty
    } = props;

    return (
        <div style={{ backgroundColor: "yellow" }}>
        <div>
            <Link to="/addPage">더하기페이지로</Link>
        </div>
        <div>
            <Link to="/minusPage">빼기페이지로</Link>
        </div>
        <div>
            메인페이지
        </div>
        <div>
            {"전역 상태 qty 값 = " + qty}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        qty: state.countReducer.qty
    }
}
export default connect(mapStateToProps, null)(Main);