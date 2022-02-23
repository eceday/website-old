function Accordian(props) {
    
    return (
        <div className="Accordion-shell">
            <button className="Accordion-title">{props.title}</button>
            <div>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Accordian;