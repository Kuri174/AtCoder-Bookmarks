import Icon from './Images/atcoder.svg'

function Tweet(props) {
    return (
        <div className="tweet">
            <img src={Icon}  alt="アイコン"　width="40" height="40"/>
            <div className="body-container">
                <div className="status-display">
                    <a href={props.url}>{props.problemName}</a>
                </div>
                <div className="content">{props.content}</div>
            </div>
        </div>
    );
}

export default Tweet