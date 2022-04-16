import { ButtonData, Dialog } from '@dcl/npc-scene-utils'
import { alice } from './bot'
import { products, visitedProducts, Product } from './listProducts'
import { createScreen, prodVidPlay, prodVidPause } from './playProductVideo'

export let AliceDialog: Dialog[] = [
  {
    text: "Hi, I'm Alice - welcome to Salesforce Tower!"
  },
  {
    text: 'Are you interested in knowing more about Salesforce products?',
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 3 },
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
    buttons: buildButtons()
    
  }
]

function buildButtons() {
    let buttons: ButtonData[] = []
    
    products.forEach((value, index, arr) => {
        buttons.push({label: value.name, goToDialog: 4 + index})
        AliceDialog.push({
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

    AliceDialog.push({
      text: "Do you wish to check other Products?",
      isQuestion: true,
      buttons: [
        {label: "Yes", goToDialog: 3},
        {label: "No", goToDialog: 4 + products.length + 1}
      ]
    })

    AliceDialog.push({
      text: 'Okay, so do you want to buy the cool products you just checked out?',
      isQuestion: true,
      buttons: [
        {label: "Yes", goToDialog: 3},
        {label: "No", goToDialog: 4 + products.length + 1}
      ]
    })

    AliceDialog.push({
      text: 'Okay, so do you want to buy any of the cool products you just checked out?',
      isEndOfDialog: true,
      triggeredByNext: () => {
        alice.playAnimation('Goodbye', true, 2)
      }
    })

    return buttons
}

function loadVideo(product: Product) {
  visitedProducts.push(product)
  createScreen(product.videoLink);

}
