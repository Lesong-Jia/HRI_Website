const headList1 = [
  'Strongly disagree',
  'Disagree',
  'Somewhat disagree',
  'Neither agree or Disagree',
  'Somewhat agree',
  'Agree',
  'Strongly agree'
]
const headList2 = [
  'not at all',
  'Rarely',
  'Occasionally',
  'Sometimes',
  'Often',
  'Very often',
  'All the time'
]

const headList3 = [
  'don’t know or incorrect',
  'correct',
]

const headList4 = [
  'Strongly Disagree<br>1',
  '<br><br>2',
  '<br><br>3',
  'Neutral<br><br>4',
  '<br><br>5',
  '<br><br>6',
  'Strongly Agree<br>7'
]

const headList5 = [
  'Strongly Disagree<br>1',
  '<br><br>2',
  'Neutral<br><br>3',
  '<br><br>4',
  'Strongly Agree<br>5'
]

const headList6 = [
  'Definitely Disagree',
  'Slightly Disagree',
  'Slightly Agree',
  'Definitely Agree'
]

const questionList1 = [
  {
    key: "quest1",
    content:
      "I would carefully read through the whole privacy policy before I click ‘consent’.",
  },
  {
    key: "quest2",
    content:
      "I would check back on the privacy policy when I get notifications from VR service providers that they are going to collect certain types of data from me.",
  },
  {
    key: "quest3",
    content:
      "I have personally experienced incidents whereby my personal information was used by some VR applications without my authorization.",
  },
  {
    key: "quest4",
    content:
      "I have been a victim of what I feel was an improper invasion of privacy.",
  },
  {
    key: "quest5",
    content:
      "Since I started using VR products, I have heard or read about the use and potential misuse of information collected from my VR product usage."
  },
]

const questionList2 = [
  {
    key: "quest1",
    content:
      "I am concerned that VR applications are collecting too much information about me."
  },
  {
    key: "quest2",
    content:
      "I am concerned that VR applications may monitor my activities on VR devices"
  },
  {
    key: "quest3",
    content:
      "As a result of using VR applications, I am concerned that other people would know me more than I am comfortable with."
  },
  {
    key: "quest4",
    content:
      "As a result of using VR applications, I am concerned that information about me which I consider private is now more readily available to others than I would want."
  },
  {
    key: "quest5",
    content:
      "As a result of using VR applications, I am concerned that information which I provided to VR companies would be misused by others."
  },
  {
    key: "quest6",
    content:
      "I am concerned that VR applications may use my personal information for other purposes without notifying me or getting my authorization."
  },
  {
    key: "quest7",
    content:
      "When I give personal information to use VR applications, I am concerned that applications may use my information for other purposes."
  },
  {
    key: "quest8",
    content:
      "I am concerned that VR apps may share my personal information with other entities without getting my authorization."
  },
  {
    key: "quest9",
    content:
      "Providing a VR company with my personal information would involve many unexpected problems."
  },
  {
    key: "quest10",
    content:
      "It would be risky to disclose my personal information to a VR company."
  },
  {
    key: "quest11",
    content:
      "Please select ‘Somewhat agree’ for this question."
  },
  {
    key: "quest12",
    content:
      "There would be high potential for loss with disclosing my personal information to a VR company."
  },
]

const questionList3 = [
  {
    key: "quest1",
    content:
      "I would use the VR platform’s privacy policies for risk assessment of my privacy."
  },
  {
    key: "quest2",
    content:
      "I can find out which party has the data that my VR device collected."
  },
  {
    key: "quest3",
    content:
      "I can find out what data my VR device collected."
  },
  {
    key: "quest4",
    content:
      "I can identify violations of my privacy rights."
  },
  {
    key: "quest5",
    content:
      "I can find out about important privacy and security updates about my VR device."
  },
  {
    key: "quest6",
    content:
      "I can keep track of my privacy implications when I link multiple VR devices or accounts."
  },
  {
    key: "quest7",
    content:
      "I can get the information I need to delete my data stored on my devices."
  },
  {
    key: "quest8",
    content:
      "I can delete the data stored in a cloud if I no longer want to use my devices."
  },
  {
    key: "quest9",
    content:
      "I can learn the technological know-how to understand my devices’ technical data sheets."
  },
  {
    key: "quest10",
    content:
      "I can detect when interfaces are designed to influence my decisions about security options."
  },
  {
    key: "quest11",
    content:
      "I can identify violations of my privacy rights by a device feature."
  },
  {
    key: "quest12",
    content:
      "I can get in touch with a manufacturer’s data protection officer when necessary."
  },
  {
    key: "quest13",
    content:
      "I can disable my devices in case of a security attack."
  },
]

const questionList4 = [
  {
    key: "quest1",
    content:
      "When I want to feel more positive emotion (such as joy or amusement), I change what I’m thinking about. ",
  },
  {
    key: "quest2",
    content:
      "I keep my emotions to myself.",
  },
  {
    key: "quest3",
    content:
      "When I want to feel less negative emotion (such as sadness or anger), I change what I’m thinking about.",
  },
  {
    key: "quest4",
    content:
      "When I am feeling positive emotions, I am careful not to express them.",
  },
  {
    key: "quest5",
    content:
      "When I’m faced with a stressful situation, I make myself think about it in a way that helps me stay calm.",
  },
  {
    key: "quest6",
    content:
      "I control my emotions by not expressing them.",
  },
  {
    key: "quest7",
    content:
      "When I want to feel more positive emotion, I change the way I’m thinking about the situation.",
  },
  {
    key: "quest8",
    content:
      "I control my emotions by changing the way I think about the situation I’m in.",
  },
  {
    key: "quest9",
    content:
      "When I am feeling negative emotions, I make sure not to express them.",
  },
  {
    key: "quest10",
    content:
      "Please select ‘5’ for this question."
  },
  {
    key: "quest11",
    content:
      "When I want to feel less negative emotion, I change the way I’m thinking about the situation.",
  },
]

const questionList5 = [
  {
    key: "quest1",
    content:
      "I usually trust social robots until there is a reason not to.",
  },
  {
    key: "quest2",
    content:
      "For the most part, I distrust social robots.",
  },
  {
    key: "quest3",
    content:
      "In general, I would rely on a social robot to assist me.",
  },
  {
    key: "quest4",
    content:
      "My tendency to trust social robots is high.",
  },
  {
    key: "quest5",
    content:
      "It is easy for me to trust social robots to do their job."
  },
  {
    key: "quest6",
    content:
      "I am likely to trust social robots even when I have little knowledge about them."
  },
]
const questionList6 = [
  {
    key: "quest1",
    content:
      "Taking risks makes life more fun.",
  },
  {
    key: "quest2",
    content:
      "My friends would say that I am a risk-taker.",
  },
  {
    key: "quest3",
    content:
      "I enjoy taking risks in most aspects of my life.",
  },
  {
    key: "quest4",
    content:
      "I would take a risk even if it meant I might get hurt.",
  },
  {
    key: "quest5",
    content:
      "I commonly make risky decisions."
  },
  {
    key: "quest6",
    content:
      "I am a believer in taking chances."
  },
  {
    key: "quest7",
    content:
      "I am attracted to, rather than scared by risk."
  },
]
const questionList7 = [
  {
    key: "quest1",
    content:
      "I find it easy to put myself in somebody else’s shoes.",
  },
  {
    key: "quest2",
    content:
      "I am good at predicting how someone will feel.",
  },
  {
    key: "quest3",
    content:
      "I am quick to spot when someone in a group is feeling awkward or uncomfortable.",
  },
  {
    key: "quest4",
    content:
      "Other people tell me I am good at understanding how they are feeling and what they are thinking.",
  },
  {
    key: "quest5",
    content:
      "I find it hard to know what to do in a social situation."
  },
  {
    key: "quest6",
    content:
      "I often find it hard to judge if something is rude or polite."
  },
  {
    key: "quest7",
    content:
      "It is hard for me to see why some things upset people so much."
  },
  {
    key: "quest8",
    content:
      "Other people often say that I am insensitive, though I don’t always see why."
  },
]
const allQuestList = [
  {
    headList: [...headList4],
    questList: [...questionList4]
  },
  {
    headList: [...headList4],
    questList: [...questionList5]
  },
  {
    headList: [...headList5],
    questList: [...questionList6]
  },
  {
    headList: [...headList6],
    questList: [...questionList7]
  },
]
const allQuestList2 = [
  {
    headList: [...headList4],
    questList: [...questionList5]
  },
]
const allQuestList3 = [
  {
    headList: [...headList5],
    questList: [...questionList6]
  },
]
const allQuestList4 = [
  {
    headList: [...headList6],
    questList: [...questionList7]
  },
]
export {
  headList1,
  allQuestList,
}