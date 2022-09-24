import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

const arrayImg = [
  { img: '/game-1.png', ads: 4, title: 'League Of Legends' },
  { img: '/game-2.png', ads: 8, title: 'Dota 2' },
  { img: '/game-3.png', ads: 3, title: 'Counter Strike Global' },
  { img: '/game-4.png', ads: 9, title: 'Apex Legends' },
  { img: '/game-5.png', ads: 12, title: 'Fortnite' },
  { img: '/game-6.png', ads: 7, title: 'World Warcraft Shadow Lands' }
]

const App = () => {

  return (
    <>
      <div className='max-w-[84rem] flex flex-col items-center ml-auto mr-auto my-20'>
        <div>
          <img src={logoImg} alt="logo" />
        </div>
        <div>
          <h1 className='text-6xl text-white font-black m-20'>
            Seu <span className='text-transparent bg-clip-text bg-gradientText '>duo</span> está aqui.</h1>
        </div>
        <div className='grid grid-cols-6 gap-6'>
          {
            arrayImg.map((item, index) =>
              <a className='relative rounded-lg overflow-hidden' key={index} href="/">
                <img src={item.img} alt={item.title} />
                <div className='w-full pt-16 pb-4 px-4 flex-col bg-gradientBox absolute bottom-0 right-0 left-0'>
                  <strong className='font-bold text-white block'>{item.title}</strong>
                  <span className='text-zinc-300 text-sm block'>{`${item.ads} anúncios`}</span>
                </div>
              </a>)}
        </div>
        <div className='mt-8 pt-1  bg-gradientText self-stretch rounded-lg overflow-hidden'>
          <div className='flex justify-between items-center bg-[#2a2634] self-stretch rounded-md px-8 py-6 m-0 '>
            <div>
              <strong className='text-2xl font-black text-white block'>Não encontrou o seu duo?</strong>
              <span className=' text-zinc-400 text-sm '>Publique um anúncio para encontrar novos players.</span>
            </div>
            <div className='inline-flex'>
              <button className=' inline-flex items-center gap-3 py-3 px-4 rounded bg-violet-500 hover:bg-violet-700 text-white'>
                <MagnifyingGlassPlus size={20} />
                Publicar anúncio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
