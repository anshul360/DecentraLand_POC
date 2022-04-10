export let signText = new Entity()
//signText.setParent(extLink)
let text = new TextShape(
  "More About World's #1 CRM"
)
text.fontSize = 10
text.color = Color3.FromHexString("#07086e")
text.font = new Font(Fonts.SansSerif_SemiBold)
text.width = 10
text.textWrapping = true

signText.addComponentOrReplace(text)

signText.addComponent(
  new Transform({
    position: new Vector3(40, 3.6, 62.95),
    rotation: Quaternion.Euler(0, 30, 0),
  })
)

export const extLink = new Entity()
extLink.addComponent(new PlaneShape())
extLink.addComponent(
  new Transform({ 
    position: new Vector3(40, 3.5, 63),
    scale: new Vector3(10, 7, 1),
    rotation: Quaternion.Euler(0, 30, 0),
    
  })
)
extLink.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://www.salesforce.com")
  },
  { hoverText: "Visit www.Salesforce.com!" })
)

engine.addEntity(extLink)
engine.addEntity(signText)