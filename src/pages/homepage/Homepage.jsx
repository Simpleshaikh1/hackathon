import Criteria from "../../components/banners/criteria/Criteria"
import Faqs from "../../components/banners/faqs/Faqs"
import IntroBanner from "../../components/banners/intro-banner/IntroBanner"
import Partners from "../../components/banners/partners/Partners"
import Privacy from "../../components/banners/privacy/Privacy"
import PrizesAndRewards from "../../components/banners/prizes-and-rewards/PrizesAndRewards"
import RulesGuide from "../../components/banners/rules-banner/RulesGuide"
import TImeline from "../../components/banners/timeline/TImeline"
import GetLinkedTopBanner from "../../components/banners/top-banner/GetLinkedTopBanner"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <GetLinkedTopBanner/>
    <IntroBanner />
    <RulesGuide/>
    <Criteria/>
    <Faqs/>
    <TImeline/>
    <PrizesAndRewards/>
    <Partners/>
    <Privacy/>
    <Footer/>
    </>
  )
}

export default Homepage