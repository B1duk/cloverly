import '../style/button.scss';

function Button(props) {
    return (
        <button className={props.class}>
            {props.btn_text}
        </button>

    )
}
Button.defaultProps = {btn_text: "Press F"};


export default Button;