import backImageSrc from '../assets/images/dragon-ball-cover.jpg';

function BackCard() {
    return (
        <div className="back">
            <img
                className="card-image"
                src={backImageSrc}
                alt="Dragon Ball Z Cover"
            />
        </div>
    );
}

export default BackCard;
