import seta from "../assets/images/seta_play.png"
import rightIcon from "../assets/images/icone_certo.png"
import errorIcon from "../assets/images/icone_erro.png"
import almostIcon from "../assets/images/icone_quase.png"

function Icon ({status}) {
    return (
        <>
            {status == "no status" && <img src={seta} alt="seta"  />}
            {status == "right" && <img src={rightIcon} alt="right icon" />}
            {status == "almost" && <img src={almostIcon} alt="almost icon" />}
            {status == "error" && <img src={errorIcon} alt="error icon" />}
        </>
    )
}

export default Icon;