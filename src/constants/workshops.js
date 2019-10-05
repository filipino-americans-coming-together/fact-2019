import { EVENTS } from './events'

export const WORKSHOP_SESSIONS = {
  allIds: [
    "WS1-00",
    "WS1-01",
    "WS1-02",
    "WS1-03",
    "WS1-04",
    "WS1-06",
    "WS1-07",
    "WS1-08",
    "WS1-09",
    "WS1-10",
  ],
  byId: {
    "WS1-00": {
      session: EVENTS.WORKSHOP_SESSION_01,
      workshopId: "Mental-Health-And-Self-Empowerment",
    },
    "WS1-01": {
      session: EVENTS.WORKSHOP_SESSION_02,
      workshopId: "Mental-Health-And-Self-Identity",
    },
    "WS1-02": {
      session: EVENTS.WORKSHOP_SESSION_01,
      workshopId: "How-to-become-an-ally-for-those-who-are-affected-by-current-immigration-policies",
    },
    "WS1-03": {
      session: EVENTS.WORKSHOP_SESSION_02,
      workshopId: "Cultivating-Solidarity",
    },
    "WS1-04": {
      session: EVENTS.WORKSHOP_SESSION_02,
      workshopId: "Real-Talk",
    },
    "WS1-06": {
      session: EVENTS.WORKSHOP_SESSION_03,
      workshopId: "Microaggressions",
    },
    "WS1-07": {
      session: EVENTS.WORKSHOP_SESSION_01,
      workshopId: "Create-Your-Own-Adventure-Crisis-Sim",
    },
    "WS1-08": {
      session: EVENTS.WORKSHOP_SESSION_03,
      workshopId: "What-to-Focus-on-Financially-after-College-to-Set-You-Up-for-Future-Success",
    },
    "WS1-09": {
      session: EVENTS.WORKSHOP_SESSION_03,
      workshopId: "The-Peoples-Resistance",
    },
    "WS1-10": {
      session: EVENTS.WORKSHOP_SESSION_03,
      workshopId: "From-Marcos-To-Duterte",
    },
  }
}

export const WORKSHOPS = {
  allIds: [
    "Mental-Health-And-Self-Empowerment",
    "Mental-Health-And-Self-Identity",
    "How-to-become-an-ally-for-those-who-are-affected-by-current-immigration-policies",
    "Cultivating-Solidarity",
    "Real-Talk",
    "Microaggressions",
    "Create-Your-Own-Adventure-Crisis-Sim",
    "What-to-Focus-on-Financially-after-College-to-Set-You-Up-for-Future-Success",
    "The-Peoples-Resistance",
    "From-Marcos-To-Duterte"
  ],
  byId: {
    "Mental-Health-And-Self-Empowerment": {
      title: "Mental Health and Self-Empowerment",
      description: "&ldquo;Umbrella can&rsquo;t stop the rain, but it helps us stand in the rain. Confidence may not bring success, but confidence gives you the power to face any challenge in life.&rdquo; Unknown AuthoMost people, especially college students are bombarded with uncertainties, self-doubts, and limiting beliefs. These doubts and beliefs often reside in our heads for days and contribute to the negative experience to our mental health which often results in unnecessary anxiety, depression, and fear. Personally, I have been through this whole process as a college student, a person of color (Asian American), and a young professional. Fortunately, through years of the mentorship that I have received, researches and reflections that I have done, and hard works that I have put into self-experiment, I have come up with a toolset that I believe can assist college students to empower themselves and avoid the unnecessary mental health challenges that I went through as a college student. The workshop I am proposing will show participants simple techniques to transform self-doubts and limiting beliefs into positive inspirations and resolutions. From these resolutions, participants will be able to use strength-based and person-based methods to set actionable goals to empower themselves. Participants will be more confident as they achieve their goals and be able to minimalize unnecessary self-doubts and limiting beliefs.  ",
      facilitatorId: "CoffeeWithJR",
    },
    "Mental-Health-And-Self-Identity": {
      title: "Mental Health and Self-Identity ",
      description: "There is no health without mental health. Unfortunately due to cultural stigma, mental health is still unspoken in the Asian American and Pacific Islander (API) college student community. Studies after studies have shown that the ability to talk about mental health issues would tremendous decrease students stress level and improve overall college experience. This workshop provides a safe space and professional guided discussion for API students to talk about their struggles on college campus, mental health challenges, and overall wellness. We are not training students to be clinicians; instead we are educating them on various common mental health and emotional knowledge, on how to be there for their friends, improve their communication skill, and on how to be a better listener for their friends.Participants will explore their internal and external identities and how that may impact their own health and wellness. Participants will learn how to empower themselves through appreciation of their heritage and strengths.  After being able to identify who they are, participants will learn how mental health is an essential component of their personal development. Last, participants will learn about fellow Asian American perspectives and how this can increase their capacities to talk about their identities, mental health, and Asian American issues.",
      facilitatorId: "CoffeeWithJR",
    },
    "How-to-become-an-ally-for-those-who-are-affected-by-current-immigration-policies": {
      title: "How to become an Ally for those who are affected by current immigration policies",
      description: "In recent years, attacks on immigrants, refugees, and asylum seekers and their families have been on the rise, from detention centers to executive orders. As a college of students with certain privileges, there are several things you can do, from educating your peers to promoting safety and security in our communities. During this workshop, you will be able to learn about some historical immigration actions that helped changed the lives of many immigrants and their communities; you will be able to discuss how current policies are affecting college students, particularly DACA and Undocumented students; and and you will be able to strategize how your RSO or group can support students, families, and communities impacted by immigration policies on your campus",
      facilitatorId: "Gioconda-Guerra-Perez",
    },
    "Cultivating-Solidarity": {
      title: "Cultivating Solidarity: Untold Stories of the Bukid",
      description: "It's a dream for many of us to visit the Philippines and appreciate the beauty it has to offer. However, our Kababayans who cultivate the homeland, farmers and indigenous peoples, live in a nightmare of displacement and land grabbing. In Tagalog, &lsquo;bukid&rsquo; means farm. Join us to hear about the untold stories of the bukid where farmers struggle through their fight for land and life and also what you can do to support our fellow Filipinos back home. ",
      facilitatorId: "Kabataan-Alliance",
    },
    "Real-Talk": {
      title: "Real Talk, With The PUSO Foundation",
      description: "Executive members of the PUSO Foundation will share wisdom and tips on how to best define your destiny. It will cover personal experiences along their journey. You don't want to miss out on this one.",
      facilitatorId: "The-PUSO-Foundation",
    },
    "Microaggressions": {
      title: "Microaggressions: A Case Study",
      description: "Whether we are fully aware of it or not, we live in a world rife with microaggressions. Microaggressions are, in short, a communication or action that subtly conveys a prejudicial attitude towards a marginalized group, intentionally or unintentionally. Within this workshop, delegates will analyze stories in which microaggressions are involved and discuss how they would react or respond. Additionally, delegates will gain the skills to identify microaggressions that may arise in their personal, academic, or professional lives and learn effective ways to address these situations themselves.",
      facilitatorId: "Shane-Carlin",
    },
    "Create-Your-Own-Adventure-Crisis-Sim": {
      title: "Create Your Own Adventure Crisis Sim",
      description: "You will be given a series of scenarios with choices to make. The choice you make impacts the your path and outcome.",
      facilitatorId: "Unipro-Chicago",
    },
    "What-to-Focus-on-Financially-after-College-to-Set-You-Up-for-Future-Success": {
      title: "What to Focus on Financially after College to Set You Up for Future Success",
      description: "The workshop will focus on 2 important parts for college students who have just graduated and enter the work force. Budgeting and cash flow management and long term investing for growth and what type of accounts to use.",
      facilitatorId: "Gian-Deguzman",
    },
    "The-Peoples-Resistance": {
      title: "The People's Resistance: Land &amp; Human Rights Defenders in the Philippines",
      description: "The Philippines is one of the richest countries in natural resources and ecological splendor; yet it is also one of the most vulnerable to environmental disaster. This workshop will explore how indigenous communities are at the forefront of this climate crisis, as they fight to preserve their ancestral domains and face unprecedented repression under President Duterte. From the bombing of Mindanao to the attack on Brandon Lee, we&rsquo;ll learn about the many ways climate justice and human rights are intertwined in the Philippines, and how we can support and connect with these struggles across the globe.",
      facilitatorId: "CCHRP",
    },
    "From-Marcos-To-Duterte": {
      title: "From Marcos To Duterte, Filipinas Are Marching And Rising For Change.",
      description: "&quot;From former Philippine dictator Ferdinand Marcos to the current Philippine President Duterte, Filipinas and Gabriela members are organizing, rising, resisting, and uniting for change. This workshop will provide a brief situation of the women sector in Philippine society. It will highlight the role of Gabriela in the fight against state violence and repression and its contribution in the struggle for social transformation. The workshop seeks to connect the struggle of Filipinas in the US to Filipinas back home and appreciates the importance of building solidarity amongst them. &quot;",
      facilitatorId: "GABRIELA",
    },
    "Asian-Pacific-Islander-Civic-Engagement-101": {
      title: "Asian Pacific Islander Civic Engagement 101",
      description: "Did you know Asian Pacific Islanders (APIs) are the fastest growing racial minority in the U.S.? What is going to happen if we continue to be chronically underrepresented in politics? Learn the basics of civic engagement and how you can get involved in electoral politics, activism, and public policy. From decolonization, rallying in the streets, to voting, every one of us has the power to influence politics in ways that strengthen our community. Learn tangible steps you can take to claim your political power and to harness our political identities for the betterment of our people. Kaya nating abutin, let’s define our destiny together!",
      facilitatorId: "Louie-Tan-Vital",
    }

  }
}

export const FACILITATORS = {
  allIds: [
    "CoffeeWithJR",
    "Gioconda-Guerra-Perez",
    "Kabataan-Alliance",
    "The-PUSO-Foundation",
    "Shane-Carlin",
    "Unipro-Chicago",
    "Gian-Deguzman",
    "CCHRP",
    "GABRIELA",
    "Louie-Tan-Vital"
  ],
  byId: {
    "CoffeeWithJR": {
      name: "CoffeeWithJR",
      bio: "Shane Carlin's professional career has been in fundraising and Student Affairs where he was the Director of Development for Student Life and Scholarships at Northwestern University, Assistant Vice Chancellor for Student Affairs Advancement at the University of Illinois at Urbana-Champaign. Carlin has also worked as the Director of Corporate and Foundation Relations at the National Association of Student Personnel Administrators (NASPA), as well as in Residence Life and Housing at Miami, Northwestern, and Capital Universities.\r\n\r\nHe is a Korean American adoptee where he grew-up in northern Kentucky. Carlin earned his Bachelor of Science in Agricultural Communications from the University of Kentucky and his Master of Science in College Student Personnel from Miami University. \r\n\r\n\u200BCarlin not only has over 20 years of experience in higher education administration, but also has mentored students in international settings. Besides his expertise in higher education, Carlin is an experienced public speaker. He has been invited to speak at universities from coast to coast. In addition, he was a speaker for TEDx Lakeshore East in 2011. Internationally, Carlin presented the &ldquo;Western Way of Networking&rdquo; to students at Hong Kong University Science &amp; Technology (HKUST) and managers at General Electric (GE) in Shanghai at the China Technology Center. ",
    },
    "Gioconda-Guerra-Perez": {
      name: "Gioconda Guerra Perez / Office of Diversity, Equity and Inclusion",
      bio: "Dr. Gio Guerra, a Fulbright Scholar, joined the University of Illinois Urbana Champaign in August 2013 as Director of La Casa Cultural Latina. She became the University&rsquo;s Assistant Vice Chancellor for Diversity and Academic Inclusive Excellence in July 2018. She has developed and delivered professional development/workshops on issues related to institutional barriers affecting Latino/a college students; undocumented/DACA students policies and practices; as well as intersectionality &amp; identity. She received her Bachelor of Arts, majoring in Communication with concentration in Journalism. She also received a Master in Sociology and a Ph.D. in Educational Leadership and Organizational Development from the University of Louisville. As part of her new role, she is in charge of making sure all First Year and Transfer students are introduce to Diversity and Inclusion Experience at Illinois. She has made a priority to work with academic units to provide meaningful and equitable experiential learning opportunities for all students."
    },
    "Kabataan-Alliance": {
      name: "Raphie Torralba and Edmund Buni / Kabataan Alliance",
      bio: "Raphie Torralba is an alumna and former board member of MAFA. After graduating from UW-Madison this past May, she went on an immersion trip to the Philippines with Kabataan Alliance and other Fil-Am youth from across the country. Together, they integrated with some of the most marginalized communities of central Luzon. She hopes that by sharing the stories of their struggles with Fil-Am youth communities in the Midwest, they might be empowered to advocate for Filipinos at home and around the world. Edmund Buni is the national Director of Education of Kabataan Alliance. Kabataan Alliance&rsquo;s mission is to build national unity among Filipino youth and student organizations across the US vision is to unite and empower Filipino youth and students across the US to engage in community organizing and advocacy to build towards a just society where people can reach their full potentials to advocate for the rights and welfare of Filipinos in the US, Philippine, and around the world. "
    },
    "The-PUSO-Foundation": {
      name: "The PUSO Foundation",
      bio: "The PUSO Foundation is an established 501(C)(3) Nonprofit Organization that has partnered with hundreds of volunteers worldwide to provide purposeful unconditional service to others. Since 2017, PUSO has served over 10,000 lives across five countries, providing basic life necessities and facilitating community renovation projects to enrich and empower the lives it serves. PUSO has funded its service work through its strategic fundraising events within local communities along with the gracious generosity of its many donors. PUSO has also fostered a college outreach program to inspire college students to make a their own difference. The PUSO Foundation has since evolved into something greater than just a nonprofit organization performing global service work for those in need. PUSO is a movement, PUSO is a culture, PUSO is an interconnection of lives filled with a philanthropic spirit of giving back and spreading love.",
    },
    "Shane-Carlin": {
      name: "Shane Carlin / Asian Student Achievement, LLC",
      bio: "​Shane Carlin's professional career has been in fundraising and Student Affairs where he was the Director of Development for Student Life and Scholarships at Northwestern University, Assistant Vice Chancellor for Student Affairs Advancement at the University of Illinois at Urbana-Champaign. Carlin has also worked as the Director of Corporate and Foundation Relations at the National Association of Student Personnel Administrators (NASPA), as well as in Residence Life and Housing at Miami, Northwestern, and Capital Universities. He is a Korean American adoptee where he grew-up in northern Kentucky. Carlin earned his Bachelor of Science in Agricultural Communications from the University of Kentucky and his Master of Science in College Student Personnel from Miami University.  Carlin not only has over 20 years of experience in higher education administration, but also has mentored students in international settings. Besides his expertise in higher education, Carlin is an experienced public speaker. He has been invited to speak at universities from coast to coast. In addition, he was a speaker for TEDx Lakeshore East in 2011. Internationally, Carlin presented the &ldquo;Western Way of Networking&rdquo; to students at Hong Kong University Science &amp; Technology (HKUST) and managers at General Electric (GE) in Shanghai at the China Technology Center. "
    },
    "Unipro-Chicago": {
      name: "Unipro Chicago",
      bio: "Pilipino American Unity for Progress (UniPro) is a national 501(c)(3) nonprofit organization that envisions a unified and engaged Pilipino America. UniPro&rsquo;s mission is to engage Pilipino Americans through collaboration, advocacy and education. The organization allows Pilipino Americans the opportunity to explore their place in the community in the hope of owning their niche through its various programs incorporating professional development, Filipino history, and workshop sessions."
    }, 
    "Gian-Deguzman": {
      name: "Gian Deguzman / PUSO Foundation",
      bio: "Gian Deguzman is a practicing financial planner who works with clients to develop a plan to effectively accomplish their financial goals. Goals center around retirement planning, college planning, debt management, cash flow analysis, risk management and estate planning. More importantly, Gian guides clients through stages in their lives so they can get through them more confidently. "
    },
    "CCHRP": {
      name: "Chicago Committee for Human Rights in the Philippines (CCHRP)",
      bio: "Bev Tang has been involved with organizing the Southern California Filipino community for their rights &amp; welfare and genuine democracy in the Philippines and is excited to be in Chicago to continue social justice work with CCHRP as the Education Officer. Bernard Wang is a UIUC alum and is the Secretary General at CCHRP. A UIUC, Bernard was interested in ethnic studies and student activism. After graduating in 2017, he moved to Chicago and joined CCHRP after learning about their solidarity work with people&rsquo;s struggles around the world.  Elise Knaub currently serves as Vice Chair of CCHRP and is finishing her Master of Arts in Teaching at the University of Chicago. During this past summer, she visited the Philippines to gain a better understanding of the Filipino people&rsquo;s resistance and the role of education in their liberation. "
    },
    "GABRIELA": {
      name: "GABRIELA Chicago",
      bio: "GABRIELA Chicago is a member of GABRIELA USA (gabrielausa.org) and GABRIELA Philippines (gabrielaphilippines.wordpress.com/about) and (m.facebook.com/gabriela.alliance). It connects with GABRIELA Women&rsquo;s Party (m.facebook.com/GabrielaWomensParty). GABRIELA is a grassroots Filipino women organization seeking to wage a struggle for the liberation of all oppressed Filipino women and people."
    },
    "Louie-Tan-Vital": {
      name: "Louie Tan Vital",
      bio: "Louie Tan Vital (she/they) is a Filpina American poet, community organizer, and graduate of the Masters of Public Administration program at the UW Evans School of Public Policy and Governance. Louie has recently worked for the Washington State House of Representatives and the 115th Congress in the United States House of Representatives. Her work sits at the intersections of migration, diasporic trauma, bodily politics, and public policy. She has dedicated her life to fighting for racially-equitable public policy and harnessing performance arts as a means for political activism. Louie’s words have appeared in TVW, the Smithsonian, The Filipino Channel, Yahoo News, and various news and radio outlets in America and the Philippines. You can find her poetry in TAYO Literary Magazine. Ultimately, Louie seeks to uplift all marginalized communities through political advocacy and elected office while remaining true to herself, her community, and her ancestors."
    }
  }
}

export default WORKSHOP_SESSIONS.allIds.map(id => {
  const workshopSession = WORKSHOP_SESSIONS.byId[id]
  const workshop = WORKSHOPS.byId[workshopSession.workshopId]
  const facilitator = FACILITATORS.byId[workshop.facilitatorId]
  return {
    id,
    ...workshopSession,
    ...workshop,
    ...facilitator
  }
})