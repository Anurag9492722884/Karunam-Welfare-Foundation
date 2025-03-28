import React from 'react'
import Tag from '../components/Tag'
import img1 from '../assets/feed_poor.svg'
import { image2, image3, image4, image5 } from '../assets'
import Donate from '../components/Donate'
import TagB from '../components/TagB'

const Activities = () => {
  const bgStylea = {
    background:
      'linear-gradient(0deg, rgba(136, 22, 136, 0.05), rgba(136, 22, 136, 0.05)), linear-gradient(89.85deg, #FFFFFF -8.35%, #D4B2D9 127.96%)',
  }
  const bgStyleb = {
    background:
      'linear-gradient(269.81deg, #FFFFFF -6.28%, rgba(62, 133, 213, 0.17) 126.62%)',
  }

  return (
    <div
      className='min-h-screen'
      style={bgStylea}>
      {/* Hero section */}
      <div className='flex flex-col space-y-12 max-w-[711px] mx-auto overflow-hidden py-[93px]'>
        <div className='md:flex md:flex-row space-x-3 text-center justify-center'>
          <div className='font-secondary font-bold text-6xl'>Welcome to </div>
          <div className='font-default font-bold text-6xl text-[#881688]'>
            Karunam
          </div>
        </div>
        <div className='text-center overflow-hidden font-default font-normal text-[17px]'>
          Karunam - 'Compassion in Action' is a unique platform that brings
          together different social causes and issues under a single umbrella.
          We are here to fill the invisible gaps—those that are less spoken
          about but deeply felt—because real change begins where others often
          stop looking
        </div>
      </div>

      {/* Tag that overlaps */}
      <div className='transform translate-y-1/2 z-10 relative'>
        <Tag
          color={'#881688'}
          text={'Physical Quotient'}
        />
      </div>

      {/* Section 1: Feed Poor Initiative */}
      <div
        className='md:flex md:flex-row items-center justify-evenly md:px-8'
        style={{ backgroundColor: '#FFFFFF' }}>
        <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
          <div className='flex flex-col w-fit'>
            <div className='md:flex md:flex-row space-x-3 text-center'>
              <div className='font-tertiary font-normal text-5xl'>Feed </div>
              <div
                className='font-default font-normal text-5xl'
                style={{ color: '#83178B' }}>
                Poor Initiative
              </div>
            </div>
            <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
              (Physical Quotient)
            </div>
          </div>
          <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
            We provide nutritious meals to homeless individuals, ensuring that
            no one goes to bed hungry. Through this initiative, we combat hunger
            and bring hope to those in need, fostering a healthier and more
            compassionate society.
          </div>
          <div className='w-[191px]'>
            <Donate />
          </div>
        </div>
        <div>
          <img
            src={img1}
            alt='Feed Poor Initiative'
            style={{
              height: '460px',
              width: '460px',
            }}
          />
        </div>
      </div>

      {/* Section 2: Cloth Aid Program */}
      <div
        className='md:flex md:flex-row-reverse items-center justify-evenly md:px-8'
        style={bgStylea}>
        <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
          <div className='flex flex-col w-fit'>
            <div className='md:flex md:flex-row space-x-3 text-center'>
              <div className='font-tertiary font-normal text-5xl'>Cloth </div>
              <div
                className='font-default font-normal text-5xl'
                style={{ color: '#83178B' }}>
                Aid Program
              </div>
            </div>
            <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
              (Physical Quotient)
            </div>
          </div>
          <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
            We offer warmth and protection by distributing blankets and
            essential clothing to those facing harsh weather conditions. This
            initiative helps vulnerable individuals stay safe and comfortable,
            bringing relief during challenging times.
          </div>
          <div className='w-[191px]'>
            <Donate />
          </div>
        </div>
        <div>
          <img
            src={image2}
            alt='Cloth Aid Program'
            style={{
              height: '405px',
              width: '405px',
            }}
          />
        </div>
      </div>

      {/* Section 3: Women Economic and Social Development with overlapping TagB */}
      <div className='relative'>
        <div
          className='md:flex md:flex-row items-center justify-evenly md:px-8'
          style={{ backgroundColor: '#FFFFFF' }}>
          <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
            <div className='flex flex-col w-fit'>
              <div className='md:flex md:flex-row space-x-3 text-center'>
                <div className='font-tertiary font-normal text-5xl'>Women </div>
                <div
                  className='font-default font-normal text-5xl'
                  style={{ color: '#83178B' }}>
                  Economic and Social Development
                </div>
              </div>
              <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
                (Physical Quotient)
              </div>
            </div>
            <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
              We empower women by providing skill training and resources to help
              them achieve financial independence. Through vocational programs
              and small business initiatives, we support them in building a
              stable and self-sufficient future.
            </div>
            <div className='w-[191px]'>
              <Donate />
            </div>
          </div>
          <div>
            <img
              src={img1}
              alt='Women Economic and Social Development'
              style={{
                height: '360px',
                width: '360px',
              }}
            />
          </div>
        </div>

        {/* Intelligence Quotient tag positioned to overlap with section 4 */}
        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-20'>
          <TagB text={'Intelligence Quotient'} />
        </div>
      </div>

      {/* Section 4: Empowering Education */}
      <div
        className='md:flex md:flex-row-reverse items-center justify-evenly md:px-8 pt-8'
        style={bgStyleb}>
        <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
          <div className='flex flex-col w-fit'>
            <div className='md:flex md:flex-row space-x-3 text-center'>
              <div className='font-tertiary font-normal text-5xl'>
                Empowering
              </div>
              <div
                className='font-default font-normal text-5xl'
                style={{ color: '#135CAF' }}>
                Education
              </div>
            </div>
            <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
              (Intelligence Quotient)
            </div>
          </div>
          <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
            We inspire individuals to lead a meaningful and ethical life through
            engaging discussions on values, principles, and purpose. Our
            sessions encourage integrity, gratitude, and moral strength, helping
            individuals make conscious and responsible choices.
          </div>
          <div className='w-[191px]'>
            <Donate />
          </div>
        </div>
        <div>
          <img
            src={image2}
            alt='Women Economic and Social Development'
            style={{
              height: '405px',
              width: '405px',
            }}
          />
        </div>
      </div>

      {/* Section 5: Skill Training Centres */}
      <div className='relative'>
        <div className='md:flex md:flex-row items-center justify-evenly md:px-8 pt-8 bg-white'>
          <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
            <div className='flex flex-col w-fit'>
              <div className='md:flex md:flex-row space-x-3 text-center'>
                <div className='font-tertiary font-normal text-5xl'>Skill</div>
                <div
                  className='font-default font-normal text-5xl'
                  style={{ color: '#135CAF' }}>
                  Training Centres
                </div>
              </div>
              <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
                (Intelligence Quotient)
              </div>
            </div>
            <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
              We offer hands-on training in essential skills, guided by
              experienced professionals, to help individuals secure better
              career opportunities. Our programs equip youth with the knowledge
              and confidence needed to build a successful future.
            </div>
            <div className='w-[191px]'>
              <Donate />
            </div>
          </div>
          <div>
            <img
              src={image3}
              alt='Women Economic and Social Development'
              style={{
                height: '416px',
                width: '416px',
              }}
            />
          </div>
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-20'>
          <Tag text={'Emotional Quotient'} />
        </div>
      </div>

      {/* Section 6: Mental Wellness Program */}
      <div
        className='md:flex md:flex-row-reverse items-center justify-evenly md:px-8 pt-8'
        style={bgStylea}>
        <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
          <div className='flex flex-col w-fit'>
            <div className='md:flex md:flex-row space-x-3 text-center'>
              <div className='font-tertiary font-normal text-5xl'>Mental</div>
              <div
                className='font-default font-normal text-5xl'
                style={{ color: '#881688' }}>
                Wellness Programs
              </div>
            </div>
            <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
              (Emotional Quotient)
            </div>
          </div>
          <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
            We promote emotional well-being through guided self-care practices,
            stress management sessions, and interactive workshops. These
            programs help individuals develop resilience, maintain balance, and
            navigate life’s challenges with a positive mindset.
          </div>
          <div className='w-[191px]'>
            <Donate />
          </div>
        </div>
        <div>
          <img
            src={image4}
            alt='Women Economic and Social Development'
            style={{
              height: '447px',
              width: '447px',
            }}
          />
        </div>
      </div>

      {/* Section 7: Counselling Support */}
      <div className='relative'>
        <div className='md:flex md:flex-row items-center justify-evenly md:px-8 pt-8 bg-white'>
          <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
            <div className='flex flex-col w-fit'>
              <div className='md:flex md:flex-row space-x-3 text-center'>
                <div className='font-tertiary font-normal text-5xl'>
                  Counselling
                </div>
                <div
                  className='font-default font-normal text-5xl'
                  style={{ color: '#881688' }}>
                  Support
                </div>
              </div>
              <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
                (Emotional Quotient)
              </div>
            </div>
            <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
              We provide a supportive environment where individuals can share
              their struggles and receive guidance from trained professionals.
              Our counseling sessions offer clarity, emotional support, and
              practical solutions to help individuals overcome challenges with
              confidence.
            </div>
            <div className='w-[191px]'>
              <Donate />
            </div>
          </div>
          <div>
            <img
              src={image5}
              alt='Women Economic and Social Development'
              style={{
                height: '470px',
                width: '470px',
              }}
            />
          </div>
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-20'>
          <TagB text={'Spiritual Quotient'} />
        </div>
      </div>

      {/* Section 8: Value Education */}
      <div
        className='md:flex md:flex-row-reverse items-center justify-evenly md:px-8 pt-8'
        style={bgStyleb}>
        <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
          <div className='flex flex-col w-fit'>
            <div className='md:flex md:flex-row space-x-3 text-center'>
              <div className='font-tertiary font-normal text-5xl'>Value</div>
              <div
                className='font-default font-normal text-5xl'
                style={{ color: '#135CAF' }}>
                Education
              </div>
            </div>
            <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
              (Spiritual Quotient)
            </div>
          </div>
          <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
            We inspire individuals to lead a meaningful and ethical life through
            engaging discussions on values, principles, and purpose. Our
            sessions encourage integrity, gratitude, and moral strength, helping
            individuals make conscious and responsible choices.
          </div>
          <div className='w-[191px]'>
            <Donate />
          </div>
        </div>
        <div>
          <img
            src={image2}
            alt='Women Economic and Social Development'
            style={{
              height: '405px',
              width: '405px',
            }}
          />
        </div>
      </div>

      {/* Section 9: Mindfulness Retreat */}
        <div className='md:flex md:flex-row items-center justify-evenly md:px-8 pt-8 bg-white'>
          <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
            <div className='flex flex-col w-fit'>
              <div className='md:flex md:flex-row space-x-3 text-center'>
                <div className='font-tertiary font-normal text-5xl'>Mindfulness</div>
                <div
                  className='font-default font-normal text-5xl'
                  style={{ color: '#135CAF' }}>
                  Retreat
                </div>
              </div>
              <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>
                (Spiritual Quotient)
              </div>
            </div>
            <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>
            We create a peaceful space for self-reflection, meditation, and inner growth. Through guided mindfulness practices, participants cultivate focus, clarity, and a sense of inner harmony, enhancing their overall well-being.
            </div>
            <div className='w-[191px]'>
              <Donate />
            </div>
          </div>
          <div>
            <img
              src={image5}
              alt='Women Economic and Social Development'
              style={{
                height: '470px',
                width: '470px',
              }}
            />
          </div>
        </div>
      </div>
  )
}

export default Activities
