import Slider from "../Slider/Slider";
import Popular from "../Popular/Popular";
import Advantages from "../Advantages/Advantages";
import SectionsWithBtn from "../SectionsWithBtn/SectionsWithBtn";
import Review from "../Review/Review";
import Instagram from "../Instagram/Instagram";

function MainPage(props) {
  const {media} = props
  return (
    <>
      <Slider media={media}/>
      <Popular media={media}/>
      <Advantages/>
      <SectionsWithBtn/>
      <Review media={media}/>
      <Instagram/>
    </>
  )
}

export default MainPage