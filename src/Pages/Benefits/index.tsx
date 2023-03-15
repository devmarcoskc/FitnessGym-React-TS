import { SelectedPage } from '@/types/Enum';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import TitleTextDefaul from '../../components/TitleDefaultText';
import { BenefitsTypes } from '@/types/BenefitsType';
import BenefitsArea from '../../components/BenefitsArea';
import { motion } from 'framer-motion';
import DefaultButton from '@/components/DefaultButon';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitsTypes> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet. Sed galisum omnis id corrupti reprehenderit et veniam omnis."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
  }
]

const containerStagger = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-10">

            
          <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
          >
              {/*HEADER*/}
              <motion.div 
                className="md:w-3/5 md:my-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }} 
              >
                <TitleTextDefaul>MORE THAN JUST A GYM</TitleTextDefaul>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, 
                    trainers and classes to get you to your ultimate fitness goals with ease. 
                    We provide true care into each and every member.
                </p>
              </motion.div>
            
            {/*BENEFITS*/}
            <motion.div className="mt-5 md:flex items-center justify-between gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={containerStagger}
            >
              {benefits.map((item: BenefitsTypes, index) => (
                <BenefitsArea
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>

            {/*IMAGE AND DESC*/}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/*IMAGE*/}
              <img className="mx-auto"
                  alt="benefits-page-graphic"
                  src={BenefitsPageGraphic}
              />
              {/*DESC*/}
              <div>
                {/*TITLE*/}
                  <div className="relative">
                      <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity:0, x:50},
                                visible: {opacity:1, x:0}
                            }} 
                          >
                            <TitleTextDefaul>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className="text-primary-500">FIT</span>
                            </TitleTextDefaul>
                          </motion.div>
                      </div>
                  </div>
                {/*DESCRIPT*/}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.5}}
                  transition={{delay:0.2, duration: 0.5}}
                  variants={{
                      hidden: {opacity:0, x:-50},
                      visible: {opacity:1, x:0}
                  }} 
                >
                  <p className="my-5">
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit Ut enim ad minim veniam, 
                    quis nostrum exercitationem ullam corporis suscipit
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit
                  </p>
                  <p className="mb-5">
                  Lorem ipsum dolor sit amet. Sed galisum omnis id corrupti reprehenderit et veniam omnis.
                  </p>
                </motion.div>

                {/*BUTTON*/}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <DefaultButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </DefaultButton>
                  </div>

                </div>

              </div>
            </div>
            
          </motion.div>

    </section>
  )
}

export default Benefits;