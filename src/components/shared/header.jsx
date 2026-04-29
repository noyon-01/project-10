import logo from "@/assets/logo.png"
import Image from "next/image"

export default function Header() {
  return (
    <div className="text-center">
      <Image className="mx-auto" src={logo} alt="logo" width={400} height={100}/>
      <p className="mt-15">Journalism Without Fear or Favour</p>
      <p>Sunday, November 27, 2025</p>
    </div>
  )
}