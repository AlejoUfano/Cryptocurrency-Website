import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import Bitcoin from '@/assets/Bitcoin.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)') 

  return (
    <section
    id='home'
    className='gap-16 bg-primary-500 py-10 md:h-full md:pb-0'
    >
        {/* IMAGE AND MAIN HEADER */}
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        >
          {/* MAIN HEADER */}
          <div className='z-10 mt-32 md:basis-3/6 md:p-32'>
            {/* HEADINGS */}
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x: 0},
            }}
            className='md:-mt-20'
            >
                <div className='w-max text-white shadow-md text-center font-light items-center flex p-1 pr-3 bg-primary-400 rounded-full'>
                    <div className='rounded-full px-3 py-1 flex font-bold bg-white text-primary-400 mr-2'>75% SAVE</div>
                    For the Black Friday weekend
                </div>
              <p className='mt-8 text-6xl leading-[76px] font-black text-white '>
              Fastest & secure platform to invest in crypto
              </p>
              <p className='mt-8 text-sm text-gray-20 md:w-2/3'>
              Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
              </p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div 
            className='mt-8 flex items-center gap-8 md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x: 0},
            }}
            >
              <ActionButton active={false} setSelectedPage={setSelectedPage}>
                <div className='flex'>
                     <div className='flex'>Try for FREE</div>
                     <div className='ml-5 flex w-6 h-6 bg-white rounded-full items-center justify-center'>
                        <ChevronRightIcon className="flex h-4 w-4 text-primary-100"/>
                     </div>
                </div>
              </ActionButton>
            </motion.div>

          </div>
          {/* IMAGE */}
          <div className='mt-10 flex basis-3/6 justify-center md:z-10 md:mt-32 md:justify-items-end'>
            <img src={Bitcoin} alt="home-pageGraphic"/>
          </div>
            
        </motion.div>
        
    </section>
  )
}

export default index