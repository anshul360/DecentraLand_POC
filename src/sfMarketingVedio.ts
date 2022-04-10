import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"

const vidClip = new VideoClip( 
    "videos/WISalesforce.mp4"
    //"https://github.com/anshul360/DecentraLand_POC/blob/main/videos/WISalesforce.mp4"
    //"C:/Users/Ansh/Desktop/DCL/DecentraLand_POC/videos/WISalesforce.mp4"
    //"https://agile-garden-07512.herokuapp.com/https://github.com/anshul360/DecentraLand_POC/blob/308c96ec57f8a9617f9d0c61ff0e3f7c19385510/videos/WISalesforce.mp4"
    //"http://127.0.0.1:8887/WISalesforce.mp4"
)

// #2
const vidTexture = new VideoTexture(vidClip)

// #3
const vidMaterial = new Material()
vidMaterial.albedoTexture = vidTexture
vidMaterial.roughness = 1
vidMaterial.specularIntensity = 0
vidMaterial.metallic = 0

// #4
export const screen = new Entity();
screen.addComponent(new PlaneShape());
screen.addComponent(
  new Transform({
    position: new Vector3(63, 3.5, 40),
    scale: new Vector3(10, 7, 100 ),
    rotation: Quaternion.Euler(0, 245, 0),
  })
);
screen.addComponent(vidMaterial);
screen.addComponent(
  new OnPointerDown(() => {
    vidTexture.playing = !vidTexture.playing;
    if(!vidTexture.playing)
        triggerEmote({ predefined: PredefinedEmote.HEAD_EXPLODDE })
    else
        triggerEmote({ predefined: PredefinedEmote.HANDS_AIR})
  },
  { hoverText: "Watch Video" }
  )
);

export function vidPlay() {
    vidTexture.play()
}
export function vidPause() {
    vidTexture.pause()
}

engine.addEntity(screen)