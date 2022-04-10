//import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
//import Script1 from "../feea5fb9-6ee8-479e-8755-0eed817a2931/src/item"
//import Script2 from "../7cd4d0bc-54d4-4f64-8ab2-6f18f41f03a3/src/item"
import { screen, vidPlay, vidPause } from "./sfMarketingVedio"
import { signText, extLink } from './visitLink'
import { logUserData } from './userData'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/baseScene.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 1, 5)
}) 
entity.addComponentOrReplace(transform2)
/*
const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(16, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform18)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform19)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene)
entity19.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform20)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene)
entity20.addComponentOrReplace(gltfShape)
const transform21 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform21)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene)
entity21.addComponentOrReplace(gltfShape)
const transform22 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform22)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene)
entity22.addComponentOrReplace(gltfShape)
const transform23 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform23)

const entity23 = new Entity('entity23')
engine.addEntity(entity23)
entity23.setParent(_scene)
entity23.addComponentOrReplace(gltfShape)
const transform24 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity23.addComponentOrReplace(transform24)

const entity24 = new Entity('entity24')
engine.addEntity(entity24)
entity24.setParent(_scene)
entity24.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity24.addComponentOrReplace(transform25)

const entity25 = new Entity('entity25')
engine.addEntity(entity25)
entity25.setParent(_scene)
entity25.addComponentOrReplace(gltfShape)
const transform26 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity25.addComponentOrReplace(transform26)

const entity26 = new Entity('entity26')
engine.addEntity(entity26)
entity26.setParent(_scene)
entity26.addComponentOrReplace(gltfShape)
const transform27 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity26.addComponentOrReplace(transform27)

const entity27 = new Entity('entity27')
engine.addEntity(entity27)
entity27.setParent(_scene)
entity27.addComponentOrReplace(gltfShape)
const transform28 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity27.addComponentOrReplace(transform28)

const entity28 = new Entity('entity28')
engine.addEntity(entity28)
entity28.setParent(_scene)
entity28.addComponentOrReplace(gltfShape)
const transform29 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity28.addComponentOrReplace(transform29)

const entity29 = new Entity('entity29')
engine.addEntity(entity29)
entity29.setParent(_scene)
entity29.addComponentOrReplace(gltfShape)
const transform30 = new Transform({
  position: new Vector3(72, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity29.addComponentOrReplace(transform30)

const entity30 = new Entity('entity30')
engine.addEntity(entity30)
entity30.setParent(_scene)
entity30.addComponentOrReplace(gltfShape)
const transform31 = new Transform({
  position: new Vector3(88, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity30.addComponentOrReplace(transform31)
/*
const houseMGreen = new Entity('houseMGreen')
engine.addEntity(houseMGreen)
houseMGreen.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(48, 0, 40),
  rotation: new Quaternion(5.4755796895049596e-15, 0.9238796234130859, -1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
houseMGreen.addComponentOrReplace(transform32)
const gltfShape2 = new GLTFShape("e0553a4f-daf6-47ee-bb0d-57a18fe5d395/House 5 M Green.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
houseMGreen.addComponentOrReplace(gltfShape2)

export const galleryInfoGreen = new Entity('galleryInfoGreen')
engine.addEntity(galleryInfoGreen)
galleryInfoGreen.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(47, 0, 37.5),
  rotation: new Quaternion(-8.69257306135296e-8, 0.8314696550369263, 3.097468947999005e-8, 0.5555702447891235), 
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
galleryInfoGreen.addComponentOrReplace(transform33)

/*******************************************************************LOGO************************************************************************
const logo = new Entity('logo')
engine.addEntity(logo)
logo.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(49.5, 9.5, 41.9),
  rotation: new Quaternion( 0, 0.9238795, 0, -0.3826834), 
  scale: new Vector3(2, 2, 2)
})
logo.addComponentOrReplace(transform99)
const sfgltf = new GLTFShape("SFLogo/logo.glb")
sfgltf.withCollisions = true
sfgltf.isPointerBlocker = true
sfgltf.visible = true
logo.addComponentOrReplace(sfgltf)
/********************************************************************************************************************************************/

/**************************************************************** TOWER 1 ***************************************************************************
const tow = new Entity('tow')
engine.addEntity(tow)
tow.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(70,0,50),
  rotation: new Quaternion( 0, 0.9238795, 0, -0.3826834), 
  scale: new Vector3(2, 2, 2)
})
tow.addComponentOrReplace(transform100)
const sftgltf = new GLTFShape("SFLogo/SFTowerV1.glb")
sftgltf.withCollisions = true
sftgltf.isPointerBlocker = true
sftgltf.visible = true
tow.addComponentOrReplace(sftgltf)
/********************************************************************************************************************************************/

/**************************************************************** TOWER 2 ***************************************************************************/
const tow2 = new Entity('tow2')
engine.addEntity(tow2)
tow2.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(60,0,60), 
  //rotation: new Quaternion( 0, 0.9238795, 0, -0.3826834), 
  rotation: Quaternion.Euler(0,135,0),
  scale: new Vector3(3, 3, 3)
})
tow2.addComponentOrReplace(transform101)
const sft2gltf = new GLTFShape("SFLogo/NewSFT_v9.glb") 
sft2gltf.withCollisions = true
sft2gltf.isPointerBlocker = true 
sft2gltf.visible = true
tow2.addComponentOrReplace(sft2gltf)
/********************************************************************************************************************************************


const cyberpunkDoor = new Entity('cyberpunkDoor')
engine.addEntity(cyberpunkDoor)
cyberpunkDoor.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(48.5, 0.5, 40),
  rotation: new Quaternion(-2.065802735850327e-14, 0.9238796234130859, -1.1013502643208994e-7, 0.38268333673477173),
  scale: new Vector3(1.0000054836273193, 0.75, 1.0000054836273193)
})
cyberpunkDoor.addComponentOrReplace(transform34)*/

export const channelId = Math.random().toString(16).slice(2)
export const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

/*export const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(galleryInfoGreen, {"text":"Salesforce Tower","fontSize":7.5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGreen, channelBus))
script2.spawn(cyberpunkDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor","actionId":"open","values":{}}],"onClose":[{"entityName":"cyberpunkDoor","actionId":"close","values":{}}]}, createChannel(channelId, cyberpunkDoor, channelBus))*/

//logUserData()