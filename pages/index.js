import Image from 'next/image'
import Particles from 'react-tsparticles'
import particlesOptions from '../styles/particles.json'

export default function Home() {
  console.log(`\nMade with ❤️ by neyoa\n\n`)

  return (
    <container>
      <Particles options={particlesOptions} className="z-10" />
      <Image src="/baldperm.png" layout="fill" alt="baldperm" className="App-logo" />
    </container>
  )
}
