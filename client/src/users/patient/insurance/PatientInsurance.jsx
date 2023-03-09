
import { InsuranceCard } from "./InsuranceCard"
import {PatientSidebar} from "../../../components/PatientSidebar";
import {Topbar} from "../../../components/Topbar";
import {Footer} from "../../../components/Footer";

export const PatientInsurance = () => {
    return (
        <>
            <div className="flex h-screen">
            <PatientSidebar />
                <div className="w-full">
                    <Topbar title="Insurance"/>
            <div className="p-7">
                    <div className="grid 4k-screen:grid-cols-4 laptop-large-screen:grid-cols-3 tablet-screen:grid-cols-1 items-center justify-center">
                        <InsuranceCard
                            title="PM - JAY"
                            link="https://mera.pmjay.gov.in/search/login"
                            imgSrc="https://www.dailyexcelsior.com/wp-content/uploads/2021/09/pmjay.jpg"
                        />
                        <InsuranceCard
                            title="STAR HEALTH"
                            link="https://www.starhealth.in/"
                            imgSrc="https://assets.sentinelassam.com/h-upload/2021/10/21/1600x960_262259-star.jpg"
                        />
                        <InsuranceCard
                            title="ADITYA BIRLA CAPITAL"
                            link="https://www.adityabirlacapital.com/healthinsurance/homepage"
                            imgSrc="https://seeklogo.com/images/A/aditya-birla-capital-logo-D65E6BF098-seeklogo.com.png"
                        />
                        <InsuranceCard
                            title="BAJAJ ALLIANZ"
                            link="https://www.bajajallianz.com/health-insurance-plans/health-insurance-infinity-plan.html"
                            imgSrc="https://images.moneycontrol.com/static-mcnews/2017/07/Bajaj-Allianz-Insurance-Logo-e1500914200739.jpg?impolicy=website&width=1600&height=900"
                        />
                        <InsuranceCard
                            title="ICICI LOMBARD"
                            link="https://www.icicilombard.com/health-insurance"
                            imgSrc="https://yt3.ggpht.com/vPPqGWRhlGmEBvp3Xj8XxTpHlfRF6-VhqJnfdLyxpdDyAcnsYTsXSrcpZnQvQbg7a54g7xpj=s900-c-k-c0x00ffffff-no-rj"
                        />
                        <InsuranceCard
                            title="RELIANCE"
                            link="https://www.reliancegeneral.co.in/Insurance/Health-Insurance.aspx"
                            imgSrc="https://www.thestatesman.com/wp-content/uploads/2018/07/Reliance.jpg"
                        />
                        <InsuranceCard
                            title="ORIENTAL"
                            link="https://orientalinsurance.org.in/health-insurance"
                            imgSrc="https://play-lh.googleusercontent.com/zCVSgNr3hJiaG_akrMYo0gTFfTUw9RVOitlNr94Dsgfw4W1Wwwqup_Y1A9d0FfbBYDE"
                        />
                        <InsuranceCard
                            title="HDFC ERGO"
                            link="https://www.hdfcergo.com/"
                            imgSrc="https://pbs.twimg.com/profile_images/897678845150601216/NnMXmVVA_400x400.jpg"
                        />
                        <InsuranceCard
                            title="IFCO TOKIO"
                            link="https://www.iffcotokio.co.in/health-insurance"
                            imgSrc="https://content3.jdmagicbox.com/comp/muzaffarpur/w5/9999px621.x621.170918134718.e5w5/catalogue/iffco-tokio-general-insurance-company-limited-muzaffarpur-ho-muzaffarpur-1r5jdp4.jpg"
                        />
                        <InsuranceCard
                            title="ROYAL SUNDARAM"
                            link="https://mera.pmjay.gov.in/search/login"
                            imgSrc="https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/59/e3/e1/59e3e13a-2909-8d99-3fe6-7d29ba28eb20/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
                        />
                        <InsuranceCard
                            title="EDELWEISS"
                            link="https://www.edelweissinsurance.com/health-insurance"
                            imgSrc="https://assets1.cleartax-cdn.com/clearsave/images/1599738267_edelweiss_mf_v4.png"
                        />
                        <InsuranceCard
                            title="TATA AIG"
                            link="https://www.tataaig.com/health-insurance"
                            imgSrc="https://play-lh.googleusercontent.com/4zn59Fe56sUtF9Wx86QKK-wvFew153vwVuZwbsdkYYzgUsyOqHdwAX8jzZ7SNgz0PiE=w600-h300-pc0xffffff-pd"
                        />
                        <InsuranceCard
                            title="KOTAK MAHINDRA"
                            link="https://www.kotak.com/en/personal-banking/insurance/health-insurance.html"
                            imgSrc="https://store-images.s-microsoft.com/image/apps.30333.9007199266679433.2c874489-4dde-4eee-90e3-281f6a05252f.3e9b4517-0e8a-4248-9dd6-9e8b26859584?mode=scale&q=90&h=300&w=300"
                        />
                        <InsuranceCard
                            title="FUTURE GENERALI"
                            link="https://general.futuregenerali.in/health-ins"
                            imgSrc="https://businessfortnight.com/wp-content/uploads/2022/03/Future-Generali-India-Insurance-Co.-Ltd.-1200x628-1.jpg"
                        />
                        <InsuranceCard
                            title="SBI"
                            link="https://www.sbigeneral.in/health-insurance/family-medical-insurance"
                            imgSrc="https://cdn.kalingatv.com/wp-content/uploads/2020/11/SBI.jpg"
                        />
                        <InsuranceCard
                            title="NATIONAL INSURANCE"
                            link="https://nationalinsurance.nic.co.in/en/health-insurance"
                            imgSrc="https://www.medindia.net/patients/insurance/images/national-insurance.jpg"
                        />
                </div>
            </div>
            </div>
                </div>
            <Footer />
        </>
    )
}