import { SelectedPage } from '@/types/Enum';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import TitleTextDefaul from '@/components/TitleDefaultText';
import { ClassesType } from '@/types/ClassType';
import Class from '@/components/ClassArea';

const classesItens: Array<ClassesType> = [
    {
        name: "Weight Training Classes",
        description: "Qui laudantium molestias et nihil odit et dolor quae qui blanditiis labore ut ipsum libero et minus eligendi non aliquid culpa!",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Qui laudantium molestias et nihil odit et dolor quae qui blanditiis labore ut ipsum libero et minus eligendi non aliquid culpa!",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Qui laudantium molestias et nihil odit et dolor quae qui blanditiis labore ut ipsum libero et minus eligendi non aliquid culpa!",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Qui laudantium molestias et nihil odit et dolor quae qui blanditiis labore ut ipsum libero et minus eligendi non aliquid culpa!",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }} 
            >
                {/*HEADER*/}
                <div className="md:w-3/5">
                    <TitleTextDefaul>Our Classes</TitleTextDefaul>
                    <p className="py-5">
                    Sed galisum omnis id corrupti reprehenderit et veniam omnis.Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit.
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit Ut enim ad minim veniam, 
                    quis nostrum exercitationem ullam corporis suscipit.
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit
                    </p>
                </div>
            </motion.div>
            {/*SCROLL BAR*/}
            <div className="mt-10 h-[300px] md:h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2300px] md:w-[2800px] whitespace-nowrap">
                    {classesItens.map((item: ClassesType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;