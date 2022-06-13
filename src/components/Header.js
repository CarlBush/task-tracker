import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title }) {

    const onClick = function () {
        console.log("Click");
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",

}

Header.propTypes = {
    title: PropTypes.string,

}

//CSS in JSX
// const headingStyle = {
//     color: "pink",
//     backgroundColor: "black"
// }

export default Header;