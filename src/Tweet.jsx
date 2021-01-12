import AtCoderIcon from './Images/atcoder.svg'

function Tweet(props) {
    return (
        <div className="tweet">
            <img src={AtCoderIcon}  alt="アイコン"　width="40" height="40"/>
            <div className="body-container">
                <div className="status-display">
                    <a href={props.url}>{props.name}</a>
                </div>
            </div>
        </div>
    );
}

export default Tweet