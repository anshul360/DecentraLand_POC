import { ButtonData, Dialog } from '@dcl/npc-scene-utils'
import { alice } from './bot'
import { convertLead } from './convertLead'
import { createLead } from './createLead'
import { createOpptyLineItems } from './createOpptyLineItems'
import { createOrder } from './createOrder'
import { products, visitedProducts, Product } from './listProducts'
import { createScreen, prodVidPlay, destroyScreen } from './playProductVideo'
import { queryPriceBookEntry } from './sfUtil'

let additionalDialog: Dialog[] = []

export let AliceDialog: Dialog[] = [
  {
    text: "Hi, I'm Alice - welcome to Salesforce Tower!"
  },
  {
    text: 'Are you interested in knowing more about Salesforce products?',
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 3, 
        triggeredActions: () => {
          additionalDialog.forEach((value, index, array) => {AliceDialog.push(value)})
          createLead()
        }
      },
      { label: 'No', goToDialog: 2 }
    ]
  },
  {
    text: "Okay, I'll be around if you get curious!",
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    text: 'We have wide range of business solutions to offer. Following are our core offerings. Click to see more details.',
    isQuestion: true,
    buttons: buildButtonsAndDialogs()
    
  }
]

function buildButtonsAndDialogs() { //createScreen("");
    let buttons: ButtonData[] = []
    products.forEach((value, index, arr) => {
        buttons.push({label: value.name, goToDialog: 4 + index, triggeredActions: async () => {
          await convertLead()
          if(value.priceBookEntryId === "")
            await queryPriceBookEntry(value.name)
        }})
        additionalDialog.push({
          text: value.detail,
          isQuestion: true,
          buttons: [
            {
              label: "Watch Demo",
              goToDialog: 4 + arr.length,
              triggeredActions: () => { loadVideo(value) }
            }
          ]
        })
    })

    additionalDialog.push({
      text: "Do you wish to check other Products?",
      isQuestion: true,
      buttons: [
        {label: "Yes", goToDialog: 3, triggeredActions: () => {destroyScreen()}},
        {label: "No", goToDialog: 4 + products.length + 1, triggeredActions: async () => {
          destroyScreen()
          await createOpptyLineItems()
        }}
      ]
    })

    additionalDialog.push({
      text: 'Okay, so do you want to buy the cool products you just checked out?',
      isQuestion: true,
      buttons: [
        {label: "Yes", goToDialog: 4 + products.length + 3, triggeredActions: async () => {await createOrder()}},
        {label: "No", goToDialog: 4 + products.length + 2}
      ]
    })

    additionalDialog.push({
      text: 'Visit us again whenever you feel like. Have a great day!',
      isEndOfDialog: true,
      triggeredByNext: () => {
        alice.playAnimation('Goodbye', true, 2)
      }
    })

    additionalDialog.push({
      text: `You are Awesome! I've created the Order for you.`,
      isQuestion: true,
      buttons: [
        // {label: "Show Order", goToDialog: 4 + products.length + 2, triggeredActions: async () => {
        //   log("================before===============")
        //   await createOrder()
        //   log("================after================")
        // }},
        {label: "Thanks!", goToDialog: 4 + products.length + 2}
      ]
    })
    return buttons
}

function loadVideo(product: Product) {
  visitedProducts.push(product)
  createScreen(product.videoLink);
  log("=========PBE ID======================>")
  log(product.priceBookEntryId)
  prodVidPlay()
}
