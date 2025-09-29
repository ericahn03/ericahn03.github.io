import { HashRouter, Routes, Route, useParams, useLocation } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'

export default function App(){
  const data = {
    name: 'Eric Ahn',
    role: 'Eric Ahn - Personal Portfolio',
    summary: `B.A. CS @ Emory ’25 → M.S. AI @ NJIT. \n \nWelcome to my page! Here I make, compile, and share practical tools that people might love.`,
    links: {
      email: 'mailto:ericahn03@gmail.com',
      github: 'https://github.com/ericahn03',
      linkedin: 'https://www.linkedin.com/in/eric-ahn-1b07592b8/',
      resume: './ea_resume.pdf'
    },
    photo: './profile.png',
    projects: [
      {
        title: 'Spotify Personality Inferencer (TypeTune)',
        period: 'Jul 2025 – Aug 2025',
        summary: 'Reads your top tracks and shows, step‑by‑step, how they map onto MBTI axes—shareable, fast, and transparent.',
        links: [
          {label:'Live Website', href:'https://typetune.vercel.app/' },
          {label:'Repo (public)', href:'https://github.com/ericahn03/typetune'}
        ],
        media: [
          {src:'./tt_homepage.jpeg', alt:'TypeTune homepage'},
          {src:'./tt_personalresults.jpeg', alt:'TypeTune results'},
          {src:'./tt_lyricsview.jpeg', alt:'TypeTune lyrics view'},
          {src:'./tt_resultsshared.jpeg', alt:'TypeTune shared'}
        ]
      },
      {
        title: 'IHME Mortality Prediction Data Analysis',
        period: 'Jan 2025 – May 2025',
        summary: 'End‑to‑end pipeline for forecasting age‑specific mortality with careful validation and clear error reporting.',
        links: [
          {label:'Report', href:'./mpda_report.pdf'},
          {label:'Repo (public)', href:'https://github.com/ericahn03/Mortality-Prediction-Pipeline'}
        ]
      },
      {
        title: 'Resume Enhancer & Job Matcher',
        period: 'Jan 2025 – May 2025',
        summary: 'Turns a resume into clean sections, improves phrasing, and matches to real job posts that fit.',
        links: [
          {label:'Demo', href:'https://www.youtube.com/watch?v=34NjbuVftyQ'},
          {label:'Report', href:'./careerai_report.pdf'},
          {label:'Repo (private)', href:'https://github.com/ZeshanZa/NLPPROJECT'}
        ]
      },
      {
        title: 'Jarvis Home Assistant',
        period: 'Jan 2024 – May 2024',
        summary: 'Privacy‑first voice assistant for macOS/Windows/iOS that controls devices and answers queries with an offline‑first stance.',
        links: [
          {label:'Demo', href:'https://www.youtube.com/watch?v=5ATZ_7YWslM'},
          {label:'Dev Doc', href:'./jarvis_devdoc.pdf'},
          {label:'User Doc', href:'./jarvis_userdoc.pdf'},
          {label:'Repo (private)', href:'https://github.com/willkohn/jarvis'}
        ]
      }
    ],
    education: [
      {
        school: 'New Jersey Institute of Technology',
        detail: 'M.S. in Artificial Intelligence (in progress)',
        period: 'Sep 2025 – Present'
      },
      {
        school: 'Emory University',
        detail: 'B.A. in Computer Science (’25), Math minor',
        period: 'Aug 2021 – May 2025'
      }
    ],
    coursework: [
      {
        group: "Applied AI (ML & RL & NLP)",
        items: [
          { code: "CS 669", title: "Reinforcement Learning", school: "NJIT", term: "Fall 2025" },
          { code: "CS 670", title: "Artificial Intelligence", school: "NJIT", term: "Fall 2025" },
          { code: "DS 675", title: "Machine Learning", school: "NJIT", term: "Fall 2025" },
          { code: "CS 334", title: "Machine Learning", school: "Emory", term: "Fall 2024" },
          { code: "CS 323", title: "Machine Learning Applications", school: "Emory", term: "Spring 2025" },
          { code: "CS 329", title: "Computational Linguistics", school: "Emory", term: "Spring 2025" },
        ],
      },
      {
        group: "Data & Modeling",
        items: [
          { code: "DS 637", title: "Python and Mathematics", school: "NJIT", term: "Fall 2025" },
          { code: "MATH 221", title: "Linear Algebra", school: "Emory", term: "Spring 2024" },
          { code: "MATH 212", title: "Differential Equations", school: "Emory", term: "Spring 2025" },
          { code: "MATH 315", title: "Numerical Analysis", school: "Emory", term: "Fall 2024" },
          { code: "MATH 250", title: "Foundations of Mathematics", school: "Emory", term: "Fall 2024" },
        ],
      },
      {
        group: "Systems & Performance",
        items: [
          { code: "CS 350", title: "Systems Programming", school: "Emory", term: "Spring 2025" },
          { code: "CS 255", title: "Comp.Arch./Machine Level Prog.", school: "Emory", term: "Spring 2024" },
          { code: "CS 370", title: "Computer Science Practicum", school: "Emory", term: "Fall 2024" },
          { code: "CS 326", title: "Analysis of Algorithms", school: "Emory", term: "Fall 2024" },
          { code: "CS 253", title: "Data Structures and Algorithms", school: "Emory", term: "Spring 2024" },
        ],
      },
      {
        group: "Foundations & Core CS",
        items: [
          { code: "CS 224", title: "Foundations of Comp.Science", school: "Emory", term: "Fall 2023" },
          { code: "CS 171", title: "Intro to Computer Science II", school: "Emory", term: "Fall 2023" },
          { code: "CS 170", title: "Intro to Computer Science I", school: "Emory", term: "Summer 2023" },
          { code: "MATH 210", title: "Adv.Calculus for Data Sciences", school: "Emory", term: "Summer 2024" },
          { code: "MATH 211", title: "Adv Calculus (Multivariable)", school: "Emory", term: "Summer 2024" },
        ],
      },
    ],
  }


const BLOG_POSTS = [
  {
    slug: "about-me",
    title: "A quick overview about me, my personal values, and a rant on why routines matter more than motivation",
    date: "2025-09-20",
    excerpt: "Since this is my first blog post, I guess it feels obligatory to introduce who I am and what I stand for. Think of this as a...",
    body: `
      <p>Since this is my first blog post, I guess it feels obligatory to introduce who I am and what I stand for. 
      Think of this as a baseline: where I came from, how I think about AI, and why routine is underrated.</p>

      <h2>My Views on AI</h2>
      <p>I’ll start with AI because, well, that’s the topic everyone throws around right now. 
      My perspective lines up a lot with <a href="https://en.wikipedia.org/wiki/Andrew_Ng" target="_blank">Andrew Ng’s take</a>. 
      He frames AI as a productivity booster, a creative tool, and something that (when used well) can save people time instead of just replacing them. 
      He’s talked about how AI isn’t just generative art or chatbots; it includes simpler machine learning systems like fraud detection or recognition that have been around for years. 
      He acknowledges the ethical issues (i.e. art scraping, job loss, and misuse) but doesn’t get stuck in doom. Instead, the question becomes: 
      how do we use this stuff responsibly, and how do we make sure it helps more than it hurts?</p>

      <p>One case that really highlights the mess we’re in is the 
      <a href="https://www.copyright.gov/docs/zarya-of-the-dawn.pdf" target="_blank">Zarya of the Dawn copyright decision</a>. 
      The U.S. Copyright Office ruled that while the human-written text of the comic could be protected, the AI-generated images could not. 
      To me, that signals both the potential and the limitation: AI can clearly contribute to creative works, but our legal and ethical frameworks are still catching up. 
      My stance is that AI-generated pieces should be viewed as collaborative tools, extensions of human creativity, rather than replacements for it.</p>

      <p>I don’t buy into the extreme hype or the extreme fear. AI is a tool. 
      The political and ethical questions are real, but that’s exactly why I want to work on it: to push it in the direction that keeps humans at the center. 
      To me, privacy is a feature, not a nice-to-have.</p>

      <h2>From Pre-Med to CS</h2>
      <p>I actually came into college as a bio major on the pre-med track. 
      Surprise: that didn’t last. No matter how hard I studied, it always felt like I was working two or three times harder than everyone else just to keep up. 
      On the other hand, with quantitative stuff I had no trouble. It clicked naturally. 
      And I believe most people would agree: when you’re good at something—even moderately—you start to like it. 
      Pride kicks in, comfort kicks in, and suddenly you’ve found your lane. For me, that lane was CS.</p>

      <p>I didn’t dream of being in computer science at the start, but after my second year it became obvious. 
      And yes, I knew all the memes about CS grads struggling to find jobs. I still do. 
      But I’d rather chase the field that keeps me engaged than grind away at something that never fit. 
      That’s how I ended up with a CS degree in 2025.</p>

      <h2>Where I’m At Now</h2>
      <p>As of writing this, I’m pursuing an AI certificate at NJIT with plans to transition into their M.S. in AI program. 
      Honestly, part of the reason is the ridiculous job requirements these days. 
      “Entry-level” postings look like wishlists for unicorns. So, I figure: stall the search, level up my credentials, and buy myself time. 
      Two birds, one stone. On the side, I’m teaching myself more about networking and Linux because those are gaps I want filled in before they come back to bite me.</p>

      <h2>Outside Academics <span class="kicker">(the “touching grass” aspect)</span></h2>
      <p>Let’s talk mental health. Ooohh, scary! But, this is something that I should address, not just for myself but also for people who might need this. I’ve wrestled with it for a few years, and the one habit that’s helped me the most is exercise. 
      Not because I’m trying to be a bodybuilder (trust me, I’m not), but because it forces a routine. 
      Whether it’s 30 minutes or an hour, the time doesn’t matter. What matters is that it anchors your day.</p>

      <p>Most people float through their weeks without a plan for their downtime. 
      Work, then “rest” that’s really just doomscrolling or TV. That kind of rest isn’t rest. Let's be honest with ourselves here: it drains mental energy. 
      Now on the other hand, exercise is paradoxical: it drains physical energy but leaves you feeling more refreshed and sharp. 
      Over time, it even stacks bonuses—clothes fit better, your mirror feels less harsh, confidence sneaks back in. 
      And when you look at successful people, you rarely see those who’ve completely abandoned self-care. 
      Sure, there are exceptions, but they’re one-in-a-million. For the rest of us, it starts with routines that make us harder to break.
      Make that one small change in your routine, and the bigger shifts tend to follow on their own.</p>

      <h2>Wrapping Up</h2>
      <p>So I guess that's a wrap: a pre-med dropout turned CS grad, chasing AI not just for the hype but for the responsibility that comes with it, 
      trying to balance career moves with actual values, and reminding myself daily that routine, not motivation, is what keeps me going.</p>
      
      <p>If you took something out of this, that's great! I'm glad that I could help shape and be a part of your values for the future. 
      If you didn't, that's completely alright. Each person is at their different walks of life and have differing opinions.
      Regardless, thanks for taking the time to read this. May God bless you, and I'll see you in the next blog post whenever I do plan on writing another one.</p>
    `
  }
]


// === Faith blog posts (PIN + weekly) ===
const FAITH_POSTS = [
  // --- PINNED POST (edit this one) ---
  {
    slug: "evidence-of-jesus",       // URL part -> #/faith/evidence-of-jesus
    title: "My take on the hardest questions about Christianity",
    date: "2025-09-21",              // still sort-able; pinned always shows first
    pinned: true,                    // <— keeps it at the top
    excerpt: "When it comes to Christianity, I’ve learned that the questions never stop. And honestly, they shouldn’t. Faith isn’t...",
    body: `
      <p>When it comes to Christianity, I’ve learned that the questions never stop. And honestly, they shouldn’t. Faith isn’t supposed to be a blind leap into the dark—it’s meant to hold up under real scrutiny. If Jesus is who he said he was, then Christianity doesn’t have to fear the hardest questions. But if he isn’t, then we should all be honest enough to walk away. That’s how high the stakes are.</p>

      <p>I’ve had people ask me everything from “How could a loving God allow suffering?” to “Did Jesus even exist in history?” These aren’t softball questions—they’re the kind that make you doubt what you are standing for. And I think that’s a good thing. Because if our faith is worth living for, it should also be worth questioning.</p>

      <p>So what I want to do here is take the toughest objections I’ve heard about Christianity and face them head-on. No dodging. No clichés. Just honest reasoning and historical evidence, combined with the conviction I hold: that Jesus is both fully man and fully God. My hope isn’t just to preach to the choir—it’s to show that even if you don’t believe yet, there are solid reasons to take Jesus seriously.</p>
      
      <h2>Did Jesus Really Exist?</h2>
      <p>This is the foundation. If Jesus never existed, then Christianity collapses instantly. It doesn’t matter how inspiring his teachings are or how much comfort people claim to find in the Bible—if Jesus is just a myth, then we’re all wasting our time. So, did he actually walk this earth, or is he just another legend like Hercules or Osiris?</p>

      <p>Here’s the truth: almost no serious historian—Christian, atheist, Jewish, or otherwise—denies the existence of Jesus of Nazareth. Why? Because the evidence is overwhelming. The Gospels aren’t the only sources that talk about him. Two of the biggest non-Christian historians of the first century—Josephus, a Jewish historian, and Tacitus, a Roman—both mention Jesus. Josephus refers to him as a wise teacher who was crucified under Pontius Pilate, and Tacitus records the same, tying Jesus directly to the Roman legal system. These aren’t church documents. These are secular historians, writing independently, and they both confirm that Jesus lived and was executed in Judea.</p>

      <p>But maybe you’re thinking, “Okay, but aren’t the Gospels biased?” Sure, the authors were believers—but that doesn’t automatically mean their accounts are worthless. Every ancient source has a perspective. What historians do is apply tests of authenticity. For example, there’s the criterion of embarrassment: if a story would have been awkward or humiliating to invent, it’s probably true. Take Jesus’ baptism by John. Why would early Christians make up a story that their sinless Lord submitted to a baptism of repentance? Or his crucifixion. In the Roman world, crucifixion was a shameful death reserved for the worst criminals. If the early church was fabricating a hero, the last thing they’d do is invent a Messiah who gets publicly executed as a traitor. Yet that’s exactly how Jesus’ life ends in every Gospel and in secular records. The most awkward, humiliating details are also the most historically secure.</p>

      <p>On top of that, we know Jesus wasn’t just a solitary preacher. He had followers, disciples, and enemies. Meier’s historical research highlights how Jesus constantly engaged with real groups of people in first-century Judaism—Pharisees, Sadducees, even everyday peasants in Galilee. He wasn’t a vague myth floating in the clouds. He was embedded in the religious and political tensions of his day, and that’s exactly why his story can be cross-checked against known history of the period.</p>

      <p>So if we’re being historically honest, the question isn’t “Did Jesus exist?” The real question is “Who was he?” Was he just a Jewish teacher who got killed, or was he—like he claimed—more than just a man? That’s where the debate actually lies. But as for his existence, the verdict is clear: Jesus of Nazareth was real. And if he’s real, then we have to take his claims seriously.</p>

      <h2>Isn’t Believing in Jesus Irrational?</h2>
      <p>This sentiment is tossed around a lot: “Faith is just believing in fairy tales without evidence.” Honestly, I get why people say that. Blind faith is everywhere, and it can be dangerous. But here’s the thing—biblical faith is not blind. It’s not about shutting your eyes and jumping into the dark. It’s about opening your eyes wide and stepping into the light of what’s true.</p>

      <p>Think about it: every person on earth lives by faith in something. Scientists put faith in the consistency of natural laws. Couples put faith in their spouse’s loyalty. Even an atheist puts faith in their reasoning ability to make sense of reality. Faith isn’t irrational—it’s simply trust. The only question is: <em>what is your faith placed in, and is that object trustworthy?</em></p>

      <p>Christianity doesn’t ask you to believe without evidence. The claim that Jesus lived, taught, died, and rose again is anchored in history. We’ve already looked at how historians across the board agree that Jesus existed and was crucified. But Christianity goes further. It invites us to test Jesus’ words and life. When he says, “I am the way, the truth, and the life,” that’s not a call to switch off your brain. It’s a call to weigh his words against reality. Do his teachings make sense of the human condition? Do his actions line up with his claims? And most importantly, did he rise from the dead like he said he would?</p>

      <p>There’s also the rational side of worldview comparison. If life has no God behind it, then at the core everything is random—morality is an accident of evolution, meaning is a human invention, and death is the end. But if Jesus is who he said he was—both fully man and fully God—then suddenly morality has a foundation, meaning has a giver, and death isn’t the end. That doesn’t prove Christianity true all by itself, but it shows it’s not irrational. In fact, it might be the most rational way of making sense of reality.</p>

      <p>So no, believing in Jesus isn’t irrational. It’s not a leap into nonsense; it’s a step of trust in a person who has proven himself reliable. The evidence points to his life and death as historical fact. The question then becomes: will you trust the one who not only claimed to be the truth, but backed it up with his life, his teachings, and ultimately, his resurrection?</p>

      <h2>Why Is There So Much Suffering and Evil?</h2>
      <p>This question is asked a lot, and for good reason as it seems hard to answer when viewing from a surface level. If God is all-loving and all-powerful, then why is the world so full of pain? Why cancer? Why war? Why innocent kids suffering? I’m not going to pretend there’s an easy, one-liner response. But I do believe Christianity offers the most honest and hope-filled answer you can find.</p>

      <p>First, let’s deal with the idea that suffering disproves God. If anything, the existence of evil actually points toward God. Think about it: when we call something “evil,” we’re assuming there’s such a thing as good. And if there’s good, then there has to be a standard beyond personal opinion—something objective. If there’s no God, then good and evil are just human preferences, like saying you prefer vanilla over chocolate. But when we say murder is wrong or injustice is evil, we’re not speaking in preferences. We’re appealing to something deeper. Evil only makes sense if there’s a good God whose design we’ve twisted.</p>

      <p>Second, Christianity says God didn’t create us as robots. Real love requires freedom, and freedom carries risk. God gave humans the ability to choose, and we’ve used that freedom to hurt each other, corrupt creation, and walk away from Him. So much of the suffering we see is the fallout of human rebellion: wars started by greed, families shattered by betrayal, communities broken by selfishness. That doesn’t explain every case, but it shows why a world with love also has the potential for evil.</p>

      <p>But here’s what separates Christianity from every other worldview: God didn’t stay distant from the mess. He stepped into it. Jesus—fully man, fully God—knew rejection, injustice, physical pain, and betrayal. He was tortured and crucified under a corrupt system. In other words, God didn’t watch suffering from a safe distance—He lived it. That means when I suffer, I don’t just cry out to a God who’s unfamiliar with pain. I cry out to a God who’s been through it and promises to redeem it.</p>

      <p>Does that remove the sting of suffering? No. But it reframes it. Evil and pain aren’t the final word. Christianity promises that one day God will right every wrong and wipe away every tear. Until then, we live in the tension—brokenness all around, but also hope that resurrection is coming. And if Jesus truly rose from the dead, then suffering doesn’t win. God does.</p>

      <h2>How Could a Loving God Send People to Hell?</h2>
      <p>This is probably the most emotionally difficult question in Christianity. If God is loving, then how could He allow a place like hell? Doesn’t that make Him cruel? I’ve wrestled with this, and here’s where I land: hell isn’t a contradiction of God’s love—it’s actually the flip side of it.</p>

      <p>First, let’s be clear about what hell is. Hell isn’t God gleefully tossing people into a pit because He’s angry. It’s the natural outcome of a life that consistently says “no” to Him. C.S. Lewis once put it this way: in the end, there are only two kinds of people—those who say to God, “Your will be done,” and those to whom God says, “Your will be done.” In other words, hell is God honoring human freedom. If you spend your life pushing God away, He won’t force Himself on you for eternity. Real love always allows a choice, even the choice to walk away.</p>

      <p>Second, judgment is actually part of love. If God didn’t care about evil, injustice, or cruelty, then He wouldn’t be loving—He’d be indifferent. When we see oppression or genocide in the world, we want justice. Why would we expect God to feel any less? A God who loves perfectly must also confront evil perfectly. Hell is not a cosmic overreaction; it’s God taking human choices and human evil seriously.</p>

      <p>Third, we have to remember who Jesus is in this conversation. He’s not just a distant judge handing down sentences. He’s the one who entered history—100% man and 100% God—to rescue us from judgment. The cross is God saying, “I’d rather take hell upon myself than let you bear it.” That means hell isn’t God’s desire for anyone—it’s His last resort when people reject the rescue He offers. Scripture is clear: God wants all to be saved. But love can’t be forced, and salvation can’t be coerced.</p>

      <p>So yes, hell is real, and it’s sobering. But it doesn’t cancel out God’s love—it shows how seriously He takes it. Love without justice isn’t love at all. And the good news is that in Jesus, no one has to fear hell. The door out is wide open; the only question is whether we’ll walk through it.</p>

      <h2>Isn’t the Resurrection Just a Myth?</h2>
      <p>This is the make-or-break question. If Jesus stayed dead, then Christianity crumbles. Paul himself admitted it: “If Christ has not been raised, our preaching is useless and so is your faith.” (1 Cor. 15:14). That’s how central the resurrection is. So the real issue is this: did it actually happen, or is it just a legend Christians made up later?</p>

      <p>First, let’s look at the timeline. The resurrection wasn’t a story that developed over centuries like a Greek myth. The earliest Christian writings—Paul’s letters—were circulating within twenty years of Jesus’ death. And in 1 Corinthians 15, Paul quotes a creed about the resurrection that most scholars agree goes back to within just a few years of the crucifixion. That’s way too early for myth-making. Legends need time to grow. The resurrection claim was immediate, central, and public.</p>

      <p>Second, the witnesses matter. The Gospels describe women as the first to discover the empty tomb. In the ancient world, women’s testimony wasn’t highly valued in legal courts. If the early Christians were inventing a story, why would they make women the star witnesses? The only logical explanation is that’s how it actually happened. Awkward details are the hallmark of truth.</p>

      <p>Third, the disciples’ transformation is undeniable. These were ordinary men—fishermen, tax collectors, people with no political power—who ran away in fear when Jesus was arrested. Yet within weeks, they were boldly proclaiming that he had risen, even under threat of death. Many were martyred. People don’t willingly die for something they know is a lie. The only thing that explains their courage is that they truly believed they had seen the risen Jesus.</p>

      <p>Fourth, the Jewish and Roman leaders could have crushed Christianity from the start by producing the body. But they never did. Instead, they accused the disciples of stealing it—which ironically proves the tomb was empty. Everyone agreed the body was gone. The only debate was about what happened to it.</p>

      <p>So is the resurrection a myth? No. The evidence points in the opposite direction: an early, consistent proclamation; unlikely witnesses; radical transformation of disciples; and an empty tomb no one could explain away. Combine that with the rise of a movement that exploded across the Roman Empire in the face of persecution, and you’re left with the conclusion that something extraordinary happened. The best explanation—the one that fits the facts—is the one Christians have held from the start: Jesus truly rose from the dead. And if that’s true, then death doesn’t get the last word. He does.</p>

      <h2>Why Are There So Many Hypocrites in the Church?</h2>
      <p>I’ll be blunt—this one stings because it’s true. The church has its fair share of hypocrites. People who preach love but act with hate. People who talk about humility but chase power. People who claim to follow Jesus but don’t look anything like Him. And for a lot of people, that’s enough to walk away from Christianity altogether.</p>

      <p>But here’s something worth noticing: Jesus himself couldn’t stand hypocrisy either. In fact, His harshest words weren’t aimed at atheists or outsiders but at religious leaders who said one thing and lived another. He called them “whitewashed tombs”—clean on the outside, rotten on the inside. If hypocrisy in the church turns you off, then in a strange way, you actually agree with Jesus. He hated it too.</p>

      <p>So what do we do with the hypocrisy we see today? First, we admit it’s real. Christians aren’t perfect. In fact, the entire message of the gospel is that we’re not perfect—that’s why we need grace. The church is a hospital for the sick, not a museum of saints. That doesn’t excuse bad behavior, but it reminds us that failure doesn’t disprove Christianity. If anything, it highlights why we need it.</p>

      <p>Second, we remember that Christianity doesn’t rise or fall on the behavior of Christians. It rises or falls on Christ Himself. If you reject Jesus because some of His followers are fake, you’re throwing out the cure because some patients aren’t following the doctor’s orders. Hypocrisy in the church should push us back to Jesus, not away from Him.</p>

      <p>At the end of the day, the presence of hypocrites in the church isn’t evidence against Christianity—it’s evidence of how badly we all need it. Jesus is the standard, not us. And the good news is that He isn’t a hypocrite. He lived exactly what He taught, fully man and fully God, consistent in both word and action. That’s why even when Christians fall short, Jesus is still worth following.</p>

      <h2>Isn’t the Bible Full of Myths and Errors?</h2>
      <p>For a lot of skeptics, this is the dealbreaker. If the Bible is just a book of myths and contradictions, then why take any of it seriously? Honestly, I get it. If Scripture is unreliable, then Christianity has no foundation. But when you actually look at the evidence, the Bible holds up far better than most people think.</p>

      <p>First, let’s talk history. The New Testament wasn’t written centuries after the fact, like some critics assume. The letters of Paul were circulating within 20–30 years of Jesus’ death. That’s within the lifetime of eyewitnesses who could have called out lies if they were being spread. And the Gospels were written in the same first-century world where the events happened, not in some far-off land of legends. That’s a huge difference between the Bible and actual mythologies like Greek or Norse stories, which took centuries to evolve.</p>

      <p>Second, the textual reliability of the Bible is off the charts compared to other ancient works. We have over 5,000 Greek manuscripts of the New Testament, plus thousands more in Latin and other languages. For comparison, the works of Homer—considered reliable by historians—have less than 700 surviving manuscripts. And those are spread across centuries. The sheer volume and consistency of biblical manuscripts gives us tremendous confidence that what we’re reading today is essentially what the early church was reading back then.</p>

      <p>Third, historians apply criteria to filter truth from fiction. Embarrassing details, like Peter denying Jesus three times, are unlikely to be fabrications. Multiple attestation—different sources recording the same event—strengthens credibility. And coherence—teachings that fit with already established facts—ties the picture together. By these measures, much of the Bible’s content about Jesus’ ministry, death, and resurrection passes the test. It doesn’t read like myth; it reads like real people recording real events in their own style.</p>

      <p>Now, does this mean the Bible is easy to interpret? No. Different denominations interpret passages differently, and sometimes Christians get it wrong. But disagreement over interpretation doesn’t equal unreliability. In fact, it shows how seriously people take the text. You don’t debate the meaning of a book unless you believe it matters.</p>

      <p>So is the Bible full of myths and errors? The evidence says no. What we have is an ancient text that has been preserved with remarkable accuracy, rooted in eyewitness testimony, and confirmed by historical method. And beyond the academic arguments, here’s what I believe: the Bible is more than a record of history. It’s the living Word of God. It points us not just to information, but to transformation through Jesus—100% man, 100% God—who stands at the center of its story.</p>

      <h2>Who Is the Real Jesus—Prophet, Revolutionary, or Son of God?</h2>
      <p>This is the question that really divides people. Was Jesus just another prophet? A failed revolutionary who went up against Rome and lost? Or was He something more? Every religion, every skeptic, every historian has to answer this one, because Jesus doesn’t let us put Him in a neat little box. He makes claims about Himself that force us to decide.</p>

      <p>Historically, there’s no doubt Jesus was seen as a prophet. He performed healings, taught with authority, and spoke about God’s kingdom. Crowds compared Him to Elijah or Jeremiah. Even non-Christian historians confirm He had a reputation as a miracle worker and teacher. That’s the “prophet” angle, and it’s accurate—but it’s incomplete.</p>

      <p>Some also try to paint Jesus as a revolutionary. After all, He clashed with religious authorities and was crucified—a Roman punishment often reserved for political rebels. But if Jesus was simply a revolutionary, He was a strange one. He never called His followers to take up swords against Rome. In fact, He told Peter to put his sword away. His revolution wasn’t about seizing power; it was about transforming hearts and reconciling people to God.</p>

      <p>And then there’s the third option—the one Christianity proclaims: Jesus is the Son of God. This isn’t a title the church invented centuries later; it’s embedded in the earliest sources. Jesus claimed authority to forgive sins (something only God could do), identified Himself as “I AM” (the divine name revealed to Moses), and accepted worship from His followers. Those are staggering claims for a Jewish teacher in the first century. No wonder the religious leaders saw Him as dangerous.</p>

      <p>C.S. Lewis once argued that Jesus doesn’t leave us with the option of calling Him just a good teacher. If His claims about Himself are false, He’s either a liar or delusional. But if they’re true, then He is who He said He is: fully man, fully God, the Son of the living God. That’s the real Jesus—the one who defies easy labels, who walked the dusty roads of Galilee as a human, but who also spoke with the authority of the Creator.</p>

      <p>So who is the real Jesus? Prophet? Revolutionary? Son of God? The evidence points to all three in some way, but the final identity is clear: He is God in the flesh. And that changes everything—not just how we view history, but how we view our own lives today.</p>

      <h2>Why Would God Love Someone Like Me?</h2>
      <p>I think this might be the most personal question of them all. It’s one thing to talk about history, evidence, and theology. But when the lights go out at night and you’re left with your own thoughts, this question can hit like a ton of bricks: Why would God ever love me? With all my flaws, my failures, my doubts, my mess—why me?</p>

      <p>First, let’s clear this up: God’s love isn’t something you earn. That’s what makes Christianity radically different from every other system. Most religions boil down to “do better, try harder, and maybe God will accept you.” But Christianity flips that on its head. The good news of the gospel is that God loves us while we’re still broken. Paul writes in Romans 5:8, “While we were still sinners, Christ died for us.” In other words, His love is not based on our performance—it’s based on His character.</p>

      <p>Second, the cross is proof of that love. Jesus—100% man and 100% God—didn’t just teach nice ideas about kindness. He stepped into our mess. He took the weight of sin and shame on Himself. When you look at the cross, you’re not looking at a distant God wagging His finger at you; you’re looking at a God who says, “I love you this much. I’d rather die for you than live without you.”</p>

      <p>Third, this love is deeply personal. We sometimes imagine God loving humanity in a vague, general sense—like He tolerates us because He has to. But Jesus made it clear that God knows us individually. He knows the number of hairs on your head. He knows your thoughts, your fears, your struggles. And He doesn’t turn away. He draws near.</p>

      <p>So why would God love someone like you—or me? Because that’s who He is. God is love. It’s His nature to give, to serve, to pursue. And the fact that we feel unworthy doesn’t cancel His love; it magnifies it. The gospel isn’t “clean yourself up so God will love you.” It’s “God loves you, and that love will begin to transform you.”</p>

      <p>If you’ve ever wondered whether you’re too far gone, remember this: Jesus didn’t come for people who had it all together. He came for the broken. He came for us. And that means, no matter what your past looks like, God’s answer to your question is simple and unshakable: Yes, I love you. Always.</p>

      <h2>Won’t Heaven Be Boring?</h2>
      <p>When most people picture heaven, they imagine clouds, harps, and maybe endless choir practice. Honestly? That sounds boring. I get why people think eternal life sounds like an endless yawn. But that stereotype isn’t the biblical picture at all. Heaven isn’t about escaping earth to float around forever—it’s about God restoring everything to what it was always meant to be.</p>

      <p>Think about the best moments you’ve ever had in life—laughing with friends until your stomach hurts, standing in awe of a sunset, hearing a song that gives you chills, or feeling the joy of being fully loved. Those moments are glimpses. They’re like appetizers for what’s coming. If even in a broken world we can taste joy and beauty, imagine what it’ll be like when God removes all the barriers of sin, suffering, and death.</p>

      <p>The Bible describes heaven as a renewed creation—new heavens and new earth. That means real life, real relationships, real purpose, but without the pain, injustice, or brokenness that weighs us down now. Work won’t feel like a grind. Relationships won’t fracture. Joy won’t fade. If God is the source of everything good we experience here, being with Him fully will be the opposite of boring—it’ll be the fullness of life we’ve always craved.</p>

      <p>And don’t forget: Jesus rose bodily from the grave. He ate, walked, talked, and interacted with His disciples after the resurrection. That points to our future too. Heaven isn’t a ghostly existence; it’s embodied life in a restored creation, with God Himself at the center. We’re not leaving the real world behind—we’re finally going to experience it the way it was always meant to be.</p>

      <p>So will heaven be boring? No. It will be the deepest adventure of all—joy without exhaustion, love without betrayal, purpose without futility, and beauty without decay. If anything, the problem won’t be boredom—it’ll be trying to take in all the glory that never ends.</p>

      <h2>Wrapping It Up</h2>
      <p>After walking through all these questions, here’s what I’ve realized: Christianity doesn’t crumble under scrutiny. The tough questions don’t expose it as fragile—they show it’s strong enough to handle our doubts. Whether we’re asking about Jesus’ existence, the problem of evil, the reality of hell, or the hope of heaven, the answers point back to the same place: Jesus Himself.</p>

      <p>History confirms He was real. Logic shows faith in Him isn’t irrational. The cross explains both God’s justice and His love. And the resurrection opens the door to hope that suffering, evil, and death don’t get the final word. Along the way, hypocrisy and doubt might cloud the picture, but the core remains: Jesus is fully man and fully God. That’s not a side detail—it’s the very reason He can stand with us in our weakness and stand for us in our salvation.</p>

      <p>I don’t claim to have solved every mystery. Some questions will always stretch us beyond what we can fully grasp. But here’s what I know: Christianity isn’t about escaping reality—it’s about facing it with hope. It’s not about blind faith—it’s about trusting the one who proved Himself trustworthy. And it’s not about perfection on our part—it’s about grace on His.</p>

      <p>So if you’re skeptical, I don’t expect one blog post to erase every doubt. But I hope it makes you pause. I hope it makes you take Jesus seriously—not just as a historical figure, not just as a wise teacher, but as the Son of God who lived, died, and rose again. Because if He really is who He says He is, then following Him isn’t just reasonable—it’s the most important decision you’ll ever make.</p>

    `
  },

  // --- Weekly posts (add 1 per week, newest dates later) ---
  {
    slug: "2025-09-22-weekly-note",
    title: "Weekly Note — How Long, O Lord? (Psalm 79:1–13)",
    date: "2025-09-22",
    excerpt: "Suffering is something every one of us will go through. So when we find ourselves asking, “How could God do this...",
    body: `
      <p>Suffering is something every one of us will go through. So when we find ourselves asking, “How could God do this to me?” we should instead pause and reflect. Are we really too good for suffering not to touch us? The truth is no one is exempt. Even if we don’t say it aloud, most of us will quietly admit it.</p>

      <p>Suffering is often a catalyst God uses to bring us back to Him.</p>

      <p>Throughout Scripture, we see the contrast between kings who walked under God’s vision and those who strayed. Time and time again, God sent prophets to correct those who rebelled against His ways. Brokenness has always followed from ignoring God, and suffering is often the fruit of that brokenness.</p>

      <p>So suffering does not happen without reason. It becomes, in God’s hands, a rod of discipline to win us back.</p>

      <h2>A Closer Look at Psalm 79</h2>
      <p>Israel, once a holy land, is described as defiled: “They have defiled your holy temple.” Notice their response. It isn’t, “Why is this happening to me?” but rather, “Lord, Your name and Your glory are being dishonored.” Their grief is directed toward the desecration of God’s holiness, not their own discomfort.</p>

      <p>If they had cried out, “Why me?” it would have placed themselves above Him. That’s a posture of pride. Instead, their concern is rightly focused: the honor of God’s name.</p>

      <p>So here’s the question: when we suffer, do we shift blame to God, humiliating Him before others? Or do we endure as lights for the gospel, preserving His name in our weakness?</p>

      <h2>How Do We Deal With Suffering?</h2>
      <p>Psalm 79 doesn’t leave us guessing. Verse 13 points us toward the answer: recount your blessings. Give thanks. Praise God.</p>

      <p>That is the heart of this psalm. In suffering, gratitude is not optional—it’s the key.</p>

      <h2>Three Questions to Ask in Our Suffering</h2>
      <ul>
        <li>Am I continuing to care about God’s glory? (vv. 1–4)</li>
        <li>Am I humbly self-reflecting? (vv. 5–9)</li>
        <li>Am I being God’s witness through it? (vv. 10–13)</li>
      </ul>

      <p>Suffering, then, is not random. It is a holy summons. In our pain, will we glorify God, humble ourselves, and remain His witness? Or will we turn the focus inward, missing the very purpose behind the trial?</p>

      <p>Psalm 79 reminds us: God disciplines not to destroy, but to draw us back. And in our suffering, our response should always be worship.</p>
    `
  },

  // add more weekly posts below ⬇︎ (copy the object, change slug/title/date/excerpt/body)
]


function FaithBlogPage({ slug }) {
  // sort: pinned first, then newest → oldest
  const posts = useMemo(() => {
    const copy = FAITH_POSTS.slice();
    copy.sort((a, b) => {
      if ((b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) !== 0) {
        return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0); // pinned first
      }
      return new Date(b.date) - new Date(a.date);
    });
    return copy;
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (!slug) return;
    const id = `faith-post-${slug}`;
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [slug, location.key]);

  return (
    <div className="min-h-screen bg-[#15181b] text-zinc-200">
      <div className="container container-wide py-10 md:py-14">
        <div className="max-w-[var(--blog-max)] mx-auto mb-3 flex items-center justify-between gap-3">
          <a
            href="#/"
            className="text-xs text-zinc-400 underline decoration-zinc-600 underline-offset-4 hover:text-zinc-200"
          >
            ← Home
          </a>
          <a
            href="#/blog"
            className="text-xs text-zinc-400 underline decoration-zinc-600 underline-offset-4 hover:text-zinc-200"
          >
            Main Blog →
          </a>
        </div>

        <header className="article-hero">
          <h1 className="article-title">Faith Notes</h1>
          <div className="article-meta-row flex justify-center text-center uppercase tracking-[0.18em] text-[11px] text-zinc-400 mt-2 mb-6">
            <span>Pinned post at the top • Weekly learnings follow</span>
          </div>
        </header>

        <div className="space-y-14">
          {posts.map((post) => {
            const words = post.body.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
            const readMins = Math.max(1, Math.round(words / 200));
            const dt = new Date(post.date).toLocaleDateString();
            return (
              <article key={post.slug} id={`faith-post-${post.slug}`} className="blog-article">
                <header className="mb-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span>{dt} • {readMins} min read</span>
                    {post.pinned && (
                      <span className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-300">
                        Pinned
                      </span>
                    )}
                  </div>
                  <h2 className="article-title mt-1">{post.title}</h2>
                </header>

                <hr className="blog-separator" />

                <div
                  className="blog-body"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}


function FaithTeaser() {
  if (!FAITH_POSTS.length) return null;

  // Find pinned (if any) and the latest non-pinned
  const pinned = FAITH_POSTS.find(p => p.pinned);
  const latestNonPinned = FAITH_POSTS
    .filter(p => !p.pinned)
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  // Nothing to show?
  if (!pinned && !latestNonPinned) return null;

  const TeaserCard = ({ post, label }) => {
    const date = new Date(post.date).toLocaleDateString();
    return (
      <a href={`#/faith/${post.slug}`} className="block mt-6">
        <div className="grid grid-cols-[9ch,1fr] gap-5">
          <time className="text-xs text-zinc-500 pt-1">{date}</time>
          <div className="border-l border-white/10 pl-4">
            <div className="text-xl md:text-2xl font-medium text-zinc-100 flex items-center gap-2">
              {post.title}
              {post.pinned && (
                <span className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-300">
                  Pinned
                </span>
              )}
            </div>
            <p className="mt-1 text-[15px] leading-7 text-zinc-400">
              {post.excerpt}
            </p>
            <div className="mt-3 pt-3 border-t border-white/10 text-sm text-zinc-300">
              {label} →
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section className="section" id="faith">
      <div>
        <div className="flex items-baseline justify-between">
        <h2 className="h2 flex items-center gap-2">
          Faith Notes
          <FontAwesomeIcon icon={faCross} className="text-white/95 text-[20px]" />
        </h2>
          <a
            href={pinned ? `#/faith/${pinned.slug}` : `#/faith/${latestNonPinned.slug}`}
            className="text-sm underline decoration-zinc-600 underline-offset-4 hover:opacity-80"
          >
            Open faith page
          </a>
        </div>

        {/* 1) Pinned (if present) */}
        {pinned && <TeaserCard post={pinned} label="Pinned post" />}

        {/* 2) Latest weekly (if present) */}
        {latestNonPinned && (
          <div className="mt-4">
            <TeaserCard post={latestNonPinned} label="Latest weekly note" />
          </div>
        )}
      </div>
    </section>
  );
}



function BlogPage({ slug }) {
  // sort newest → oldest by date
  const posts = useMemo(
    () => BLOG_POSTS.slice().sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  )

  // smooth-scroll to post if slug is present
  const location = useLocation()
  useEffect(() => {
    if (!slug) return
    const id = `post-${slug}`
    // delay until DOM paints
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [slug, location.key])

  return (
    <div className="min-h-screen bg-[#15181b] text-zinc-200">
      <div className="container container-wide py-10 md:py-14">
        <div className="max-w-[var(--blog-max)] mx-auto mb-3">
          <a
            href="#/"
            className="text-xs text-zinc-400 underline decoration-zinc-600 underline-offset-4 hover:text-zinc-200"
          >
            ← Home
          </a>
        </div>
        <header className="article-hero">
          <h1 className="article-title">Blog Dump</h1>
          <div className="article-meta-row flex justify-center text-center uppercase tracking-[0.18em] text-[11px] text-zinc-400 mt-2 mb-6">
            <span>New posts appear at the top</span>
          </div>
        </header>


        <div className="space-y-14">
          {posts.map((post) => {
            const words = post.body.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length
            const readMins = Math.max(1, Math.round(words / 200))
            const dt = new Date(post.date).toLocaleDateString()
            return (
              <article key={post.slug} id={`post-${post.slug}`} className="blog-article">
                <header className="mb-2">
                  <div className="text-xs text-zinc-400">{dt} • {readMins} min read</div>
                  <h2 className="article-title mt-1">{post.title}</h2>
                </header>

                <hr className="blog-separator" />

                <div
                  className="blog-body"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}


/* helper to read :slug into a component */
function RouteRenderer({ component }) {
  const params = useParams()
  return component(params)
}

function BlogTeaser() {
  const posts = BLOG_POSTS.slice().sort((a,b)=> new Date(b.date)-new Date(a.date))
  const p = posts[0]
  if (!p) return null
  const date = new Date(p.date).toLocaleDateString()

  return (
    <section className="section" id="blog">
      <div>
        <div className="flex items-baseline justify-between">
          <h2 className="h2">Personal Blog</h2>
          <a
            href={`#/blog/${p.slug}`}
            className="text-sm underline decoration-zinc-600 underline-offset-4 hover:opacity-80"
          >
            Latest post
          </a>
        </div>

        <a href={`#/blog/${p.slug}`} className="block mt-6">
          <div className="grid grid-cols-[9ch,1fr] gap-5">
            <time className="text-xs text-zinc-500 pt-1">{date}</time>
            <div className="border-l border-white/10 pl-4">
              <div className="text-xl md:text-2xl font-medium text-zinc-100">
                {p.title}
              </div>
              <p className="mt-1 text-[15px] leading-7 text-zinc-400">
                {p.excerpt}
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 text-sm text-zinc-300">
                Read on blog →
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}



function Home({ data }) {
  return (
    <div className="min-h-screen bg-[#15181b] text-zinc-200">
      <Header data={data} />
      <main className="container">
        <Summary data={data} />
        <Education data={data} />
        <Coursework data={data} />
        <BlogTeaser />
        <FaithTeaser /> 
        <Timeline data={data} />
      </main>
      <SiteFooter data={data} />
    </div>
  )
}


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        {/* One blog page; optional slug scrolls to that post */}
        <Route
          path="/blog/:slug?"
          element={<RouteRenderer component={(p) => <BlogPage slug={p.slug} />} />}
        />
        {/* Faith page */}
        <Route
          path="/faith/:slug?"
          element={<RouteRenderer component={(p) => <FaithBlogPage slug={p.slug} />} />}
        />
        <Route path="*" element={<Home data={data} />} />
      </Routes>
    </HashRouter>
  )
}

function Header({data}){
  return (
    <header className="bg-[#0f1215]/90 border-b border-white/10 sticky top-0 z-30 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <a href="#/" className="font-semibold text-white hover:opacity-90">{data.name}</a>
        <nav className="flex items-center gap-3">
          <a className="link text-sm" href="#education">Education</a>
          <a className="link text-sm" href="#projects">Projects</a>
          <a className="btn btn-ghost text-sm" href={data.links.resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  )
}

function Summary({ data }) {
  return (
    <section className="section" id="top">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-start gap-6 md:gap-12">
        {/* LEFT: photo */}
        <div className="w-full flex justify-center md:block md:w-auto md:pt-1">
          <img
            src={data.photo}
            alt="Eric Ahn"
            className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover ring-2 ring-white/20"
          />
        </div>

        {/* RIGHT: headline + blurb + actions */}
        <div className="min-w-0 md:pt-1 text-center md:text-left">
          <h1 className="h1 leading-tight break-words">{data.role}</h1>

          <p className="mt-3 text-zinc-300 md:max-w-none whitespace-pre-line">
            {data.summary}
          </p>

          {/* wraps on mobile, centers; left-aligns on md+ */}
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            <a className="btn btn-ghost gap-2" href={data.links.github} target="_blank" rel="noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.1c-3.22.71-3.9-1.36-3.9-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.22 1.79 1.22 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.57-.29-5.27-1.29-5.27-5.74 0-1.27.45-2.31 1.2-3.13-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.82 1.2 1.86 1.2 3.13 0 4.46-2.71 5.44-5.29 5.73.42.36.8 1.07.8 2.16v3.21c0 .32.21.69.8.57A11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
              GitHub
            </a>

            <a className="btn btn-ghost gap-2" href={data.links.linkedin} target="_blank" rel="noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.24-3.5 2.95V21h4v-6.1c0-1.13.8-1.9 1.88-1.9 1.05 0 1.62.72 1.62 1.9V21h4v-6.78C22.5 10.86 21 9 18.6 9c-1.54 0-2.6.68-3.1 1.49V9h-1z"/>
              </svg>
              LinkedIn
            </a>

            <a className="btn btn-ghost gap-2" href={data.links.email}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/>
              </svg>
              Email
            </a>

            <a className="btn btn-ghost" href="#projects">See Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}





function Timeline({data}){
  // newest -> oldest
  const items = data.projects.slice().sort((a,b)=>{
    // sort by approximate end date (month/year parsing lightweight)
    const toKey = p => {
      const m = /\b([A-Za-z]{3})\s(\d{4})/.exec(p.period.split('–').pop().trim())
      const months = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12}
      if (!m) return 0
      return parseInt(m[2])*12 + (months[m[1]]||0)
    }
    return toKey(b)-toKey(a)
  })

  return (
    <section className="section" id="projects">
      <div className="flex items-baseline gap-3">
        <h2 className="h2">Featured Projects</h2>
        <span className="text-xs italic text-zinc-400">(from newest to oldest)</span>
      </div>
      <div className="relative mt-6">
        <div className="timeline-line" />
        <ol className="space-y-6">
          {items.map((p, idx)=> (
          <li key={p.title} className="relative sm:pl-12">
            <span className="timeline-dot mt-[28px]" />
              <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="h3">{p.title}</h3>
                  <span className="small">{p.period}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.summary}</p>
                {p.media?.length ? (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {p.media.map((m,i)=> (
                      <img key={i} src={m.src} alt={m.alt} loading="lazy"
                        className="rounded-lg border border-white/15 object-cover w-full h-24"
                        sizes="(min-width: 768px) 25vw, 50vw" />
                    ))}
                  </div>
                ): null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost">{l.label}</a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Education({ data }) {
  const LOGOS = {
    "New Jersey Institute of Technology": { src: "/njit.png",  alt: "NJIT" },
    "Emory University":                    { src: "/emory.png", alt: "Emory" },
  };

  return (
    // ↓ tighten section padding top/bottom
    <section className="section pt-4 md:pt-6 pb-4 md:pb-6" id="education">
      <h2 className="h2">Education</h2>

      {/* ↓ smaller top margin and gap between cards */}
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 items-stretch">
        {data.education.map((e) => {
          const logo = LOGOS[e.school];
          return (
            // ↓ a bit less padding + slightly lower min-height
            <li
              key={e.school}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 md:p-5 min-h-[128px] h-full"
            >
              {/* ↓ reduce internal gap a hair */}
              <div className="grid grid-cols-[64px,1fr,auto] items-center gap-3 h-full">
                <img
                  src={logo?.src}
                  alt={logo?.alt || e.school}
                  className="h-12 w-12 md:h-14 md:w-14 object-contain"
                />
                <div className="min-w-0">
                  <div className="text-white font-semibold text-base md:text-lg leading-tight">
                    {e.school}
                  </div>
                  <div className="text-xs md:text-[13px] text-zinc-400 mt-1 leading-snug">
                    {e.detail}
                  </div>
                </div>
                {/* ↓ slightly smaller pill padding */}
                <span className="justify-self-end self-center rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-300">
                  {e.period}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}



function Coursework({ data }) {
  if (!data.coursework?.length) return null;

  // School color (legend + per-row left dot)
  const SCHOOL = {
    Emory: { dot: "bg-sky-400" },     // blue
    NJIT:  { dot: "bg-rose-400" },    // red/rose
    default: { dot: "bg-slate-400" }
  };

  // Status color (second dot on the right)
  // Rule: NJIT => in progress (yellow); everything else => completed (green)
  const statusDot = (school) =>
    (school === "NJIT" ? "bg-yellow-400" : "bg-green-400");

  // Term sorting (newest → oldest)
  const TERM_ORDER = { Winter: 1, Spring: 2, Summer: 3, Fall: 4 };
  const termKey = (term = "") => {
    const m = term.match(/(Winter|Spring|Summer|Fall)\s+(\d{4})/i);
    if (!m) return -Infinity;
    const season = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
    const year = parseInt(m[2], 10);
    return year * 10 + (TERM_ORDER[season] ?? 0);
  };
  const groups = data.coursework.map((g) => ({
    ...g,
    items: g.items.slice().sort((a, b) => termKey(b.term) - termKey(a.term)),
  }));

  return (
    <section className="section" id="coursework">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="h2">Relevant Coursework</h2>

        {/* Legend (visible on mobile, wraps if needed) */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 text-[11px] sm:text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-[3px] bg-rose-400" /> NJIT
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-[3px] bg-sky-400" /> Emory
          </span>
          <span aria-hidden className="mx-1 h-3 sm:h-4 w-px rounded bg-white/40 shrink-0" />
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400" /> In&nbsp;Progress
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400" /> Completed
          </span>
        </div>
      </div>


      {/* Cards */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {groups.map((g) => (
          <article key={g.group} className="card p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-white font-medium">{g.group}</h3>
              <span className="small">{g.items.length} course{g.items.length > 1 ? "s" : ""}</span>
            </div>

            <ul className="mt-3 divide-y divide-white/10">
              {g.items.map((c, i) => {
                const schoolStyle = SCHOOL[c.school] ?? SCHOOL.default;
                return (
                  <li key={i} className="py-1.5 first:pt-0 last:pb-0">
                    <div className="grid grid-cols-[5.75rem,1fr,auto] items-center gap-3 text-xs md:text-[13px] leading-tight">
                      {/* Code badge */}
                      <span className="w-[5.75rem] text-center rounded-md border border-white/15 px-2 py-0.5 text-zinc-200">
                        {c.code}
                      </span>

                      {/* Course title */}
                      <span className="text-zinc-300 truncate">{c.title}</span>

                      {/* Right: school square + status circle + term */}
                      <span className="flex items-center gap-2 text-zinc-400 whitespace-nowrap">
                        <span
                          className={`h-2.5 w-2.5 rounded-[3px] ${schoolStyle.dot}`}
                          title={c.school}
                        />
                        <span
                          className={`h-2 w-2 rounded-full ${statusDot(c.school)}`}
                          title={c.school === "NJIT" ? "In progress" : "Completed"}
                        />
                        <span>· {c.term}</span>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}



function SiteFooter({data}){
  return (
    <footer className="border-t border-white/10 mt-6">
      <div className="container py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {data.name}</p>
        <div className="flex items-center gap-3">
          <a className="link" href="#top">Top</a>
          <a className="link" href={data.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="link" href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
