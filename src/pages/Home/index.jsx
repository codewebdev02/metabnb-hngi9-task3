import Banner from "../../components/Banner"
import HomeA from "../../section/Home/HomeA"
import HomeB from "../../section/Home/HomeB"
import HomeC from "../../section/Home/HomeC"
import "./styles.scss"

const Home = ({openModal, setOpenModal}) => {
  return (
    <div>
      <Banner />
      <HomeA />
      <HomeB />
      <HomeC />
    </div>
  )
}

export default Home