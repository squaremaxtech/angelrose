import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

import img1 from "@/public/ladywithdoc.webp"
import img2 from "@/public/ladieshugging.webp"
import img3 from "@/public/coffee.webp"
import img4 from "@/public/ladytalkinginwheelchair.webp"
import img5 from "@/public/morevegetables.webp"

import twoColImg1 from "@/public/wheelchairman.webp"
import twoColImg2 from "@/public/manpressurereading.webp"
import twoColImg3 from "@/public/oxtail.jpg"
import twoColImg4 from "@/public/talking.webp"
import twoColImg5 from "@/public/allsmiling.webp"
import assistiveTech from "@/public/assistiveTech.webp"

import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import ClientCommendments from '@/components/clientCommendments/ClientCommendments'

export default function Page() {
  return (
    <main>
      <section style={{ backgroundColor: "rgb(var(--color1))" }}>
        <div className={styles.gridCont}>
          {[
            {
              image: img1
            },
            {
              image: img2
            },
            {
              image: img3
            },
            {
              image: img4
            },
            {
              image: img5
            }
          ].map((eachImageCont, eachImageContIndex) => {
            let gridLetter = null

            if (eachImageContIndex === 0) {
              gridLetter = "a"
            } else if (eachImageContIndex === 1) {
              gridLetter = "b"
            } else if (eachImageContIndex === 2) {
              gridLetter = "c"
            } else if (eachImageContIndex === 3) {
              gridLetter = "d"
            } else if (eachImageContIndex === 4) {
              gridLetter = "e"
            }

            return (
              <div key={eachImageContIndex} className={styles.gridItem} style={{ gridArea: gridLetter !== null ? gridLetter : "" }}>
                <Image alt='service image' src={eachImageCont.image} fill={true} style={{ objectFit: "cover" }} sizes='(max-width: 600px) 100vw, 50vw' />

                <div className={styles.backdrop} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgb(var(--color4)), transparent, transparent)", zIndex: 1 }}></div>

                {eachImageContIndex === 4 && (
                  <>
                    <h1 className='extraLargeText' style={{ position: "relative", zIndex: 2, color: "rgb(var(--shade2))" }}>Our Services</h1>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className='collapsePadding' style={{ backgroundColor: "rgba(var(--shade4), .8)" }}>
        <TwoColumnLayout image={twoColImg1}
          textCont={(
            <div className={styles.textCont}>
              <h2 id='residential'>Residential Care</h2>

              <p>Care is what we do. Every facility is built with love and every service is delivered with care. Our surroundings are clean, comfortable and safe for our residents.  Our Havendale facility is located in a quiet, up-town residential neighborhood, you can be comfortable that your loved one is safe and secure.</p>
              <p>Our compassionate staff including nurses, nurse&apos;s aides and other caregivers, ensure our residents and their surroundings are well cared for.</p>
              <p>Our rooms accommodate two residents each and there are shared communal spaces including relaxing lawns and gardens for their comfort.</p>
            </div>
          )}
        />
      </section>

      <section className='collapsePadding'>
        <TwoColumnLayout image={twoColImg2} flip={true}
          textCont={(
            <div className={styles.textCont}>
              <h2 id='health'>Health & Wellness</h2>

              <p>Our care teams include nurses & doctors on call.  Our seniors receive regularly scheduled health check-ups and our team will go the extra mile if emergency medical care is needed.</p>
              <p>{"Our nutritionist(s) ensure our meal plans are nutritious and appropriate for our residents' needs.  Our physiotherapist(s) ensure that their mobility needs are adequately met,"}</p>
              <p>We also provide world class equipment such as hospital beds, walkers and wheelchairs.  We see to our residents&apos; comfort, health and overall wellbeing.</p>
            </div>
          )}
        />
      </section>

      <section className='collapsePadding' style={{ backgroundColor: "rgba(var(--shade4), .8)" }}>
        <TwoColumnLayout image={twoColImg3}
          textCont={(
            <div className={styles.textCont}>
              <h2 id='meals'>Home Cooked Meals</h2>

              <p>We provide scrumptious, authentic Jamaican cuisine, including real Jamaican tea and coffee.   Breakfast, lunch and dinner are served daily and residents may also take their snacks for when the munchies hit in between.</p>
            </div>
          )}
        />
      </section>

      <section className='collapsePadding'>
        <TwoColumnLayout image={twoColImg4} flip={true}
          textCont={(
            <div className={styles.textCont}>
              <h2 id='recreation'>Recreational Activities</h2>

              <p>We delight in encouraging our seniors to remain active, vibrant and interested in the world around them.  Our activities include day trips to nearby elder-safe havens such as Hope Gardens.</p>
              <p>We play with our seniors, encouraging joy and laughter.   Games nights are a celebration and there is nothing so joyful as celebrating another year of life. Birthday celebrations are a big deal at Angel Rose Adult Care.</p>
              <p>Our seniors may be in their twilight years, but they still have some &apos;pep in their steps&apos;.  We encourage their engagement, participation and enjoyment.</p>
            </div>
          )}
        />
      </section>

      <section className='collapsePadding' style={{ backgroundColor: "rgba(var(--shade4), .8)" }}>
        <TwoColumnLayout image={twoColImg5}
          textCont={(
            <div className={styles.textCont}>
              <h2 id='assitiive'>Mobility Aids & Assistive Technology</h2>

              <p>We aim to keep our seniors agile and mobile while granting them a sense of independence. Our offerings include comfortable hospital beds for ease of care, as well as, mobility aids and assistive technology like walkers, wheelchairs, and canes, at no additional cost.</p>
              <p>Happy, healthy  elders are a testament to the care and support they receive, allowing them to thrive in our home.</p>

              <Image alt="assitive technology image" width={240} height={240} src={assistiveTech} style={{ objectFit: "contain", justifySelf: "flex-end" }} />
            </div>
          )} />
      </section>

      <section className='minimizePadding' style={{ paddingBlock: "var(--paddingL)", position: "relative", zIndex: 0 }}>
        <ClientCommendments />

        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", backgroundColor: "rgb(var(--shade2))", zIndex: -1 }}></div>

        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "50%", backgroundColor: "rgb(var(--color2))", zIndex: -1 }}></div>
      </section>
    </main>
  )
}

function TwoColumnLayout({ textCont, image, flip }: { textCont: JSX.Element, image: StaticImageData, flip?: boolean }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: flip ? "row-reverse" : "row" }}>
      <div style={{ flex: "1 1 300px", position: "relative", minHeight: "300px" }}>
        <Image alt="lady in chair" src={image} fill={true} style={{ objectFit: "cover" }} />
      </div>

      {textCont}
    </div>
  )
}