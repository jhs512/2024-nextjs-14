import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleRight";

export default function Home() {
  return (
    <div className="text-blue-500">
      <h1>홈 페이지!!!???123213213!!!</h1>
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
      <img src="/img/logo_1.jpg" />
      <video src="/video/video_1.mp4" autoPlay muted loop />
    </div>
  );
}
