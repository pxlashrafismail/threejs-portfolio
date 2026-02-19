export function Coordination (value, min, max) {
    return {
        value: value,
        min: min,
        max: max
    }
}

export function SocialMedia ({imgSrc, imgAlt}){
    return (
            <div className="social-icon">
                <img src={imgSrc} alt={imgAlt}
                     className="w-1/2 h-1/2" />
            </div>

    )
}


