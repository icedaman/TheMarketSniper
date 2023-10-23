import CardGeneric from "../ReusableComponents/CardGeneric"
import MeetingTimeLogo from '../assets/meeting_time_thumbnail.jpg'
import JobsLogo from '../assets/jobs_thumbnail.jpg'
import BTCLogo from '../assets/btc_thumbnail.jpg'

export default function LiveTradingSessions() {
  return (
    <div className="w-full min-h-screen container mx-auto py-9 bg-transparent">
      <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-36">
      <CardGeneric title={"sunday sessions"} image={MeetingTimeLogo} description={"join in our sunday market analysis session"} />
      <CardGeneric title={"forex and equities"} image={JobsLogo} description={"Forex and Equities focused Live Session"} />
      <CardGeneric title={"crypto findings"} image={BTCLogo} description={"crypto focused Live Session"} />
      {/* <CardGeneric title={"post mortem"} image={ReviewTimeLogo} description={"extracting the lessons from past wins & losses"} /> */}
      </div>
  </div>
  )
}

