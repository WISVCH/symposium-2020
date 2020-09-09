import eva from 'assets/speakers/e_valk.jpg'
import dimitris from 'assets/speakers/d_rizopoulos.jpg'
import marcel from 'assets/speakers/m_worring.jpg'
import ridder from 'assets/speakers/jeroen_de_ridder.jpg'
import ronald from 'assets/speakers/r_prins.jpg'
import vincent from 'assets/speakers/v_warmerdam1.jpg'
import wouter from 'assets/speakers/w_welling.jpg'



export default [
    //FIXME: Eva de Valk piece is incomplete
  {
    links: [],
    revealed: true,
    img: eva,
    name: 'Eva de Valk',
    bio: `Eva is onze host super mooi!! Dit verhaaltje gaat over haar leven.`,
    title: `Chair of the Day`,
    abstract: `Als host gaat ze het symposium begeleiden etc etc`,

  },
    // TODO: Dimitris
  {
    links: [],
    revealed: true,
    img: dimitris,
    name: 'Dimitris Rizopoulos',
    company: 'Erasmus MC',
    bio: `Dimitris Rizopoulos is a professor of biostatistics at the Erasmus Medical Center Rotterdam. His research focuses on joint models for longitudinal and time-to-event data with applications in biomarker identification, precision medicine, screening and active surveillance. He currently serves as a co-Editor for Biostatistics.
`,
    title: `Optimal scheduling of invasive procedures for patients: How advanced statistics can help to improve clinical practice
`,
    abstract: `In early-stage chronic non-communicable diseases, invasive procedures, such as biopsies, endoscopies are used for diagnosing disease progression. Patients typically undergo these invasive tests in a fixed one-size-fits-all manner. An example of such a setting that also forms the motivation for our work is prostate cancer patients with low-grade tumors. Namely, patients in this disease stage are closely monitored using blood tests. Still, the decision to treat is based on prostate biopsies. The problem is that biopsies are painful and lead to complications. The current standards are to perform biopsies for all patients every one or three years.

We argue that a better approach is to opt for personalized test schedules. Our approach utilizes the progression-risk of each patient. It aims to balance the number of tests (burden) and time delay in detecting progression (shorter is beneficial). Our approach uses a novel statistical modeling framework called joint models for time-to-event and longitudinal data. Using these models, we consolidate patients' longitudinal data (e.g., biomarkers) and previous tests' results into individualized future cumulative-risk of progression. We then create personalized schedules by planning tests on future visits where the predicted cumulative-risk is above a threshold (e.g., 5% risk). We update the personalized schedule with data gathered over follow-up. To find the optimal risk threshold, we minimize a utility function of the expected number of tests and expected time delay in detecting progression. These two quantities are estimated in a patient-specific manner, using a patient's predicted risk profile. Patients/doctors can employ these quantities to compare personalized and fixed schedules objectively. Last, we implement our methodology in a web-application for prostate cancer patients.
`,
  },
    // TODO: Marcel Worring
  {
    links: [],
    revealed: true,
    img: marcel,
    name: 'Marcel Worring',
    company: 'Universiteit van Amsterdam',
    bio: `Marcel Worring is director of the Informatics Institute (IvI), associate professor in IvI, full professor in data science for business analytics (Amsterdam Business School). Before becoming director of IvI he was associate director of Amsterdam Data Science. His research is in Multimedia Analytics, focussed on the integration of Multimedia Analysis, Multimedia Mining, Information Visualization, and Multimedia Interaction into a coherent framework which yields more than its constituent components.
`,
    title: `Multimedia Analytics: from data to insight
`,
    abstract: `More and more data is in a multimedia form (images, videos, text) and contains a lot of potentially relevant information. Yet when confronted with large collections of multimedia data it is difficult to get insight in the material. Multimedia analytics aims to solve this by combining multimedia analysis with visualizations that optimally support the user and learn from their interactions. In this talk we explain the overall concept of multimedia analytics and show some example systems and consider some applications of multimedia analytics. `,
  },
    // TODO: Jeroen van den Hoven
  {
    links: [],
    revealed: true,
    img: ridder,
    name: 'Jeroen van den Hoven',
    company: 'TU Delft',
    bio: `Jeroen van den Hoven is university professor and full professor of Ethics and Technology at Delft University of Technology and editor in chief of Ethics and Information Technology. He is currently the scientific director of the Delft Design for Values Institute. He was the founding scientific director of 4TU.Centre for Ethics and Technology (2007-2013). In 2009, he won the World Technology Award for Ethics as well as the IFIP prize for ICT and Society for his work in Ethics and ICT. Jeroen van den Hoven was founder, and until 2016 Programme Chair, of the program of the Dutch Research Council on Responsible Innovation. He published Designing in Ethics (Van den Hoven, Miller & Pogge eds., Cambridge University Press, 2017) and Evil Online (Cocking & Van den Hoven, Blackwell, 2018). He is a permanent member of the European Group on Ethics (EGE) to the European Commission. In 2017 he was knighted in the Order of the Lion of The Netherlands. 
`,
    title: `Ethics of data analytics`,
    abstract: ``,
  },
    // TODO: Ronald Prins
  {
    links: [],
    revealed: true,
    img: ronald,
    name: 'Ronald Prins',
    company: 'Founder of Fox-IT',
    bio: `Ronald Prins graduated from TU Delft in 1994, in Applied Mathematics. He specialized in digital technology and cryptography. After completing his studies he worked at the Dutch Forensic Institute on breaking security used by criminals. In 1999 Prins founded Fox-IT with fellow TU Delft alumnus Menno van der Marel. The company would eventually be in the very first rank of internet security providers. Now, he is an Associate member at the Dutch Safety Board and member of the TiB, an independent organization that supervises whether the AIVD uses their power legitimately.
He is the perfect example of someone who turned his hobby into his job, followed his heart and by that achieved great success. This does not only make him a top entrepreneur, but also a great inspiration for current and future students. For this and other accomplishments he was also pronounced as Alumnus of the Year 2016. We are proud that Ronald Prins, ‘the most powerful nerd in the Netherlands’, is now an ambassador of our association.
`,
    title: ``,
    abstract: ``,
  },
    // TODO: Vincent Warmerdam
  {
    links: [],
    revealed: true,
    img: vincent,
    name: 'Vincent Warmerdam',
    company: 'Rasa',
    bio: `Currently Vincent works as a Research Advocate at Rasa where he collaborates with the research team to explain and understand conversational systems better.
In his previous career he worked over at GoDataDriven in Amsterdam. He was their first data scientist. Here he helped companies get better at what they do by using data. He had been given a fair amount of proper cases with impact for important clients while trying to keep the hype at bay. After a few years he felt compelled to leave.
He believes in open source and doesn’t mind to evangalise from time to time. He is known for speaking at events but also for giving free lectures in data science around Europe.
The future is pretty awesome, all we have to do is build it. - Vincent Warmerdam
`,
    title: ``,
    abstract: ``,
  },
    // TODO: Wouter Welling
  {
    links: [],
    revealed: true,
    img: wouter,
    name: 'Wouter Welling',
    company: 'Ministry of the Interior and Kingdom Relations',
    bio: `Wouter Welling is coordinating policy officer digital identity at the Ministry of the Interior and Kingdom Relations. He has been working in the domain of a rapidly changing digital government for quite some time. Both in the private sector, in IT implementation and in government policy making. In the past he worked on digital services for citizens by the government, information platforms for the government, data exchange within the government and advising the political top on these subjects. He has also made documentaries on these subjects and regularly gives guest lectures at universities on the government's relationship with new technology. At the moment he deals with the role of the government around our digital identity and all the questions that come with it. 
`,
    title: ``,
    abstract: ``,
  },

    // Example entry
  // {
  //   links: [],
  //   revealed: false,
  //   img: eva,
  //   name: 'Dennis Schaart',
  //   company: 'Holland PTC',
  //   bio: `Dennis R. Schaart has worked in academia as well as in the medical device industry, always at the intersection of physics, technology, and medicine. He started as an R&amp;D physicist at Nucletron (now Elekta), where he developed new devices for radiotherapy. He obtained his doctoral degree (with highest honors) in 2002. He then joined TU Delft to set up a new research line on in-vivo molecular imaging technology, with special focus on ultrafast detectors for time-of-flight positron emission tomography (TOF- PET). At present, his main research interests include novel technology for in vivo molecular imaging and for image guidance in (proton) radiotherapy. Since 2016, he coordinates the research activities of TU Delft within the R&amp;D program of the Holland Proton Therapy Centre (HollandPTC), a joint initiative of Erasmus MC, LUMC, and TU Delft. He also serves as a member of the HollandPTC R&amp;D Program Board. In 2017 he established the new section Medical Physics &amp; Technology at TU Delft. Dennis has (co-)authored more than 100 papers that have been cited more than 5000 times and is a frequently invited speaker.`,
  //   title: `Towards the Next Generation of Proton Therapy`,
  //   abstract: `About half of all cancer patients in the Netherlands receive some form of radiotherapy. Ideally, a sufficient radiation dose is given to the tumor to kill all cancer cells, without inducing unwanted side effects. In reality, compromises always have to be made. The majority of patients are irradiated with high-energy X-ray photons. For radiotherapy purposes, the physical properties of protons are much more attractive. However, the characteristic dose profile, with a sharp dose falloff behind the so- called Bragg peak, also makes proton therapy sensitive to deviations from the pre-calculated treatment plan. Examples are patient setup errors, inter-fraction anatomical changes, intra-fraction organ motion, and range uncertainty. These phenomena may, if not adequately dealt with, result in severe overdosing to healthy tissues and/or underdosing in the tumor. In photon radiotherapy, image guidance has developed to a point where highly optimized dose distributions are applied routinely and safely in the clinic. To fully exploit the physical advantages of protons, similar approaches need to be developed in proton therapy. Novel technology, mathematics, computer science, and medical physics all play an important role in this multidisciplinary challenge. The Holland Proton Therapy Centre (HollandPTC), a joint initiative by Erasmus MC, LUMC and TU Delft, has the ambition to realize the full potential of proton therapy, so as to improve clinical outcomes while reducing the side effects of therapy. This talk presents some of HollandPTC’s research activities and how they will contribute to the development of the next generation of proton therapy.`,
  // },

]
