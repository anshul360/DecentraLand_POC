//import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"

let vidTexture: VideoTexture
let screenUp: boolean = false
let screen: Entity
export function createScreen(videoUrl: string) {
    destroyScreen()
    
    let prodVidClip = new VideoClip(videoUrl)
    
    vidTexture = new VideoTexture(prodVidClip)

    let vidMaterial = new Material()
    vidMaterial.albedoTexture = vidTexture
    vidMaterial.roughness = 1
    vidMaterial.specularIntensity = 0
    vidMaterial.metallic = 0

    screenUp = true
    screen = new Entity();
    screen.addComponent(new PlaneShape());
    screen.addComponent(
    new Transform({
        position: new Vector3(64, 3, 56),
        scale: new Vector3(7, 4.9, 100 ),
        rotation: Quaternion.Euler(0, 285, 0),
    })
    );
    screen.addComponent(vidMaterial);
    screen.addComponent(
    new OnPointerDown(() => {
            vidTexture.playing = !vidTexture.playing;
            // if(!vidTexture.playing)
            //     triggerEmote({ predefined: PredefinedEmote.HEAD_EXPLODDE })
            // else
            //     triggerEmote({ predefined: PredefinedEmote.HANDS_AIR})
        },
        { hoverText: "Watch Video" }
    )
    );

    engine.addEntity(screen)
}

export function prodVidPlay() {
    vidTexture.play()
}
export function prodVidPause() {
    vidTexture.pause()
}

export function destroyScreen() {
    if(screenUp) {
        engine.removeEntity(screen)
    }
}
