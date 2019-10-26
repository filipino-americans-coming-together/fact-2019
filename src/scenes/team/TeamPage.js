import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import Footer from '../../components/Footer'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import TeamMember from './TeamMember'

const TeamPage = () => (
  <Layout style={{ paddingTop: '10vh'}}>
    <Section>
      <Section.Title>Team</Section.Title>
      <Section.Body>
        <Container>
          <Col xs={12} md={{ span: 10, offset: 1}} className='mb-5' >
            <Image 
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              style={{ borderRadius: '1em'}} 
              src={`${process.env.PUBLIC_URL}/img/fact-pack/team.jpeg`} 
              fluid />
          </Col>
          <hr className='col-xs-8 offset-cs-2 col-sm-6 offset-sm-3 p-3'/>
          <TeamMember
            name='Anthony Mendez'
            position='Co-Coordinator'
            year='Senior'
            major='Chemical Engineering'
            bio='Anthony Mendez is currently a Senior at the University of Illinois at Urbana-Champaign and a third-year board member of UIUC&apos;s Philippine Student Association. Growing up as biracial (Mexican &amp; Filipino), it wasn&apos;t until his Freshman year of High School that he truly started to connect with his Filipino roots by joining a Filipino dance group. From then on, he learned how to embrace both sides of his cultural background. 7 years later, he seeks to give others the same opportunity as well with this year&apos;s FACT conference; not just for Filipinos, but for delegates of every culture to connect with their roots. Overall, he hopes that FACT will be a time for delegates to discover how to understand and themselves.'
            imageURL='/img/fact-pack/Anthony.jpeg'
          />
          <TeamMember
            name='Denzel Cruz'
            position='Co-Coordinator'
            year='Senior'
            major='Bioengineering'
            bio='Denzel has loved being part of the University of Illinois at Urbana-Champaign&apos;s Philippine Student Association as a former Webmaster and FACT Pack Hospitality Chair. He spent the summer at the University of Nebraska Medical Center as part of their MD-PhD Summer Undergraduate Research Program and will be presenting his research at the Biomedical Engineering Society Annual Meeting this October 16-19. Denzel recently took the MCAT (Medical College Admissions Test) for the second time and increased his scores in all four sections. He plans to do research at the National Institutes of Health for a year before applying to MD-PhD programs. Denzel aspires to become a physician scientist, forming a safe and welcoming health clinic for Filipino-Americans and addressing the health concerns within this population. He can&apos;t wait to meet more people and for the delegates to have a great time at FACT!'
            imageURL='/img/fact-pack/Denzel.jpeg'
          />
          <TeamMember 
            name='Erika Marie Saligan'
            position='Co-Coordinator'
            year='Senior'
            major='Integrative Biology'
            bio='Erika Marie Saligan is a senior studying Integrative Biology with a certificate in Global Health. She was born in Ozamiz City, Philippines and moved to Urbana, Illinois with her family in 2006. Growing up, she saw her family&apos;s involvement in the local Filipino-American community and she was in awe when she found out there was the Philippine Student Association (PSA) at UIUC. Since her freshman year, she has pursued various leadership roles in PSA, as she was past Awareness Co-Chair and President and now FACT Co-Coordinator. She is also a member of Kappa Phi Lambda Sorority, Inc. and the Poy Health and Wellness Intern at the Asian American Cultural Center on campus. She has loved every second of her involvement in the Asian American community, where she has learned the importance of teamwork and leadership. During her free time, she enjoys listening to Korean pop music, using her bullet journal, and spending time with her family and friends. She is looking forward to meeting you all at FACT!!!'
            imageURL='/img/fact-pack/Erika.jpeg'
          />

          <TeamMember
            name='Alpri Else'
            position='Information Technology'
            year='Junior'
            major='Computer Science'
            bio='Alpri is passionate about creating technology in the interest of solving people&apos;s problems. He&apos;s currently taking the semester off to work as a Frontend Software Engineer for a tech company in Boston that helps thousands of organizations grow better. In his free time, he&apos;s developed applications to help professors teach more effectively, aid students better find courses that align with their interests and career goals, and helped organize the largest student-run technology conference in the Midwest. To relax, Alpri loves watching Netflix, drinking boba, and exploring new places, always bringing his Sony a6500 to take pictures. He&apos;s excited to grab some Latea and talk about Stranger Things and Black Mirror with delegates going to FACT 2019!'
            imageURL='/img/fact-pack/Alpri.jpeg'
          />
          <TeamMember 
            name='Caitlyn Anonuevo'
            position='TeamFACT Manager'
            year='Junior'
            major='MCB'
            bio='Caitlyn Anonuevo is currently a Junior at the University of Illinois at Urbana-Champaign, and she is very excited for this upcoming FACT conference. As past Philanthropy Chair, Caitlyn has enjoyed giving back to the Philippine Student Association by attending events and by acting as co-TeamFACT manager. Joining this organization, Caitlyn has realized the importance of educating herself on her Filipino roots and maintaining this connection throughout her life. Caitlyn&apos;s cultural experiences have taught her the importance of cultural inclusion and activism. Caitlyn hopes to be an active agent for FACT delegates, encouraging them to welcome diversity and embrace the differences that arise from people with varying backgrounds. In addition to UIUC&apos;s PSA, Caitlyn is a cardiovascular ICU volunteer at the Carle Foundation Hospital, and she is a research assistant for a pathobiology lab. In her free time, Caitlyn likes to bingewatch Netflix and spend time with her friends on campus. She will always be down to eat, whether it be AYCE sushi/kbbq or tacos from a local taco truck. To balance her cravings, she enjoys lifting weights at the gym. Caitlyn looks forward to meeting new people from all over the Midwest and the overall experience of FACT 2019!'
            imageURL='/img/fact-pack/Caitlyn.jpeg'
          />
          <TeamMember
            name='Carmel Bumaa'
            position='Marketing'
            year='Junior'
            major='Advertising'
            bio='Carmel is excited for FACT this year because it’s a weekend filled with fun! She is hoping to talk to new people and relieve stress from school. She also enjoyed her position with her co-chair, Sonica! In her free time, she likes to eat, sleep, listen to music, watch movies, and travel. Her favorite color is pink and her favorite animated character is eeyore. :) '
            imageURL='/img/fact-pack/Carmel.jpeg'
          />
          <TeamMember
            name='David Ko'
            position='Media'
            year='Senior'
            major='Molecular Cell Biology'
            bio='David has been a part of UIUC’s PSA since his freshman year; former Athletic chair and a performer for Barkada of FACT 2018. Over the summer he interned at his father’s pharmaceutical company and took the DAT (Dental Admissions Test), placing in the top 0.1% in the nation. Now in his final year of college, he spends a lot of time alone in the library studying for his classes while he gets ready to leave for Dental school the next fall. David is currently an active brother of Lambda Phi Epsilon fraternity on campus, and likes to “destress” with his bros on the weekends. In his free time he likes to lift weights casually, but stopped serious bodybuilding due to a permanent spinal condition. His goal in the future is to own a dental practice and start a Research &amp; Development company to further improve and distribute dental technology.'
            imageURL='/img/fact-pack/David.jpeg'
          />
          <TeamMember 
            name='Emily Oh'
            position='Variety Show Coordinator'
            year='Junior'
            major='Education Major and Communication Minor'
            bio='Emily&apos;s passion and joy in life is to teach the youngins and seeing each and everyone of her students grow in different ways. She is currently a junior teaching second graders at Kenwood Elementary School. Emily desires to become a traveling teacher and part take in multiple non-profit organizations that requires her to travel to third world countries and teach the students who does not have opportunity to do so. Emily is juggling working, studying, and being a sister of Alpha Phi Gamma along with her duties of being v-show coordinator. In her free time, she loves to hibernate by watching Black Mirror, sleeping, exercising, and going on long walks. She is STOKED to meet new people and see how FACT this year will benefit each individuals :) '
            imageURL='/img/fact-pack/Emily.jpeg'
          />
          <TeamMember
            name='Jasmine Cuasay'
            position='Hospitality'
            year='Junior'
            major='Economics'
            bio='Jasmine spent the past two years in a major that made her feel like 😭🥺😣 everyday and now that she’s switching into econ, she feels like 🥰☺️🙈 ! She loves PSA with all her ❤️ and doesn’t know where she’d be without it. When she’s not with PSA, Jasmine enjoys cuddling up with her adorable boxador who she loves the most in the world, Maizy! Jasmine is also a big foodie- get her a big bowl of chirashi sushi or a nice medium rare steak and she’ll love you 5ever. She’s a little shy so please be kind when you meet her at FACT 2019 (๑❛ᴗ❛๑)'
            imageURL='/img/fact-pack/Jasmine.jpeg'
          />
          <TeamMember 
            name='Molly Wong'
            position='Hospitality'
            year='Junior'
            major='Molecular and Cellular Biology '
            bio='Molly has been involved with UIUC&rsquo;s Philippine Student Association since her freshman year and has served as a former Alumni Chair. She spent the past summer working as a dental assistant at two dental offices while also studying for the DAT (Dental Admissions Test), which she recently took. Molly loves to devote her time to serving others, having also gone on a medical-dental service trip to Honduras and volunteered at Willow Creek Community Church&rsquo;s dental clinic this past summer. Outside of PSA, Molly is a busy pre-dental student; she is a current LAS James Scholar and is a Dean&rsquo;s List regular. When she is not studying for her classes, she is working as part of the MCB Lab Prep Staff or at the gym powerlifting. Molly aspires to become a dental practice owner, hoping to expand her mother and brother&rsquo;s dental practice as well as continuing to serve impoverished communities on dental service trips. She is so excited to meet everyone at FACT!'
            imageURL='/img/fact-pack/Molly.jpeg'
          />
          <TeamMember
            name='Priscilla Nguyen'
            position='TeamFACT Manager'
            year='Junior'
            major='Human Development and Family Studies'
            bio='Priscilla Nguyen has been involved in cultural organizations throughout all her life and is excited to be able to be a part of this year&apos;s FACT. Being involved with PSA and Barkada has only strengthened her passion to be involved in cultural awareness and has been a pretty integral part of her life. Currently a junior, she hopes to one day go into Child Life or daycare. Outside of being TeamFACT Manager, she is also a sister of alpha Kappa Delta Phi and also works at a ramen shop. She can&apos;t wait for this year&apos;s FACT and to see all the new and returning faces.'
            imageURL='/img/fact-pack/Priscilla.jpeg'
          />
          <TeamMember 
            name='Reggie Pagala'
            position='Campus Ambassador'
            year='Junior'
            major='Computer Engineering'
            bio='Reggie (Reijhui) is a junior in Computer Engineering. Going to high school at Lane Tech, he was part of their Filipino Club, Kapamilya Habang Buhay. After coming to the University of Illinois, he wanted to continue his involvement in the Filam community by joining its PSA. From dancing with Barkada to being a part of the AKA program, he&apos;s made many amazing memories with PSA. Now as campus ambassador, he hopes to help make FACT a part of the delegates&apos; amazing memories, too.'
            imageURL='/img/fact-pack/Reggie.jpeg'
          />
          <TeamMember
            name='Sonica Battung'
            position='Marketing'
            year='Junior'
            major='English &amp; History'
            bio='With a deep passion for education, social justice, and graphic design, FACT was the perfect project to invest time in for Sonica. She is most excited to continue building her network of Filipino writers and creators from the Midwest. Outside of FACT, she stands as PSA&apos;s Secretary and library assistant in the Illinois History and Lincoln Collections. When she&apos;s not hanging out with her co-chair, Carmel, she can be found bullet journaling or playing Splatoon. Her favorite genre of music is lofi hip hop beats to study/relax to, while her favorite artists include Marina (formerly of the Diamonds), Catfish &amp; the Bottlemen, and Bleachers. '
            imageURL='/img/fact-pack/Sonica.jpeg'
          />
          <TeamMember
            name='Vincent Wu'
            position='Variety Show Coordinator'
            year='Junior'
            major='Music Technology'
            bio='Vincent is a passionate musician and artist with an appreciation for culture. His dream job is to make music with a production company such as 88rising, blending Asian culture with his passion. In his free time, he makes music and dances with various groups across campus. He is a fan of the Netflix series Lucifer and The Good Place, and is an avid fan of the anime “Jojo’s Bizarre Adventure”.'
            imageURL='/img/fact-pack/Vincent.jpeg'
          />
          <Footer/>
        </Container>
      </Section.Body>
    </Section>
  </Layout>
)
export default TeamPage
