import type { NextPage } from 'next'
import {
  NavBar,
  Header,
  Rooms,
  Offerings,
  Gallery,
  Message,
  Deals,
  Footer,
  Nav,
} from '../components/index'

const Home: NextPage = () => {
  return (
    <div className=" bg-gray-200 text-gray-700">
      <NavBar />
      <Header />
      <Rooms />
      <Offerings />
      <Gallery />
      <Message />
      <Deals />
      <Footer />
    </div>
  )
}

export default Home
