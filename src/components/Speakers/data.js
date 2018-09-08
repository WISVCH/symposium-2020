import schaart  from 'assets/speakers/dennis_schaart.jpg'
import ridder   from 'assets/speakers/jeroen_de_ridder.jpg'
import klein    from 'assets/speakers/stefan_klein.jpg'
import brinkman from 'assets/speakers/willem_paul_brinkman.jpg'

export default [
  {
    links: [],
    img: schaart,
    name: 'Dennis Schaart',
    company: 'Holland PTC',
    bio: `Dennis R. Schaart has worked in academia as well as in the medical device industry, always at the intersection of physics, technology, and medicine. He started as an R&amp;D physicist at Nucletron (now Elekta), where he developed new devices for radiotherapy. He obtained his doctoral degree (with highest honors) in 2002. He then joined TU Delft to set up a new research line on in-vivo molecular imaging technology, with special focus on ultrafast detectors for time-of-flight positron emission tomography (TOF- PET). At present, his main research interests include novel technology for in vivo molecular imaging and for image guidance in (proton) radiotherapy. Since 2016, he coordinates the research activities of TU Delft within the R&amp;D program of the Holland Proton Therapy Centre (HollandPTC), a joint initiative of Erasmus MC, LUMC, and TU Delft. He also serves as a member of the HollandPTC R&amp;D Program Board. In 2017 he established the new section Medical Physics &amp; Technology at TU Delft. Dennis has (co-)authored more than 100 papers that have been cited more than 5000 times and is a frequently invited speaker.`,
    // bio: `Dennis R. Schaart is head of the section Medical Physics & Technology at the Radiation Science & Technology department of Delft University of Technology (TU Delft).\n\nHe started his career as an R&D physicist at Nucletron (now Elekta), where he developed new devices for radiotherapy. In his private time he wrote a PhD thesis on the subject of intravascular brachytherapy, for which he obtained his doctoral degree (with highest honors) at TU Delft in 2002.\n\nHe subsequently joined the university to set up a new research line on in-vivo molecular imaging technology, with special focus on ultrafast detectors for time-of-flight positron emission tomography (TOF-PET).\n\nSince 2016, he also coordinates the research activities of TU Delft within the R&D program of the Holland Proton Therapy Centre (HollandPTC), a joint initiative of Erasmus Medical Centre (Erasmus MC), Leiden University Medical Centre (LUMC), and TU Delft. Dennis has (co-)authored more than 100 journal papers and is a frequently invited speaker.`,
    title: `Towards the Next Generation of Proton Therapy`,
    abstract: `About half of all cancer patients in the Netherlands receive some form of radiotherapy. Ideally, a sufficient radiation dose is given to the tumor to kill all cancer cells, without inducing unwanted side effects. In reality, compromises always have to be made. The majority of patients are irradiated with high-energy X-ray photons. For radiotherapy purposes, the physical properties of protons are much more attractive. However, the characteristic dose profile, with a sharp dose falloff behind the so- called Bragg peak, also makes proton therapy sensitive to deviations from the pre-calculated treatment plan. Examples are patient setup errors, inter-fraction anatomical changes, intra-fraction organ motion, and range uncertainty. These phenomena may, if not adequately dealt with, result in severe overdosing to healthy tissues and/or underdosing in the tumor. In photon radiotherapy, image guidance has developed to a point where highly optimized dose distributions are applied routinely and safely in the clinic. To fully exploit the physical advantages of protons, similar approaches need to be developed in proton therapy. Novel technology, mathematics, computer science, and medical physics all play an important role in this multidisciplinary challenge. The Holland Proton Therapy Centre (HollandPTC), a joint initiative by Erasmus MC, LUMC and TU Delft, has the ambition to realize the full potential of proton therapy, so as to improve clinical outcomes while reducing the side effects of therapy. This talk presents some of HollandPTC’s research activities and how they will contribute to the development of the next generation of proton therapy.`,
  },
  {
    links: [],
    img: ridder,
    name: 'Jeroen de Ridder',
    company: 'UMC',
    bio: ``,
    title: `Insight in Cancer with 3D Genome Interactions`,
    abstract: ``,
  },
  {
    links: [],
    img: klein,
    name: 'Stefan Klein',
    company: 'Erasmus MC',
    title: `Image Analysis and Machine Learning for Early Diagnosis of Neurodegenerative Diseases`,
    bio: `Stefan Klein is Associate Professor at Erasmus MC, University Medical Centre Rotterdam, leading a research line on the development and evaluation of advanced medical image analysis techniques. His research interests include image registration, segmentation, reconstruction, quantification, radiomics, and machine learning. Stefan obtained his MSc in Mechanical Engineering at the University of Twente, and received a PhD degree from the University of Utrecht (UMC Utrecht, Image Sciences Institute) for his research on optimisation methods for medical image registration. He is co-principal developer of the open source image registration software Elastix, which is used by researchers and industry worldwide. He was general chair of the 8th International Workshop on Biomedical Image Registration 2018, and co-organiser of two grand challenges on computer-aided diagnosis of dementia: CADDementia and TADPOLE.`,
    abstract: `Early and differential diagnosis of neurodegenerative diseases such as Alzheimer’s Disease are important for clinical care and research into novel treatments. Magnetic resonance imaging (MRI) plays a key role is making a diagnosis, since it enables visualisation of pathological changes in the brain. However, visual interpretation of MRI scans is subjective, time-consuming, and has limited sensitivity in detecting subtle abnormalities. In this talk I will show how mathematics and computer science can support the early and differential diagnosis of neurodegenerative diseases, by using advanced image analysis and machine learning techniques.`,
  },
  {
    links: [],
    img: brinkman,
    name: 'Willem-Paul Brinkman',
    company: 'TU Delft',
    bio: `Willem-Paul Brinkman is an associate professor at Delft University of Technology, The Netherlands. His primary research interests are behaviour change support systems, specifically eHealth systems including virtual reality therapy systems, and virtual health agents. He is fascinated by eHealth systems that include conversational agents that offer psychological support. His ultimate objective is to establish an autonomous eHealth system with a digital psychologist that can assist individuals in achieving a broad set of behaviour change goals ranging from overcoming mental illness to lifestyle modification for coping with a chronic disease. He is, therefore, determined to build these systems and establish an empirically grounded understanding of them.`,
    title: `Towards Virtual Reality as a Medicine`,
    abstract: `Intelligent virtual agents are interactive characters that often have human-like elements to evoke responses that humans would exhibit when interacting with other humans. In this talk, I will show how these embodied conversational agents, can be applied as part of health intervention in the form of virtual reality therapy. I will also look at how they can be used to inform, motivate and assist patients during an intervention. Finally, I will discuss research on the development of virtual patients, which can be used to train health professionals.`,
  }
]
