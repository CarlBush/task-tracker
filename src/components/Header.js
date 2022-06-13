import PropTypes from "prop-types";

function Header({ title }) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
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