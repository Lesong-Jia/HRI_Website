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
  'Very Negative',
  'Negative',
  'Somewhat Negative',
  'Neutral',
  'Somewhat Positive',
  'Positive',
  'Very Positive'
]
const questionList1 = [
  {
    key: "quest1",
    content:
      'Please indicate the extent of the outcome of the scenario you just encountered:'
  },
]
const questionList2 = [
  {
    key: "quest1",
    content:
      "I would consent to share my data in this scenario."
  },
  {
    key: "quest2",
    content:
      "please provide a reason for your rating on the above question: "
  },
  {
    key: "quest3",
    content:
      "I have encountered or I will encounter similar situation in my past or future usage of VR Applications."
  }
]


const questionList3 = [
  {
    key: "quest1",
    content:
      "The VR application in this scenario fulfills its promise about privacy policy to its users."
  },
  {
    key: "quest2",
    content:
      "The VR application in this scenario is honest to its users."
  },
  {
    key: "quest3",
    content:
      "The VR application in this scenario maintains values I approve of."
  },
]

const questionList4 = [
  {
    key: "quest1",
    content:
      "In this scenario, providing this corresponding VR application with my personal information would involve unexpected problems."
  },
  {
    key: "quest2",
    content:
      "In this scenario, it would be risky to disclose my personal information to the corresponding VR service provider."
  },
  {
    key: "quest3",
    content:
      "In this scenario, there would be high potential for loss with disclosing my personal information to the corresponding VR service provider"
  },
]


const afterGameQuesList = [
  {
    headList: [...headList2],
    questList: [...questionList1]
  },
  {
    headList: [...headList1],
    questList: [...questionList2]
  },
  {
    headList: [...headList1],
    questList: [...questionList3]
  },
  {
    headList: [...headList1],
    questList: [...questionList4]
  }
]
export {
  afterGameQuesList
}