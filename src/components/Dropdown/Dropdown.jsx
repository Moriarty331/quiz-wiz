

export const Dropdown = (props) => {
    return (
        <div className="settings-dropdown-container" id={props.id}>
            <ul className='settings-dropdown'>
                {props.children}
            </ul>
        </div>
    )
}

export const DropdownItem = (props) => {
    return (
        <li>{props.name}</li>
    )
}